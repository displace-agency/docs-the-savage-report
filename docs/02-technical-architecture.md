# Technical Architecture

## What This Is & Why It Matters
This document explains the end‑to‑end system design for The Savage Report—how Webflow, Smootify, and Shopify work together; the flows for products, orders, and content; and where core integrations live. It is the source of truth for how the stack operates today.

## Implementation Summary

| Item | What We Delivered | Priority | Status | Reference Link(s) |
|------|-------------------|----------|--------|-------------------|
| [Platform Specifications](#platform-specifications) | Site settings, domains, and environment details | Medium | Active | — |
| [Data Flow](#data-flow) | Product, order, and content flows across systems | High | Active | — |
| [Integration Points](#integration-points) | Smootify config, custom attributes, and APIs | High | Active | — |
| [Performance Optimization](#performance-optimization) | Image/code/caching strategies | High | Active | — |
| [Security Measures](#security-measures) | Auth, data protection, compliance | High | Active | — |
| [Monitoring & Analytics](#monitoring--analytics) | Perf and business monitoring | Medium | Active | — |
| [Backup & Recovery](#backup--recovery) | Backup schedule and recovery procedures | Medium | Active | — |

## System Overview

> **Related Documentation:**
> - 📁 [CMS Collections](./04-cms-collections.md) - Six collections content model
> - ⚡ [Page Speed Optimizations](./06-page-speed-optimization.md) - Performance optimizations built on this architecture
> - [Analytics Implementation](./07-analytics-implementation.md) - Analytics tracking and monitoring

```
┌─────────────────────────────────────┐
│         WEBFLOW (CMS)               │
│   - Design & Content Management     │
│   - Page Templates                  │
│   - Components & Interactions       │
│   - Custom Attributes               │
└─────────────┬───────────────────────┘
              │
              ↓
┌─────────────────────────────────────┐
│      SMOOTIFY (Bridge)              │
│   - Product Sync (15 min intervals) │
│   - Cart Management                 │
│   - Inventory Updates               │
│   - Price Synchronization           │
└─────────────┬───────────────────────┘
              │
              ↓
┌─────────────────────────────────────┐
│      SHOPIFY (E-Commerce)           │
│   - Order Processing                │
│   - Payment Gateway                 │
│   - Inventory Management            │
│   - Customer Data                   │
└─────────────────────────────────────┘
```

<a id="platform-specifications"></a>
## Platform Specifications

### Webflow Site Details
- **Site ID**: `683d50986bb12de3b5b4775f`
- **Workspace ID**: `6332df944bdcdf01092fa668`
- **Created**: June 2, 2025
- **Last Published**: August 4, 2025
- **Time Zone**: Asia/Calcutta
- **Locale**: English (en)

### Domain Configuration
- **Primary**: www.the-savage-report.com
- **Secondary**: the-savage-report.com
- **SSL**: Active
- **CDN**: Webflow integrated CDN
- **DNS**: Managed through Webflow

<a id="data-flow"></a>
## Data Flow

### Product Creation Flow
1. Product created in Shopify admin
2. Smootify webhook triggered
3. Data synced to Webflow CMS (15 min)
4. Product appears in Webflow collections
5. Frontend updates automatically

### Order Processing Flow
1. Customer browses on Webflow site
2. Add to cart (handled by Smootify)
3. Cart data stored in browser
4. Checkout redirect to Shopify
5. Payment processing
6. Order confirmation
7. Inventory update
8. Email notifications

### Content Update Flow
1. Static content edited in Webflow Designer
2. CMS content updated via Editor
3. Changes published to staging
4. Review and approval
5. Publish to production

<a id="integration-points"></a>
## Integration Points

### Smootify Configuration
- **Sync Frequency**: Every 15 minutes
- **Manual Sync**: Available on-demand
- **Webhook Events**:
  - Product create/update/delete
  - Inventory changes
  - Price updates
  - Collection modifications

### Custom Attributes
Webflow elements with Smootify attributes:
- `data-smootify-product-id`
- `data-smootify-variant-id`
- `data-smootify-add-to-cart`
- `data-smootify-quantity`
- `data-smootify-price`

### API Connections
- **Shopify API**: Product data, orders
- **Klaviyo API**: Email marketing
- **Google Analytics**: Tracking
- **Smootify API**: Cart management

<a id="performance-optimization"></a>
## Performance Optimization

### Image Handling
- AVIF format conversion
- Lazy loading implementation
- Responsive images
- CDN delivery
- WebP fallbacks

### Code Optimization
- Minified CSS/JS
- Async script loading
- Critical CSS inline
- Deferred non-critical resources
- GZIP compression

### Caching Strategy
- Browser caching: 7 days
- CDN caching: 24 hours
- API response caching: 5 minutes
- Static assets: 30 days

<a id="security-measures"></a>
## Security Measures

### Authentication
- Webflow: 2FA enabled
- Shopify: Staff accounts with roles
- API keys: Environment variables
- Webhook verification: HMAC validation

### Data Protection
- SSL encryption
- PCI compliance (via Shopify)
- GDPR compliance
- Regular backups
- Access logs monitoring

<a id="monitoring--analytics"></a>
## Monitoring & Analytics

### Performance Monitoring
- Page load times
- API response times
- Sync success rates
- Error tracking

### Business Analytics
- Google Analytics 4
- Shopify Analytics
- Klaviyo metrics
- Custom dashboards

<a id="backup--recovery"></a>
## Backup & Recovery

### Backup Schedule
- Webflow: Automatic versioning
- Shopify: Daily backups
- Custom code: Git repository
- Media assets: Cloud storage

### Recovery Procedures
1. Webflow: Restore from backups
2. Shopify: Contact support
3. Smootify: Re-sync data
4. DNS: Failover ready

## Useful Links
- CMS Collections: [Overview](./04-cms-collections.md)
- Page Speed Optimization: [Performance](./06-page-speed-optimization.md)
- Analytics Implementation: [Monitoring](./07-analytics-implementation.md)

<div style="display:flex;justify-content:space-between;gap:12px;margin:24px 0;">
  <a href="01-project-overview.md" style="padding:12px 16px;border:1px solid #d0d7de;border-radius:8px;text-decoration:none;">← Previous: Project Overview</a>
  <a href="03-platform-details.md" style="padding:12px 16px;border:1px solid #d0d7de;border-radius:8px;text-decoration:none;">Next: Website Content & Static Pages - The Savage Report →</a>
</div>

---
Updated: August 2025 • <a href="https://github.com/displace-agency" target="_blank" rel="noopener noreferrer">Displace Agency</a>
