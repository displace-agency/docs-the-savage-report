# CMS Structure - The Savage Report

## What is a CMS and Why It Matters

A **Content Management System (CMS)** is like a digital filing cabinet for your website. Instead of hard-coding every product into the website's code, we use a CMS to store and organize all your content in one place. Think of it as a spreadsheet that automatically creates beautiful web pages.

**Why we use a CMS:**
- **Easy Updates**: Add new products without touching code
- **Consistency**: Every product page looks perfect automatically
- **Organization**: All content organized in collections
- **Scalability**: Add unlimited products without slowing down

> **Related Documentation:**
> - 🎯 [SEO Implementation](./05-seo-implementation.md) - How CMS structure supports SEO optimization
> - ⚡ [Page Speed Optimizations](./06-page-speed-optimization.md) - Performance optimizations for CMS content
> - 🏗️ [Technical Architecture](./02-technical-architecture.md) - Platform infrastructure overview
> - 📊 [Analytics Implementation](./07-analytics-implementation.md) - Analytics tracking and monitoring

## How Our Hybrid System Works

The Savage Report uses a unique **dual-system approach** that combines the best of both worlds:

### 🎨 Webflow CMS (Structure & Design)
- Creates the page templates and visual structure
- Manages URLs and page routing
- Handles SEO and metadata
- Provides the design framework

### 🛍️ Shopify + Smootify (Live Product Data)
- Displays real-time product information
- Manages inventory and pricing
- Handles all e-commerce functionality
- Processes orders and payments

**Important:** While you see fields in Webflow's CMS, the actual product information displayed to customers comes directly from Shopify through Smootify. This ensures prices and inventory are always accurate.

## The Magic Field: Shopify ID

The **Shopify ID** field is the bridge between both systems. This unique identifier tells Smootify which product from Shopify to display on each page.

```
How it works:
Webflow Page (with Shopify ID) → Smootify reads ID → Pulls data from Shopify → Customer sees live product info
```

## Collections Overview

We've organized your content into 6 smart collections, each serving a specific purpose:

| Collection | Purpose | Items | Key Feature |
|------------|---------|-------|-------------|
| **Products** | Individual product pages | 150+ | Links to Shopify inventory |
| **Collections** | Product groupings (Summer, Essentials, etc.) | 12 | Organizes products by theme |
| **Vendors** | Brand/designer profiles | 8 | Showcases your partners |
| **Lookbooks** | Visual style guides | 6 | Inspirational content |
| **Campaigns** | Marketing initiatives | 4 | Time-based promotions |
| **Special Projects** | Limited edition drops | 3 | Exclusive releases |

## 1. Products Collection

**What it's for:** Every individual item you sell  
**Created:** June 6, 2025  
**Total Items:** 150+ products

### Critical Fields

| Field | Purpose | Who Updates It |
|-------|---------|---------------|
| **Shopify ID** 🔑 | Links to Shopify product | Automatic via sync |
| **Name** | Product title for URL | Set once, rarely changed |
| **Slug** | Creates the web address (/product/cool-tshirt) | Auto-generated |
| **SEO Fields** | Helps Google find products | Marketing team |

### Display Fields (Managed by Shopify/Smootify)

These fields exist in Webflow but are **overridden by live Shopify data**:

| Field | Where It Actually Comes From |
|-------|------------------------------|
| **Price** | Shopify (always current) |
| **Images** | Shopify product images |
| **Description** | Shopify product description |
| **Inventory** | Shopify stock levels |
| **Variants** | Shopify (sizes, colors) |

### Why This Dual System?

- **Webflow** provides the beautiful page design
- **Shopify** provides accurate product data
- **Customers** always see correct prices and stock levels
- **You** only need to update products in one place (Shopify)

## 2. Collections (Product Groups)

**What it's for:** Organizing products into shoppable categories  
**Example:** "Summer Essentials", "New Arrivals", "Best Sellers"

### Key Fields Explained

| Field | What It Does | Example |
|-------|--------------|---------|
| **Name** | Collection title | "Summer 2025" |
| **Shopify ID** | Links to Shopify collection | Ensures products auto-update |
| **Hero Image** | Banner at top of page | 1920x1080px lifestyle shot |
| **Description** | Story about the collection | "Inspired by urban summers..." |
| **Order** | Controls display sequence | 1 = First, 2 = Second, etc. |

### How Collections Work
```
Shopify Collection (managed there) 
    ↓
Webflow provides the page design
    ↓
Smootify pulls products automatically
    ↓
Customer sees beautiful, organized page
```

## 3. Vendors (Brands/Designers)

**What it's for:** Showcasing the brands and designers you carry  
**Purpose:** Builds credibility and allows shopping by brand

### Fields That Matter

| Field | Purpose | Update Frequency |
|-------|---------|-----------------|
| **Name** | Brand name | Once when added |
| **Logo** | Brand identity | Once when added |
| **Description** | Brand story | Occasionally |
| **Instagram** | Social link | When URL changes |
| **Featured** | Shows on homepage | Marketing decision |

## 4. Lookbooks (Visual Content)

**What it's for:** Inspirational content showing products in context  
**Purpose:** Drives desire and shows styling options

### Content Strategy

| Field | Marketing Value |
|-------|----------------|
| **Gallery** | Shows lifestyle/styling | 
| **Season** | Creates urgency |
| **Products** | Direct shopping links |
| **Credits** | Builds partnerships |

**How Lookbooks Drive Sales:**
1. Customer browses beautiful imagery
2. Clicks on featured products
3. Goes directly to product page
4. Makes purchase

## 5. Campaigns

**What it's for:** Time-based marketing initiatives  
**Examples:** "Black Friday", "Spring Launch", "Collaboration Drops"

### Strategic Fields

| Field | Business Purpose |
|-------|-----------------|
| **Launch Date** | Creates anticipation |
| **End Date** | Urgency for purchase |
| **Hero Visual** | Grabs attention |
| **Products** | What's being promoted |
| **Active Switch** | Easy on/off control |

## 6. Special Projects

**What it's for:** Limited edition releases and collaborations  
**Purpose:** Creates exclusivity and buzz

### Key Features

| Field | Why It's Important |
|-------|--------------------|
| **Limited Quantity** | Creates scarcity |
| **Release Date** | Builds hype |
| **Status** | Shows availability |
| **Collaboration** | Adds prestige |

## How to Manage Content

### Daily Management (In Shopify)
- Product prices
- Inventory levels  
- Product descriptions
- Product images
- Variants (sizes/colors)

### Occasional Updates (In Webflow)
- New collection pages
- Lookbook launches
- Campaign creation
- SEO optimization
- Homepage features

### Understanding the Sync Process

```
1. You update product in Shopify
2. Customer visits website
3. Smootify checks Shopify ID
4. Pulls latest data instantly
5. Customer sees current info
```

## Visual Content Guidelines

### Image Requirements by Type

| Content Type | Dimensions | File Size | Format |
|--------------|------------|-----------|---------|
| **Product Photos** | 1200x1600px | <150KB | WebP/JPG |
| **Hero Banners** | 1920x1080px | <300KB | WebP/JPG |
| **Collection Thumbs** | 600x800px | <100KB | WebP/JPG |
| **Vendor Logos** | 500x500px | <50KB | PNG/SVG |

### Why Image Optimization Matters
- **Faster Loading** = Better user experience
- **Better SEO** = Higher Google rankings
- **Lower Bandwidth** = Reduced hosting costs
- **Mobile Friendly** = Happy mobile shoppers

## SEO Best Practices

### What SEO Fields Do

| Field | Purpose | Example |
|-------|---------|---------|
| **SEO Title** | What appears in Google | "Wavy Logo Tee - Streetwear | The Savage Report" |
| **SEO Description** | Google preview text | "Premium cotton streetwear tee with signature wavy logo. Limited edition urban style." |
| **Slug** | Clean URL | `/product/wavy-logo-tee` |

### SEO Quick Rules
- **Titles**: 50-60 characters with brand name
- **Descriptions**: 150-160 characters with keywords
- **Slugs**: Short, descriptive, no special characters

## Frequently Asked Questions

<details>
<summary><strong>Why do some fields seem duplicate?</strong></summary>

Webflow needs structure, but Shopify provides the live data. Think of Webflow fields as placeholders that get filled with real Shopify data. This allows us to have beautiful page designs while ensuring product information is always accurate and up-to-date.
</details>

<details>
<summary><strong>Where do I update product info?</strong></summary>

Always in Shopify. Webflow is just for page structure and design. Any changes to prices, descriptions, inventory, or product images should be made in your Shopify admin panel. These changes will automatically appear on your website through the Smootify connection.
</details>

<details>
<summary><strong>What if Shopify ID is missing?</strong></summary>

The product won't display correctly. This field is critical for the connection between Webflow and Shopify. Without it, Smootify cannot pull the product data, and customers will see an empty or broken product page. Always ensure each product in Webflow has its corresponding Shopify ID.
</details>

<details>
<summary><strong>Can I add products directly in Webflow?</strong></summary>

You can create the page structure in Webflow, but without a Shopify ID, no product data will show. The proper workflow is: 
1. Create the product in Shopify first
2. Get the Shopify product ID
3. Create the CMS item in Webflow with that ID
4. The product data will automatically populate from Shopify
</details>

<details>
<summary><strong>How long does it take for changes to appear?</strong></summary>

Changes made in Shopify appear instantly on your website. When a customer visits a product page, Smootify fetches the latest data in real-time. There's no delay or sync time - updates are immediate.
</details>

<details>
<summary><strong>What happens if Shopify is down?</strong></summary>

If Shopify experiences downtime, product data won't load, but your website structure remains intact. Customers can still browse the site, but product information, prices, and add-to-cart functionality will be temporarily unavailable until Shopify is restored.
</details>

<details>
<summary><strong>Can I customize how products display?</strong></summary>

Yes! Webflow controls the design and layout, while Shopify provides the data. You can customize the appearance, styling, and placement of product information in Webflow's designer. The data will still come from Shopify but will be displayed according to your custom design.
</details>

<details>
<summary><strong>Do I need to update both systems when adding products?</strong></summary>

No, you primarily work in Shopify for product management. You only need to create a corresponding CMS item in Webflow with the Shopify ID when you want a product to have its own dedicated page on your website. Not all Shopify products need to be in Webflow's CMS.
</details>

## The Power of This System

By combining Webflow's design flexibility with Shopify's e-commerce power:

✅ **Design Freedom**: Beautiful, custom pages  
✅ **Real-time Accuracy**: Always-current inventory  
✅ **Single Source of Truth**: Update once in Shopify  
✅ **Scalability**: Grow without limitations  
✅ **Performance**: Fast, optimized delivery  

---

*Document Version: 2.1*  
*Last Updated: August 8, 2025*  
*Maintained by: Displace Agency*
