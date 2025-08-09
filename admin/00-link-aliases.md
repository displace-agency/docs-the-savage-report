# Article 0 — Global Link Aliases

Use alias links in Markdown to reference internal docs and common external URLs. Maintain targets in admin/link-aliases.json.

Authoring examples:

\n[CMS Collections](alias:cms-collections)\n\n[Webflow Designer](alias:webflow-designer)\n

Automation:
- Run `npm run fix:aliases` to rewrite aliases to actual links.
- Run `npm run fix:links` to enforce new‑tab for external anchors.

To update globally:
1) Edit `admin/link-aliases.json`
2) Run `npm run fix:aliases`

This admin article is the single source of truth for link targets.
