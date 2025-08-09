# Documentation Table Guidelines

Use this guide to standardize summary tables across articles.

## Column conventions
- First column: `Item` (each cell should be an anchor link to a section within the same document)
- Subsequent columns: align to the article context, but prefer the following order when relevant:
  - `What We Delivered`
  - `Impact` (or `Priority` for project summaries)
  - `Status` (text only, e.g., `Active`, `Planned`, `Paused` — no emojis)
  - `Reference Link(s)` (external links as needed)

## Anchors
- Each `Item` should link to an H2/H3 section that starts with an explicit anchor.
- Pattern:
  - Table cell: `[Item Name](#item-name)`
  - Section: `## Item Name` preceded by `<a id="item-name"></a>` when necessary to ensure stable anchors.

## Style rules
- No emojis in `Status` column.
- Keep table labels concise; expand details in the corresponding section.
- Prefer singular nouns for items (e.g., `Product Synchronization`) unless the section is inherently plural.
- Keep reference links descriptive and minimal.

## Example

| Item | What We Delivered | Impact | Status | Reference Link(s) |
|------|-------------------|--------|--------|-------------------|
| [Product Synchronization](#product-synchronization) | Automatic sync every ~15 minutes | High | Active | [Webflow CMS](https://webflow.com/dashboard/sites/.../cms) |

<a id="product-synchronization"></a>
## Product Synchronization
Details here.

## Checklist before commit
- Tables start with an `Item` column and use anchor links.
- `Status` values contain text only.
- Anchors exist for each table item.
- Reference links are valid and minimal.
