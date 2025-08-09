#!/usr/bin/env node
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const ALIASES = JSON.parse(readFileSync(join(ROOT, 'admin', 'link-aliases.json'), 'utf8'));
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


