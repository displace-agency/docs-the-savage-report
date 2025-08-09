# 00 — Global Links Directory

Single source of truth for all links. Use aliases like `[CMS Collections](./04-cms-collections.md)` in any article; run `npm run fix:aliases` to expand them.

## Documentation Pages

| Alias | URL | Notes |
|------|-----|------|
| cms-collections | ./04-cms-collections.md | Six CMS collections overview |
| seo-implementation | ./05-seo-implementation.md | SEO implementation & strategy |
| seo-schema | ./05.1-seo-schema.md | Schema markup implementation |
| page-speed | ./06-page-speed-optimization.md | Performance work |
| analytics | ./07-analytics-implementation.md | Analytics setup |
| smootify-integration | ./08-smootify-integration.md | Webflow ↔ Shopify bridge |

## Webflow

| Alias | URL | Notes |
|------|-----|------|
| webflow-designer | https://webflow.com/design/savage-report-we | Designer UI |
| webflow-cms | https://webflow.com/dashboard/sites/savage-report-we/cms | CMS items |
| webflow-seo-settings | https://webflow.com/dashboard/sites/savage-report-we/seo | SEO settings & robots |

## Live Site

| Alias | URL | Notes |
|------|-----|------|
| live-site | https://the-savage-report.com | Homepage |
| sitemap | https://www.the-savage-report.com/sitemap.xml | Auto-generated sitemap |
| robots | https://the-savage-report.com/robots.txt | Live robots.txt |

## Google Search Console

| Alias | URL | Notes |
|------|-----|------|
| gsc-sitemaps | https://search.google.com/search-console/sitemaps?resource_id=sc-domain:the-savage-report.com | Sitemap submission |

---

To update a link globally: edit the URL in this file and run `npm run fix:aliases`.
