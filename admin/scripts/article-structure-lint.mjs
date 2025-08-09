#!/usr/bin/env node
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const DOCS_DIR = join(ROOT, 'docs');
const EXCLUDE = new Set([join(DOCS_DIR, '00-links.md')]);

const walk = (dir) => {
  const entries = readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((e) => (e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]));
};

const files = walk(DOCS_DIR).filter((p) => p.endsWith('.md') && !EXCLUDE.has(p));

const violations = [];

for (const file of files) {
  const content = readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);

  // 1) Title must be first non-empty line starting with '# '
  const firstNonEmptyIdx = lines.findIndex((l) => l.trim().length > 0);
  if (firstNonEmptyIdx === -1 || !/^#\s+/.test(lines[firstNonEmptyIdx])) {
    violations.push({ file, line: 1, rule: 'missing-title', msg: 'First non-empty line should be a level-1 title (# Title)' });
  }

  // 2) Must contain the H2 "What This Is & Why It Matters"
  const whatIdx = lines.findIndex((l) => /^##\s+What This Is\s*&\s*Why It Matters\s*$/i.test(l.trim())) + 1;
  if (!whatIdx) {
    violations.push({ file, line: 1, rule: 'missing-why-matters', msg: 'Missing section: ## What This Is & Why It Matters' });
  }

  // 3) The first table after the why-matters section should exist
  let tableHeaderIdx = -1;
  if (whatIdx) {
    for (let i = whatIdx; i < lines.length - 1; i++) {
      if (/^\|.*\|/.test(lines[i]) && /^\|\s*-+/.test(lines[i + 1])) {
        tableHeaderIdx = i;
        break;
      }
    }
    if (tableHeaderIdx === -1) {
      violations.push({ file, line: whatIdx, rule: 'missing-summary-table', msg: 'No summary table found after the Why It Matters section' });
    }
  }

  // 4) Extract table item anchors and verify matching anchors and headings exist
  const tableAnchors = [];
  if (tableHeaderIdx !== -1) {
    const headerCells = lines[tableHeaderIdx].split('|').slice(1, -1).map((c) => c.trim().toLowerCase());
    const itemIdx = headerCells.indexOf('item');
    if (itemIdx === -1) {
      violations.push({ file, line: tableHeaderIdx + 1, rule: 'table-item-first', msg: 'Summary table must include Item as first column' });
    }
    // walk rows
    let j = tableHeaderIdx + 2;
    while (j < lines.length && /^\|.*\|/.test(lines[j])) {
      const cells = lines[j].split('|').slice(1, -1).map((c) => c.trim());
      if (itemIdx !== -1 && cells[itemIdx]) {
        const m = cells[itemIdx].match(/\]\(#([^)#\s]+)\)/);
        if (!m) {
          violations.push({ file, line: j + 1, rule: 'item-anchor-link', msg: 'Item should be a link to an in-page anchor, e.g., [Title](#anchor-id)' });
        } else {
          tableAnchors.push(m[1]);
        }
      }
      j++;
    }
  }

  // Index anchors and headings in file
  const anchorPositions = [];
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/<a\s+id=\"([^\"]+)\"/i);
    if (m) anchorPositions.push({ id: m[1], line: i });
  }
  const headingPositions = [];
  for (let i = 0; i < lines.length; i++) {
    if (/^##\s+/.test(lines[i])) headingPositions.push(i);
  }

  // Verify each table anchor has an <a id> and a following H2
  for (const id of tableAnchors) {
    const anchor = anchorPositions.find((a) => a.id === id);
    if (!anchor) {
      violations.push({ file, line: tableHeaderIdx + 1, rule: 'missing-anchor', msg: `Anchor '#${id}' not found in this file` });
      continue;
    }
    const nextH2 = headingPositions.find((h) => h > anchor.line && h <= anchor.line + 3);
    if (nextH2 === undefined) {
      violations.push({ file, line: anchor.line + 1, rule: 'anchor-without-heading', msg: `No H2 immediately after <a id="${id}">` });
    }
  }

  // 5) Useful Links section toward the end
  const usefulIdx = lines.findIndex((l) => /^##\s+Useful\s+Links\s*$/i.test(l));
  if (usefulIdx === -1) {
    violations.push({ file, line: lines.length, rule: 'missing-useful-links', msg: 'Missing section: ## Useful Links' });
  }

  // 6) Footer lines required
  const footerHasLastUpdated = /\*Last Updated:/i.test(content);
  const footerHasVersion = /Document Version:/i.test(content);
  const footerHasMaintainer = /Maintained by:/i.test(content);
  if (!(footerHasLastUpdated && footerHasVersion && footerHasMaintainer)) {
    violations.push({ file, line: lines.length, rule: 'missing-footer', msg: 'Footer must include Last Updated, Document Version, Maintained by' });
  }

  // 7) Extra H2 sections not in table (informational)
  if (tableAnchors.length) {
    const allowedH2 = new Set([
      'what this is & why it matters',
      'useful links',
      'results & impact',
      'performance results',
      'technical configuration',
      'website structure visual guide',
      'visual architecture overview',
      'maintenance & best practices',
      'troubleshooting & support',
      'subscriptions overview',
      'billing & plans',
      'quick links',
      'system overview',
      'analytics platforms overview',
      'google analytics status',
      'key metrics to monitor',
      'other analytics sources',
      'schema benefits & impact',
      'implementation strategy',
      'validation & testing',
      'what we implemented',
      'technical architecture',
    ]);
    const h2Titles = lines
      .map((l, i) => ({ l, i }))
      .filter(({ l }) => /^##\s+/.test(l))
      .map(({ l, i }) => ({ title: l.replace(/^##\s+/, '').trim(), line: i + 1 }));
    const tableAnchorSet = new Set(tableAnchors);
    const anchorIdAtLine = new Map(anchorPositions.map((a) => [a.line + 1, a.id]));
    for (const { title, line } of h2Titles) {
      const lower = title.toLowerCase();
      if (allowedH2.has(lower) || /implementation summary/i.test(title)) continue;
      const id = anchorIdAtLine.get(line - 1) || anchorIdAtLine.get(line - 2) || anchorIdAtLine.get(line - 3);
      if (!id || !tableAnchorSet.has(id)) {
        violations.push({ file, line, rule: 'extra-section', msg: `H2 '${title}' is not represented in the summary table` });
      }
    }
  }
}

if (violations.length) {
  console.error('Article structure lint failed:');
  for (const v of violations) {
    console.error(`- ${v.file}:${v.line} [${v.rule}] ${v.msg}`);
  }
  process.exit(1);
}

console.log('Article structure lint passed.');
