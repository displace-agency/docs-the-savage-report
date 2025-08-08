# Technical Architecture

## System Overview

> **Related Documentation:**
> - 📁 [CMS Structure](./04-cms-structure.md) - Detailed content management system overview
> - ⚡ [Page Speed Optimizations](./06-page-speed-optimization.md) - Performance optimizations built on this architecture
> - 🎯 [SEO Implementation](./06-seo-implementation.md) - SEO strategy supported by this technical foundation
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