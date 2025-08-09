#!/usr/bin/env node
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = join(ROOT, 'docs');

const walk = (dir) => {
  const entries = readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((e) => (e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]));
};

const files = walk(DOCS_DIR).filter((p) => p.endsWith('.md'));

const violations = [];

for (const file of files) {
  const content = readFileSync(file, 'utf8');
  if (/\(\.\/00-links\.md#/i.test(content)) {
    violations.push({ file, rule: 'alias-link', msg: 'Contains ./00-links.md# alias reference' });
  }
  if (/00\s*—\s*Global\s*Links/i.test(content) || /00\s*-+\s*Global\s*Links/i.test(content)) {
    violations.push({ file, rule: 'legacy-global-links', msg: 'Contains "00 — Global Links" mention' });
  }
}

if (violations.length) {
  console.error('Link lint failed with the following issues:');
  for (const v of violations) {
    console.error(`- ${v.file}: [${v.rule}] ${v.msg}`);
  }
  process.exit(1);
}

console.log('Link lint passed. No alias references or legacy mentions found.');
