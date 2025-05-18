<template>
  <div class="maintenance-dashboard">
    <SidebarNav />
    <div class="main-content">
      <HeaderComponent title="Maintenance" />
      
      <div v-if="isLoading" class="loading-container">
        <div class="loading-indicator">Loading dashboard data...</div>
      </div>
      
      <div v-else class="dashboard-content">
        <!-- Portfolio and Map Section -->
        <div class="top-section">
          <div class="portfolio-section">
            <h3>Portfolio Detail</h3>
            <div class="search-bar">
              <input type="text" placeholder="Search building..." />
              <button><i class="fas fa-search"></i></button>
            </div>
            <PortfolioDetail />
          </div>
          
          <div class="map-section">
            <h3>Portfolio Map View</h3>
            <MapComponent />
          </div>
        </div>
        
        <!-- Maintenance Overview Section -->
        <div class="overview-section">
          <h3>Maintenance Overview</h3>
          <MaintenanceOverview />
        </div>
        
        <!-- Ticketing Chart Section -->
        <div class="chart-section">
          <h3>Ticketing Data Overtime</h3>
          <TicketingChart :key="chartRenderKey" />
        </div>
        
        <!-- Bar Charts Sections -->
        <div class="multi-chart-section">
          <h3>Monthly Performance by Category</h3>
          <StackedBarChart :key="chartRenderKey" />
        </div>
        
        <div class="single-bar-sections">
          <div>
            <h3>Cost Distribution - Building A</h3>
            <SingleBarChart :key="chartRenderKey" />
          </div>
          <div>
            <h3>Cost Distribution - Building B</h3>
            <SingleBarChart :key="chartRenderKey" />
          </div>
        </div>
        
        <div class="multi-chart-section">
          <h3>Quarterly Performance Distribution</h3>
          <StackedBarChart2 :key="chartRenderKey" />
        </div>
        
        <div class="multi-chart-section">
          <h3>Weekly Performance Metrics</h3>
          <StackedBarChart3 :key="chartRenderKey" />
        </div>
        
        <!-- Bottom Table Section -->
        <div class="bottom-table-section">
          <table class="summary-table">
            <thead>
              <tr>
                <th>Status</th>
                <th>Count</th>
                <th>Status</th>
                <th>Count</th>
                <th>Status</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Open</td>
                <td>5</td>
                <td>W-25</td>
                <td>3</td>
                <td>5</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Work in Progress</td>
                <td>3</td>
                <td>HI-89</td>
                <td>9</td>
                <td>7</td>
                <td>5</td>
              </tr>
              <!-- Additional rows similar to the image -->
              <tr>
                <td>Closed</td>
                <td>9</td>
                <td>YU-89</td>
                <td>12</td>
                <td>8</td>
                <td>6</td>
              </tr>
              <tr>
                <td>Past deadline</td>
                <td>2</td>
                <td>ER-56</td>
                <td>10</td>
                <td>9</td>
                <td>7</td>
              </tr>
              <tr>
                <td>Late tracking</td>
                <td>4</td>
                <td>UI-89</td>
                <td>15</td>
                <td>10</td>
                <td>8</td>
              </tr>
              <tr>
                <td>Scheduled</td>
                <td>6</td>
                <td>RT-78</td>
                <td>5</td>
                <td>11</td>
                <td>9</td>
              </tr>
            </tbody>
          </table>
          
          <div class="pagination">
            <button class="prev-page">◀</button>
            <button class="page active">1</button>
            <button class="page">2</button>
            <button class="page">3</button>
            <button class="next-page">▶</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SidebarNav from '@/components/layout/SidebarNav.vue';
import HeaderComponent from '@/components/layout/HeaderComponent.vue';
import PortfolioDetail from '@/components/tables/PortfolioDetail.vue';
import MapComponent from '@/components/maps/MapComponent.vue';
import MaintenanceOverview from '@/components/layout/MaintenanceOverview.vue';
import TicketingChart from '@/components/charts/TicketingChart.vue';
import StackedBarChart from '@/components/charts/StackedBarChart.vue';
import StackedBarChart2 from '@/components/charts/StackedBarChart2.vue';
import StackedBarChart3 from '@/components/charts/StackedBarChart3.vue';
import SingleBarChart from '@/components/charts/SingleBarChart.vue';

export default {
  name: 'MaintenanceView',
  components: {
    SidebarNav,
    HeaderComponent,
    PortfolioDetail,
    MapComponent,
    MaintenanceOverview,
    TicketingChart,
    StackedBarChart,
    StackedBarChart2,
    StackedBarChart3,
    SingleBarChart
  },
  data() {
    return {
      chartRenderKey: 0
    };
  },
  computed: {
    ...mapGetters(['isLoading'])
  },
  watch: {
    isLoading(newVal) {
      // When loading completes, regenerate the key to force chart re-render
      if (!newVal) {
        // Increment the key to force component re-rendering
        this.chartRenderKey++;
      }
    }
  },
  mounted() {
    this.$store.dispatch('fetchAllData');
  }
}
</script>

<style scoped>
.maintenance-dashboard {
  display: flex;
  min-height: 100vh;
  background-color: #f5f7fa;
  width: 100%;
}

.main-content {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  overflow-x: hidden; /* Prevent horizontal scrolling */
  margin-left: 60px; /* Offset for the fixed sidebar */
  width: calc(100% - 60px); /* Account for sidebar width */
}

.loading-container {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-indicator {
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  color: #666;
  font-size: 16px;
}

.dashboard-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 40px;
}

.top-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.portfolio-section, .map-section {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 16px;
}

.portfolio-section h3, .map-section h3, .overview-section h3, .chart-section h3, .multi-chart-section h3, .single-bar-sections > div h3 {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-top: 0;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.search-bar {
  display: flex;
  margin-bottom: 16px;
}

.search-bar input {
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  padding: 8px 12px;
  font-size: 14px;
}

.search-bar button {
  background-color: #fff;
  border: 1px solid #ddd;
  border-left: none;
  border-radius: 0 4px 4px 0;
  padding: 8px 12px;
  cursor: pointer;
}

.overview-section {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 16px;
}

.chart-section, .multi-chart-section {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 16px;
  min-height: 400px; /* Ensure charts have enough height to be visible */
}

.single-bar-sections {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.single-bar-sections > div {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 16px;
  min-height: 300px; /* Ensure charts have enough height to be visible */
}

.bottom-table-section {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 16px;
}

.summary-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
}

.summary-table th,
.summary-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.summary-table th {
  font-weight: 500;
  color: #666;
  background-color: #f8f8f8;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}

.pagination button {
  border: 1px solid #ddd;
  background: white;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.pagination button.active {
  background-color: #4CAF50;
  color: white;
  border-color: #4CAF50;
}

@media (max-width: 1200px) {
  .top-section {
    grid-template-columns: 1fr;
  }
  
  .single-bar-sections {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .maintenance-dashboard {
    flex-direction: column;
  }
}
</style>
