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

## Document Structure & Organization

### Table-Content Alignment (Critical)
- **Every table item MUST have a corresponding section with identical title**
- **Use anchor links**: `[Item Name](#anchor-id)` in table's first column
- **Consistent heading level**: All table-linked sections use H2 (##) for prominence
- **Remove orphaned content**: Delete sections not referenced in table
- **Remove redundant content**: Combine duplicate information from different sections

### Content Consolidation Rules
- **Eliminate redundancy**: If information appears in multiple places, consolidate into one authoritative section
- **Logical grouping**: Combine related topics (e.g., sitemap configuration with sitemap implementation)
- **Remove unnecessary sections**: Delete content that doesn't add unique value or isn't in the table
- **Focus on delivered work**: Only document completed implementations, not future possibilities

## Standard Structure for `/docs/`

```markdown
# [Topic] - [Client Name]

## What This Is & Why It Matters
1–2 sentences that explain the concept in plain language plus the business value.

## Implementation Summary
| Item | What We Delivered | Impact | Status | Reference Link(s) |
|------|-------------------|--------|--------|-------------------|
| [Item Name](#item-name) | What we built/configured | High/Medium/Low | ✅ Active | Deep admin links (e.g., GSC robots tester/sitemaps), live endpoints (robots/sitemap), PSI, admin panels, or internal docs |

## [Item Name]
- 3–6 concrete bullets (one line each) describing the implementation
- Each H2 must correspond to a row in the table (no extra summary sections like "What We Implemented")

## Results & Impact
- Quantified outcomes (metrics, scores, deltas)
- Qualitative benefits if metrics aren't available

## Useful Links
- Prefer deep admin links for verification:
  - GSC robots tester, GSC sitemaps
  - Live endpoints (robots.txt, sitemap.xml)
  - PageSpeed Insights report for the domain
  - Platform admin pages (e.g., Webflow site settings/designer)
- Link to relevant knowledge-hub guides
```

### Content Quality Patterns

#### ✅ Prefer
- **Table-first structure**: Start with summary table with Impact and Reference Links. Immediately follow with H2 sections matching each row of the table (no intermediate summary sections).
- **Anchor links**: `[Item Name](#anchor-id)` in table first column for seamless navigation
- **Prominent headings**: All table-linked sections use H2 (##) for visibility
- **Focused sections**: Only include sections that appear in the table
- **Logical grouping**: Combine related content (e.g., configuration + implementation)
- **Concrete deliverables**: What was actually built/configured
- **Business value**: Translate technical work into impact
- **Verification links**: Direct links to live sites, admin panels, testing tools

#### ❌ Avoid
- **Orphaned content**: Sections not referenced in table
- **Redundant information**: Same details repeated in multiple sections
- **Future promises**: Committing to undelivered work
- **Client responsibilities**: Tasks outside agency scope
- **Unnecessary sections**: Content that doesn't add unique value
- **Generic advice**: How-to content (belongs in knowledge-hub)
- **Dense paragraphs**: Use bullets and tables instead

#### 🚫 No Placeholders / No “We’ll Add Later”
- Do not include TODOs, placeholders, or “screenshots to be added later” sections
- Only document what is implemented and verifiable now
- If visuals aren’t available, omit the section rather than promising future updates

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
- **Bullet points**: Use proper markdown list format (-) for better list display, not bullet characters (•)

## Visual Content Guidelines

### Image Requirements
- **Content accuracy**: Screenshots must match text descriptions exactly
- **Consistent styling**: `width="70%"` and `style="border-radius:8px"`
- **Naming**: `article-name-keywords-date.png` or `article-number-keywords.png`
- **Structure**: Context before image, image, then purpose/location/links bullets

### Image Format
```markdown
### Section Title
Brief context about what this screenshot demonstrates.

<img src="../assets/image-name.png" alt="Description" width="70%" style="border-radius:8px" />

- **Purpose**: What this accomplishes
- **Location**: [Deep admin link](url)
```

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

### Useful Links Section (Standardized)
- Place at the bottom of each article.
- Use these subheadings when relevant:
  - **Implementation**: platform settings, custom code, dashboards (admin links).
  - **Testing & Validation**: tools/reports (e.g., PSI, validators, GSC testers).
  - **Admin Access**: designer/dashboard panels for day-to-day operations.
  - **Related Documentation**: cross-links to other docs in this repo.
- Keep labels concise; avoid emojis to maintain consistency.

### Article Numbering Guidelines
- **Main Articles**: Use sequential numbers for primary topics
  - Example: `01-project-overview.md`, `05-seo-implementation.md`
- **Related Sub-Articles**: Use decimal numbering for related topics
  - Example: `05-seo-implementation.md` and `05.1-seo-schema.md`
  - Keeps related articles together without renumbering everything
  - Use same prefix keyword (e.g., "seo") to show relationship
- **When to Use Sub-Articles**:
  - For detailed aspects of a main topic
  - When content is closely related but deserves its own article
  - To allow future expansion without renumbering

### Link Behavior Guidelines
- **External links** (platforms, tools, live sites): Open in new tab using `target="_blank" rel="noopener noreferrer"`
  - Example: `<a href="https://webflow.com/dashboard/sites/savage-report-we" target="_blank" rel="noopener noreferrer">Webflow Dashboard</a>`
- **Internal links** (documentation, related articles): Open in same tab using regular markdown links
  - Example: `[SEO Implementation](./05-seo-implementation.md)`
  - Example: `[Schema Markup](./05.1-seo-schema.md)`
- **Security**: Always use `rel="noopener noreferrer"` for external links to prevent security vulnerabilities

## Quality Checklist & Common Issues

### Pre-Publication Checklist
- [ ] **Structure**: Table items match section titles exactly with anchor links
- [ ] **Content**: No orphaned sections, redundant content consolidated
- [ ] **Images**: Screenshots match descriptions, proper styling (70% width, rounded corners)
- [ ] **Links**: External links open in new tab, internal in same tab, all tested
- [ ] **Language**: Plain language, business value clear, no unnecessary jargon
- [ ] **Evidence**: Deep admin links and live endpoints for verification

### Critical Issues to Avoid

#### Structure Problems
- **Orphaned content**: Sections not in table or table items without sections
- **Redundant sections**: Same information repeated in multiple places
- **Missing anchor links**: Table items not linking to corresponding sections

#### Content Problems  
- **Future promises**: Committing to undelivered work
- **Client responsibilities**: Including tasks outside agency scope
- **Generic advice**: How-to content that belongs in knowledge-hub

#### Technical Problems
- **Image-text mismatches**: Screenshot showing different content than described
- **Broken links**: URLs pointing to wrong pages or dead endpoints
- **Inconsistent formatting**: Mixed bullet styles, image sizing, link behavior

## Example Prompt (Copy/Paste)

Write a client-facing `/docs/` page using this structure:
- Topic: <topic>
- Client: The Savage Report
- What we delivered: <3–6 bullets>
- Dates and statuses: <per item>
- Business impact: <metrics or concise value>
- Links: <robots/sitemap/PSI/GSC/admin + knowledge-hub>

Ensure it opens with an Implementation Summary table including Priority and Evidence Link(s), stays concise, includes deep admin verification links, and avoids how-to. Move educational content to `/knowledge-hub/` and cross-link it.

## Key Lessons from SEO Article Restructuring

### What We Learned
1. **Table-content alignment is critical**: Every table item must have a matching section
2. **Consolidate related topics**: Combine configuration with implementation sections
3. **Remove unnecessary sections**: Delete content not referenced in the table
4. **Focus on delivered work**: Only document completed implementations
5. **Logical content grouping**: Related topics should be combined for better flow
6. **Eliminate redundancy**: Don't repeat the same information in multiple places

### Application to Future Articles
- Start with table review: Do all items have corresponding sections?
- Content audit: Remove orphaned sections and consolidate duplicates
- Logical grouping: Combine related configuration and implementation topics
- Focus check: Only include work that was actually delivered
- Link verification: Ensure all links point to correct, relevant pages
