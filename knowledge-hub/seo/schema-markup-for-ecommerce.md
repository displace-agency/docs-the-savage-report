# Schema Markup for E‑Commerce Websites (JSON‑LD)

## Overview
Schema markup helps search engines understand your content and unlock rich results (stars, pricing, breadcrumbs). JSON‑LD is the recommended format.

> Tip: Quickly verify your schema with Google’s Rich Results Test: <a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener noreferrer">search.google.com/test/rich-results</a>

## Quick Summary

| Type | Where to Use | Why It Matters | Notes |
|------|---------------|----------------|-------|
| Organization | Site-wide | Brand knowledge panel eligibility; trust | Include name, URL, logo |
| WebSite | Site-wide | Sitelinks Search Box eligibility | Include potentialAction |
| BreadcrumbList | Template pages | Clear hierarchy in SERPs | Mirrors site navigation |
| Product | Product pages | Price/availability/ratings rich results | Pull live data from platform |

## Where to Add Schema in Webflow

### Site‑wide (Project Head)
- Path: Webflow → Project Settings → Custom Code → Head
- Best for: Organization, WebSite schema
- Pros: One place to manage; applied across all pages
- Cons: Not ideal for per‑page data (e.g., Product)

### Page‑specific (Page Settings Head)
- Path: Webflow Designer → Page Settings → Custom Code → Head
- Best for: Product pages, Breadcrumbs, any page‑unique schema
- Pros: Precise, page‑level control
- Cons: Requires templating or CMS rendering for dynamic data

## Examples (Copy/Paste)

Organization
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Brand",
  "url": "https://example.com",
  "logo": "https://example.com/assets/logo.png"
}
</script>
```

WebSite + SearchAction
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://example.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://example.com/search?query={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
</script>
```

BreadcrumbList
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com/"},
    {"@type": "ListItem", "position": 2, "name": "Shop", "item": "https://example.com/shop"},
    {"@type": "ListItem", "position": 3, "name": "Product"}
  ]
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
  "brand": {"@type": "Brand", "name": "Your Brand"},
  "sku": "{{product.sku}}",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "{{product.price}}",
    "availability": "https://schema.org/{{product.availability}}",
    "url": "{{product.url}}"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "{{product.rating}}",
    "reviewCount": "{{product.reviewCount}}"
  }
}
</script>
```

## Implementation Notes
- Use JSON‑LD in the <head> (project‑wide or page‑level as above)
- Ensure product schema values are real and current (price, availability)
- Avoid duplicating schema from conflicting apps/scripts
- Validate with Google’s Rich Results Test and Search Console Enhancements report

## Best Practices
- Start with Organization and WebSite site‑wide
- Add BreadcrumbList on templates
- Add Product on product pages only
- Keep schema minimal and accurate; don’t stuff keywords
- If performance scripts conflict, load one authoritative schema block

## Resources
- Google: Structured data → <a href="https://developers.google.com/search/docs/appearance/structured-data" target="_blank" rel="noopener noreferrer">developers.google.com/search/docs/appearance/structured-data</a>
- Google: Rich Results Test → <a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener noreferrer">search.google.com/test/rich-results</a>
- Google: Data‑vocabulary deprecation & breadcrumbs → <a href="https://developers.google.com/search/blog/2020/01/data-vocabulary" target="_blank" rel="noopener noreferrer">developers.google.com/search/blog/2020/01/data-vocabulary</a>
- Schema.org reference → <a href="https://schema.org" target="_blank" rel="noopener noreferrer">schema.org</a>

---
Category: SEO  
Tags: #SEO #Schema #JSONLD #RichResults #Ecommerce
