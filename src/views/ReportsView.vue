<template>
  <div class="reports-dashboard">
    <SidebarNav />
    <div class="main-content">
      <HeaderComponent title="Reports" />
      
      <div class="dashboard-grid">
        <div class="reports-filters">
          <div class="filter-group">
            <label>Report Type</label>
            <select>
              <option>All Reports</option>
              <option>Financial</option>
              <option>Maintenance</option>
              <option>Occupancy</option>
              <option>Performance</option>
            </select>
          </div>
          <div class="filter-group">
            <label>Date Range</label>
            <select>
              <option>Last 30 Days</option>
              <option>Last Quarter</option>
              <option>Last Year</option>
              <option>Custom Range</option>
            </select>
          </div>
          <button class="filter-button">Generate Report</button>
        </div>
        
        <div class="reports-quick-metrics">
          <div class="metric-card">
            <div class="metric-icon financial"></div>
            <div class="metric-data">
              <div class="metric-value">$1.2M</div>
              <div class="metric-label">Revenue</div>
            </div>
            <div class="metric-change positive">+5.3%</div>
          </div>
          <div class="metric-card">
            <div class="metric-icon occupancy"></div>
            <div class="metric-data">
              <div class="metric-value">94%</div>
              <div class="metric-label">Occupancy</div>
            </div>
            <div class="metric-change positive">+2.1%</div>
          </div>
          <div class="metric-card">
            <div class="metric-icon maintenance"></div>
            <div class="metric-data">
              <div class="metric-value">156</div>
              <div class="metric-label">Tickets</div>
            </div>
            <div class="metric-change negative">+12.8%</div>
          </div>
          <div class="metric-card">
            <div class="metric-icon performance"></div>
            <div class="metric-data">
              <div class="metric-value">87%</div>
              <div class="metric-label">On-time</div>
            </div>
            <div class="metric-change negative">-3.5%</div>
          </div>
        </div>
        
        <div class="reports-charts">
          <div class="chart revenue-chart">
            <div class="chart-header">
              <h3>Revenue by Property Type</h3>
              <div class="chart-actions">
                <button class="chart-action">⋮</button>
              </div>
            </div>
            <div class="chart-content">
              <SingleBarChart />
            </div>
          </div>
          
          <div class="chart maintenance-chart">
            <div class="chart-header">
              <h3>Maintenance Requests by Category</h3>
              <div class="chart-actions">
                <button class="chart-action">⋮</button>
              </div>
            </div>
            <div class="chart-content">
              <TicketingChart />
            </div>
          </div>
          
          <div class="chart trends-chart">
            <div class="chart-header">
              <h3>Year-over-Year Comparison</h3>
              <div class="chart-actions">
                <button class="chart-action">⋮</button>
              </div>
            </div>
            <div class="chart-content">
              <StackedBarChart />
            </div>
          </div>
        </div>
        
        <div class="reports-table">
          <div class="table-header">
            <h3>Recent Reports</h3>
            <button class="export-button">Export to CSV</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Report Name</th>
                <th>Type</th>
                <th>Generated</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Q2 2025 Financial Summary</td>
                <td>Financial</td>
                <td>May 15, 2025</td>
                <td><span class="status completed">Completed</span></td>
                <td>
                  <button class="action-button">View</button>
                  <button class="action-button">Download</button>
                </td>
              </tr>
              <tr>
                <td>Maintenance Performance Report</td>
                <td>Maintenance</td>
                <td>May 10, 2025</td>
                <td><span class="status completed">Completed</span></td>
                <td>
                  <button class="action-button">View</button>
                  <button class="action-button">Download</button>
                </td>
              </tr>
              <tr>
                <td>Occupancy Trends Analysis</td>
                <td>Occupancy</td>
                <td>May 5, 2025</td>
                <td><span class="status completed">Completed</span></td>
                <td>
                  <button class="action-button">View</button>
                  <button class="action-button">Download</button>
                </td>
              </tr>
              <tr>
                <td>Annual Performance Review</td>
                <td>Performance</td>
                <td>May 3, 2025</td>
                <td><span class="status in-progress">In Progress</span></td>
                <td>
                  <button class="action-button disabled">View</button>
                  <button class="action-button disabled">Download</button>
                </td>
              </tr>
              <tr>
                <td>Property Comparison Report</td>
                <td>Financial</td>
                <td>April 28, 2025</td>
                <td><span class="status completed">Completed</span></td>
                <td>
                  <button class="action-button">View</button>
                  <button class="action-button">Download</button>
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
import SidebarNav from '@/components/layout/SidebarNav.vue';
import HeaderComponent from '@/components/layout/HeaderComponent.vue';
import SingleBarChart from '@/components/charts/SingleBarChart.vue';
import TicketingChart from '@/components/charts/TicketingChart.vue';
import StackedBarChart from '@/components/charts/StackedBarChart.vue';

export default {
  name: 'ReportsView',
  components: {
    SidebarNav,
    HeaderComponent,
    SingleBarChart,
    TicketingChart,
    StackedBarChart
  }
}
</script>

<style scoped>
.reports-dashboard {
  display: flex;
  min-height: 100vh;
  background-color: #f5f7fa;
}

.main-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 20px;
}

.reports-filters {
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

.reports-quick-metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.metric-card {
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
}

.metric-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
}

.metric-icon.financial {
  background-color: #4CAF50;
}

.metric-icon.financial::before { content: '$'; }

.metric-icon.occupancy {
  background-color: #2196F3;
}

.metric-icon.occupancy::before { content: '👥'; }

.metric-icon.maintenance {
  background-color: #FFC107;
}

.metric-icon.maintenance::before { content: '🔧'; }

.metric-icon.performance {
  background-color: #9C27B0;
}

.metric-icon.performance::before { content: '📈'; }

.metric-data {
  flex: 1;
}

.metric-value {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.metric-label {
  font-size: 12px;
  color: #666;
}

.metric-change {
  font-size: 14px;
  font-weight: 500;
}

.metric-change.positive {
  color: #4CAF50;
}

.metric-change.negative {
  color: #F44336;
}

.reports-charts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  gap: 20px;
}

.chart {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.trends-chart {
  grid-column: 1 / 3;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #f0f0f0;
}

.chart-header h3 {
  margin: 0;
  font-size: 16px;
  color: #333;
}

.chart-action {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #666;
}

.chart-content {
  padding: 20px;
  height: 250px;
}

.reports-table {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #f0f0f0;
}

.table-header h3 {
  margin: 0;
  font-size: 16px;
  color: #333;
}

.export-button {
  background-color: #f1f1f1;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  color: #333;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px 20px;
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
}

th {
  background-color: #f9f9f9;
  font-weight: 500;
  color: #666;
  font-size: 12px;
  text-transform: uppercase;
}

td {
  color: #333;
}

.status {
  display: inline-block;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 12px;
}

.status.completed {
  background-color: #e8f5e9;
  color: #4CAF50;
}

.status.in-progress {
  background-color: #fff8e1;
  color: #FFC107;
}

.action-button {
  background: none;
  border: 1px solid #e0e0e0;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 5px;
  font-size: 12px;
  cursor: pointer;
}

.action-button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 1200px) {
  .reports-quick-metrics {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .reports-charts {
    grid-template-columns: 1fr;
  }
  
  .trends-chart {
    grid-column: 1;
  }
}

@media (max-width: 768px) {
  .reports-dashboard {
    flex-direction: column;
  }
  
  .reports-quick-metrics {
    grid-template-columns: 1fr;
  }
  
  table {
    display: block;
    overflow-x: auto;
  }
}
</style>
