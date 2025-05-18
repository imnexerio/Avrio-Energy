<template>
  <div class="assets-dashboard">
    <SidebarNav />
    <div class="main-content">
      <HeaderComponent title="Assets Management" />
      
      <div class="dashboard-content">
        <!-- Asset Overview Section -->
        <div class="overview-section">
          <div class="stat-card">
            <h3>Total Assets</h3>
            <p class="stat-value">184</p>
          </div>
          <div class="stat-card">
            <h3>Active Assets</h3>
            <p class="stat-value">156</p>
          </div>
          <div class="stat-card">
            <h3>Maintenance Required</h3>
            <p class="stat-value">28</p>
          </div>
          <div class="stat-card">
            <h3>Asset Value</h3>
            <p class="stat-value">$2.4M</p>
          </div>
        </div>
        
        <!-- Asset Distribution Chart -->
        <div class="chart-section">
          <h3>Asset Distribution by Category</h3>
          <SingleBarChart />
        </div>
        
        <!-- Assets Table -->
        <div class="assets-table-section">
          <div class="table-header">
            <h3>Asset Inventory</h3>
            <div class="search-bar">
              <input type="text" placeholder="Search assets..." />
              <button><i class="fas fa-search"></i></button>
            </div>
          </div>
          
          <table class="assets-table">
            <thead>
              <tr>
                <th>Asset ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Location</th>
                <th>Status</th>
                <th>Last Maintenance</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(asset, index) in assets" :key="index">
                <td>{{ asset.id }}</td>
                <td>{{ asset.name }}</td>
                <td>{{ asset.category }}</td>
                <td>{{ asset.location }}</td>
                <td :class="asset.status.toLowerCase()">{{ asset.status }}</td>
                <td>{{ asset.lastMaintenance }}</td>
                <td>
                  <button class="action-btn view">View</button>
                  <button class="action-btn edit">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
          
          <div class="pagination">
            <button>&laquo;</button>
            <button class="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>&raquo;</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarNav from '@/components/layout/SidebarNav.vue'
import HeaderComponent from '@/components/layout/HeaderComponent.vue'
import SingleBarChart from '@/components/charts/SingleBarChart.vue'

export default {
  name: 'AssetsView',
  components: {
    SidebarNav,
    HeaderComponent,
    SingleBarChart
  },
  data() {
    return {
      assets: [
        { id: 'A1001', name: 'HVAC System - North', category: 'HVAC', location: 'West Tower', status: 'Active', lastMaintenance: '2025-04-15' },
        { id: 'A1002', name: 'Elevator #3', category: 'Elevator', location: 'East Complex', status: 'Maintenance', lastMaintenance: '2025-03-22' },
        { id: 'A1003', name: 'Generator 5KW', category: 'Power', location: 'South Building', status: 'Active', lastMaintenance: '2025-05-01' },
        { id: 'A1004', name: 'Water Pump #2', category: 'Plumbing', location: 'North Center', status: 'Active', lastMaintenance: '2025-04-28' },
        { id: 'A1005', name: 'Security System', category: 'Security', location: 'Central Plaza', status: 'Inactive', lastMaintenance: '2025-02-15' }
      ]
    }
  }
}
</script>

<style scoped>
.assets-dashboard {
  display: flex;
  height: 100vh;
}

.main-content {
  flex: 1;
  padding: 20px;
  background-color: #f5f7fa;
  overflow-y: auto;
}

.dashboard-content {
  margin-top: 20px;
}

.overview-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.stat-card {
  flex: 1;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  margin-right: 15px;
  text-align: center;
}

.stat-card:last-child {
  margin-right: 0;
}

.stat-value {
  font-size: 28px;
  font-weight: bold;
  margin-top: 10px;
  color: #007bff;
}

.chart-section {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}

.assets-table-section {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.search-bar {
  display: flex;
  width: 300px;
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

.assets-table {
  width: 100%;
  border-collapse: collapse;
}

.assets-table th, .assets-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.assets-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.assets-table tr:hover {
  background-color: #f9f9f9;
}

.action-btn {
  padding: 5px 10px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
}

.view {
  background-color: #007bff;
}

.edit {
  background-color: #28a745;
}

.active {
  color: #28a745;
}

.maintenance {
  color: #ffc107;
}

.inactive {
  color: #dc3545;
}

.pagination {
  margin-top: 20px;
  text-align: center;
}

.pagination button {
  padding: 8px 12px;
  margin: 0 5px;
  cursor: pointer;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 4px;
}

.pagination button.active {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}
</style>
