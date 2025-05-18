<template>
  <div class="advisor-dashboard">
    <SidebarNav />
    <div class="main-content">
      <HeaderComponent title="Avrio Advisor" />
      
      <div class="dashboard-content">
        <!-- Summary Section -->
        <div class="summary-section">
          <div class="summary-card primary">
            <h3>Building Efficiency Score</h3>
            <div class="score-circle">78%</div>
            <p>Overall efficiency rating across your portfolio</p>
          </div>
          
          <div class="summary-card success">
            <h3>Potential Savings</h3>
            <div class="savings-amount">$245,000</div>
            <p>Estimated annual savings with recommended improvements</p>
          </div>
          
          <div class="summary-card warning">
            <h3>Improvement Areas</h3>
            <div class="improvement-count">12</div>
            <p>Critical areas identified for immediate attention</p>
          </div>
        </div>
        
        <!-- Recommendations Section -->
        <div class="recommendations-section">
          <h3>Top Recommendations</h3>
          
          <div class="recommendation-card">
            <div class="rec-header">
              <h4>HVAC Optimization</h4>
              <span class="priority high">High Priority</span>
            </div>
            <p class="rec-description">Current HVAC systems in Buildings A, C, and E are operating at 65% efficiency. Upgrading to smart thermostats and implementing zone-based cooling could increase efficiency by 25%.</p>
            <div class="rec-stats">
              <div class="stat">
                <span class="label">Estimated Cost</span>
                <span class="value">$85,000</span>
              </div>
              <div class="stat">
                <span class="label">Annual Savings</span>
                <span class="value">$120,000</span>
              </div>
              <div class="stat">
                <span class="label">ROI Period</span>
                <span class="value">8.5 months</span>
              </div>
            </div>
            <button class="view-details-btn">View Full Analysis</button>
          </div>
          
          <div class="recommendation-card">
            <div class="rec-header">
              <h4>Lighting Retrofit</h4>
              <span class="priority medium">Medium Priority</span>
            </div>
            <p class="rec-description">Replacing current fluorescent lighting with LED systems across all properties would reduce energy consumption and maintenance costs.</p>
            <div class="rec-stats">
              <div class="stat">
                <span class="label">Estimated Cost</span>
                <span class="value">$42,000</span>
              </div>
              <div class="stat">
                <span class="label">Annual Savings</span>
                <span class="value">$65,000</span>
              </div>
              <div class="stat">
                <span class="label">ROI Period</span>
                <span class="value">7.8 months</span>
              </div>
            </div>
            <button class="view-details-btn">View Full Analysis</button>
          </div>
          
          <div class="recommendation-card">
            <div class="rec-header">
              <h4>Water Conservation System</h4>
              <span class="priority medium">Medium Priority</span>
            </div>
            <p class="rec-description">Installing smart water management systems could reduce water usage by up to 30% across your portfolio.</p>
            <div class="rec-stats">
              <div class="stat">
                <span class="label">Estimated Cost</span>
                <span class="value">$38,000</span>
              </div>
              <div class="stat">
                <span class="label">Annual Savings</span>
                <span class="value">$45,000</span>
              </div>
              <div class="stat">
                <span class="label">ROI Period</span>
                <span class="value">10.1 months</span>
              </div>
            </div>
            <button class="view-details-btn">View Full Analysis</button>
          </div>
        </div>
        
        <!-- Efficiency Comparison -->
        <div class="comparison-section">
          <h3>Portfolio Efficiency Comparison</h3>
          <StackedBarChart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarNav from '@/components/layout/SidebarNav.vue'
import HeaderComponent from '@/components/layout/HeaderComponent.vue'
import StackedBarChart from '@/components/charts/StackedBarChart.vue'

export default {
  name: 'AvrioAdvisorView',
  components: {
    SidebarNav,
    HeaderComponent,
    StackedBarChart
  }
}
</script>

<style scoped>
.advisor-dashboard {
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
  min-width: 220px; /* Minimum width before wrapping */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  text-align: center;
  color: white;
}

.summary-card:last-child {
  margin-right: 0;
}

.primary {
  background: linear-gradient(135deg, #2196F3, #0056b3);
}

.success {
  background: linear-gradient(135deg, #4CAF50, #2E7D32);
}

.warning {
  background: linear-gradient(135deg, #FF9800, #E65100);
}

.score-circle {
  width: 100px;
  height: 100px;
  line-height: 100px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  margin: 15px auto;
  font-size: 28px;
  font-weight: bold;
}

.savings-amount, .improvement-count {
  font-size: 28px;
  font-weight: bold;
  margin: 15px 0;
}

.recommendations-section {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}

.recommendation-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
}

.rec-header {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px; /* Add spacing when wrapped */
}

.priority {
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
}

.high {
  background-color: #ffebee;
  color: #f44336;
}

.medium {
  background-color: #fff8e1;
  color: #ff9800;
}

.low {
  background-color: #e8f5e9;
  color: #4caf50;
}

.rec-description {
  margin-bottom: 15px;
  line-height: 1.5;
}

.rec-stats {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  gap: 15px; /* Add spacing between wrapped items */
  margin-bottom: 15px;
}

.stat {
  text-align: center;
  flex: 1;
  min-width: 100px; /* Set a minimum width for stats */
}

.label {
  display: block;
  font-size: 12px;
  color: #666;
  margin-bottom: 5px;
}

.value {
  font-weight: bold;
  font-size: 16px;
  color: #333;
}

.view-details-btn {
  width: 100%;
  padding: 10px;
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.view-details-btn:hover {
  background-color: #0d8bf2;
}

.comparison-section {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
</style>
