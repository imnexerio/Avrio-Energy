# Map Markers Usage Guide

This documentation explains how to use custom map markers in the Avrio Dashboard application.

## Available Markers

The Avrio Dashboard includes several map marker types that can be used to indicate different status types on maps throughout the application:

- **Default Marker**: General purpose marker for any location
- **Active Marker**: For active/operational properties and buildings
- **Maintenance Marker**: For properties under maintenance
- **Inactive Marker**: For inactive or out-of-service properties

## How to Use Markers

You can access map markers using the `applyImages` utility functions:

```javascript
import { applyImages } from '@/assets/imageUtils.js';

// Get a marker by status
const markerUrl = applyImages.mapMarker('active');  // Returns URL for active marker
```

### Example with Leaflet Maps

If you're using Leaflet for maps, here's how you can create a custom icon:

```javascript
import L from 'leaflet';
import { applyImages } from '@/assets/imageUtils.js';

// Create a custom Leaflet icon
const customIcon = L.icon({
  iconUrl: applyImages.mapMarker('maintenance'),
  iconSize: [32, 32],
  iconAnchor: [16, 32], 
  popupAnchor: [0, -32]
});

// Use the custom icon with a marker
const marker = L.marker([latitude, longitude], { icon: customIcon })
  .addTo(map)
  .bindPopup('Property under maintenance');
```

## Status to Marker Mapping

| Status | Function Call | Description |
|--------|---------------|-------------|
| Default | `applyImages.mapMarker('default')` | Standard marker for any location |
| Active | `applyImages.mapMarker('active')` | Active/operational property |
| Maintenance | `applyImages.mapMarker('maintenance')` | Property under maintenance |
| Inactive | `applyImages.mapMarker('inactive')` | Inactive property |

## Best Practices

- Always provide a fallback in case the status doesn't match any predefined markers
- Use consistent status names throughout your application to ensure proper marker display
- For accessibility, include appropriate alt text for screen readers when using marker images in UI components

## Customization

If you need additional marker types, add them to the `imageUrls.js` file under the `markers` section and update the `applyImages.mapMarker()` function in `imageUtils.js` to handle the new marker type.
