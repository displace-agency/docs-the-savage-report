# 00 Links Page Guidelines

Purpose: Maintain a single source of truth for all client links, and define how links should appear inside articles so they are readable and self-explanatory.

## Principles
- Use clear, human-readable link labels in articles. Do not expose aliases, file paths, or references to the global links page.
- Do not use aliases inside articles. Always use normal link names (descriptive labels) that explain destination and purpose.
- Prefer the label structure: `System: Purpose` or `Area: Action`.
- Keep labels concise (max ~60 chars), but specific enough to understand without context.
- Internal docs should use relative links with descriptive labels (e.g., `./05.1-seo-schema.md` as the target, but the label should be "Schema Markup: Implementation Guide").
- External links should be direct HTTPS URLs with descriptive labels.

## How to organize links inside an article
Add a "Useful Links" section and group items logically. Recommended order and grouping:
1) Platform settings and dashboards (e.g., Webflow, Shopify, GSC)
2) Internal docs (related how-tos, implementation guides)
3) Live site endpoints and performance tools (when relevant)

Rules for the "Useful Links" section:
- Limit to the most relevant 3–7 links.
- Group by platform when there are 2+ links from the same system.
- Use descriptive labels only; no alias mentions, no paths in labels, no references to the global links page.
- Example structure:
  - Webflow
    - Webflow Settings: Analytics Configuration → https://webflow.com/dashboard/sites/.../seo
  - Shopify
    - Shopify Admin: Store Management → https://admin.shopify.com/store/.../settings
  - Internal Docs
    - Schema Markup: Implementation Guide → ./05.1-seo-schema.md

## Global Links Directory (`docs/00-links.md`)
- Continue to maintain `docs/00-links.md` as the single source of truth for quick access and upkeep.
- When writing articles, copy the URL from `docs/00-links.md` but use a descriptive label in the article. Do not reference aliases like `See 00 — Global Links → ...`.
- Legacy content may contain aliases. If found, replace them with direct links and descriptive labels.

## Naming conventions
- Prefer `System: Scope` or `System: Purpose`.
- Capitalize system names (Shopify, Webflow, Google Search Console, etc.).
- Avoid jargon and internal shorthand. Make link text understandable to new readers.

### Good examples
- Shopify Admin: Store Management
- Webflow Settings: Analytics Configuration

### Bad examples
- CMS Collections: See 00 — Global Links → cms-collections
- Schema Markup: docs/05.1-seo-schema.md
- Page Speed Optimization: See 00 — Global Links → page-speed

## Maintenance
- When a destination changes, update `docs/00-links.md` first, then update any article that references it.
- Replace legacy alias references in articles with direct URLs and descriptive labels.
- Keep link counts focused and current; remove stale or low-value links.

## Checklist before commit
- No alias references in article content (no "00 — Global Links" mentions).
- No file paths in link labels; labels are descriptive and human-readable.
- Internal docs use relative links; external links are HTTPS and correct.
- "Useful Links" sections are present when they add value, grouped logically, and limited to essentials.
