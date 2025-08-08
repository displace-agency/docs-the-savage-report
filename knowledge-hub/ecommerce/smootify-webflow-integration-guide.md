# Smootify Webflow Integration Guide

## Overview

This guide provides detailed instructions for implementing and maintaining Smootify integrations between Webflow and Shopify, covering technical setup, troubleshooting, and optimization strategies.

## Prerequisites

### Required Accounts & Plans
- **Shopify**: Basic plan or higher with admin access
- **Webflow**: CMS Site Plan for collection management
- **Smootify**: Active subscription with integration features

### Technical Requirements
- Admin access to both Webflow and Shopify
- Basic understanding of Webflow CMS collections
- Ability to add custom code to Webflow projects

## Step-by-Step Setup Process

### 1. Install Smootify in Shopify
1. Visit the [Shopify App Store](https://apps.shopify.com/smootify)
2. Click "Add app" and authorize Smootify
3. Complete the setup wizard in your Shopify admin
4. Note your Shopify store URL and domain

### 2. Connect Webflow Project
1. In Smootify dashboard, click "Connect Webflow Project"
2. Authorize Webflow access through OAuth
3. Select your target Webflow site
4. Configure sync settings and frequency

### 3. Add Integration Scripts
Add these scripts to your Webflow project's custom code section:

```html
<!-- In Project Settings > Custom Code > Head -->
<link href="https://cdn.smootify.io/assets/latest/css/index.css" rel="stylesheet" />

<!-- Before closing </body> tag -->
<script type="module" src="https://cdn.smootify.io/assets/latest/js/index.js" async defer></script>

<script>
window.SmootifyUserOptions = {
    newCustomerAccountsPublicKey: 'YOUR_PUBLIC_KEY_HERE',
    newCustomerLoginRedirect: window.location.origin + "/account",
    selectMarketBasedOnBrowserLanguage: true,
}
</script>
```

### 4. Create CMS Collections

#### Products Collection
Required fields:
- **Name** (Plain Text, Required)
- **Slug** (Plain Text, Required, Unique)
- **Shopify ID** (Plain Text) - Critical for sync
- **Price** (Plain Text)
- **Compare At Price** (Plain Text)
- **Description** (Rich Text)
- **Image** (Image)
- **Product Type** (Plain Text)
- **SEO Title** (Plain Text)
- **SEO Description** (Plain Text)

#### Collections Collection
Required fields:
- **Name** (Plain Text, Required)
- **Slug** (Plain Text, Required, Unique)
- **Shopify ID** (Plain Text) - Critical for sync
- **Description** (Rich Text)
- **Image** (Image)
- **SEO Title** (Plain Text)
- **SEO Description** (Plain Text)

#### Vendors Collection
Required fields:
- **Name** (Plain Text, Required)
- **Slug** (Plain Text, Required, Unique)
- **Logo** (Image)
- **Description** (Rich Text)

### 5. Configure Custom Attributes

#### Product Display Attributes
```html
<!-- Product Title -->
<h1 product="title">Product Name</h1>

<!-- Product Description -->
<div product="description">Product description here</div>

<!-- Current Price -->
<span data-prop="price">$0.00</span>

<!-- Compare At Price -->
<span data-prop="compareAtPrice">$0.00</span>

<!-- Product Images -->
<img product="images" src="placeholder.jpg" alt="Product">

<!-- Stock Status -->
<div condition="in-stock">In Stock</div>
<div condition="out-of-stock">Out of Stock</div>

<!-- Sale Badge -->
<div condition="on-sale">SALE</div>
```

#### Cart Functionality
```html
<!-- Add to Cart Button -->
<button data-smootify-add-to-cart>Add to Cart</button>

<!-- Cart Subtotal -->
<span cart="subtotal">$0.00</span>

<!-- Cart Item Count -->
<span cart="count">0</span>

<!-- Cart Items -->
<div cart-item="title">Item Name</div>
<span cart-item="price">$0.00</span>
<input cart-item="quantity" type="number" value="1">
```

## Advanced Configuration

### Variant Selection
For products with multiple options (size, color, etc.):

```html
<!-- Option Selector -->
<select option="Size">
  <option value="S">Small</option>
  <option value="M">Medium</option>
  <option value="L">Large</option>
</select>

<!-- Variant Image -->
<img variant="image" src="variant-image.jpg" alt="Variant">

<!-- Variant Price -->
<span variant="price">$0.00</span>
```

### Loading States
Implement skeleton loading for better UX:

```html
<!-- Hide during loading -->
<div skeleton="hide">Content to hide</div>

<!-- Show placeholder during loading -->
<div skeleton="block">Loading block</div>
<div skeleton="text">Loading text</div>
<div skeleton="image">Loading image</div>
```

### Filters and Search
```html
<!-- Price Range Filter -->
<input filter-price="from" type="number" placeholder="Min price">
<input filter-price="to" type="number" placeholder="Max price">

<!-- Active Filter Labels -->
<div filter="active-label">Active filters appear here</div>

<!-- Search Input -->
<input search="query" type="text" placeholder="Search products">
```

## Synchronization Management

### Automatic Sync
- **Frequency**: Every 15 minutes by default
- **Triggers**: Product updates, inventory changes, new products
- **Data Included**: Prices, descriptions, images, availability

### Manual Sync Options
1. **Full Sync**: Updates all products and collections
2. **Partial Sync**: Updates only changed items
3. **Emergency Sync**: Immediate update for critical changes

### Monitoring Sync Status
- Check last sync time in Smootify dashboard
- Review sync logs for errors or warnings
- Set up notifications for failed syncs

## Troubleshooting Common Issues

### Products Not Displaying
**Symptoms**: Products appear in Shopify but not on website
**Solutions**:
1. Check Shopify ID field in Webflow CMS
2. Verify collection is published in Webflow
3. Confirm product is active in Shopify
4. Force manual sync in Smootify dashboard

### Cart Not Updating
**Symptoms**: Items added but cart count doesn't change
**Solutions**:
1. Clear browser cache and cookies
2. Check custom attributes on cart elements
3. Verify Smootify scripts are loading correctly
4. Test in incognito/private browsing mode

### Pricing Discrepancies
**Symptoms**: Wrong prices displayed on website
**Solutions**:
1. Check currency settings in both platforms
2. Verify price formatting in Webflow CMS
3. Confirm tax settings match between platforms
4. Force price sync in Smootify dashboard

### Image Loading Issues
**Symptoms**: Product images not displaying or loading slowly
**Solutions**:
1. Verify image URLs in Webflow CMS
2. Check image file sizes and formats
3. Implement lazy loading attributes
4. Use Webflow's image optimization features

### Checkout Redirect Problems
**Symptoms**: Cart doesn't redirect to Shopify checkout
**Solutions**:
1. Verify Shopify store URL in Smootify settings
2. Check SSL certificates on both domains
3. Test checkout flow in different browsers
4. Confirm Shopify store is active and accessible

## Performance Optimization

### Image Optimization
- Use AVIF format with WebP fallbacks
- Implement responsive images for different screen sizes
- Add lazy loading to product galleries
- Optimize image dimensions for Webflow

### Script Loading
- Load Smootify scripts asynchronously
- Defer non-critical JavaScript
- Minimize custom code in Webflow
- Use CDN for external resources

### Caching Strategy
- Enable browser caching for static assets
- Use Webflow's built-in CDN
- Implement service workers for offline functionality
- Cache API responses where appropriate

## SEO Best Practices

### Product Pages
- Use dynamic meta titles with product names
- Include product descriptions in meta descriptions
- Implement structured data for rich snippets
- Create clean, descriptive URLs

### Collection Pages
- Optimize collection meta data
- Use breadcrumb navigation
- Implement pagination correctly
- Add canonical URLs for filtered views

### Technical SEO
- Submit updated sitemaps after sync
- Monitor crawl errors in Google Search Console
- Implement proper redirects for discontinued products
- Use robots.txt to control crawler access

## Security Considerations

### Data Protection
- Never expose Shopify admin credentials
- Use environment variables for API keys
- Implement HTTPS across all domains
- Regular security audits of integrations

### Customer Privacy
- Comply with GDPR and CCPA requirements
- Implement cookie consent banners
- Secure customer data transmission
- Regular privacy policy updates

## Maintenance Schedule

### Daily Tasks
- Monitor sync status and error logs
- Check cart functionality on live site
- Review new orders and customer inquiries
- Update any time-sensitive promotions

### Weekly Tasks
- Review performance metrics
- Check inventory accuracy between platforms
- Test checkout flow end-to-end
- Update product descriptions and images

### Monthly Tasks
- Full integration health check
- Review and optimize loading times
- Update security patches and dependencies
- Analyze customer behavior data

### Quarterly Tasks
- Complete backup of CMS data
- Review integration costs and usage
- Plan for seasonal traffic changes
- Update documentation and procedures

## Support Resources

### Official Documentation
- [Smootify Documentation](https://docs.smootify.io/)
- [Webflow CMS Guide](https://webflow.com/cms)
- [Shopify API Documentation](https://shopify.dev/docs)

### Community Support
- Smootify Discord Community
- Webflow Community Forum
- Shopify Partner Community

### Professional Support
- Smootify Priority Support
- Webflow Enterprise Support
- Shopify Plus Support (for Plus merchants)

## Version Control & Updates

### Tracking Changes
- Document all integration modifications
- Use version control for custom code
- Backup CMS structures before major changes
- Test updates in staging environment first

### Update Procedures
1. **Pre-Update**: Backup current configuration
2. **Testing**: Verify changes in development
3. **Staging**: Deploy to staging environment
4. **Production**: Roll out to live site
5. **Post-Update**: Monitor for issues and performance impact

This guide provides a comprehensive foundation for implementing and maintaining successful Smootify integrations. Regular monitoring and optimization ensure the best possible performance and user experience.
