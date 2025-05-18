# Avrio Dashboard Images

This directory contains URLs and utilities for using images throughout the Avrio Dashboard project.

## Available Images

The project includes the following image categories:

- **Logo**: Main application logo
- **Vendor Logos**: Profile images for featured vendors
- **Special Offer Images**: Featured images for marketplace offers
- **Property Images**: Thumbnails for properties in portfolio view
- **Marketplace Banner**: Hero image for marketplace page
- **User Avatar**: Default user profile image
- **Category Icons**: Icons for marketplace categories
- **Map Markers**: Custom markers for map locations
- **Building Type Icons**: Icons to represent building types

## How to Use

### Option 1: Import the image URLs directly

```javascript
import { images } from '@/assets/imageUrls.js';

export default {
  data() {
    return {
      logo: images.logo,
      vendorLogos: images.vendors,
      // etc.
    }
  }
}
```

### Option 2: Use the imageUtils helper methods

```javascript
import { applyImages } from '@/assets/imageUtils.js';

export default {
  methods: {
    getVendorLogo(vendorName) {
      return applyImages.vendorLogo(vendorName);
    },
    
    getPropertyImage(index) {
      return applyImages.propertyImage(index);
    }
  }
}
```

## Examples

### Using with v-bind in templates:

```html
<img :src="applyImages.logo()" alt="Avrio Logo">

<div class="banner" :style="{ backgroundImage: 'url(' + applyImages.marketplaceBanner() + ')' }">
  <!-- Banner Content -->
</div>

<img :src="applyImages.vendorLogo('EcoTech Systems')" alt="EcoTech Systems Logo">
```

### Dynamically selecting property images:

```html
<div class="property-grid">
  <div class="property-card" v-for="(property, index) in properties" :key="index">
    <div class="property-image">
      <img :src="applyImages.propertyImage(index)" :alt="property.name">
    </div>
    <!-- Property details -->
  </div>
</div>
```

### Using with map markers:

```javascript
// In your map component
methods: {
  createMarker(item) {
    const marker = L.marker([item.location.lat, item.location.lng], {
      icon: L.icon({
        iconUrl: applyImages.mapMarker(item.status),
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
      })
    });
    // Add popup and return
    return marker;
  }
}
```

## Image Sources

All images used in this project are royalty-free and sourced from:
- Unsplash (https://unsplash.com)
- Flaticon (https://www.flaticon.com)

## Customization

To use your own images, simply edit the URLs in `imageUrls.js` file.
