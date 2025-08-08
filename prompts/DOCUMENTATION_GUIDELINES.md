# Documentation Writing Guidelines

## Purpose
This comprehensive guide helps create clear, valuable documentation for non-technical clients across all documentation types.

## Core Principles

### 1. Audience-First Writing
- **Primary audience**: Non-technical business owners
- **Secondary audience**: Marketing teams, content managers
- **Tertiary audience**: Developers (technical sections clearly marked)

### 2. Documentation Philosophy
- **Document achievements**, not aspirations
- **Explain the WHY**, not just the what
- **Show business value**, not just features
- **Use visual hierarchy** for easy scanning

## Universal Documentation Structure

### Opening Section
```markdown
# [Topic] - [Client Name]

## What This Is & Why It Matters
[2-3 sentences explaining the topic in simple terms and its business value]

## Quick Overview
[Visual table or diagram showing the main components/concepts]
```

### Main Content Structure
```markdown
## How [Topic] Works for Your Business

### The Simple Explanation
[Analogy or real-world comparison]

### What We've Built/Configured
[Clear list of what was implemented]

### Business Benefits You're Getting
- [Benefit 1 with metric if available]
- [Benefit 2 with example]
- [Benefit 3 with impact]
```

### Technical Reference (Optional)
```markdown
## Technical Details (For Developers)
[Clearly marked section with technical specifications]
```

## Writing Techniques

### 1. The "Grandparent Test"
If your grandparent can't understand it, simplify it further.

**Bad**: "The CMS utilizes a relational database structure with foreign key constraints"
**Good**: "The CMS is like a filing cabinet where each drawer (collection) holds related information cards (items)"

### 2. The "So What?" Test
Every technical detail should answer "So what does this mean for the business?"

**Bad**: "We implemented lazy loading"
**Good**: "We implemented lazy loading, which means your customers see products 50% faster on their phones"

### 3. Visual Information Hierarchy

Use this priority system:
1. **Tables** for comparing/summarizing
2. **Bullet points** for lists
3. **Bold text** for key concepts
4. **Code blocks** only for technical sections
5. **Emojis/icons** sparingly for visual breaks

### 4. The Three-Layer Explanation

For complex topics, use three layers:
1. **One-liner**: Ultra-simple explanation
2. **Paragraph**: More detail with benefits
3. **Technical**: Full details (marked as optional)

Example:
```markdown
### Image Optimization
**Simple**: We make images load faster without losing quality.

**Details**: Every image on your site is automatically compressed and converted to modern formats. This means customers on phones use 70% less data and see products instantly, leading to more sales.

**Technical Note**: Images are converted to WebP format with fallback to JPEG, served via CDN with responsive sizing.
```

## Specific Documentation Types

### 1. System/Architecture Documentation
- Start with a business process diagram
- Explain data flow in terms of business operations
- Connect technical components to business functions

### 2. CMS/Content Management Documentation
- Focus on "what content goes where"
- Explain the purpose of each field
- Include visual examples of where content appears
- Emphasize workflow and ease of use

### 3. Performance/Optimization Documentation
- Lead with metrics and improvements
- Use before/after comparisons
- Connect speed to revenue/conversions
- Include visual performance graphs

### 4. Integration Documentation
- Explain what systems talk to each other
- Focus on business benefits of integration
- Use flowcharts to show data movement
- Highlight automation benefits

### 5. Maintenance Documentation
- Create checklists with clear actions
- Explain why each task matters
- Include frequency and time estimates
- Provide troubleshooting for common issues

## Content Rules

### Always Include
✅ Business value/benefit  
✅ Simple analogies  
✅ Visual elements (tables/diagrams)  
✅ Real examples  
✅ Clear headings  
✅ Summary sections

### Never Include
❌ Unexplained technical jargon  
❌ Future recommendations (unless requested)  
❌ Assumptions about technical knowledge  
❌ Long paragraphs without breaks  
❌ Features without benefits  
❌ Technical details without context

## Formatting Standards

### Headers
- **H1 (#)**: Document title only
- **H2 (##)**: Major sections
- **H3 (###)**: Subsections
- **H4 (####)**: Rarely used, only for deep organization

### Tables
Use tables for:
- Comparing options
- Listing fields/properties
- Showing metrics
- Status summaries

### Visual Indicators
- ✅ Completed/Active
- ❌ Not applicable/Inactive
- 🔄 In progress
- ⚡ Performance related
- 💡 Tip/Best practice
- ⚠️ Important note
- 🎯 Business goal

### Code/Technical Sections
```markdown
<details>
<summary>Technical Details (Click to expand)</summary>

Technical content here...

</details>
```

## Business Value Translations

### Common Technical → Business Translations

| Technical Term | Business Explanation |
|---------------|---------------------|
| API | "Systems talking to each other automatically" |
| Cache | "Remembering information so it loads faster next time" |
| CDN | "Copies of your site stored worldwide for fast loading" |
| CMS | "The control panel where you manage all website content" |
| Database | "The organized filing system storing all your information" |
| Responsive | "Looks perfect on phones, tablets, and computers" |
| SEO | "Helping Google understand and rank your site" |
| Server | "The computer that hosts your website" |
| SSL | "Security that protects customer information" |
| Webhook | "Automatic notifications between systems" |

## Quality Checklist

Before finalizing any documentation:

1. **Clarity Check**
   - [ ] Would a non-technical person understand this?
   - [ ] Are all technical terms explained?
   - [ ] Are there enough visual breaks?

2. **Value Check**
   - [ ] Is the business value clear?
   - [ ] Are benefits quantified where possible?
   - [ ] Does it answer "why should I care?"

3. **Visual Check**
   - [ ] Are there tables/diagrams where helpful?
   - [ ] Is information scannable?
   - [ ] Are sections clearly separated?

4. **Completeness Check**
   - [ ] Does it document what WAS done?
   - [ ] Are all major features explained?
   - [ ] Is contact/support information included?

## Example Opening for Any Documentation

```markdown
# [Topic] Documentation - [Client Name]

## What This Means for Your Business
[1-2 sentences explaining the business impact]

## Quick Summary
| Component | Purpose | Business Value |
|-----------|---------|---------------|
| [Item 1] | [What it does] | [Why it matters] |
| [Item 2] | [What it does] | [Why it matters] |

## How This Works (Simple Version)
[Analogy or simple explanation]

[Rest of content...]
```

## Remember

The goal is to make clients feel:
1. **Informed** - They understand what they have
2. **Confident** - They see the value delivered
3. **Empowered** - They know how to use/maintain it

Every piece of documentation should achieve all three.
