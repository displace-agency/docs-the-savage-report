#!/usr/bin/env node
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const HOSTS = [
  'the-savage-report.com',
  'www.the-savage-report.com',
  'shop.the-savage-report.com',
  'webflow.com',
  'admin.shopify.com',
  'the-savage-report.myshopify.com',
];

const isMarkdown = (name) => name.endsWith('.md');
const walk = (dir) => {
  const entries = readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]
  );
};

const toHtmlLink = (text, url) =>
  `<a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;

const files = walk(ROOT).filter((f) => isMarkdown(f));

const mdLinkRe = /\[([^\]]+)\]\((https?:[^)\s]+)(?:\s+"[^"]*")?\)/g;
const htmlLinkRe = /<a\s+([^>]*?)href="(https?:[^"]+)"([^>]*)>/gi;

for (const file of files) {
  let md = readFileSync(file, 'utf8');
  let changed = false;

  // Convert external Markdown links to HTML anchors with target+rel
  md = md.replace(mdLinkRe, (full, text, url) => {
    try {
      const u = new URL(url);
      const isInternal = HOSTS.some((h) => u.hostname === h || u.hostname.endsWith('.the-savage-report.com'));
      if (!isInternal) {
        changed = true;
        return toHtmlLink(text, url);
      }
    } catch {}
    return full;
  });

  // Ensure external HTML anchors have target+rel
  md = md.replace(htmlLinkRe, (full, pre, url, post) => {
    try {
      const u = new URL(url);
      const isInternal = HOSTS.some((h) => u.hostname === h || u.hostname.endsWith('.the-savage-report.com'));
      if (isInternal) return full; // leave internal links alone

      let tag = `<a ${pre}href="${url}"${post}>`;
      if (!/target="_blank"/i.test(tag)) {
        tag = tag.replace('<a ', '<a target="_blank" ');
      }
      if (!/rel="[^"]*noopener[^"]*"/i.test(tag) || !/rel="[^"]*noreferrer[^"]*"/i.test(tag)) {
        if (/rel="[^"]*"/i.test(tag)) {
          tag = tag.replace(/rel="([^"]*)"/i, (m, rel) => `rel="${rel} noopener noreferrer"`);
        } else {
          tag = tag.replace('<a ', '<a rel="noopener noreferrer" ');
        }
      }
      changed = true;
      return tag;
    } catch {}
    return full;
  });

  if (changed) {
    writeFileSync(file, md);
    console.log(`Fixed external links in ${file}`);
  }
}

console.log('External link fix completed.');


