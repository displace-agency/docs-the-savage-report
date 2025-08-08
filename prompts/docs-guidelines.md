# Documentation Writing Guidelines

## Purpose
Create clear, valuable documentation for non-technical clients. Use this as a prompt/checklist when writing new docs.

## Core Principles

### 1. Audience-First Writing
- Primary: Non-technical business owners and operators
- Secondary: Marketing/content managers
- Tertiary: Developers (technical sections clearly marked and collapsible)

### 2. Philosophy (What belongs where)
- `/docs/` (Client-Specific):
  - Focus on what we delivered and why it matters
  - Be concise, visual, and scannable
  - Quantify impact where possible
  - No how-to, no long maintenance checklists
- `/knowledge-hub/` (Reusable Guides):
  - How-to instructions, educational content, checklists, deep dives
  - Link from `/docs/` when readers want to learn more

### 3. Show Business Value
- Explain the why and the impact in business terms
- Translate technical features into benefits
- Use numbers when available (scores, % changes, dates)

## Standard Structure for `/docs/`

```markdown
# [Topic] - [Client Name]

## What This Is & Why It Matters
1–2 sentences that explain the concept in plain language plus the business value.

## Implementation Summary
| Priority | Area | What We Delivered | Date(s) | Status | Evidence Link(s) |
|----------|------|-------------------|---------|--------|------------------|
| High/Medium/Low | Item | What we built/configured | Aug 2025 | ✅ Active | Deep admin links (e.g., GSC robots tester/sitemaps), live endpoints (robots/sitemap), PSI, admin panels, or internal docs |

## What We Implemented (Concise)
- 3–6 concrete bullets (one line each)
- Include brief config context where relevant (e.g., “Verified robots in GSC”)

## Results & Impact
- Quantified outcomes (metrics, scores, deltas)
- Qualitative benefits if metrics aren’t available

## Useful Links
- Prefer deep admin links for verification:
  - GSC robots tester, GSC sitemaps
  - Live endpoints (robots.txt, sitemap.xml)
  - PageSpeed Insights report for the domain
  - Platform admin pages (e.g., Webflow site settings/designer)
- Link to relevant knowledge-hub guides
```

### Patterns To Prefer
- Start with a visual summary (table) with Priority and Evidence Link(s)
- Use short bullets and bold keywords
- Add cross-links: related `/docs/` pages and relevant `/knowledge-hub/` articles
- Include dates and statuses (✅ Active / ⏸️ Paused / 🔄 In progress)
- Add small diagrams for quick orientation (ASCII or Mermaid) when helpful
- Include small schema snippets when they build trust (e.g., Organization/Product JSON-LD)

### Patterns To Avoid in `/docs/`
- Long, generic best-practice sections (move to knowledge-hub)
- Maintenance checklists and “what you should do” (unless requested)
- Future roadmaps unrelated to delivered scope (keep minimal or omit)
- Dense paragraphs; prefer tables and bullets

## Writing Techniques

### The “Grandparent Test”
If a grandparent can’t understand it, simplify it.

### The “So What?” Test
Every technical detail must answer: so what’s the business value?

### The Three-Layer Explanation (when needed)
1. One-liner (simple)
2. Paragraph (benefits)
3. Optional technical note (collapsible)

## Visual & Formatting Standards
- H1: Title only; H2: major sections; H3: subsections
- Use tables for summaries/metrics/field lists; bullets for lists
- Visual indicators: ✅ Active, ❌ Inactive, ⏸️ Paused, 🔄 In progress, ⚡ Performance, 🎯 Business
- Keep sections under ~6 bullets; split if longer

## Linking Standards
- Use real, actionable links when possible
  - Webflow settings `https://webflow.com/dashboard/sites/savage-report-we/general`
  - Live sitemap `https://the-savage-report.com/sitemap.xml`
  - Robots.txt `https://the-savage-report.com/robots.txt`
  - PageSpeed Insights `https://pagespeed.web.dev/report?url=https://the-savage-report.com`
  - Google Search Console property (domain) `https://search.google.com/search-console?resource_id=sc-domain:the-savage-report.com`
  - GSC robots tester `https://search.google.com/search-console/settings/robots-txt?resource_id=sc-domain:the-savage-report.com`
  - GSC sitemaps `https://search.google.com/search-console/sitemaps?resource_id=sc-domain:the-savage-report.com`
- Link to internal docs using relative paths
- Link to knowledge-hub for how-to/education

## Quality Checklist (Quick)
- [ ] Clear: plain language, no jargon
- [ ] Concise: visual summary first, bullets not paragraphs
- [ ] Concrete: dates, statuses, metrics
- [ ] Evidence: deep admin and live links to verify work (robots, sitemap, PSI, GSC)
- [ ] Value-driven: benefits are explicit
- [ ] Linked: admin URLs and knowledge-hub references

## Example Prompt (Copy/Paste)

Write a client-facing `/docs/` page using this structure:
- Topic: <topic>
- Client: The Savage Report
- What we delivered: <3–6 bullets>
- Dates and statuses: <per item>
- Business impact: <metrics or concise value>
- Links: <robots/sitemap/PSI/GSC/admin + knowledge-hub>

Ensure it opens with an Implementation Summary table including Priority and Evidence Link(s), stays concise, includes deep admin verification links, and avoids how-to. Move educational content to `/knowledge-hub/` and cross-link it.
