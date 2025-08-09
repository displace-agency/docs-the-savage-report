#!/usr/bin/env node
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();

// Build alias -> URL map by parsing tables in docs/00-links.md
const linksDocPath = join(ROOT, 'docs', '00-links.md');
const md = readFileSync(linksDocPath, 'utf8');
const aliasToUrl = {};
for (const line of md.split(/\r?\n/)) {
  // Table rows look like: | <a id="alias"></a> alias | <a href="URL" ...>URL</a> | Notes |
  if (!/^\|/.test(line)) continue;
  const cells = line.split('|').map((c) => c.trim());
  if (cells.length < 4) continue;
  const aliasCell = cells[1];
  const urlCell = cells[2];
  // Try id="alias" first, else strip tags and take the first token
  let aliasMatch = aliasCell.match(/id="([^"]+)"/i);
  let alias = aliasMatch && aliasMatch[1];
  if (!alias) {
    const plain = aliasCell.replace(/<[^>]+>/g, '').trim();
    alias = (plain.match(/^([a-z0-9-]+)/i) || [null, null])[1];
  }
  const urlMatch = urlCell.match(/href="([^"]+)"/i) || urlCell.match(/\((https?:[^)]+)\)/i) || urlCell.match(/(https?:[^\s<]+)/i);
  alias = alias && alias.toLowerCase();
  const url = urlMatch && urlMatch[1];
  if (alias && url) aliasToUrl[alias] = url;
}

if (!Object.keys(aliasToUrl).length) {
  console.error('No aliases found in docs/00-links.md');
  process.exit(1);
}

// Replace links of the form (.../00-links.md#alias) with the resolved URL across all docs/*.md
const walk = (dir) => {
  const entries = readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((e) => (e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]));
};

const files = walk(join(ROOT, 'docs')).filter((p) => p.endsWith('.md'));
const refRe = /\[[^\]]*\]\(\.\/00-links\.md#([a-z0-9-]+)\)/gi;
// Legacy labels like "See 00 — Global Links → alias" or "00 — Global Links → alias"
const legacyLabelRe = /\[(?:See\s+)?0{2}\s*[—-]\s*Global\s+Links[^\]]*?([a-z0-9-]+)\]\((https?:[^)]+|\.\/[^)]+)\)/gi;

const toTitle = (alias) => {
  const custom = {
    'webflow-cms': 'Webflow CMS',
    'webflow-seo-settings': 'Webflow SEO Settings',
    'webflow-general': 'Webflow General',
    'webflow-dashboard': 'Webflow Dashboard',
    'webflow-designer': 'Webflow Designer',
    'webflow-custom-code': 'Webflow Custom Code',
    'webflow-live-site': 'Live Site',
    'gsc-sitemaps': 'GSC Sitemaps',
    'gsc-performance': 'GSC Performance',
    'gsc-robots-tester': 'GSC Robots Tester',
    'shopify-admin-store': 'Shopify Admin',
    'shopify-analytics': 'Shopify Analytics',
    'shopify-orders': 'Shopify Orders',
    'shopify-products': 'Shopify Products',
    'shopify-collections': 'Shopify Collections',
    'shopify-checkout': 'Shopify Checkout',
    'live-site': 'Live Site',
    'sitemap': 'Sitemap',
    'robots': 'Robots.txt',
    'cms-collections': 'CMS Collections',
    'page-speed': 'Page Speed Optimization',
    'analytics': 'Analytics Implementation',
  };
  if (custom[alias]) return custom[alias];
  return alias
    .split('-')
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');
};

// Build reverse map: title -> alias
const titleToAlias = Object.fromEntries(
  Object.keys(aliasToUrl).map((alias) => [toTitle(alias).toLowerCase(), alias])
);

for (const file of files) {
  let content = readFileSync(file, 'utf8');
  let changed = false;
  content = content.replace(refRe, (m, alias) => {
    const key = alias.toLowerCase();
    const url = aliasToUrl[key];
    if (!url) return m;
    changed = true;
    const title = toTitle(key);
    return `[${title}](${url})`;
  });
  // Normalize labels like [See 00 — Global Links → alias](direct-url) or [00 — Global Links → alias](...)
  content = content.replace(legacyLabelRe, (m, alias, url) => {
    const key = alias.toLowerCase();
    const title = toTitle(key);
    const resolved = aliasToUrl[key] || url;
    return `[${title}](${resolved})`;
  });
  // Also fix internal docs references for CMS collections, page speed, analytics
  content = content
    .replace(/\[See 00 [^\]]*cms-collections\]\([^)]*\)/gi, '[CMS Collections](./04-cms-collections.md)')
    .replace(/\[See 00 [^\]]*page-speed\]\([^)]*\)/gi, '[Page Speed Optimization](./06-page-speed-optimization.md)')
    .replace(/\[See 00 [^\]]*analytics\]\([^)]*\)/gi, '[Analytics Implementation](./07-analytics-implementation.md)');

  // Normalize any links within the "## Useful Links" section so that labels map to the
  // latest URLs in 00-links.md. This keeps the nice readable label while ensuring
  // the destination stays current when 00-links.md changes.
  const usefulStart = content.search(/^##\s+Useful\s+Links\s*$/im);
  if (usefulStart !== -1) {
    // Find end of this section: next level-2 heading or EOF
    const afterUseful = content.slice(usefulStart);
    const nextHeadingRel = afterUseful.search(/\n##\s+/m);
    const sectionEndIdx = nextHeadingRel === -1 ? content.length : usefulStart + nextHeadingRel + 1; // +1 to include leading \n
    const before = content.slice(0, usefulStart);
    const section = content.slice(usefulStart, sectionEndIdx);
    const after = content.slice(sectionEndIdx);

    const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
    const updatedSection = section.replace(linkRe, (m, label, href) => {
      const key = titleToAlias[label.trim().toLowerCase()];
      if (!key) return m;
      const target = aliasToUrl[key];
      if (!target || target === href) return m;
      changed = true;
      return `[${label}](${target})`;
    });

    content = before + updatedSection + after;
  }
  if (changed) {
    writeFileSync(file, content);
    console.log(`Expanded 00-links references in ${file}`);
  }
}

console.log('Alias expansion complete.');


