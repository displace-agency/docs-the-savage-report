#!/usr/bin/env node
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
// Load aliases from docs/00-links.md if present; fallback to admin/link-aliases.json
const loadAliases = () => {
  const docPath = join(ROOT, 'docs', '00-links.md');
  if (existsSync(docPath)) {
    const md = readFileSync(docPath, 'utf8');
    // Parse markdown tables: expect rows like | seo-implementation | https://... | Description |
    const lines = md.split(/\r?\n/);
    const map = {};
    for (const line of lines) {
      if (/^\|\s*[-a-z0-9]+\s*\|/i.test(line)) {
        const cells = line.split('|').map((c) => c.trim());
        // ['', alias, url, desc, ''] typical
        if (cells.length >= 4) {
          const alias = cells[1];
          const url = cells[2];
          if (alias && url && !/^-{3,}$/.test(alias) && !/^Alias$/i.test(alias)) {
            map[alias] = url;
          }
        }
      }
    }
    if (Object.keys(map).length) return map;
  }
  const jsonPath = join(ROOT, 'admin', 'link-aliases.json');
  if (existsSync(jsonPath)) {
    return JSON.parse(readFileSync(jsonPath, 'utf8'));
  }
  return {};
};

const ALIASES = loadAliases();
const aliasRe = /\[(.*?)\]\(alias:([a-z0-9-]+)\)/gi;

const walk = (dir) => {
  const entries = readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]
  );
};

const files = walk(ROOT).filter((p) => p.endsWith('.md'));

for (const file of files) {
  let content = readFileSync(file, 'utf8');
  let changed = false;
  content = content.replace(aliasRe, (m, text, key) => {
    const target = ALIASES[key];
    if (!target) return m; // unknown alias, leave as-is
    // If it looks like an external URL, emit HTML anchor with target+rel
    if (/^https?:\/\//i.test(target)) {
      changed = true;
      return `<a href="${target}" target="_blank" rel="noopener noreferrer">${text}</a>`;
    }
    changed = true;
    return `[${text}](${target})`;
  });
  if (changed) {
    writeFileSync(file, content);
    console.log(`Aliased links updated in ${file}`);
  }
}

console.log('Alias link processing complete.');


