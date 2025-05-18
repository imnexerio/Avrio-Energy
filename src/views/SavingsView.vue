<template>
  <div class="savings-dashboard">
    <SidebarNav />
    <div class="main-content">
      <HeaderComponent title="Savings Dashboard" />
      
      <div class="dashboard-content">
        <!-- Summary Cards -->
        <div class="summary-section">
          <div class="summary-card">
            <div class="card-icon savings-icon">
              <i class="fas fa-dollar-sign"></i>
            </div>
            <div class="card-content">
              <h3>Total Savings</h3>
              <p class="amount">$538,250</p>
              <p class="period">Year to Date</p>
            </div>
          </div>
          
          <div class="summary-card">
            <div class="card-icon energy-icon">
              <i class="fas fa-bolt"></i>
            </div>
            <div class="card-content">
              <h3>Energy Savings</h3>
              <p class="amount">$215,450</p>
              <p class="percent">+15% from last year</p>
            </div>
          </div>
          
          <div class="summary-card">
            <div class="card-icon maintenance-icon">
              <i class="fas fa-tools"></i>
            </div>
            <div class="card-content">
              <h3>Maintenance Savings</h3>
              <p class="amount">$183,800</p>
              <p class="percent">+8% from last year</p>
            </div>
          </div>
          
          <div class="summary-card">
            <div class="card-icon operational-icon">
              <i class="fas fa-cogs"></i>
            </div>
            <div class="card-content">
              <h3>Operational Savings</h3>
              <p class="amount">$139,000</p>
              <p class="percent">+12% from last year</p>
            </div>
          </div>
        </div>
        
        <!-- Year Over Year Comparison Chart -->
        <div class="chart-section">
          <h3>Savings Year Over Year</h3>
          <StackedBarChart2 />
        </div>
        
        <!-- Savings by Category Chart -->
        <div class="chart-section">
          <h3>Savings by Category</h3>
          <SingleBarChart />
        </div>
        
        <!-- Savings Initiatives Table -->
        <div class="table-section">
          <div class="table-header">
            <h3>Active Savings Initiatives</h3>
            <div class="filter-controls">
              <select>
                <option>All Categories</option>
                <option>Energy</option>
                <option>Maintenance</option>
                <option>Operational</option>
              </select>
              <button class="add-initiative-btn">+ Add Initiative</button>
            </div>
          </div>
          
          <table class="savings-table">
            <thead>
              <tr>
                <th>Initiative</th>
                <th>Category</th>
                <th>Location</th>
                <th>Start Date</th>
                <th>Projected Savings</th>
                <th>Actual Savings</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(initiative, index) in initiatives" :key="index">
                <td>{{ initiative.name }}</td>
                <td>{{ initiative.category }}</td>
                <td>{{ initiative.location }}</td>
                <td>{{ initiative.startDate }}</td>
                <td>{{ initiative.projectedSavings }}</td>
                <td>{{ initiative.actualSavings }}</td>
                <td><span :class="'status-badge ' + initiative.status.toLowerCase()">{{ initiative.status }}</span></td>
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
import StackedBarChart2 from '@/components/charts/StackedBarChart2.vue'
import SingleBarChart from '@/components/charts/SingleBarChart.vue'

export default {
  name: 'SavingsView',
  components: {
    SidebarNav,
    HeaderComponent,
    StackedBarChart2,
    SingleBarChart
  },
  data() {
    return {
      initiatives: [
        { 
          name: 'HVAC Optimization Program', 
          category: 'Energy', 
          location: 'All Buildings', 
          startDate: '2025-01-15', 
          projectedSavings: '$125,000', 
          actualSavings: '$98,500', 
          status: 'Active'
        },
        { 
          name: 'LED Lighting Retrofit', 
          category: 'Energy', 
          location: 'West Tower, East Complex', 
          startDate: '2025-02-10', 
          projectedSavings: '$85,000', 
          actualSavings: '$78,200', 
          status: 'Active'
        },
        { 
          name: 'Preventative Maintenance Program', 
          category: 'Maintenance', 
          location: 'All Buildings', 
          startDate: '2025-01-05', 
          projectedSavings: '$150,000', 
          actualSavings: '$132,800', 
          status: 'Active'
        },
        { 
          name: 'Water Conservation System', 
          category: 'Operational', 
          location: 'South Building, North Center', 
          startDate: '2025-03-20', 
          projectedSavings: '$65,000', 
          actualSavings: '$42,500', 
          status: 'In Progress'
        },
        { 
          name: 'Energy Management System', 
          category: 'Energy', 
          location: 'Central Plaza', 
          startDate: '2025-04-05', 
          projectedSavings: '$95,000', 
          actualSavings: '$38,750', 
          status: 'In Progress'
        }
      ]
    }
  }
}
</script>

<style scoped>
.savings-dashboard {
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

.summary-section {
  display: flex;
  flex-wrap: wrap; /* Allow cards to wrap on smaller screens */
  gap: 15px; /* Add gap for consistent spacing */
  margin-bottom: 20px;
}

.summary-card {
  flex: 1;
  min-width: 220px; /* Set a minimum width before wrapping */
  background: white;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.summary-card:last-child {
  margin-right: 0;
}

.card-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
}

.card-icon i {
  font-size: 24px;
  color: white;
}

.savings-icon {
  background-color: #4CAF50;
}

.energy-icon {
  background-color: #2196F3;
}

.maintenance-icon {
  background-color: #FF9800;
}

.operational-icon {
  background-color: #9C27B0;
}

.card-content h3 {
  margin: 0 0 10px 0;
  font-size: 16px;
  color: #666;
}

.amount {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  color: #333;
}

.period, .percent {
  font-size: 14px;
  color: #888;
  margin: 5px 0 0 0;
}

.chart-section {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.table-section {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  overflow-x: auto; /* Allow horizontal scrolling within the table container only */
}

.table-header {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px; /* Add spacing when wrapped */
}

.filter-controls {
  display: flex;
  flex-wrap: wrap; /* Allow controls to wrap */
  align-items: center;
  gap: 10px; /* Add spacing when wrapped */
}

.filter-controls select {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
}

.add-initiative-btn {
  padding: 8px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.savings-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed; /* Fixed layout to control column widths */
  min-width: 650px; /* Minimum width to ensure readability */
}

.savings-table th, .savings-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  white-space: nowrap; /* Prevent text wrapping */
  overflow: hidden;
  text-overflow: ellipsis; /* Add ellipsis for text overflow */
}

.savings-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.savings-table tr:hover {
  background-color: #f9f9f9;
}

.status-badge {
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
}

.active {
  background-color: #e8f5e9;
  color: #4CAF50;
}

.in.progress {
  background-color: #e3f2fd;
  color: #2196F3;
}

.completed {
  background-color: #f3e5f5;
  color: #9C27B0;
}

.action-btn {
  padding: 5px 10px;
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
}

.action-btn:hover {
  background-color: #0d8bf2;
}
</style>
