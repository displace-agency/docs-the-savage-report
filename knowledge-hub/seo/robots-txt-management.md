# robots.txt Management for Webflow Sites

## Overview
robots.txt tells search engines what to crawl (or not). A clean robots file prevents crawl waste, protects private areas, and ensures important pages are accessible.

> Tip: Verify quickly with GSC Robots.txt Tester and PageSpeed Insights
> - GSC Robots Tester: <a href="https://search.google.com/search-console/settings/robots-txt" target="_blank" rel="noopener noreferrer">search.google.com/search-console/settings/robots-txt</a>
> - PSI: <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">pagespeed.web.dev</a>
> - Your sitemap (example): `https://your-domain.com/sitemap.xml`

## Quick Summary

| What | Where to Configure | Why It Matters | Evidence Links |
|------|---------------------|----------------|----------------|
| Allow public pages | Webflow → Project Settings → Publishing → Advanced → robots.txt | Ensures Google can crawl key pages | Visit yoursite.com/robots.txt |
| Disallow utility pages | Same | Avoids indexing of cart, search, auth, 401 pages | Check Page Indexing in Google Search Console |
| Declare sitemap | Same | Faster discovery of all public URLs | Link to your sitemap.xml |

## Example robots.txt
```
User-agent: *
Disallow: /401
Disallow: /search?
Disallow: /cart
Allow: /

Sitemap: <a href="https://example.com/sitemap.xml" target="_blank" rel="noopener noreferrer">https://example.com/sitemap.xml</a>
```

## Webflow Configuration
1. Go to Project Settings → Publishing → Advanced → robots.txt
2. Paste your robots rules (see example)
3. Publish the site (staging + production)

## Validation & Monitoring
- Open <a href="https://your-domain.com/robots.txt" target="_blank" rel="noopener noreferrer">https://your-domain.com/robots.txt</a> and confirm expected rules
- In Google Search Console: Indexing → Pages (check for robots blocks)
- Use GSC Robots.txt Tester to validate syntax and test URLs
- Monitor Crawl Stats in GSC for unexpected crawl spikes or blocks

## Best Practices
- Keep it simple; block only what truly must not be crawled
- Never block canonical public pages
- Don’t use robots.txt to hide sensitive data (it’s a hint, not security)
- Always include the sitemap line to accelerate discovery

## Troubleshooting
- “Submitted URL blocked by robots.txt”: Remove the disallow rule or change URL strategy
- Staging URLs in Google: Ensure staging is password-protected and/or noindex
- Multiple sitemaps: Reference the sitemap index file in robots.txt

## Resources
- Google: Robots.txt specs → <a href="https://developers.google.com/search/docs/crawling-indexing/robots/intro" target="_blank" rel="noopener noreferrer">developers.google.com/search/docs/crawling-indexing/robots/intro</a>
- Google Search Console → <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer">search.google.com/search-console</a>
- GSC Robots Tester → <a href="https://search.google.com/search-console/settings/robots-txt" target="_blank" rel="noopener noreferrer">search.google.com/search-console/settings/robots-txt</a>
- Webflow University: Manage robots.txt → <a href="https://university.webflow.com" target="_blank" rel="noopener noreferrer">university.webflow.com</a>

---
Category: SEO  
Tags: #SEO #robots #Webflow #GoogleSearchConsole
