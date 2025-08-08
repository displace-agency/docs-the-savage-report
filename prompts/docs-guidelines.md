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
| Area | What We Delivered | Date(s) | Status | Business Impact |
|------|-------------------|---------|--------|-----------------|
| Item | What we built/configured | Aug 2025 | ✅ Active | Why it matters |

## What We Implemented (Concise)
- Bullet list of 3–6 concrete things delivered
- Keep each bullet short (one line where possible)

## Results & Impact
- Quantified outcomes (metrics, scores, deltas)
- Qualitative benefits if metrics aren’t available

## Useful Links
- Real admin links (e.g., Webflow dashboard), live assets, relevant knowledge-hub guides
```

### Patterns To Prefer
- Start with a visual summary (table) just like Page Speed Optimizations
- Use short bullets and bold keywords
- Add cross-links: related `/docs/` pages and relevant `/knowledge-hub/` articles
- Include dates and statuses (✅ Active / ⏸️ Paused / 🔄 In progress)

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
  - Example: Webflow settings `https://webflow.com/dashboard/sites/savage-report-we/general`
  - Live sitemap `https://the-savage-report.com/sitemap.xml`
- Link to internal docs using relative paths
- Link to knowledge-hub for how-to/education

## Quality Checklist (Quick)
- [ ] Clear: plain language, no jargon
- [ ] Concise: visual summary first, bullets not paragraphs
- [ ] Concrete: dates, statuses, metrics
- [ ] Value-driven: benefits are explicit
- [ ] Linked: admin URLs and knowledge-hub references

## Example Prompt (Copy/Paste)

Write a client-facing `/docs/` page using this structure:
- Topic: <topic>
- Client: The Savage Report
- What we delivered: <3–6 bullets>
- Dates and statuses: <per item>
- Business impact: <metrics or concise value>
- Links: <admin URLs and knowledge-hub articles>

Ensure it opens with a summary table, stays concise, and avoids how-to. Move educational content to `/knowledge-hub/` and cross-link it.
