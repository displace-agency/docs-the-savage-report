# Platform Details

## Related Documentation
- [Technical Architecture](./02-technical-architecture.md) - Overall system design
- [CMS Structure](./04-cms-structure.md) - Content management details
- [SEO Implementation](./05-seo-implementation.md) - Search optimization
- [Page Speed Optimizations](./06-page-speed-optimization.md) - Performance improvements
- [Analytics Implementation](./07-analytics-implementation.md) - Analytics tracking and monitoring

### Site Settings
- **Site Name**: THE SAVAGE REPORT
- **Short Name**: savage-report-we
- **Display Name**: THE SAVAGE REPORT
- **Parent Folder ID**: 6817b49af5ec531da00de2cc

### Publishing
- **Last Published**: August 4, 2025, 12:44:07 UTC
- **Auto-publish**: Disabled
- **Staging URL**: Available to editors
- **Password Protection**: Not enabled

### SEO Configuration
- **Default Title Structure**: THE SAVAGE REPORT | [Page Name]
- **Meta Description**: Custom per page
- **Open Graph**: Enabled with custom images
- **Sitemap**: Auto-generated
- **Robots.txt**: Standard configuration

### Webflow Plan Features
- CMS items: Unlimited
- Monthly visits: Based on plan
- Form submissions: Integrated
- Custom code: Enabled
- Site search: Enabled

## Shopify Configuration

### Store Setup
- **Store Name**: The Savage Report
- **Currency**: USD
- **Checkout**: Shopify hosted
- **Payment Providers**: [Configure as needed]

### Product Settings
- **SKU Format**: SR-[CATEGORY]-[NUMBER]
- **Inventory Tracking**: Enabled
- **Variants**: Size, Color
- **Metafields**: 
  - Material composition
  - Care instructions
  - Fit guide
  - Style notes

### Collections Setup
- **Automatic Collections**: Based on tags
- **Manual Collections**: Curated selections
- **Sort Order**: Best selling default
- **Collection Images**: Required

### Order Management
- **Fulfillment**: Manual/3PL
- **Shipping Zones**: Configure per region
- **Tax Settings**: Automatic calculation
- **Email Notifications**: Customized templates

## Smootify Integration

### Installation
1. Shopify App Store → Smootify
2. Connect Webflow project
3. Map collections
4. Configure sync settings
5. Test cart functionality

### Sync Configuration
- **Auto-sync**: Every 15 minutes
- **Manual Sync**: Dashboard button
- **Selective Sync**: Available
- **Conflict Resolution**: Latest wins

### Field Mapping

| Shopify Field | Webflow Field | Notes |
|--------------|---------------|-------|
| Title | Name | Product name |
| Handle | Slug | URL path |
| Description | Description | Rich text |
| Images | Images | Multi-image |
| Price | Price | Number field |
| Compare Price | Compare Price | Sale pricing |
| Inventory | Stock | Number |
| Variants | Variants | Reference field |
| Tags | Tags | Multi-reference |
| Vendor | Vendor | Reference |
| Type | Category | Option field |

### Cart Configuration
- **Cart Type**: Drawer/Modal
- **Persistence**: Local storage
- **Update Method**: AJAX
- **Checkout Redirect**: Shopify checkout

## Third-Party Integrations

### Klaviyo
- **Purpose**: Email marketing
- **Integration Type**: JavaScript snippet
- **Events Tracked**:
  - Page views
  - Add to cart
  - Purchase
  - Browse abandonment

### Google Analytics
- **Version**: GA4
- **Tracking ID**: [Your ID]
- **Enhanced Ecommerce**: Enabled
- **Events**: Custom configuration

### Slater.app
- **Purpose**: Custom code management
- **Scripts**:
  - GSAP animations
  - Custom interactions
  - Smootify enhancements
  - Performance optimizations

## Custom Code Implementations

### GSAP Animations
```javascript
// ScrollTrigger for product reveals
// Smooth scrolling
// Parallax effects
// Hover animations
```

### Custom Attributes
```html
<!-- Smootify product card -->
<div data-smootify-product-id="{{product-id}}">
  <button data-smootify-add-to-cart>Add to Cart</button>
  <input data-smootify-quantity type="number">
</div>
```

### Performance Scripts
- Lazy loading enhancement
- Image optimization
- Prefetch critical resources
- Analytics optimization

## Domain & Hosting

### DNS Configuration
- **A Records**: Point to Webflow
- **CNAME**: www subdomain
- **MX Records**: Email service
- **TXT Records**: Verification

### SSL Certificate
- **Provider**: Webflow (Let's Encrypt)
- **Auto-renewal**: Enabled
- **Coverage**: All subdomains
- **Grade**: A+ rating

### CDN Settings
- **Provider**: Webflow integrated
- **Regions**: Global
- **Caching**: Aggressive
- **Purge**: On publish