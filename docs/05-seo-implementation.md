# SEO Implementation & Strategy - The Savage Report

## What This Is & Why It Matters
We implemented foundational SEO across The Savage Report to help search engines understand the site quickly, index the right pages, and present high-quality results that drive traffic and sales.

## SEO Implementation Summary

| Priority | Area | What We Delivered | Date(s) | Status | Evidence Link(s) |
|----------|------|-------------------|---------|--------|------------------|
| High | Core Web Vitals & Speed | Performance work that improves LCP/CLS/FID (see performance doc) | Aug 2025 | ✅ Active | [PageSpeed Insights Report](https://pagespeed.web.dev/report?url=https://the-savage-report.com) · [Performance Doc](./06-page-speed-optimization.md) |
| High | Metadata & Open Graph | Brand-consistent titles, optimized descriptions, Open Graph for key pages | Jul–Aug 2025 | ✅ Active | [Webflow Site Settings](https://webflow.com/dashboard/sites/savage-report-we/general) |
| High | XML Sitemap | Auto-generated sitemap enabled and verified | Aug 2025 | ✅ Active | [Sitemap](https://the-savage-report.com/sitemap.xml) · [GSC Sitemaps](https://search.google.com/search-console/sitemaps?resource_id=sc-domain:the-savage-report.com) |
| High | Robots.txt | Configured to prevent crawl waste and allow key pages; verified in GSC | Aug 2025 | ✅ Active | [robots.txt](https://the-savage-report.com/robots.txt) · [GSC Robots.txt Tester](https://search.google.com/u/5/search-console/settings/robots-txt?resource_id=sc-domain%3Athe-savage-report.com) |
| High | Domain & SSL | Proper HTTPS and canonical host (www and non-www) configuration | Aug 2025 | ✅ Active | [Webflow Site Settings](https://webflow.com/dashboard/sites/savage-report-we/general) |
| High | Canonical URLs | Self-referencing canonicals implemented sitewide | Aug 2025 | ✅ Active | [Homepage (view source to verify)](https://the-savage-report.com/) |
| Medium | URL Structure | Clean, SEO-friendly slugs across pages and collections | Jul 2025 | ✅ Active | [Webflow Designer (Pages/Slugs)](https://webflow.com/dashboard/sites/savage-report-we/designer) |
| Medium | Site Architecture | Added "Shop All" index; optimized CMS collections and content staging | Aug 2025 | ✅ Active | [CMS Structure Doc](./04-cms-structure.md) |
| Medium | Mobile SEO | Simplified mobile header; improved mobile UX structure | Aug 2025 | ✅ Active | [PageSpeed Insights (Mobile Tab)](https://pagespeed.web.dev/report?url=https://the-savage-report.com) |
| Medium | Structured Data (Schema) | Prepared Product, Organization, Local Business, Website schemas; paused to avoid perf conflicts | Jul 25–28, 2025 | ⏸️ Paused | See examples below |

> See also: 📚 [XML Sitemap Management](../knowledge-hub/seo/xml-sitemap-management.md)

## What We Implemented (Concise)

### 1) Structured Data (Schema Markup)
- Prepared JSON-LD for Product, Organization, Local Business, and Website
- Currently inactive to avoid conflicts with the performance optimizer; ready to enable after compatibility validation
- Goal: enable rich results (stars, price, brand info) without compromising speed

### 2) SEO-Optimized Content & Metadata
- Added SEO text blocks on collection pages (human-first, keyword-informed)
- Implemented consistent, brand-first meta titles and optimized descriptions
- Added Open Graph tags for improved social sharing
- Standardized URL slugs using best practices

### 3) Technical SEO
- Enabled and verified auto XML sitemap
- Configured robots.txt for efficient crawling (verified in GSC)
- Implemented self-referencing canonicals sitewide
- Ensured HTTPS across domains with proper www/non-www handling
- Improved site architecture ("Shop All" index, optimized CMS collections, staged non-core pages)

### 4) Mobile & Performance
- Mobile layout improvements (e.g., simplified homepage header for speed)
- Core Web Vitals improved with performance work (see performance doc)

## Site Architecture (At a Glance)
```
Customers → Webflow (Pages, CMS) → Smootify (Bridge) → Shopify (Products, Orders)
                           ↘ XML Sitemap / robots.txt ↙      
```

## Core Web Vitals Snapshot
- Track with PageSpeed Insights (mobile/desktop) and internal monitoring
- Key metrics: LCP < 2.5s, CLS < 0.1, INP < 200ms
- Evidence: [PSI Report](https://pagespeed.web.dev/report?url=https://the-savage-report.com)

---

### Sitemap
We use Webflow’s native auto‑generated sitemap and also submit it in Google Search Console for ongoing monitoring.

<img src="../assets/seo-implementation-webflow-seo-settings-03.png" alt="Webflow sitemap auto‑generation enabled" width="70%" style="border-radius:8px" />

- Links: [Live Sitemap](https://the-savage-report.com/sitemap.xml) · [GSC Sitemaps](https://search.google.com/search-console/sitemaps?resource_id=sc-domain:the-savage-report.com)

<img src="../assets/gsc-sitemaps-the-savage-report-2025-08-08.png" alt="GSC submitted sitemap view" width="70%" style="border-radius:8px" />

---

### Google Site Verification
We keep Google site verification in Webflow so Search Console recognizes the domain for reporting and diagnostics.

<img src="../assets/seo-implementation-webflow-seo-settings-01.png" alt="Webflow SEO settings with Google site verification" width="70%" style="border-radius:8px" />

- Open: [Webflow → SEO Settings](https://webflow.com/dashboard/sites/savage-report-we/seo)

---

### Metadata & Open Graph
Titles and meta descriptions follow brand‑consistent patterns; Open Graph ensures clean social share cards.

<img src="../assets/seo-implementation-webflow-seo-settings-02.png" alt="Meta title/description and Open Graph" width="70%" style="border-radius:8px" />

- Reference: [Webflow Site Settings](https://webflow.com/dashboard/sites/savage-report-we/general)

---

### Robots.txt
robots.txt allows public pages and excludes utility routes to avoid crawl waste; verified via GSC testers.

<img src="../assets/seo-implementation-webflow-seo-settings-04.png" alt="robots.txt configuration in Webflow" width="70%" style="border-radius:8px" />

- Links: [robots.txt](https://the-savage-report.com/robots.txt) · [GSC Robots Tester](https://search.google.com/search-console/settings/robots-txt?resource_id=sc-domain:the-savage-report.com)

---

### Canonical & Advanced
Self‑referencing canonicals and advanced settings help prevent duplicate content issues.

<img src="../assets/seo-implementation-webflow-seo-settings-05.png" alt="Canonical and advanced settings" width="70%" style="border-radius:8px" />

---

### Publishing
After any change, publish the site so updates go live; then validate in GSC and PageSpeed Insights.

<img src="../assets/seo-implementation-webflow-seo-settings-06.png" alt="Webflow publishing" width="70%" style="border-radius:8px" />

- Links: [Publish in Webflow](https://webflow.com/dashboard/sites/savage-report-we) · [PSI Report](https://pagespeed.web.dev/report?url=https://the-savage-report.com)

---

### Schema Markup
Inline JSON‑LD is placed in Webflow’s Custom Code head to provide Organization, WebSite, and LocalBusiness context.

- Location: Webflow → Project Settings → Custom Code → Head  
- Link: [webflow.com/dashboard/sites/savage-report-we/custom-code](https://webflow.com/dashboard/sites/savage-report-we/custom-code)
- Validate with [Rich Results Test](https://search.google.com/test/rich-results) and [Search Console](https://search.google.com/search-console)

#### Examples

Organization
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "THE SAVAGE REPORT",
  "url": "https://the-savage-report.com",
  "logo": "https://the-savage-report.com/assets/logo.png"
}
</script>
```

Product (template)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "{{product.name}}",
  "image": ["{{product.imageUrl}}"],
  "description": "{{product.description}}",
  "brand": {"@type": "Brand", "name": "THE SAVAGE REPORT"},
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "{{product.price}}",
    "availability": "https://schema.org/InStock"
  }
}
</script>
```

## Useful Links
- Webflow Site Settings: [webflow.com/dashboard/sites/savage-report-we/general](https://webflow.com/dashboard/sites/savage-report-we/general)
- Webflow Designer: [webflow.com/dashboard/sites/savage-report-we/designer](https://webflow.com/dashboard/sites/savage-report-we/designer)
- Google Search Console (Property): [search.google.com/search-console?resource_id=sc-domain:the-savage-report.com](https://search.google.com/search-console?resource_id=sc-domain:the-savage-report.com)
- GSC Robots.txt Tester: [search.google.com/u/5/search-console/settings/robots-txt?resource_id=sc-domain:the-savage-report.com](https://search.google.com/u/5/search-console/settings/robots-txt?resource_id=sc-domain%3Athe-savage-report.com)
- GSC Sitemaps: [search.google.com/search-console/sitemaps?resource_id=sc-domain:the-savage-report.com](https://search.google.com/search-console/sitemaps?resource_id=sc-domain:the-savage-report.com)
- PageSpeed Insights: [pagespeed.web.dev/report?url=https://the-savage-report.com](https://pagespeed.web.dev/report?url=https://the-savage-report.com)
- Live Sitemap: [the-savage-report.com/sitemap.xml](https://the-savage-report.com/sitemap.xml)
- Robots: [the-savage-report.com/robots.txt](https://the-savage-report.com/robots.txt)
- Performance Doc: [docs/06-page-speed-optimization.md](./06-page-speed-optimization.md)
- XML Sitemap Management (Guide): [knowledge-hub/seo/xml-sitemap-management.md](../knowledge-hub/seo/xml-sitemap-management.md)

---
*Last Updated: August 2025*  
*Document Version: 1.8*  
*Maintained by: Displace Agency*
