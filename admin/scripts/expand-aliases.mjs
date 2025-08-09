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
const refRe = /\]\(\.\/00-links\.md#([a-z0-9-]+)\)/gi;

for (const file of files) {
  let content = readFileSync(file, 'utf8');
  let changed = false;
  content = content.replace(refRe, (m, alias) => {
    const key = alias.toLowerCase();
    const url = aliasToUrl[key];
    if (!url) return m;
    changed = true;
    return `](${url})`;
  });
  if (changed) {
    writeFileSync(file, content);
    console.log(`Expanded 00-links references in ${file}`);
  }
}

console.log('Alias expansion complete.');


