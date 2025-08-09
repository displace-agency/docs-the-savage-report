# Documentation Writing Guidelines

(Moved from `prompts/docs-guidelines.md`)

## Publishing checklist

- Update any URLs in `docs/00-links.md` if needed
- Run `npm run maintenance` (runs link, table, and article linters)
- For rules reference, run:
  - `node admin/scripts/table-lint.mjs --help`
  - `node admin/scripts/article-structure-lint.mjs --help`
- Proofread headings and alt text
- Commit changes with a clear message and push

