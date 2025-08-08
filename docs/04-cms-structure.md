# CMS Structure

## Collections Overview

The Savage Report uses 6 main CMS collections to manage dynamic content:

## 1. Products Collection

**Collection ID**: `6842dbb7fd62fe84163d606c`  
**Slug**: `product`  
**Created**: June 6, 2025  

### Fields

| Field Name | Field Type | Required | Description |
|------------|------------|----------|-------------|
| Name | Plain Text | Yes | Product title |
| Slug | Slug | Yes | URL identifier |
| Images | Multi-Image | Yes | Product photos |
| Price | Number | Yes | Current price |
| Compare Price | Number | No | Original price |
| Description | Rich Text | Yes | Product details |
| Stock | Number | Yes | Inventory count |
| SKU | Plain Text | Yes | Stock keeping unit |
| Variants | Reference | No | Size/color options |
| Collection | Reference | Yes | Parent collection |
| Vendor | Reference | No | Brand/designer |
| Tags | Multi-Reference | No | Filter tags |
| Featured | Switch | No | Homepage display |
| SEO Title | Plain Text | No | Meta title |
| SEO Description | Plain Text | No | Meta description |

### Template Page
- **URL Pattern**: `/product/[slug]`
- **Template**: Product Template

## 2. Collections

**Collection ID**: `6842dbb7024e4a79c2aa030f`  
**Slug**: `collection`  
**Created**: June 6, 2025  

### Fields

| Field Name | Field Type | Required | Description |
|------------|------------|----------|-------------|
| Name | Plain Text | Yes | Collection name |
| Slug | Slug | Yes | URL identifier |
| Description | Rich Text | Yes | Collection story |
| Hero Image | Image | Yes | Banner image |
| Thumbnail | Image | Yes | Grid display image |
| Season | Option | No | Season identifier |
| Year | Number | No | Collection year |
| Featured | Switch | No | Homepage feature |
| Order | Number | Yes | Display order |
| SEO Description | Plain Text | No | Meta description |

### Template Page
- **URL Pattern**: `/collection/[slug]`
- **Template**: Collection Template

## 3. Vendors

**Collection ID**: `6842dbb8ccb3e3517016896f`  
**Slug**: `vendor`  
**Created**: June 6, 2025  

### Fields

| Field Name | Field Type | Required | Description |
|------------|------------|----------|-------------|
| Name | Plain Text | Yes | Vendor name |
| Slug | Slug | Yes | URL identifier |
| Logo | Image | No | Brand logo |
| Description | Rich Text | Yes | About the vendor |
| Website | Link | No | External website |
| Instagram | Link | No | Social media |
| Featured | Switch | No | Homepage display |

### Template Page
- **URL Pattern**: `/vendor/[slug]`
- **Template**: Vendor Template

## 4. Lookbooks

**Collection ID**: `685a3111edecaa3b6cdec12d`  
**Slug**: `lookbooks`  
**Created**: June 24, 2025  

### Fields

| Field Name | Field Type | Required | Description |
|------------|------------|----------|-------------|
| Title | Plain Text | Yes | Lookbook name |
| Slug | Slug | Yes | URL identifier |
| Cover Image | Image | Yes | Main image |
| Gallery | Multi-Image | Yes | Photo collection |
| Season | Plain Text | Yes | Season/theme |
| Year | Number | Yes | Publication year |
| Description | Rich Text | Yes | Lookbook story |
| Credits | Rich Text | No | Photography credits |
| Products | Multi-Reference | No | Featured products |
| Published Date | Date | Yes | Release date |

### Template Page
- **URL Pattern**: `/lookbooks/[slug]`
- **Template**: Lookbooks Template

## 5. Campaigns

**Collection ID**: `6862adb5e3f9b5783503d701`  
**Slug**: `campaigns`  
**Created**: June 30, 2025  

### Fields

| Field Name | Field Type | Required | Description |
|------------|------------|----------|-------------|
| Name | Plain Text | Yes | Campaign title |
| Slug | Slug | Yes | URL identifier |
| Hero Visual | Image | Yes | Main campaign image |
| Gallery | Multi-Image | No | Campaign visuals |
| Video | Video Link | No | Campaign video |
| Story | Rich Text | Yes | Campaign narrative |
| Launch Date | Date | Yes | Campaign start |
| End Date | Date | No | Campaign end |
| Products | Multi-Reference | No | Related products |
| Collaborators | Plain Text | No | Partners involved |
| Active | Switch | Yes | Display status |

### Template Page
- **URL Pattern**: `/campaigns/[slug]`
- **Template**: Campaigns Template

## 6. Special Projects

**Collection ID**: `6862adfed82af921b1980c1e`  
**Slug**: `special-projects`  
**Created**: June 30, 2025  

### Fields

| Field Name | Field Type | Required | Description |
|------------|------------|----------|-------------|
| Title | Plain Text | Yes | Project name |
| Slug | Slug | Yes | URL identifier |
| Type | Option | Yes | Project type |
| Cover | Image | Yes | Main visual |
| Gallery | Multi-Image | Yes | Project images |
| Description | Rich Text | Yes | Project details |
| Release Date | Date | Yes | Drop date |
| Limited Quantity | Number | No | Stock limit |
| Price Range | Plain Text | No | Pricing info |
| Collaboration | Plain Text | No | Partners |
| Products | Multi-Reference | No | Related items |
| Status | Option | Yes | Active/Sold Out |

### Template Page
- **URL Pattern**: `/special-projects/[slug]`
- **Template**: Special Projects Template

## CMS Best Practices

### Naming Conventions
- Use clear, descriptive names
- Maintain consistent formatting
- Include season/year where relevant
- Avoid special characters in slugs

### Image Requirements
- **Product Images**: 1200x1600px minimum
- **Hero Images**: 1920x1080px minimum
- **Thumbnails**: 600x800px
- **Format**: JPG or PNG
- **File Size**: Under 500KB optimized

### SEO Fields
- Always fill SEO title (50-60 characters)
- Write unique descriptions (150-160 characters)
- Use relevant keywords naturally
- Include brand name consistently

### Publishing Workflow
1. Create item in CMS
2. Add all required fields
3. Upload optimized images
4. Set SEO metadata
5. Preview on staging
6. Publish to live site

## Relationships

### Product Relationships
```
Product → Collection (many-to-one)
Product → Vendor (many-to-one)
Product → Tags (many-to-many)
```

### Campaign Relationships
```
Campaign → Products (one-to-many)
Lookbook → Products (one-to-many)
Special Project → Products (one-to-many)
```