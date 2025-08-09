# 00 Links Page Guidelines

Purpose: Maintain a single source of truth for all client links used across docs.

Structure:
- Documentation Pages (internal md files)
- Webflow (most used → less used)
- Live Site
- Google Search Console
- Shopify
- Smootify
- Performance & Tools

Rules:
- Use three columns: Alias | URL | Notes
- Internal docs: relative links like `./04-cms-collections.md`
- External links: plain URLs (GitHub opens same tab), but keep HTTPS and accurate endpoints
- Order items by importance/frequency
- Prefer stable aliases (e.g., `webflow-designer`, `gsc-sitemaps`)

Maintenance:
- When a link changes, update `docs/00-links.md`
- In articles, reference the alias row using anchors: `./00-links.md#alias-id`
- Keep aliases lowercase, hyphen-separated
- Remove sections that have no real links (avoid placeholders)

Checklist before commit:
- No dead links
- All “Useful Links” sections reference 00-links where possible
- High-priority links appear first in each table
