<template>
  <div class="portfolio-dashboard">
    <SidebarNav />
    <div class="main-content">
      <HeaderComponent title="Portfolio" />
      
      <div class="dashboard-grid">
        <div class="property-filters">
          <div class="filter-group">
            <label>Property Type</label>
            <select>
              <option>All Types</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Industrial</option>
            </select>
          </div>
          <div class="filter-group">
            <label>Location</label>
            <select>
              <option>All Locations</option>
              <option>North Region</option>
              <option>South Region</option>
              <option>East Region</option>
              <option>West Region</option>
            </select>
          </div>
          <div class="filter-group">
            <label>Status</label>
            <select>
              <option>All Status</option>
              <option>Active</option>
              <option>Under Maintenance</option>
              <option>Vacant</option>
            </select>
          </div>
          <button class="filter-button">Apply Filters</button>
        </div>
        
        <div class="property-map">
          <h3>Portfolio Map</h3>
          <MapComponent />
        </div>
          <div class="property-list">
          <h3>Properties ({{ properties.length }})</h3>          <div class="property-grid">
            <div class="property-card" v-for="property in properties" :key="property.id">              <div class="property-image" :style="{ backgroundImage: `url(${getPropertyImageByName(property.name)})` }">
                <div class="property-status" :class="getStatusClass(property.status)">
                  <img :src="getStatusIcon(property.status)" alt="status" class="status-icon" />
                  {{ property.status }}
                </div>
              </div>
              <div class="property-details">
                <h4>{{ property.name }}</h4>                <div class="property-address">{{ property.address }}</div>
                <div class="property-type" :class="property.type">{{ property.type }}</div>                <div class="property-stats">
                  <div class="stat">
                    <span class="stat-label">Area</span>
                    <span class="stat-value">{{ property.area }} sq ft</span>
                  </div>
                  <div class="stat">
                    <span class="stat-label">Units</span>
                    <span class="stat-value">{{ property.units }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="property-pagination">
            <button>&lt;</button>
            <button class="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import SidebarNav from '@/components/layout/SidebarNav.vue';
import HeaderComponent from '@/components/layout/HeaderComponent.vue';
import MapComponent from '@/components/maps/MapComponent.vue';
import { applyImages } from '@/assets/imageUtils.js';

export default {
  name: 'PortfolioView',
  components: {
    SidebarNav,
    HeaderComponent,
    MapComponent
  },
  data() {
    return {      properties: [
        {
          id: 1,
          name: 'Delhi Office Tower',
          address: '123 Connaught Place, New Delhi',
          type: 'Commercial',
          area: 1200,
          units: 3,
          status: 'Active',
          location: { lat: 28.6139, lng: 77.2090 }
        },
        {
          id: 2,
          name: 'Connaught Place Building',
          address: '456 Rajiv Chowk, New Delhi',
          type: 'Commercial',
          area: 1400,
          units: 4,
          status: 'Active',
          location: { lat: 28.6328, lng: 77.2200 }
        },
        {
          id: 3,
          name: 'Karol Bagh Complex',
          address: '789 Ajmal Khan Road, Karol Bagh',
          type: 'Residential',
          area: 1600,
          units: 5,
          status: 'Maintenance',
          location: { lat: 28.6292, lng: 77.1800 }
        },
        {
          id: 4,
          name: 'Vasant Kunj Tower',
          address: '321 Nelson Mandela Marg, Vasant Kunj',
          type: 'Industrial',
          area: 1800,
          units: 6,
          status: 'Vacant',
          location: { lat: 28.5189, lng: 77.1750 }
        },
        {
          id: 5,
          name: 'Gurgaon Business Center',
          address: '654 DLF Cyber City, Gurgaon',
          type: 'Commercial',
          area: 2000,
          units: 7,
          status: 'Active',
          location: { lat: 28.4595, lng: 77.0266 }
        },
        {
          id: 6,
          name: 'Noida Tech Park',
          address: '987 Sector 62, Noida',
          type: 'Industrial',
          area: 2200,
          units: 8,
          status: 'Active',
          location: { lat: 28.5355, lng: 77.3910 }
        }
      ]
    };
  },
  created() {
    // Set the portfolio items to the store so they can be used by the map component
    this.setPortfolioItems(this.properties);
  },
  methods: {
    ...mapActions(['setPortfolioItems']),
    getPropertyImage(index) {
      return applyImages.propertyImage(index);
    },
    getPropertyImageByName(propertyName) {
      return applyImages.propertyImageByName(propertyName);
    },
    getStatusClass(status) {
      return status.toLowerCase();
    },
    getStatusIcon(status) {
      switch(status.toLowerCase()) {
        case 'active': 
          return applyImages.mapMarker('active');
        case 'maintenance':
          return applyImages.mapMarker('maintenance');
        case 'vacant':
        case 'inactive':
          return applyImages.mapMarker('inactive');
        default:
          return applyImages.mapMarker('default');
      }
    }
  }
}
</script>

<style scoped>
.portfolio-dashboard {
  display: flex;
  min-height: 100vh;
  background-color: #f5f7fa;
  width: 100%;
}

.main-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  overflow-x: hidden; /* Prevent horizontal scrolling */
  margin-left: 60px; /* Offset for the fixed sidebar */
  width: calc(100% - 60px); /* Account for sidebar width */
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 20px;
}

.property-filters {
  display: flex;
  gap: 15px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  flex-wrap: wrap;
}

.filter-group {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 150px;
}

.filter-group label {
  font-size: 12px;
  color: #666;
  margin-bottom: 5px;
}

.filter-group select {
  padding: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}

.filter-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0 20px;
  cursor: pointer;
  align-self: flex-end;
}

.property-map {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  height: 400px;
}

.property-map h3 {
  margin-bottom: 15px;
  color: #333;
}

.property-list {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.property-list h3 {
  margin-bottom: 15px;
  color: #333;
}

.property-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.property-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}

.property-image {
  height: 150px;
  background-color: #f0f0f0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.property-status {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  background-color: rgba(255, 255, 255, 0.9);
}

.property-status.active {
  color: #4CAF50;
}

.property-status.maintenance {
  color: #FFA000;
}

.property-status.vacant, .property-status.inactive {
  color: #F44336;
}

.status-icon {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}

.property-details {
  padding: 15px;
}

.property-details h4 {
  margin: 0 0 5px 0;
  color: #333;
}

.property-address {
  font-size: 12px;
  color: #666;
  margin-bottom: 5px;
}

.property-type {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 12px;
}

.property-type.Commercial {
  background-color: #e8f5e9;
  color: #4CAF50;
}

.property-type.Residential {
  background-color: #e3f2fd;
  color: #2196F3;
}

.property-type.Industrial {
  background-color: #fff3e0;
  color: #FF9800;
}

.property-type.Mixed {
  background-color: #f3e5f5;
  color: #9c27b0;
}

.property-stats {
  display: flex;
  justify-content: space-between;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-label {
  font-size: 10px;
  color: #999;
}

.stat-value {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.property-status {
  margin-top: 10px;
}

.property-status img {
  width: 20px;
  height: 20px;
}

.property-pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.property-pagination button {
  width: 30px;
  height: 30px;
  margin: 0 5px;
  border: 1px solid #e0e0e0;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
}

.property-pagination button.active {
  background-color: #4CAF50;
  color: white;
  border-color: #4CAF50;
}

@media (max-width: 1200px) {
  .property-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .portfolio-dashboard {
    flex-direction: column;
  }
  
  .property-grid {
    grid-template-columns: 1fr;
  }
}
</style>
