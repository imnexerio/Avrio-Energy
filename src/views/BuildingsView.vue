<template>
  <div class="buildings-dashboard">
    <SidebarNav />
    <div class="main-content">
      <HeaderComponent title="Buildings" />
      
      <div class="dashboard-content">
        <!-- Map Section -->
        <div class="map-section">
          <h3>Building Locations</h3>
          <MapComponent />
        </div>
        
        <!-- Buildings Table -->
        <div class="buildings-section">
          <h3>Buildings Overview</h3>
          <div class="search-bar">
            <input type="text" placeholder="Search building..." />
            <button><i class="fas fa-search"></i></button>
          </div>
          <table class="buildings-table">
            <thead>
              <tr>
                <th>Building ID</th>
                <th>Type</th>
                <th>Name</th>
                <th>Address</th>
                <th>Area (sq ft)</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(building, index) in buildings" :key="index">
                <td>{{ building.id }}</td>
                <td class="building-type-cell">
                  <img :src="getBuildingIcon(building.type)" :alt="building.type" class="building-icon" />
                </td>
                <td>{{ building.name }}</td>
                <td>{{ building.address }}</td>
                <td>{{ building.area }}</td>
                <td><span :class="'status-badge ' + getStatusClass(building.status)">{{ building.status }}</span></td>
                <td>
                  <button class="action-btn">View</button>
                  <button class="action-btn">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarNav from '@/components/layout/SidebarNav.vue'
import HeaderComponent from '@/components/layout/HeaderComponent.vue'
import MapComponent from '@/components/maps/MapComponent.vue'
import { applyImages } from '@/assets/imageUtils.js'

export default {
  name: 'BuildingsView',
  components: {
    SidebarNav,
    HeaderComponent,
    MapComponent
  },
  data() {
    return {
      buildings: [
        { id: 'B001', name: 'West Tower', address: '123 Main St, New York, NY', area: '24,500', status: 'Active', type: 'commercial' },
        { id: 'B002', name: 'East Complex', address: '456 Park Ave, Chicago, IL', area: '18,750', status: 'Active', type: 'mixed' },
        { id: 'B003', name: 'South Building', address: '789 Oak Dr, Dallas, TX', area: '32,000', status: 'Maintenance', type: 'commercial' },
        { id: 'B004', name: 'North Center', address: '101 Pine St, Seattle, WA', area: '15,200', status: 'Active', type: 'residential' },
        { id: 'B005', name: 'Central Plaza', address: '202 Elm St, Boston, MA', area: '28,900', status: 'Inactive', type: 'industrial' }
      ]
    }
  },
  methods: {
    getBuildingIcon(type) {
      return applyImages.buildingIcon(type);
    },
    getStatusClass(status) {
      return status.toLowerCase();
    }
  }
}
</script>

<style scoped>
.buildings-dashboard {
  display: flex;
  height: 100vh;
  width: 100%;
}

.main-content {
  flex: 1;
  padding: 20px;
  background-color: #f5f7fa;
  overflow-y: auto;
  overflow-x: hidden; /* Prevent horizontal scrolling */
  margin-left: 60px; /* Offset for the fixed sidebar */
  width: calc(100% - 60px); /* Account for sidebar width */
}

.dashboard-content {
  margin-top: 20px;
  width: 100%;
}

.map-section {
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.buildings-section {
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  overflow-x: auto; /* Allow horizontal scrolling within the container only */
}

.search-bar {
  display: flex;
  margin-bottom: 15px;
}

.search-bar input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
}

.search-bar button {
  padding: 8px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.buildings-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed; /* Fixed layout to control column widths */
  min-width: 650px; /* Minimum width to ensure readability */
}

.buildings-table th, .buildings-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  white-space: nowrap; /* Prevent text wrapping */
  overflow: hidden;
  text-overflow: ellipsis; /* Add ellipsis for text overflow */
}

.buildings-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.buildings-table tr:hover {
  background-color: #f9f9f9;
}

.action-btn {
  margin-right: 5px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.action-btn:hover {
  background-color: #0056b3;
}

.building-type-cell {
  text-align: center;
}

.building-icon {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}

.status-badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.active {
  background-color: #E8F5E9;
  color: #4CAF50;
}

.inactive {
  background-color: #FFEBEE;
  color: #F44336;
}

.maintenance {
  background-color: #FFF8E1;
  color: #FFA000;
}
</style>
