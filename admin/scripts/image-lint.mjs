#!/usr/bin/env node
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve, relative, basename } from 'node:path';

if (process.argv.includes('--help')) {
  console.log(`Image Linter\n\nChecks:\n- Broken image references in docs (HTML <img> and Markdown images)\n- Alt text presence for HTML <img>\n- Naming: for docs like 05-article.md, referenced assets should start with '05-' or 'article-'\n- Orphan assets in /assets not referenced anywhere (informational)\n\nUsage:\n  node admin/scripts/image-lint.mjs\n  node admin/scripts/image-lint.mjs --help\n`);
  process.exit(0);
}

const ROOT = process.cwd();
const DOCS_DIR = join(ROOT, 'docs');
const ASSETS_DIR = join(ROOT, 'assets');

const walk = (dir) => {
  const entries = readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((e) => (e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]));
};

const docFiles = walk(DOCS_DIR).filter((p) => p.endsWith('.md'));
const assetFiles = new Set(walk(ASSETS_DIR).filter((p) => /\.(png|jpg|jpeg|gif|svg|webp)$/i.test(p)));

const htmlImgRe = /<img[^>]*\ssrc="([^"]+)"[^>]*>/gi;
const htmlAltRe = /\salt="([^"]*)"/i;
const mdImgRe = /!\[[^\]]*\]\(([^)]+)\)/g;

const violations = [];
const usedAssets = new Set();

for (const file of docFiles) {
  const content = readFileSync(file, 'utf8');
  const dir = dirname(file);
  const docBase = basename(file, '.md');
  const numMatch = docBase.match(/^(\d{2})-(.+)$/);
  const docNum = numMatch ? numMatch[1] : null;
  const docSlug = numMatch ? numMatch[2] : docBase;

  // HTML <img>
  let m;
  while ((m = htmlImgRe.exec(content))) {
    const tag = m[0];
    const src = m[1];
    if (/^https?:/i.test(src)) continue;
    const full = resolve(dir, src);
    const rel = relative(ROOT, full);
    if (!existsSync(full)) {
      violations.push({ file, rule: 'broken-image', msg: `Missing image: ${src}` });
      continue;
    }
    usedAssets.add(resolve(full));
    // Alt text check
    if (!htmlAltRe.test(tag) || (tag.match(htmlAltRe)?.[1] || '').trim().length < 5) {
      violations.push({ file, rule: 'missing-alt', msg: `HTML <img> missing meaningful alt: ${src}` });
    }
    // Naming convention check
    const base = basename(full);
    if (docNum && !(base.startsWith(`${docNum}-`) || base.startsWith(`${docSlug}-`))) {
      violations.push({ file, rule: 'naming-mismatch', msg: `Asset '${base}' should start with '${docNum}-' or '${docSlug}-'` });
    }
  }
  // Markdown images
  let mm;
  while ((mm = mdImgRe.exec(content))) {
    const src = mm[1].split(' ')[0];
    if (/^https?:/i.test(src)) continue;
    const full = resolve(dir, src);
    if (!existsSync(full)) {
      violations.push({ file, rule: 'broken-image', msg: `Missing image: ${src}` });
      continue;
    }
    usedAssets.add(resolve(full));
    const base = basename(full);
    if (docNum && !(base.startsWith(`${docNum}-`) || base.startsWith(`${docSlug}-`))) {
      violations.push({ file, rule: 'naming-mismatch', msg: `Asset '${base}' should start with '${docNum}-' or '${docSlug}-'` });
    }
  }
}

// Orphans (info only)
const orphanAssets = [...assetFiles].filter((p) => !usedAssets.has(p));

if (violations.length) {
  console.error('Image lint failed:');
  for (const v of violations) {
    console.error(`- ${v.file}: [${v.rule}] ${v.msg}`);
  }
} else {
  console.log('Image lint: no broken references and naming looks good.');
}

if (orphanAssets.length) {
  console.log('\nNote: Unused assets (informational):');
  for (const p of orphanAssets) console.log('-', relative(ROOT, p));
}

process.exit(violations.length ? 1 : 0);
