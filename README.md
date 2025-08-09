# The Savage Report - Documentation Hub

> **Complete documentation for The Savage Report streetwear e-commerce platform**
> 
> Built with Webflow + Shopify + Smootify

## 📁 Repository Structure

This repository is organized into three main sections:

### 1. `/docs/` - Client-Specific Documentation
Contains all documentation specific to The Savage Report website, including:
- Project overview and business details
- Technical implementation details
- Platform configurations
- Performance optimizations completed
- Maintenance guides

### 2. `/knowledge-hub/` - Generic Knowledge Articles
Reusable documentation about general concepts and best practices:
- Platform guides (Webflow, Shopify, etc.)
- Performance optimization principles
- E-commerce best practices
- Technical concepts explained
- *These articles are client-agnostic and can be reused across projects*

### 3. `/admin/` - Admin Scripts & Templates
Reusable admin utilities and documentation templates:
- Article writing guidelines
- Repo automation scripts (link checks/fixers)
- CI workflows and notes
- *Copy these into new projects to bootstrap docs ops*

## 🎯 Quick Links

- [**Project Overview**](./docs/01-project-overview.md) 📋 *Start Here*
- [**Technical Architecture**](./docs/02-technical-architecture.md) 🏗️ *System Design*
- [**Platform Details**](./docs/03-platform-details.md) ⚙️ *Webflow & Shopify*
- [**CMS Structure**](./docs/04-cms-structure.md) 📁 *Content Management*
- [**Schema Markup**](./docs/05.1-seo-schema.md) 🏷️ *Structured Data*
- [**CMS Collections**](./docs/05-seo-implementation.md) 📁 *Collections*
- [**SEO Implementation**](./docs/05.2-seo-implementation.md) 🎯 *SEO setup*
- [**Page Speed Optimization**](./docs/06-page-speed-optimization.md) ⚡ *Performance*
- [**Analytics Implementation**](./docs/07-analytics-implementation.md) 📊 *Tracking & Monitoring*

### Knowledge Hub
- [Knowledge Hub Guidelines](./knowledge-hub/knowledge-hub-guidelines.md)
- [XML Sitemap Management](./knowledge-hub/seo/xml-sitemap-management.md) 📚
- [robots.txt Management](./knowledge-hub/seo/robots-txt-management.md)
- [Schema Markup for E‑Commerce](./knowledge-hub/seo/schema-markup-for-ecommerce.md)

### Admin & Templates
- [Documentation Guidelines](./admin/docs-guidelines.md) ✍️

## 📋 Project Information

| Detail | Information |
|--------|-------------|
| **Website** | [www.the-savage-report.com](https://www.the-savage-report.com) |
| **Platform** | Webflow CMS + Design |
| **E-Commerce** | Shopify |
| **Integration** | Smootify |
| **Created** | June 2, 2025 |
| **Last Updated** | August 8, 2025 |
| **Performance** | ⚡ Optimized (Load time: <2 seconds) |

## 🚀 Quick Start

### For Website Owners
1. Read the [Project Overview](./docs/01-project-overview.md)
2. Review [Page Speed Optimizations](./docs/06-page-speed-optimization.md) to understand performance work
3. Check [CMS Collections](./docs/05-seo-implementation.md) for the content model overview

### For Developers
1. Review [Technical Architecture](./docs/02-technical-architecture.md)
2. Check [Page Speed Optimizations](./docs/06-page-speed-optimization.md) for performance implementation
3. Use [Documentation Guidelines](./admin/docs-guidelines.md) for consistent documentation

### For Documentation Writers
1. Use templates in `/prompts/` for consistency
2. Reference `/knowledge-hub/` for reusable content
3. Keep client-specific details in `/docs/`

## 📂 Detailed Repository Structure

```
docs-the-savage-report/
├── docs/                    # Client-specific documentation
│   ├── 01-project-overview.md
│   ├── 02-technical-architecture.md  🏗️ Platform infrastructure
│   ├── 03-platform-details.md
│   ├── 04-cms-structure.md           📁 Content management system
│   ├── 05-seo-implementation.md      📁 CMS collections (six collections)
│   ├── 05.1-seo-schema.md            📋 Schema markup implementation
│   ├── 06-page-speed-optimization.md ⚡ Performance optimizations
│   ├── 07-analytics-implementation.md 📊 Analytics tracking & monitoring
│   ├── 08-smootify-integration.md    🛒 E-commerce integration with Shopify
│
├── knowledge-hub/           # Reusable knowledge articles
│   ├── ecommerce/
│   │   └── smootify-webflow-integration-guide.md 🛒 Complete Smootify setup & troubleshooting
│   ├── performance/
│   │   └── page-speed-optimization-guide.md ⚡ Performance best practices
│   └── seo/
│       ├── xml-sitemap-management.md 📚 XML sitemap best practices
│       ├── robots-txt-management.md 🤖 Robots.txt configuration
│       └── schema-markup-for-ecommerce.md 📋 Structured data implementation
│
├── admin/                   # Admin scripts & documentation templates
│   ├── docs-guidelines.md   ✍️ Documentation writing guidelines
│   ├── scripts/             # Repo automation scripts
│   └── workflows/           # CI notes
│
├── guides/                  # How-to guides
├── troubleshooting/         # Problem solutions
├── technical/               # Technical specifications
└── assets/                  # Images and resources
```

## 🔧 Technology Stack

- **Design & CMS**: Webflow
- **E-Commerce Backend**: Shopify
- **Integration Layer**: Smootify
- **Performance**: Custom Optimizer v4.0.0
- **Animations**: GSAP ScrollTrigger
- **Custom Code Management**: Slater.app
- **Email Marketing**: Klaviyo
- **Analytics**: Google Analytics

## 📊 Performance Achievements

| Metric | Result | Impact |
|--------|--------|---------|
| **Page Load Time** | <2 seconds | 40% faster than before |
| **Mobile Performance** | 85/100 | Excellent user experience |
| **Desktop Performance** | 92/100 | Lightning fast |
| **Bounce Rate** | -25% | More engaged visitors |
| **Conversion Rate** | +7% | Increased sales |

## Key Site Information

### Webflow Details
- **Site ID**: `683d50986bb12de3b5b4775f`
- **Workspace ID**: `6332df944bdcdf01092fa668`
- **Display Name**: THE SAVAGE REPORT
- **Short Name**: savage-report-we

### Collections (CMS)
1. **Products** - Individual product listings
2. **Collections** - Product groupings by theme
3. **Vendors** - Brand/designer information
4. **Lookbooks** - Visual style guides
5. **Campaigns** - Marketing campaigns
6. **Special Projects** - Limited edition drops

### Performance Scripts Active
- Performance Optimizer NoSchema v4.0.0 (Primary)
- Image Performance Optimizer
- Video Performance Optimizer
- Critical CSS Optimizer
- Cache Management System

## 📝 Documentation Philosophy

### Three-Layer Approach

1. **Client-Specific** (`/docs/`)
   - Contains unique implementation details
   - Business-specific information
   - Actual work completed
   - No future recommendations

2. **Knowledge Hub** (`/knowledge-hub/`)
   - Generic, educational content
   - Reusable across projects
   - Best practices and principles
   - Platform-agnostic when possible

3. **Templates** (`/prompts/`)
   - Consistency guidelines
   - Documentation standards
   - Writing prompts for AI assistance
   - Formatting rules

### Documentation Principles
- **Clarity over complexity** - Write for non-technical audiences
- **Achievements over aspirations** - Document what was done, not what could be done
- **Visual hierarchy** - Make information scannable
- **Business value focus** - Connect technical work to business outcomes

## 🔗 Cross-Linking Strategy

Our documentation uses strategic cross-linking to help readers navigate between related topics:

- **CMS Collections** ↔ **Page Speed Optimizations** - Collection templates and media impact performance
- **Technical Architecture** ↔ **CMS Structure** - Platform infrastructure enables content management
- **XML Sitemap Management** ↔ **CMS Collections** - Collection and product URLs in sitemaps

## 📞 Support

- **Webflow Support**: <a href="https://university.webflow.com" target="_blank" rel="noopener noreferrer">university.webflow.com</a>
- **Shopify Help**: <a href="https://help.shopify.com" target="_blank" rel="noopener noreferrer">help.shopify.com</a>
- **Smootify Docs**: <a href="https://smootify.io/docs" target="_blank" rel="noopener noreferrer">smootify.io/docs</a>

---

*Documentation maintained by Displace Agency*  
*Last Updated: August 8, 2025*
