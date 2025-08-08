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
| Item | What We Delivered | Impact | Status | Reference Link(s) |
|------|-------------------|--------|--------|-------------------|
| [Item Name](#item-name) | What we built/configured | High/Medium/Low | ✅ Active | Deep admin links (e.g., GSC robots tester/sitemaps), live endpoints (robots/sitemap), PSI, admin panels, or internal docs |

## What We Implemented
- 3–6 concrete bullets (one line each)
- Include brief config context where relevant (e.g., "Verified robots in GSC")

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

### Patterns To Prefer
- Start with a visual summary (table) with Impact and Evidence Link(s)
- **Use anchor links in table first column** for seamless section navigation
- **Ensure table items have exact corresponding section titles** for content consistency
- Use short bullets and bold keywords
- Add cross-links: related `/docs/` pages and relevant `/knowledge-hub/` articles
- Include statuses (✅ Active / ⏸️ Paused / 🔄 In progress)
- Add small diagrams for quick orientation (ASCII or Mermaid) when helpful
- Include small schema snippets when they build trust (e.g., Organization/Product JSON-LD)

### Patterns To Avoid in `/docs/`
- Long, generic best-practice sections (move to knowledge-hub)
- Maintenance checklists and "what you should do" (unless requested)
- Future roadmaps unrelated to delivered scope (keep minimal or omit)
- Dense paragraphs; prefer tables and bullets
- **Unnecessary parentheses** like "(Concise)" or "(Quick)" - just state the section name
- **Future promises** - never commit to future work or features not yet delivered
- **Client responsibilities** - don't include items that are the client's responsibility (like Shopify Analytics)

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

## 🖼️ Image & Visual Content Guidelines

### Image-Text Alignment (Critical)
- **ALWAYS verify** that image descriptions match the actual screenshot content
- **Test the "screenshot test"**: If someone looks at the image, does the text below accurately describe what they see?
- **Common mismatches to avoid**:
  - Describing "SEO settings" when screenshot shows "Custom Code"
  - Saying "sitemap configuration" when showing "Google verification"
  - Mentioning "meta titles" when displaying "robots.txt settings"

### Image Naming & Organization
- **Naming convention**: 
  - **Article-specific images**: `article-number-keywords.png` (e.g., `03-website-structure-webflow-designer-pages.png`)
  - **General images**: `article-name-keywords-date.png` (e.g., `seo-implementation-webflow-seo-settings-01.png`)
- **Article numbering format**: Use sequential numbers (01, 02, 03) followed by descriptive keywords (2-5 keywords)
- **Placement**: Client-specific images in `/docs/`, generic images in `/assets/`
- **Consistent styling**: Always use `width="70%"` and `style="border-radius:8px"` for embedded images

### Image Content Structure
- **Before image**: Brief context about what the screenshot shows
- **Image**: Properly named and styled screenshot
- **After image**: Bullet points (-) with purpose and relevant links
- **Format**:
  ```markdown
  ### Section Title
  Brief context about what this screenshot demonstrates.
  
  <img src="../assets/article-name-keywords-date.png" alt="Descriptive alt text" width="70%" style="border-radius:8px" />
  
  - **Purpose**: What this setting/feature accomplishes
  - **Location**: [Deep link to admin page](url)
  - **Links**: [Live verification](url) · [Admin panel](url)
  ```

### Screenshot Quality Standards
- **Content accuracy**: Screenshot must show exactly what the text describes
- **Relevance**: Only include screenshots that add value or provide evidence
- **Clarity**: Screenshots should be clear, well-lit, and focused on the relevant area
- **Consistency**: Use similar zoom levels and cropping across related screenshots

### Image-Text Review Process
1. **Content check**: Does the text accurately describe what's visible in the screenshot?
2. **Purpose alignment**: Does the stated purpose match the actual functionality shown?
3. **Link verification**: Are the provided links relevant to the screenshot content?
4. **Context clarity**: Is there enough context before the image to understand what to look for?
5. **Actionability**: Can someone use the information to verify or replicate the work?

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

## Quality Checklist (Quick)
- [ ] Clear: plain language, no jargon
- [ ] Concise: visual summary first, bullets not paragraphs
- [ ] Concrete: dates, statuses, metrics
- [ ] Evidence: deep admin and live links to verify work (robots, sitemap, PSI, GSC)
- [ ] Value-driven: benefits are explicit
- [ ] Linked: admin URLs and knowledge-hub references
- [ ] **Image-text alignment**: Screenshots match descriptions exactly
- [ ] **Consistent formatting**: All bullet points use proper markdown list format (-) not bullet characters (•)
- [ ] **Proper styling**: Images have 70% width and rounded corners
- [ ] **Link behavior**: External links open in new tab, internal links open in same tab

## 🚨 Common Pitfalls & Lessons Learned

### Image-Text Mismatches (Critical Issue)
**Problem**: Descriptions don't match actual screenshot content
**Solution**: Always verify by asking "If someone looks at this image, does the text accurately describe what they see?"
**Example**: Don't say "SEO settings" when screenshot shows "Custom Code" settings

### Formatting Inconsistencies
**Problem**: Mixed use of dashes (-) and bullet characters (•)
**Solution**: Always use proper markdown list format (-) for consistency and better list display
**Example**: Use `- **Purpose**:` not `• Purpose:` or `- Purpose:`

### Broken or Irrelevant Links
**Problem**: Links point to wrong pages or are broken
**Solution**: Test all links and ensure they point to relevant admin pages or live endpoints
**Example**: Link to specific GSC sitemaps page, not just the main GSC dashboard

### Section Title Mismatches
**Problem**: Section titles don't reflect actual content
**Solution**: Update titles to match what the content actually covers
**Example**: "Custom Code & Scripts" instead of "Global SEO Defaults" when showing custom code settings

### Missing Context
**Problem**: Screenshots lack context about what to look for
**Solution**: Provide brief context before each image
**Example**: "Configure automatic sitemap generation when site is published for better search engine indexing."

### Inconsistent Image Styling
**Problem**: Images lack consistent styling (width, corners)
**Solution**: Always use `width="70%"` and `style="border-radius:8px"`
**Example**: `<img src="../assets/image.png" alt="Description" width="70%" style="border-radius:8px" />`

### Unnecessary Parentheses
**Problem**: Adding unnecessary parentheses like "(Concise)" or "(Quick)"
**Solution**: Just state the section name directly
**Example**: Use "What We Implemented" not "What We Implemented (Concise)"

### Future Promises
**Problem**: Committing to future work or features not yet delivered
**Solution**: Only document work that has been completed and delivered
**Example**: Don't say "Once access is granted, we can set up custom dashboards" - only document what's already done

### Client Responsibilities
**Problem**: Including items that are the client's responsibility
**Solution**: Only include work that the agency delivered
**Example**: Don't include Shopify Analytics if the agency didn't implement it - move to "Other Sources" section

### Incorrect Link Behavior
**Problem**: External links opening in same tab or internal links opening in new tab
**Solution**: External links should open in new tab, internal links should open in same tab
**Example**: Use `<a href="https://webflow.com/dashboard" target="_blank" rel="noopener noreferrer">Webflow</a>` for external, `[Internal Doc](./file.md)` for internal

## Example Prompt (Copy/Paste)

Write a client-facing `/docs/` page using this structure:
- Topic: <topic>
- Client: The Savage Report
- What we delivered: <3–6 bullets>
- Dates and statuses: <per item>
- Business impact: <metrics or concise value>
- Links: <robots/sitemap/PSI/GSC/admin + knowledge-hub>

Ensure it opens with an Implementation Summary table including Priority and Evidence Link(s), stays concise, includes deep admin verification links, and avoids how-to. Move educational content to `/knowledge-hub/` and cross-link it.

## Table Structure Guidelines

### Implementation Summary Table
- **First column**: Item (what we implemented) - **MUST have corresponding section with exact same title**
- **Second column**: What We Delivered (description of the work)
- **Third column**: Impact (High/Medium/Low) - **Use "Impact" instead of "Priority" for better business context**
- **Fourth column**: Status (✅ Active / ⏸️ Paused / 🔄 In progress)
- **Fifth column**: Reference Link(s) (direct links to verify work)

### Table Content Rules
- **Item names**: Use clear, action-oriented names (e.g., "Google Search Console" not "GSC Integration")
- **What We Delivered**: Focus on concrete deliverables, not future possibilities
- **Impact**: Only use High/Medium/Low - avoid other impact levels
- **Reference Links**: Always provide direct, actionable links to verify the work
- **No future promises**: Only include work that has been completed and delivered

### **NEW: Table-Section Alignment Rule (Critical)**
- **Every table item MUST have a corresponding section with the exact same title**
- **Use anchor links in the first column**: `[Item Name](#item-name)` format
- **Section titles must match table items exactly** for proper navigation
- **Remove orphaned table rows** that don't have corresponding content sections
- **This ensures content consistency** and prevents readers from clicking on non-existent sections

### **NEW: Anchor Link Implementation**
- **Format**: `[Item Name](#anchor-id)` where anchor-id matches the section
- **Example**: `[Organization Schema](#organization-schema)` links to `### Organization Schema`
- **Benefits**: 
  - Readers can quickly navigate to relevant sections
  - Content consistency is enforced (table items must have sections)
  - Easy to spot missing or orphaned content
  - Improves document usability and navigation
