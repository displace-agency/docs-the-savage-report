# robots.txt Management for Webflow Sites

## What This Is & Why It Matters
How to configure a clean robots.txt for Webflow sites to guide search engines, prevent crawl waste, and ensure important pages are accessible.

## Implementation Summary

| Item | What We Cover | Status |
|------|----------------|--------|
| Basics | Purpose and quick tips | Active |
| Example | A clean robots.txt template | Active |
| Configuration | Where to set robots.txt in Webflow | Active |
| Validation | How to test and monitor | Active |
| Best Practices | Dos and don’ts | Active |
| Troubleshooting | Common issues | Active |
robots.txt tells search engines what to crawl (or not). A clean robots file prevents crawl waste, protects private areas, and ensures important pages are accessible.

> Tip: Verify quickly with GSC Robots.txt Tester and PageSpeed Insights
> - GSC Robots Tester: <a href="https://search.google.com/search-console/settings/robots-txt" target="_blank" rel="noopener noreferrer">search.google.com/search-console/settings/robots-txt</a>
> - PSI: <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">pagespeed.web.dev</a>
> - Your sitemap (example): `https://your-domain.com/sitemap.xml`

## Quick Summary

| Item | Where to Configure | Why It Matters | Evidence Links |
|------|---------------------|----------------|----------------|
| [Allow public pages](#allow-public-pages) | Webflow → Project Settings → Publishing → Advanced → robots.txt | Ensures Google can crawl key pages | Visit yoursite.com/robots.txt |
| [Disallow utility pages](#disallow-utility-pages) | Same | Avoids indexing of cart, search, auth, 401 pages | Check Page Indexing in Google Search Console |
| [Declare sitemap](#declare-sitemap) | Same | Faster discovery of all public URLs | Link to your sitemap.xml |

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
<a id="allow-public-pages"></a>
## Allow public pages

<a id="disallow-utility-pages"></a>
## Disallow utility pages

<a id="declare-sitemap"></a>
## Declare sitemap
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

## Useful Links
- Webflow robots.txt docs — <a href="https://university.webflow.com/lesson/robots-txt" target="_blank" rel="noopener noreferrer">university.webflow.com/lesson/robots-txt</a>

<div style="display:flex;justify-content:space-between;gap:12px;margin:24px 0;">
  <span></span>
  <a href="schema-markup-for-ecommerce.md" style="padding:12px 16px;border:1px solid #d0d7de;border-radius:8px;text-decoration:none;">Next: Schema Markup for E‑Commerce Websites (JSON‑LD) →</a>
</div>

---
Updated: August 2025 • <a href="https://github.com/displace-agency" target="_blank" rel="noopener noreferrer">Displace Agency</a>
