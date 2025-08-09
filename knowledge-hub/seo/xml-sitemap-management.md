# XML Sitemap Management in Webflow

## Overview
An XML sitemap lists important URLs and helps search engines discover and index your site efficiently. Webflow auto‑generates a sitemap that can be configured at project and page levels.

> Tip: Quick access
> - Live sitemap (example): `https://your-domain.com/sitemap.xml`
> - GSC Sitemaps: <a href="https://search.google.com/search-console/sitemaps" target="_blank" rel="noopener noreferrer">search.google.com/search-console/sitemaps</a>
> - Webflow SEO Settings → Sitemap (Project Settings)

## Quick Summary

| What | Where to Configure | Why It Matters | Evidence Links |
|------|---------------------|----------------|----------------|
| Auto‑generated sitemap | Webflow → Project Settings → SEO → Sitemap | Faster discovery of public URLs | Visit yourdomain.com/sitemap.xml |
| Page inclusion toggle | Webflow Designer → Page Settings → SEO → Include in sitemap | Control which pages are indexed | Verify presence/absence in sitemap.xml |
| CMS collection inclusion | Webflow → CMS Collection Settings → SEO | Bulk include/exclude CMS items | Check generated sitemap sections |
| Submission to Google | Google Search Console → Sitemaps | Tracking, errors, discovered URLs | <a href="https://search.google.com/search-console/sitemaps" target="_blank" rel="noopener noreferrer">GSC Sitemaps</a> |

## Webflow Configuration
- Project level: enable auto‑generation; set defaults
- Page level: toggle inclusion per page
- CMS level: configure collection‑wide inclusion

## Validating Your Sitemap
- Open the live sitemap URL and scan for expected sections and valid XML
- In GSC, check Sitemaps for status, discovered URLs, and last read
- Ensure no redirected or noindex URLs are present

## Submission Proof (Google Search Console)
Submitting the sitemap in Google Search Console confirms Google can fetch it and provides ongoing status (Success/Errors), last read time, and discovered URLs. This is a fast way to verify the setup and catch issues.

![GSC Sitemaps submission for the-savage-report.com](../../assets/knowledge-hub/seo/gsc-sitemaps-submission.png)

- Page: <a href="https://search.google.com/search-console/sitemaps?resource_id=sc-domain:the-savage-report.com" target="_blank" rel="noopener noreferrer">GSC Sitemaps</a>
- If the screenshot doesn’t render, place it at `assets/knowledge-hub/seo/gsc-sitemaps-submission.png` in the repo.

## When to Resubmit in GSC
- Major structure changes (navigation, URLs)
- Bulk content additions (new sections/collections)
- After fixing errors flagged in GSC

## Example: Sitemap Structure
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <lastmod>2025-08-07T15:45:26+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Additional URLs -->
</urlset>
```

## Best Practices
- Include only canonical, public URLs
- Keep lastmod dates accurate
- Avoid redirecting or thin pages in the sitemap
- For large sites, use a sitemap index and split logically (products, collections, content)

## Troubleshooting
- “Couldn’t fetch”: verify the sitemap URL is public and robots.txt allows access
- “Blocked URL”: remove noindex/robots blocks or exclude from sitemap
- “Too many URLs”: create a sitemap index and split

## Resources
- Webflow: SEO & sitemaps → <a href="https://university.webflow.com/lesson/seo-in-webflow#sitemap" target="_blank" rel="noopener noreferrer">university.webflow.com/lesson/seo-in-webflow#sitemap</a>
- Google: Sitemaps → <a href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview" target="_blank" rel="noopener noreferrer">developers.google.com/search/docs/crawling-indexing/sitemaps/overview</a>
- GSC Sitemaps → <a href="https://search.google.com/search-console/sitemaps" target="_blank" rel="noopener noreferrer">search.google.com/search-console/sitemaps</a>

---
Last Updated: August 2025  
Article Version: 1.2  
Category: SEO / Technical  
Tags: #SEO #Sitemap #Webflow #SearchConsole #Technical-SEO