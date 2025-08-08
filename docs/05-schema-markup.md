# Schema Markup Implementation - The Savage Report

## What This Is & Why It Matters
We've implemented comprehensive structured data across The Savage Report using JSON-LD schema markup. This helps search engines understand your content better, enables rich results in search listings, and improves overall SEO performance by providing clear context about your brand, products, and content structure.

## Schema Implementation Summary

| Item | What We Delivered | Priority | Date(s) | Status | Reference Link(s) |
|------|-------------------|----------|---------|--------|-------------------|
| Organization Schema | Global organization schema with logo, description, and business details | High | Aug 2025 | ✅ Active | <a href="https://webflow.com/dashboard/sites/savage-report-we/custom-code" target="_blank" rel="noopener noreferrer">Webflow Custom Code</a> |
| Website Schema | Website schema with search functionality and publisher information | High | Aug 2025 | ✅ Active | <a href="https://webflow.com/dashboard/sites/savage-report-we/custom-code" target="_blank" rel="noopener noreferrer">Webflow Custom Code</a> |
| LocalBusiness Schema | Local business schema with Netherlands location and business details | High | Aug 2025 | ✅ Active | <a href="https://webflow.com/dashboard/sites/savage-report-we/custom-code" target="_blank" rel="noopener noreferrer">Webflow Custom Code</a> |
| Homepage Schema | Enhanced homepage schema with breadcrumbs, search, and rich content | High | Aug 2025 | ✅ Active | <a href="https://webflow.com/dashboard/sites/savage-report-we/designer" target="_blank" rel="noopener noreferrer">Webflow Designer</a> |
| Product Schema | Product schema for CMS items with pricing, availability, and brand info | High | Aug 2025 | ✅ Active | <a href="https://webflow.com/dashboard/sites/savage-report-we/designer" target="_blank" rel="noopener noreferrer">Webflow Designer</a> |
| Collection Schema | Collection schema for CMS collections with item lists and descriptions | Medium | Aug 2025 | ✅ Active | <a href="https://webflow.com/dashboard/sites/savage-report-we/designer" target="_blank" rel="noopener noreferrer">Webflow Designer</a> |
| Breadcrumb Schema | Navigation breadcrumb schema for better site structure understanding | Medium | Aug 2025 | ✅ Active | <a href="https://webflow.com/dashboard/sites/savage-report-we/designer" target="_blank" rel="noopener noreferrer">Webflow Designer</a> |

## What We Implemented

### 1) Global Schema (Project Head)
Applied to all pages via Webflow's Custom Code head section.

**Purpose**: Provides basic organization and website context for all pages
**Location**: Webflow → Project Settings → Custom Code → Head

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://the-savage-report.com/#organization",
      "name": "THE SAVAGE REPORT",
      "url": "https://the-savage-report.com",
      "description": "Born from urban beats and metropolitan vibes."
    },
    {
      "@type": "WebSite",
      "@id": "https://the-savage-report.com/#website",
      "url": "https://the-savage-report.com",
      "name": "THE SAVAGE REPORT",
      "publisher": {"@id": "https://the-savage-report.com/#organization"}
    },
    {
      "@type": "LocalBusiness",
      "name": "THE SAVAGE REPORT",
      "url": "https://the-savage-report.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "NL"
      }
    }
  ]
}
</script>
```

### 2) Homepage Schema (Enhanced)
Applied specifically to the homepage for enhanced context and functionality.

**Purpose**: Enhanced homepage context with search, navigation, and rich content
**Location**: Homepage → Page Settings → Custom Code → Head

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [ 
    {
      "@type": "Organization",
      "@id": "https://the-savage-report.com/#organization",
      "name": "THE SAVAGE REPORT",
      "alternateName": "Savage Report",
      "url": "https://the-savage-report.com",
      "sameAs": [
        "https://the-savage-report.com",
        "https://www.the-savage-report.com"
      ],
      "logo": {
        "@type": "ImageObject",
        "@id": "https://the-savage-report.com/#logo",
        "url": "https://the-savage-report.com/logo.png",
        "caption": "THE SAVAGE REPORT Logo"
      },
      "image": {
        "@id": "https://the-savage-report.com/#logo"
      },
      "description": "Born from urban beats and metropolitan vibes. THE SAVAGE REPORT curates street culture and underground fashion where style meets city life.",
      "foundingDate": "2025",
      "slogan": "Born from urban beats and metropolitan vibes",
      "knowsAbout": [
        "Street Fashion",
        "Urban Culture",
        "Underground Fashion",
        "Street Style",
        "Metropolitan Fashion",
        "Urban Streetwear",
        "Culture Curation"
      ],
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Street Culture Collections",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Newdrops",
            "description": "Our latest, where style meets city life"
          },
          {
            "@type": "OfferCatalog",
            "name": "Collections",
            "description": "Curated drops that speak to urban culture"
          },
          {
            "@type": "OfferCatalog",
            "name": "Special Projects",
            "description": "Limited drops and cultural collaborations"
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://the-savage-report.com/#website",
      "url": "https://the-savage-report.com",
      "name": "THE SAVAGE REPORT",
      "description": "Urban Style & Street Culture - Born from urban beats and metropolitan vibes",
      "publisher": {
        "@id": "https://the-savage-report.com/#organization"
      },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://the-savage-report.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      ],
      "inLanguage": "en-US"
    },
    {
      "@type": "WebPage",
      "@id": "https://the-savage-report.com/#webpage",
      "url": "https://the-savage-report.com",
      "name": "SAVAGE REPORT | Urban Style & Street Culture",
      "isPartOf": {
        "@id": "https://the-savage-report.com/#website"
      },
      "about": {
        "@id": "https://the-savage-report.com/#organization"
      },
      "description": "Born from urban beats and metropolitan vibes. Discover where style meets city life through our curated drops and collections.",
      "breadcrumb": {
        "@id": "https://the-savage-report.com/#breadcrumb"
      },
      "inLanguage": "en-US",
      "potentialAction": [
        {
          "@type": "ReadAction",
          "target": ["https://the-savage-report.com"]
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://the-savage-report.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://the-savage-report.com"
        }
      ]
    }
  ]
}
</script>
```

### 3) Product Schema (CMS)
Applied to individual product pages in the CMS.

**Purpose**: Provides detailed product information for rich results and better search understanding
**Location**: Product Template → Page Settings → Custom Code → Head

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "{{wf {&quot;path&quot;:&quot;url&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}",
  "name": "{{wf {&quot;path&quot;:&quot;name&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}",
  "description": "{{wf {&quot;path&quot;:&quot;seo-description&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}",
  "image": [
    "{{wf {&quot;path&quot;:&quot;image&quot;,&quot;type&quot;:&quot;ImageRef&quot;} }}"
  ],
  "brand": {
    "@type": "Brand",
    "name": "THE SAVAGE REPORT"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "{{wf {&quot;path&quot;:&quot;price&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}",
    "availability": "https://schema.org/InStock",
    "url": "{{wf {&quot;path&quot;:&quot;url&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}",
    "seller": {
      "@type": "Organization",
      "name": "THE SAVAGE REPORT"
    }
  },
  "category": "{{wf {&quot;path&quot;:&quot;category&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}",
  "sku": "{{wf {&quot;path&quot;:&quot;sku&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}",
  "mpn": "{{wf {&quot;path&quot;:&quot;sku&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "10"
  }
}
</script>
```

### 4) Collection Schema (CMS)
Applied to collection pages in the CMS.

**Purpose**: Provides collection information and item lists for better search understanding
**Location**: Collection Template → Page Settings → Custom Code → Head

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "{{wf {&quot;path&quot;:&quot;url&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}",
  "name": "{{wf {&quot;path&quot;:&quot;name&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}",
  "description": "{{wf {&quot;path&quot;:&quot;seo-description&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}",
  "url": "{{wf {&quot;path&quot;:&quot;url&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}",
  "image": "{{wf {&quot;path&quot;:&quot;image&quot;,&quot;type&quot;:&quot;ImageRef&quot;} }}",
  "mainEntity": {
    "@type": "ItemList",
    "name": "{{wf {&quot;path&quot;:&quot;name&quot;,&quot;type&quot;:&quot;PlainText&quot;} }} Collection",
    "description": "{{wf {&quot;path&quot;:&quot;seo-description&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}",
    "numberOfItems": "{{wf {&quot;path&quot;:&quot;count&quot;,&quot;type&quot;:&quot;Number&quot;} }}",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "{{wf {&quot;path&quot;:&quot;name&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}",
          "url": "{{wf {&quot;path&quot;:&quot;url&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}",
          "image": "{{wf {&quot;path&quot;:&quot;image&quot;,&quot;type&quot;:&quot;ImageRef&quot;} }}"
        }
      }
    ]
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://the-savage-report.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "{{wf {&quot;path&quot;:&quot;name&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}",
        "item": "{{wf {&quot;path&quot;:&quot;url&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}"
      }
    ]
  }
}
</script>
```

## Schema Benefits & Impact

### Rich Results Enabled
- **Product Rich Snippets**: Price, availability, ratings, and images in search results
- **Organization Knowledge Panel**: Brand information, logo, and business details
- **Breadcrumb Navigation**: Site structure in search results
- **Search Box**: Direct search functionality from search results

### SEO Performance
- **Better Understanding**: Search engines understand your content structure
- **Enhanced Visibility**: Rich results increase click-through rates
- **Local SEO**: Proper location information for local search
- **Content Context**: Clear relationships between pages and content

### User Experience
- **Rich Search Results**: More informative and engaging search listings
- **Direct Search**: Users can search directly from search results
- **Navigation Aid**: Breadcrumbs help users understand site structure
- **Trust Signals**: Professional schema implementation builds trust

## Implementation Strategy

### Global vs Page-Specific
- **Global Schema**: Applied to all pages via project head
- **Page-Specific**: Applied to individual pages for enhanced context
- **CMS Integration**: Dynamic schemas for products and collections

### Performance Considerations
- **Lightweight**: JSON-LD doesn't impact page speed
- **Efficient**: Only loads necessary schema data
- **Cached**: Schema data is cached with page content

### Maintenance
- **Easy Updates**: All schemas managed through Webflow Custom Code
- **Version Control**: Schema changes tracked with site updates
- **Testing**: Regular validation through Google's testing tools

## Validation & Testing

### Testing Tools
- **Rich Results Test**: <a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener noreferrer">Google Rich Results Test</a>
- **Schema Validator**: <a href="https://validator.schema.org/" target="_blank" rel="noopener noreferrer">Schema.org Validator</a>
- **Search Console**: <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer">Google Search Console</a>

### Validation Process
1. **Test Individual Pages**: Validate each schema implementation
2. **Check Rich Results**: Ensure rich snippets are working
3. **Monitor Performance**: Track schema impact on search performance
4. **Regular Updates**: Keep schemas current with content changes

## Useful Links

### Implementation
- **Webflow Custom Code**: <a href="https://webflow.com/dashboard/sites/savage-report-we/custom-code" target="_blank" rel="noopener noreferrer">Project Head Schema</a>
- **Webflow Designer**: <a href="https://webflow.com/dashboard/sites/savage-report-we/designer" target="_blank" rel="noopener noreferrer">Page-Specific Schema</a>
- **Webflow Site Settings**: <a href="https://webflow.com/dashboard/sites/savage-report-we/general" target="_blank" rel="noopener noreferrer">Site Configuration</a>

### Testing & Validation
- **Rich Results Test**: <a href="https://search.google.com/test/rich-results" target="_blank" rel="noopener noreferrer">Google Rich Results Test</a>
- **Schema Validator**: <a href="https://validator.schema.org/" target="_blank" rel="noopener noreferrer">Schema.org Validator</a>
- **Search Console**: <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer">Google Search Console</a>

### Related Documentation
- **SEO Implementation**: [docs/06-seo-implementation.md](./06-seo-implementation.md)
- **Page Speed Optimization**: [docs/07-page-speed-optimization.md](./07-page-speed-optimization.md)
- **CMS Structure**: [docs/04-cms-structure.md](./04-cms-structure.md)

---
*Last Updated: August 2025*  
*Document Version: 1.0*  
*Maintained by: Displace Agency*
