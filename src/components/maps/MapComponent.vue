<template>
  <div class="map-component">
    <div id="map" class="map-container"></div>
    <div class="map-footer">
      <div class="coordinates">Coordinates: Lat: 28.614, Long: 77.209</div>
      <div class="zoom-controls">
        <button class="zoom-btn">+</button>
        <button class="zoom-btn">-</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { applyImages } from '@/assets/imageUtils.js';

export default {
  name: 'MapComponent',
  data() {
    return {
      map: null,
      markers: []
    };
  },
  computed: {
    ...mapGetters(['getPortfolioItems'])
  },
  mounted() {
    this.initMap();
    this.addMarkers();
  },
  methods: {
    initMap() {
      // Fix for the marker icon issue in webpack
      delete L.Icon.Default.prototype._getIconUrl;
      
      this.map = L.map('map', {
        zoomControl: false // Disable default zoom control
      }).setView([28.614, 77.209], 12);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
      }).addTo(this.map);
    },
    addMarkers() {
      // Clear existing markers
      this.markers.forEach(marker => this.map.removeLayer(marker));
      this.markers = [];
      
      // Add new markers
      this.getPortfolioItems.forEach(item => {
        if (item.location && item.location.lat && item.location.lng) {
          // Custom icon based on item status
          const customIcon = this.getCustomIcon(item.status);
          
          // Create popup content with available properties
          let popupContent = `<b>${item.name}</b><br>Status: ${item.status}`;
          
          // Add cost if available
          if (item.cost !== undefined) {
            popupContent += `<br>Cost: $${item.cost.toFixed(2)}`;
          }
          
          // Add area if available
          if (item.area !== undefined) {
            popupContent += `<br>Area: ${item.area} sq ft`;
          }
          
          // Add units if available
          if (item.units !== undefined) {
            popupContent += `<br>Units: ${item.units}`;
          }
          
          const marker = L.marker([item.location.lat, item.location.lng], { icon: customIcon })
            .addTo(this.map)
            .bindPopup(popupContent);
          
          this.markers.push(marker);
        }
      });
      
      // If there are no portfolio items, add some sample markers
      if (this.markers.length === 0) {
        this.addSampleMarkers();
      }
      
      // Adjust map view to fit all markers if there are any
      if (this.markers.length > 0) {
        const group = new L.featureGroup(this.markers);
        this.map.fitBounds(group.getBounds().pad(0.1));
      }
    },
    getCustomIcon(status) {
      // Get marker URL based on status 
      const iconUrl = applyImages.mapMarker(status || 'active');
      
      return L.icon({
        iconUrl: iconUrl,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
      });
    },
    addSampleMarkers() {
      // Sample locations for demonstration
      const sampleLocations = [
        { lat: 28.6139, lng: 77.2090, name: 'Delhi Office Tower', status: 'active', area: 1200, units: 3, type: 'Commercial' },
        { lat: 28.6328, lng: 77.2200, name: 'Connaught Place Building', status: 'maintenance', area: 1400, units: 4, type: 'Commercial' },
        { lat: 28.6292, lng: 77.1800, name: 'Karol Bagh Complex', status: 'inactive', area: 1600, units: 5, type: 'Residential' },
        { lat: 28.5189, lng: 77.1750, name: 'Vasant Kunj Tower', status: 'active', area: 1800, units: 6, type: 'Commercial' }
      ];
      
      sampleLocations.forEach(location => {
        const customIcon = this.getCustomIcon(location.status);
        
        // Create popup content with available properties
        let popupContent = `<b>${location.name}</b><br>Status: ${location.status}`;
        
        // Add property type if available
        if (location.type) {
          popupContent += `<br>Type: ${location.type}`;
        }
        
        // Add area if available
        if (location.area) {
          popupContent += `<br>Area: ${location.area} sq ft`;
        }
        
        // Add units if available
        if (location.units) {
          popupContent += `<br>Units: ${location.units}`;
        }
        
        const marker = L.marker([location.lat, location.lng], { icon: customIcon })
          .addTo(this.map)
          .bindPopup(popupContent);
        
        this.markers.push(marker);
      });
    }
  },
  watch: {
    getPortfolioItems: {
      deep: true,
      handler() {
        this.$nextTick(() => {
          this.addMarkers();
        });
      }
    }
  },
  beforeUnmount() {
    if (this.map) {
      this.map.remove();
    }
  }
}
</script>

<style scoped>
.map-component {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.map-container {
  flex-grow: 1;
  height: 350px;
  border-radius: 8px;
  overflow: hidden;
}

.map-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  font-size: 12px;
  color: #666;
}

.zoom-controls {
  display: flex;
  gap: 4px;
}

.zoom-btn {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.zoom-btn:hover {
  background-color: #f5f5f5;
}
</style>
