#!/usr/bin/env node
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

if (process.argv.includes('--help')) {
  console.log(`Table Linter\n\nRules enforced:\n- First column must be 'Item'\n- Every Item cell must link to an in-page anchor (e.g., [Title](#anchor))\n- The corresponding <a id="..."> anchor must exist in the file\n- 'Status' column must be text only (no emojis)\n\nUsage:\n  node admin/scripts/table-lint.mjs\n`);
  process.exit(0);
}

const ROOT = process.cwd();
const IS_KH = process.argv.includes('--knowledge-hub');
const TARGET_DIRS = IS_KH
  ? [join(ROOT, 'knowledge-hub')]
  : [join(ROOT, 'docs')];
const EXCLUDE_FILES = new Set([
  join(ROOT, 'docs', '00-links.md'),
]);

const walk = (dir) => {
  const entries = readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((e) => (e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]));
};

const files = TARGET_DIRS.flatMap((d) => walk(d)).filter((p) => p.endsWith('.md') && !EXCLUDE_FILES.has(p));

const EMOJI_PATTERN = /[✅⏸️⚡🎯📈🔒⏱️]/u; // extend as needed

const violations = [];

for (const file of files) {
  const content = readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  for (let i = 0; i < lines.length - 1; i++) {
    const header = lines[i];
    const divider = lines[i + 1];
    if (/^\|.*\|/.test(header) && /^\|\s*-+/.test(divider)) {
      // Parse header cells
      const headerCells = header
        .split('|')
        .slice(1, -1)
        .map((c) => c.trim());
      const firstHeader = (headerCells[0] || '').toLowerCase();
      const statusIdx = headerCells.findIndex((h) => h.toLowerCase() === 'status');
      const itemIdx = headerCells.findIndex((h) => h.toLowerCase() === 'item');

      if (firstHeader !== 'item') {
        violations.push({ file, line: i + 1, rule: 'first-column-item', msg: `First column is '${headerCells[0] || ''}', expected 'Item'` });
      }

      let j = i + 2;
      while (j < lines.length && /^\|.*\|/.test(lines[j])) {
        const rowCells = lines[j]
          .split('|')
          .slice(1, -1)
          .map((c) => c.trim());

        if (statusIdx !== -1 && rowCells[statusIdx] && EMOJI_PATTERN.test(rowCells[statusIdx])) {
          violations.push({ file, line: j + 1, rule: 'status-no-emoji', msg: 'Status contains emoji; use text only (e.g., Active, Paused)' });
        }

        if (itemIdx !== -1 && rowCells[itemIdx]) {
          const itemCell = rowCells[itemIdx];
          const m = itemCell.match(/\]\(#([^)#\s]+)\)/);
          if (!m) {
            if (!IS_KH) {
              violations.push({ file, line: j + 1, rule: 'item-anchor-link', msg: 'Item should be a link to an in-page anchor, e.g., [Title](#anchor-id)' });
            }
          } else if (!IS_KH) {
            const anchorId = m[1];
            const anchorRe = new RegExp(`<a\\s+id=\\"${anchorId}\\"`, 'i');
            if (!anchorRe.test(content)) {
              violations.push({ file, line: j + 1, rule: 'missing-anchor', msg: `Anchor '#${anchorId}' not found in this file` });
            }
          }
        }

        j++;
      }

      i = j - 1;
    }
  }
}

if (violations.length) {
  console.error('Table lint failed:');
  for (const v of violations) {
    console.error(`- ${v.file}:${v.line} [${v.rule}] ${v.msg}`);
  }
  process.exit(1);
}

console.log('Table lint passed.');
