# Documentation QA Checklist & Automation

## What This Is & Why It Matters
Use this checklist and ready-to-run commands to keep all docs healthy: links working, external links opening in new tabs, headings consistent, tables correct, and images not broken. Run as part of monthly maintenance and before sharing docs with clients.

## Quick Run (Automation)
Run these from the repository root.

### 1) Broken external/internal links (HTTP 4xx/5xx or failed)
```bash
# Prints status, URL, and locations (file:line) for problematic links
rg -n -H -o --glob "**/*.md" 'https?://[^)\]\s"]+' . \
| tee /tmp/qa_url_map.txt \
| awk -F: '{url=$3; for(i=4;i<=NF;i++) url=url":"$i; print url}' \
| sort -u \
| xargs -n1 -P8 -I{} sh -c 'code=$(curl -s -L --max-time 20 -o /dev/null -w "%{http_code}" "{}" || echo 0); echo "$code {}"' \
| tee /tmp/qa_status_by_url.txt \
| awk '$1 ~ /^0|[45][0-9][0-9]$/'
```
Notes:
- 0 means request failed (timeout/DNS/etc.). Admin-only or login-gated URLs (e.g., Webflow/Shopify dashboards) may appear as 0/403 when unauthenticated.

### 2) External <a> links missing target/rel (should open in new tab)
```bash
# <a rel="noopener noreferrer" target="_blank" href="https://..."> without target="_blank"
rg -n -P '<a\s+href="https?://[^"]+"(?![^>]*target="_blank")' -- **/*.md | cat

# <a rel="noopener noreferrer" href="https://..." target="_blank"> missing rel="noopener noreferrer"
rg -n -P '<a\s+href="https?://[^"]+"(?=[^>]*target="_blank")(?![^>]*rel="noopener noreferrer")' -- **/*.md | cat
```
Guideline:
- For external admin/tools links (Webflow, Shopify, Google tools), use HTML anchors with `target="_blank" rel="noopener noreferrer"`.
- Regular web references may remain Markdown links when new-tab behavior is not required.

### 3) Outdated Webflow Designer paths
```bash
# Should use: https://webflow.com/design/savage-report-we
rg -n -P 'webflow\.com/(designer|dashboard/sites/[^\s)>"]+/designer)' -- **/*.md | cat
```

### 4) Missing images (checks <img> and Markdown images)
```bash
python3 - << 'PY'
import os, re
root = '.'
img_md = re.compile(r'!\[[^\]]*\]\(([^)]+)\)')
img_html = re.compile(r'<img[^>]*\ssrc="([^"]+)"', re.I)
missing = []
for dirpath, _, files in os.walk(root):
    for fn in files:
        if not fn.endswith('.md'): continue
        path = os.path.join(dirpath, fn)
        with open(path, 'r', encoding='utf-8') as f:
            for i, line in enumerate(f, 1):
                for m in img_md.findall(line) + img_html.findall(line):
                    src = m.split()[0]
                    if src.startswith('http://') or src.startswith('https://'):
                        continue
                    full = os.path.normpath(os.path.join(os.path.dirname(path), src))
                    if not os.path.exists(full):
                        missing.append((path, i, src))
if not missing:
    print('All local images exist.')
else:
    for p, ln, src in missing:
        print(f'MISSING {p}:{ln} -> {src}')
PY
```

### 5) Heading structure sanity checks
```bash
# Files with multiple H1s (should be 1 per file)
rg -n '^# ' -- **/*.md | cut -d: -f1 | sort | uniq -c | awk '$1 > 1 {print $0}' | cat

# Files with no H2 (should have H2 sections)
for f in $(git ls-files "**/*.md"); do rg -q '^## ' "$f" || echo "NO-H2: $f"; done | cat
```

### 6) Table integrity & link hygiene
```bash
# A) Detect blank lines splitting a table (common breakage)
rg -n -U -P '^(\|[^\n]*\n)+\n(\|[^\n]*)' -- **/*.md | cat

# B) Check table column consistency near each header (5 expected for our summary tables)
rg -n -U -P '^\|[^\n]*\|\n\|[-: ]+\|$' -- **/*.md | while IFS=: read -r f l _; do \
  awk -v line=$l 'NR>=line-1 && NR<=line+50 && /^\|/ { c=gsub(/\|/,"&")-1; if (c!=5) print FILENAME ":" NR " -> cols=" c }' "$f"; done | cat

# C) Look for table rows containing bare URLs that may need link formatting
rg -n -P '^\|.*https?://[^| ]+' -- **/*.md | cat
```
Manual review is recommended to confirm whether the link should be an HTML anchor with new-tab behavior.

#### D) Table–content alignment check (first-column anchors link to H2s)
```bash
python3 - << 'PY'
import os, re, sys

root = '.'
link_in_first_col = re.compile(r'^\|\s*\[([^\]]+)\]\(#([^\)]+)\)\s*\|')
h2 = re.compile(r'^##\s+(.+)$')
explicit_id = re.compile(r'<a\s+id="([^"]+)"\s*>', re.I)

def slugify(text: str):
    import unicodedata
    t = unicodedata.normalize('NFKD', text).encode('ascii', 'ignore').decode('ascii')
    t = re.sub(r'[^a-zA-Z0-9\s-]', '', t).lower()
    t = re.sub(r'\s+', '-', t)
    t = re.sub(r'-+', '-', t).strip('-')
    return t

def analyze(path: str):
    table_ids = set()
    section_ids = set()
    # 1) collect ids from explicit anchors and from H2 slugs
    with open(path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    for line in lines:
        m = explicit_id.search(line)
        if m:
            section_ids.add(m.group(1))
        m2 = h2.match(line)
        if m2:
            section_ids.add(slugify(m2.group(1)))
    # 2) find any table with first column anchors and collect their ids
    i = 0
    while i < len(lines):
        if lines[i].startswith('| Item |'):
            # header sep on next line, then rows until blank
            i += 2
            while i < len(lines) and lines[i].startswith('|'):
                m = link_in_first_col.match(lines[i])
                if m:
                    table_ids.add(m.group(2))
                i += 1
        else:
            i += 1
    if not table_ids:
        return
    only_in_table = sorted(table_ids - section_ids)
    only_in_sections = sorted(section_ids - table_ids)
    if only_in_table or only_in_sections:
        print(f"\nFILE: {path}")
        if only_in_table:
            print('  TABLE_ONLY (rows without matching H2):', ', '.join(only_in_table))
        if only_in_sections:
            print('  SECTIONS_ONLY (H2s missing from table):', ', '.join(only_in_sections))

for dirpath, _, files in os.walk(root):
    for fn in files:
        if fn.endswith('.md'):
            analyze(os.path.join(dirpath, fn))
PY
```
Action:
- If TABLE_ONLY items exist: either create matching H2 sections or remove those rows from the table.
- If SECTIONS_ONLY items exist: add corresponding rows to the table (or remove the section if out of scope).

---

## Manual QA Checklist
- **Links (functional)**: No 404/500s; login-gated links annotated as such.
- **External link behavior**: HTML anchors for external admin/tools with `target="_blank" rel="noopener noreferrer"`.
- **Internal link style**: Use relative paths for internal docs (e.g., `[SEO](./05-seo-implementation.md)`).
- **Tables**:
  - **Anchor column**: First column items link to matching section anchors.
  - **Reference Link(s)**: Actual hyperlinks (not plain text URLs); prefer deep verification links.
- **Headings**:
  - **H1**: Title only once per file.
  - **H2**: Major sections; table-linked sections must be H2 and match anchors.
- **Images**:
  - Paths resolve and files exist.
  - Consistent styling `width="70%" style="border-radius:8px"` where used.
  - Accurate alt text; screenshots match described UI.
  - Naming follows `article-name-keywords[-date].png`.
- **Platform URLs**:
  - **Webflow Designer**: `https://webflow.com/design/savage-report-we`.
  - **Webflow Settings/CMS/SEO/Custom Code**: `https://webflow.com/dashboard/sites/savage-report-we/...`.
  - **Shopify Admin**: `https://admin.shopify.com/store/the-savage-report/...` (or correct store slug).
  - **GSC domain property**: `resource_id=sc-domain:the-savage-report.com`.
  - **PSI**: `https://pagespeed.web.dev/report?url=https://the-savage-report.com`.
- **Security**:
  - External anchors include `rel="noopener noreferrer"`.
  - No secrets in code blocks or links.
- **Consistency**:
  - Bullets use `- `; avoid unicode bullets.
  - Same tone and structure across `/docs/` vs `/knowledge-hub/`.

## When To Run
- Monthly maintenance.
- Before sharing new or updated documents with the client.
- After batch edits that touch links, images, or headings.

## Fix Workflow
1. Run the automation commands above and review output.
2. Prioritize fixes:
   - Broken links ➜ correct URL or annotate as login-gated.
   - External anchors ➜ add `target` and `rel`.
   - Outdated platform paths ➜ update to current endpoints.
   - Missing images ➜ fix paths or add assets.
3. Re-run checks to confirm green state.

## Optional Enhancements
- Add a pre-commit hook to scan for missing `target/rel` on new `<a>` links.
- Integrate a CI job to run link and image checks on pull requests and report results.

---

Last reviewed: August 2025
Maintained by: Displace Agency
