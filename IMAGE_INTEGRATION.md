# New Image Integration for Avrio Dashboard

## Overview

We've added a complete set of images for the Avrio Dashboard to replace all placeholder images previously used in the project. This includes vendor logos, offer images, property images, icons, and more.

## Files Added

- `src/assets/imageUrls.js`: Contains all image URLs organized by category
- `src/assets/imageUtils.js`: Utility functions to easily apply images to components
- `src/assets/README.md`: Documentation on how to use the image utilities
- `src/assets/examples/PortfolioExample.vue`: Example implementation for the Property view

## Quick Start

### 1. Import the image utilities in your component

```javascript
import { applyImages } from '@/assets/imageUtils.js';
```

### 2. Apply images to your templates

```html
<!-- For simple images -->
<img :src="applyImages.logo()" alt="Avrio Logo">

<!-- For background images -->
<div :style="{ backgroundImage: 'url(' + applyImages.marketplaceBanner() + ')' }">
  <!-- Content -->
</div>

<!-- For dynamic content -->
<div v-for="(vendor, index) in vendors" :key="index">
  <img :src="applyImages.vendorLogo(vendor.name)" :alt="vendor.name">
</div>
```

### 3. Use the image utilities in your methods

```javascript
methods: {
  getMarkerIcon(status) {
    return {
      iconUrl: applyImages.mapMarker(status),
      iconSize: [25, 41],
      iconAnchor: [12, 41]
    };
  }
}
```

## Available Image Categories

- **Logo**: Main application logo
- **Vendor Logos**: Profile images for featured vendors
- **Special Offer Images**: Featured images for marketplace offers
- **Property Images**: Thumbnails for properties in portfolio view
- **Marketplace Banner**: Hero image for marketplace page
- **User Avatar**: Default user profile image
- **Category Icons**: Icons for marketplace categories
- **Map Markers**: Custom markers for map locations
- **Building Type Icons**: Icons to represent building types

## Example Implementation

Check out `src/assets/examples/PortfolioExample.vue` for a practical example of how to implement these images in the Portfolio view.

## Image Sources

All images are royalty-free, sourced from Unsplash and Flaticon.

## Customization

If you need to use your own images, simply edit the URLs in the `imageUrls.js` file.
