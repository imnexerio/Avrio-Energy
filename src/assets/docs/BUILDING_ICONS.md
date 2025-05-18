# Building Icons Usage Guide

This documentation explains how to use building type icons in the Avrio Dashboard application.

## Available Building Icons

The Avrio Dashboard includes several building type icons that can be used to indicate different building types throughout the application:

- **Commercial**: For commercial buildings like offices and retail spaces
- **Residential**: For residential properties like apartments and housing complexes
- **Industrial**: For industrial buildings like warehouses and manufacturing plants
- **Mixed**: For mixed-use developments combining multiple building types

## How to Use Building Icons

You can access building icons using the `applyImages` utility functions:

```javascript
import { applyImages } from '@/assets/imageUtils.js';

// Get an icon by building type
const iconUrl = applyImages.buildingIcon('commercial');  // Returns URL for commercial building icon
```

### Example with Vue Component

Here's how you can use the building icons in a Vue component:

```vue
<template>
  <div class="building-card">
    <img :src="getBuildingIcon(building.type)" :alt="building.type" class="building-icon" />
    <div class="building-name">{{ building.name }}</div>
  </div>
</template>

<script>
import { applyImages } from '@/assets/imageUtils.js';

export default {
  methods: {
    getBuildingIcon(type) {
      return applyImages.buildingIcon(type);
    }
  }
}
</script>
```

## Building Type to Icon Mapping

| Building Type | Function Call | Description |
|---------------|---------------|-------------|
| Commercial | `applyImages.buildingIcon('commercial')` | Office buildings, retail spaces, etc. |
| Residential | `applyImages.buildingIcon('residential')` | Apartments, housing complexes, etc. |
| Industrial | `applyImages.buildingIcon('industrial')` | Warehouses, factories, etc. |
| Mixed | `applyImages.buildingIcon('mixed')` | Mixed-use developments |

## Best Practices

- Use lowercase building type names for consistency
- Always provide a fallback in case the building type doesn't match any predefined icons
- For accessibility, include appropriate alt text for screen readers when using building icons in UI components
- Use consistent sizing of building icons (24x24px is recommended for table cells, 32x32px for cards)

## Customization

If you need additional building types, add them to the `imageUrls.js` file under the `buildings` section and update the `applyImages.buildingIcon()` function in `imageUtils.js` to handle the new building type.
