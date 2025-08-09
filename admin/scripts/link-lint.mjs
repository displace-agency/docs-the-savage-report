#!/usr/bin/env node
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

if (process.argv.includes('--help')) {
  console.log(`Link Linter\n\nChecks under docs/ and knowledge-hub/:\n- No ./00-links.md# alias references\n- No '00 — Global Links' mentions\n- No file paths in link labels (e.g., labels like 'docs/05.1-seo-schema.md')\n- External <a> links must include target="_blank" and rel="noopener noreferrer"\n\nUsage:\n  node admin/scripts/link-lint.mjs\n  node admin/scripts/link-lint.mjs --help\n`);
  process.exit(0);
}

const ROOT = process.cwd();
const DOCS_DIR = join(ROOT, 'docs');
const KH_DIR = join(ROOT, 'knowledge-hub');

const walk = (dir) => {
  const entries = readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((e) => (e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]));
};

const files = [
  ...walk(DOCS_DIR),
  ...walk(KH_DIR),
].filter((p) => p.endsWith('.md'));

const violations = [];

for (const file of files) {
  const content = readFileSync(file, 'utf8');
  if (/\(\.\/00-links\.md#/i.test(content)) {
    violations.push({ file, rule: 'alias-link', msg: 'Contains ./00-links.md# alias reference' });
  }
  if (/00\s*—\s*Global\s*Links/i.test(content) || /00\s*-+\s*Global\s*Links/i.test(content)) {
    violations.push({ file, rule: 'legacy-global-links', msg: 'Contains "00 — Global Links" mention' });
  }
  // File paths in link labels (e.g., [docs/05.1-seo-schema.md](...))
  const labelPathRe = /\[[^\]]*\b(?:docs\/|admin\/|assets\/)[^\]]*\]/g;
  let m;
  while ((m = labelPathRe.exec(content))) {
    violations.push({ file, rule: 'path-in-label', msg: `Link label contains a file path near: '${m[0].slice(0,60)}...'` });
  }
  // External anchors missing target or rel
  const externalAnchorRe = /<a\s+href="https?:\/\/[^\"]+"[^>]*>/gi;
  let am;
  while ((am = externalAnchorRe.exec(content))) {
    const tag = am[0];
    if (!/target="_blank"/i.test(tag) || !/rel="noopener noreferrer"/i.test(tag)) {
      violations.push({ file, rule: 'external-anchor-attrs', msg: 'External <a> missing target="_blank" and/or rel="noopener noreferrer"' });
    }
  }
}

if (violations.length) {
  console.error('Link lint failed with the following issues:');
  for (const v of violations) {
    console.error(`- ${v.file}: [${v.rule}] ${v.msg}`);
  }
  process.exit(1);
}

console.log('Link lint passed. No issues found.');
