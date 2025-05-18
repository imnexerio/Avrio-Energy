// Example showing how to integrate images into PortfolioView component

<template>
  <div class="portfolio-dashboard">
    <!-- Existing header and navigation -->
    
    <div class="property-list">
      <h3>Properties (254)</h3>
      <div class="property-grid">
        <div class="property-card" v-for="n in 6" :key="n">
          <!-- Replace the empty property-image div with an img tag using our image URLs -->
          <div class="property-image">
            <img :src="getPropertyImage(n-1)" alt="Property Image" class="property-img">
          </div>
          <div class="property-details">
            <h4>Property {{ n }}</h4>
            <div class="property-address">123 Main St, Suite {{ 100 + n }}</div>
            <div class="property-type">
              <!-- Add building type icon -->
              <img :src="getBuildingIcon('commercial')" alt="Commercial" width="16" height="16" class="building-icon">
              Commercial
            </div>
            <div class="property-stats">
              <div class="stat">
                <span class="stat-label">Area</span>
                <span class="stat-value">{{ 1000 + (n * 200) }} sq ft</span>
              </div>
              <div class="stat">
                <span class="stat-label">Units</span>
                <span class="stat-value">{{ n + 2 }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { applyImages } from '@/assets/imageUtils.js';

export default {
  methods: {
    // Method to get property image by index
    getPropertyImage(index) {
      return applyImages.propertyImage(index);
    },
    
    // Method to get building icon by type
    getBuildingIcon(type) {
      return applyImages.buildingIcon(type);
    }
  }
}
</script>

<style>
/* Add these styles to your existing styles */
.property-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.building-icon {
  margin-right: 4px;
  vertical-align: middle;
}
</style>
