<template>
  <div class="tasks-dashboard">
    <SidebarNav />
    <div class="main-content">
      <HeaderComponent title="Tasks" />
      
      <div class="dashboard-grid">
        <div class="tasks-overview">
          <h2>Task Management</h2>
          <div class="task-filters">
            <button class="filter-btn active">All Tasks (28)</button>
            <button class="filter-btn">Upcoming (12)</button>
            <button class="filter-btn">In Progress (9)</button>
            <button class="filter-btn">Completed (7)</button>
          </div>
          
          <div class="task-list">
            <div class="task-item">
              <div class="task-status in-progress"></div>
              <div class="task-details">
                <div class="task-title">Quarterly Inspection - Building A</div>
                <div class="task-meta">
                  <span class="task-date">Due: May 25, 2025</span>
                  <span class="task-priority high">High Priority</span>
                </div>
                <div class="task-description">Complete quarterly safety and maintenance inspection for Building A including all common areas.</div>
              </div>
              <div class="task-actions">
                <button class="task-btn view">View</button>
                <button class="task-btn complete">Complete</button>
              </div>
            </div>
            
            <div class="task-item">
              <div class="task-status upcoming"></div>
              <div class="task-details">
                <div class="task-title">HVAC Maintenance</div>
                <div class="task-meta">
                  <span class="task-date">Due: June 2, 2025</span>
                  <span class="task-priority medium">Medium Priority</span>
                </div>
                <div class="task-description">Schedule routine maintenance for HVAC systems in residential buildings.</div>
              </div>
              <div class="task-actions">
                <button class="task-btn view">View</button>
                <button class="task-btn start">Start</button>
              </div>
            </div>
            
            <div class="task-item">
              <div class="task-status completed"></div>
              <div class="task-details">
                <div class="task-title">Update Tenant Directory</div>
                <div class="task-meta">
                  <span class="task-date">Completed: May 15, 2025</span>
                  <span class="task-priority low">Low Priority</span>
                </div>
                <div class="task-description">Update digital and physical tenant directories with new move-ins and departures.</div>
              </div>
              <div class="task-actions">
                <button class="task-btn view">View</button>
                <button class="task-btn reopen">Reopen</button>
              </div>
            </div>
            
            <div class="task-item">
              <div class="task-status in-progress"></div>
              <div class="task-details">
                <div class="task-title">Landscape Evaluation</div>
                <div class="task-meta">
                  <span class="task-date">Due: May 22, 2025</span>
                  <span class="task-priority medium">Medium Priority</span>
                </div>
                <div class="task-description">Evaluate current landscaping and irrigation systems for summer readiness.</div>
              </div>
              <div class="task-actions">
                <button class="task-btn view">View</button>
                <button class="task-btn complete">Complete</button>
              </div>
            </div>
            
            <div class="task-item">
              <div class="task-status upcoming"></div>
              <div class="task-details">
                <div class="task-title">Annual Fire Safety Training</div>
                <div class="task-meta">
                  <span class="task-date">Due: June 10, 2025</span>
                  <span class="task-priority high">High Priority</span>
                </div>
                <div class="task-description">Coordinate annual fire safety training for all building managers and staff.</div>
              </div>
              <div class="task-actions">
                <button class="task-btn view">View</button>
                <button class="task-btn start">Start</button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="task-actions-panel">
          <div class="action-card">
            <h3>Create New Task</h3>
            <button class="action-btn add-task">Add Task</button>
          </div>
          
          <div class="action-card">
            <h3>Task Statistics</h3>
            <div class="stat-row">
              <div class="stat-label">Completion Rate:</div>
              <div class="stat-value">73%</div>
            </div>
            <div class="stat-row">
              <div class="stat-label">Average Days to Complete:</div>
              <div class="stat-value">4.2</div>
            </div>
            <div class="stat-row">
              <div class="stat-label">Overdue Tasks:</div>
              <div class="stat-value">3</div>
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
  name: 'TasksView',
  components: {
    SidebarNav,
    HeaderComponent
  }
}
</script>

<style scoped>
.tasks-dashboard {
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
  grid-template-columns: 3fr 1fr;
  gap: 20px;
  margin-top: 20px;
}

.tasks-overview {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.tasks-overview h2 {
  color: #333;
  margin-bottom: 20px;
}

.task-filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 8px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  background-color: #fff;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn.active {
  background-color: #4CAF50;
  color: white;
  border-color: #4CAF50;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.task-item {
  display: flex;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  align-items: center;
}

.task-status {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 15px;
}

.task-status.upcoming {
  background-color: #FFC107;
}

.task-status.in-progress {
  background-color: #2196F3;
}

.task-status.completed {
  background-color: #4CAF50;
}

.task-details {
  flex: 1;
}

.task-title {
  font-weight: 600;
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
}

.task-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 5px;
}

.task-date {
  font-size: 12px;
  color: #666;
}

.task-priority {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 4px;
}

.task-priority.high {
  background-color: #FFEBEE;
  color: #E53935;
}

.task-priority.medium {
  background-color: #FFF8E1;
  color: #FFB300;
}

.task-priority.low {
  background-color: #E8F5E9;
  color: #43A047;
}

.task-description {
  font-size: 14px;
  color: #666;
  line-height: 1.4;
}

.task-actions {
  display: flex;
  gap: 10px;
}

.task-btn {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.task-btn.view {
  background-color: #E0E0E0;
  color: #333;
}

.task-btn.complete, .task-btn.start {
  background-color: #4CAF50;
  color: white;
}

.task-btn.reopen {
  background-color: #2196F3;
  color: white;
}

.task-actions-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.action-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.action-card h3 {
  color: #333;
  margin-bottom: 15px;
  font-size: 16px;
}

.action-btn {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #4CAF50;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-btn:hover {
  background-color: #388E3C;
}

.stat-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}

.stat-row:last-child {
  border-bottom: none;
}

.stat-label {
  color: #666;
}

.stat-value {
  font-weight: 600;
  color: #333;
}

@media (max-width: 1024px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
  
  .task-actions-panel {
    flex-direction: row;
  }
  
  .action-card {
    flex: 1;
  }
}

@media (max-width: 768px) {
  .task-item {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .task-status {
    margin-bottom: 10px;
  }
  
  .task-actions {
    margin-top: 10px;
    align-self: flex-end;
  }
  
  .task-actions-panel {
    flex-direction: column;
  }
}
</style>
