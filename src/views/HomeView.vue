<template>
  <div class="home-dashboard">
    <SidebarNav />
    <div class="main-content">
      <HeaderComponent title="Home" />
      
      <div class="dashboard-grid">
        <div class="welcome-card">
          <h2>Welcome to Avrio Dashboard</h2>
          <p>Your comprehensive property management solution</p>
        </div>
        
        <div class="quick-stats">
          <div class="stat-card">
            <h3>Properties</h3>
            <div class="stat-value">254</div>
          </div>
          <div class="stat-card">
            <h3>Active Tasks</h3>
            <div class="stat-value">28</div>
          </div>
          <div class="stat-card">
            <h3>Maintenance Requests</h3>
            <div class="stat-value">16</div>
          </div>
          <div class="stat-card">
            <h3>Upcoming Events</h3>
            <div class="stat-value">5</div>
          </div>
        </div>
        
        <div class="recent-activity">
          <h3>Recent Activity</h3>
          <div class="activity-list">
            <div class="activity-item">
              <div class="activity-icon">🔔</div>
              <div class="activity-details">
                <div class="activity-title">Maintenance request submitted</div>
                <div class="activity-time">2 hours ago</div>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-icon">✅</div>
              <div class="activity-details">
                <div class="activity-title">Task completed: Quarterly Inspection</div>
                <div class="activity-time">Yesterday</div>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-icon">📅</div>
              <div class="activity-details">
                <div class="activity-title">New event scheduled: Annual Review</div>
                <div class="activity-time">2 days ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarNav from '@/components/layout/SidebarNav.vue';
import HeaderComponent from '@/components/layout/HeaderComponent.vue';

export default {
  name: 'HomeView',
  components: {
    SidebarNav,
    HeaderComponent
  }
}
</script>

<style scoped>
.home-dashboard {
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

.welcome-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.welcome-card h2 {
  color: #333;
  margin-bottom: 10px;
}

.welcome-card p {
  color: #666;
}

.quick-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.stat-card {
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.stat-card h3 {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.stat-value {
  font-size: 24px;
  font-weight: bold;
  color: #4CAF50;
}

.recent-activity {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.recent-activity h3 {
  margin-bottom: 15px;
  color: #333;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.activity-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
}

.activity-icon {
  font-size: 18px;
  margin-right: 15px;
}

.activity-title {
  font-weight: 500;
  color: #333;
}

.activity-time {
  font-size: 12px;
  color: #999;
  margin-top: 5px;
}

@media (max-width: 1024px) {
  .quick-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .home-dashboard {
    flex-direction: column;
  }
  
  .quick-stats {
    grid-template-columns: 1fr;
  }
}
</style>
