#!/usr/bin/env node
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve, relative, basename } from 'node:path';

if (process.argv.includes('--help')) {
  console.log(`Image Linter\n\nChecks:\n- Asset naming in /assets: must match ^YY-slug(-keywords).ext (e.g., 05-seo-implementation-meta-title.png); lowercase, hyphen-separated, no spaces\n- Broken image references in docs (HTML <img> and Markdown images)\n- Alt text presence for HTML <img>\n- Doc↔asset naming alignment: for 05-*.md, assets referenced should start with '05-' or article slug\n- Orphan assets in /assets not referenced anywhere (violation)\n\nUsage:\n  node admin/scripts/image-lint.mjs\n  node admin/scripts/image-lint.mjs --help\n`);
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
const assetFiles = walk(ASSETS_DIR).filter((p) => /\.(png|jpg|jpeg|gif|svg|webp)$/i.test(p));

const htmlImgRe = /<img[^>]*\ssrc="([^"]+)"[^>]*>/gi;
const htmlAltRe = /\salt="([^"]*)"/i;
const mdImgRe = /!\[[^\]]*\]\(([^)]+)\)/g;

const violations = [];
const usedAssets = new Set();

// 1) Asset naming pass
for (const p of assetFiles) {
  const name = basename(p);
  const lower = name === name.toLowerCase();
  const hasSpaces = /\s/.test(name);
  // Disallow date suffix; require strict YY-slug pattern
  const goodPrefix = /^\d{2}-[a-z0-9][a-z0-9-]*\.(png|jpg|jpeg|gif|svg|webp)$/i.test(name);
  if (!lower || hasSpaces || !goodPrefix) {
    violations.push({ file: relative(ROOT, p), rule: 'asset-naming', msg: `Bad asset name '${name}' (require: YY-slug(-keywords).ext, lowercase, hyphen-separated, no spaces; no dates)` });
  }
}

// 2) Doc references pass
for (const file of docFiles) {
  const content = readFileSync(file, 'utf8');
  const dir = dirname(file);
  const docBase = basename(file, '.md');
  const numMatch = docBase.match(/^(\d{2})-(.+)$/);
  const docNum = numMatch ? numMatch[1] : null;
  const docSlug = numMatch ? numMatch[2] : docBase;

  let m;
  while ((m = htmlImgRe.exec(content))) {
    const tag = m[0];
    const src = m[1];
    if (/^https?:/i.test(src)) continue;
    const full = resolve(dir, src);
    if (!existsSync(full)) {
      violations.push({ file, rule: 'broken-image', msg: `Missing image: ${src}` });
      continue;
    }
    usedAssets.add(resolve(full));
    if (!htmlAltRe.test(tag) || (tag.match(htmlAltRe)?.[1] || '').trim().length < 5) {
      violations.push({ file, rule: 'missing-alt', msg: `HTML <img> missing meaningful alt: ${src}` });
    }
    const base = basename(full);
    if (docNum && !(base.startsWith(`${docNum}-`) || base.startsWith(`${docSlug}-`))) {
      violations.push({ file, rule: 'naming-mismatch', msg: `Asset '${base}' should start with '${docNum}-' or '${docSlug}-'` });
    }
  }
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

// 3) Orphans (treat as violation)
const assetSet = new Set(assetFiles.map((p) => resolve(p)));
for (const p of assetSet) {
  if (!usedAssets.has(p)) {
    violations.push({ file: relative(ROOT, p), rule: 'orphan-asset', msg: 'Asset not referenced in any doc' });
  }
}

if (violations.length) {
  console.error('Image lint failed:');
  for (const v of violations) {
    console.error(`- ${v.file}: [${v.rule}] ${v.msg}`);
  }
  process.exit(1);
}

console.log('Image lint passed: names, usage, and references look good.');
