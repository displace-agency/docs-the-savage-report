#!/usr/bin/env node
/**
 * Footer/Navigation updater
 *
 * - Adds a minimal footer: `Updated: Month YYYY • Displace Agency`
 * - Inserts a Previous/Next navigation block (flex boxes) above the footer
 * - Works for both `docs/` and `knowledge-hub/`
 * - Prev/Next are computed per folder by numeric filename prefix when present (e.g., 01-, 05.1-),
 *   otherwise by alphabetical order
 */

import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';

const ROOT = process.cwd();
const TARGET_ROOTS = [join(ROOT, 'docs'), join(ROOT, 'knowledge-hub')];

const monthNames = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];
const now = new Date();
const stamp = `${monthNames[now.getMonth()]} ${now.getFullYear()}`;

const walkDirs = (dir) => {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];
  const subdirs = [];
  for (const e of entries) {
    if (e.isDirectory()) subdirs.push(join(dir, e.name));
    else if (e.isFile() && e.name.endsWith('.md')) files.push(join(dir, e.name));
  }
  // process current folder, then children
  const result = [{ dir, files }];
  for (const sd of subdirs) result.push(...walkDirs(sd));
  return result;
};

const parseOrderKey = (filename) => {
  // Supports 01-*, 05.1-*, 2-*, etc. Returns number if present else Infinity
  const m = filename.match(/^(\d+(?:\.\d+)?)[-.\s]/);
  return m ? parseFloat(m[1]) : Infinity;
};

const extractTitle = (content) => {
  const lines = content.split(/\r?\n/);
  for (const l of lines) {
    const m = l.match(/^#\s+(.+)/);
    if (m) return m[1].trim();
  }
  return '';
};

const removeExistingNavAndFooter = (content) => {
  // Remove existing nav block
  content = content.replace(/\n?<div\s+style=\"display:flex;[\s\S]*?justify-content:space-between[\s\S]*?<\/div>\n?/gi, '\n');
  // Remove trailing legacy or minimal footer starting from last --- near the end
  const idx = content.lastIndexOf('\n---');
  if (idx !== -1 && content.length - idx < 2000) {
    content = content.slice(0, idx);
  }
  // Trim trailing whitespace
  return content.replace(/[\s\n]+$/g, '\n');
};

const buildNav = (prevPath, prevTitle, nextPath, nextTitle, fromDir) => {
  const link = (href, text, alignRight = false) =>
    href
      ? `<a href="${relative(fromDir, href).replace(/^$/, './')}" style="padding:12px 16px;border:1px solid #d0d7de;border-radius:8px;text-decoration:none;">${text}</a>`
      : '<span></span>';
  const prev = link(prevPath, `← Previous: ${prevTitle || 'Article'}`);
  const next = link(nextPath, `Next: ${nextTitle || 'Article'} →`, true);
  return `\n<div style="display:flex;justify-content:space-between;gap:12px;margin:24px 0;">\n  ${prev}\n  ${next}\n</div>`;
};

const buildFooter = () => {
  return `\n\n---\nUpdated: ${stamp} • <a href="https://github.com/displace-agency" target="_blank" rel="noopener noreferrer">Displace Agency</a>\n`;
};

const processFolder = (dir, files) => {
  // Exclude 00-links.md from docs root nav ordering
  const list = files
    .filter((p) => !p.endsWith('/00-links.md'))
    .sort((a, b) => {
      const na = parseOrderKey(a.split('/').pop());
      const nb = parseOrderKey(b.split('/').pop());
      if (na !== nb) return na - nb;
      return a.localeCompare(b);
    });

  const meta = list.map((p) => ({
    path: p,
    title: extractTitle(readFileSync(p, 'utf8')),
  }));

  for (let i = 0; i < meta.length; i++) {
    const { path, title } = meta[i];
    const prev = meta[i - 1];
    const next = meta[i + 1];
    let content = readFileSync(path, 'utf8');
    content = removeExistingNavAndFooter(content);
    const nav = buildNav(prev?.path, prev?.title, next?.path, next?.title, dir);
    const updated = content.replace(/[\s\n]+$/g, '\n') + nav + buildFooter();
    writeFileSync(path, updated, 'utf8');
    console.log(`Updated footer/nav: ${relative(ROOT, path)} (${title})`);
  }
};

for (const root of TARGET_ROOTS) {
  const folders = walkDirs(root);
  for (const { dir, files } of folders) {
    if (!files.length) continue;
    processFolder(dir, files);
  }
}

console.log('Footer update complete.');


