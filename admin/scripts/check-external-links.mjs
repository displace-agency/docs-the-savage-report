#!/usr/bin/env node
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const HOSTS = [
  'the-savage-report.com',
  'www.the-savage-report.com',
  'shop.the-savage-report.com',
  'webflow.com',
  'admin.shopify.com',
  'the-savage-report.myshopify.com',
];

const isMarkdown = (name) => name.endsWith('.md');
const walk = (dir) => {
  const entries = readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]
  );
};

const files = walk(ROOT).filter((f) => isMarkdown(f));

const mdLinkRe = /\[([^\]]+)\]\((https?:[^)\s]+)(?:\s+"[^"]*")?\)/g;
const htmlLinkRe = /<a\s+[^>]*href="(https?:[^"]+)"[^>]*>/gi;

let errors = 0;

for (const file of files) {
  const md = readFileSync(file, 'utf8');

  // Markdown links
  for (const match of md.matchAll(mdLinkRe)) {
    const url = match[2];
    try {
      const u = new URL(url);
      const isInternal = HOSTS.some((h) => u.hostname === h || u.hostname.endsWith('.the-savage-report.com'));
      if (!isInternal) {
        // In pure Markdown we can’t set target; recommend converting to <a>
        console.log(`[MD external] ${file}: ${url}`);
        errors++;
      }
    } catch {}
  }

  // HTML links
  for (const match of md.matchAll(htmlLinkRe)) {
    const tag = match[0];
    const url = match[1];
    try {
      const u = new URL(url);
      const isInternal = HOSTS.some((h) => u.hostname === h || u.hostname.endsWith('.the-savage-report.com'));
      if (!isInternal) {
        const hasTarget = /target="_blank"/i.test(tag);
        const hasRel = /rel="[^"]*noopener[^"]*"/i.test(tag) && /rel="[^"]*noreferrer[^"]*"/i.test(tag);
        if (!hasTarget || !hasRel) {
          console.log(`[HTML external] ${file}: missing target/rel → ${url}`);
          errors++;
        }
      }
    } catch {}
  }
}

if (errors) {
  console.error(`\nFound ${errors} external link issues. Run: npm run fix:links`);
  process.exit(1);
}

console.log('All external links comply.');


