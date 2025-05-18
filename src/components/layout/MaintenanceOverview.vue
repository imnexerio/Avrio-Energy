<template>
  <div class="maintenance-overview">
    <div class="overview-header">
      <h3>Maintenance Overview</h3>
      <div class="date-navigation">
        <button class="nav-arrow prev" @click="navigatePrevious"><i class="fas fa-chevron-left"></i></button>
        <div class="date-range">{{ formatDateRange }}</div>
        <button class="nav-arrow next" @click="navigateNext"><i class="fas fa-chevron-right"></i></button>
        <div class="toggle-container">
          <span class="toggle-label">Till Now</span>
          <label class="switch">
            <input type="checkbox" v-model="tillNow" @change="toggleTillNow">
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>

    <!-- First row: Main Ticket Summary -->
    <div class="overview-row">
      <!-- Ticket Status Summary Card -->
      <div class="overview-card ticket-summary">
        <div class="card-header">
          <h4>Ticket Status Summary</h4>
          <button class="info-icon"><i class="fas fa-info-circle"></i></button>
        </div>
        
        <div class="ticket-status-content">
          <div class="status-row">
            <div class="status-item">
              <div class="status-label">Open</div>
              <div class="status-value blue">114</div>
            </div>
            <div class="status-item">
              <div class="status-label">In Progress</div>
              <div class="status-value orange">20</div>
            </div>
            <div class="status-item">
              <div class="status-label">On Hold</div>
              <div class="status-value purple">3</div>
            </div>
            <div class="status-item">
              <div class="status-label">Waiting For Approval</div>
              <div class="status-value">0</div>
            </div>
            <div class="status-item">
              <div class="status-label">Complete</div>
              <div class="status-value green">1944</div>
            </div>
            <div class="status-item">
              <div class="status-label">Cancelled</div>
              <div class="status-value pink">37</div>
            </div>
            <div class="status-item">
              <div class="status-label">Over Due</div>
              <div class="status-value red">137</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Ticket Priority Summary Card -->
      <div class="overview-card priority-summary">
        <div class="card-header">
          <h4>Ticket Priority Summary</h4>
          <button class="info-icon"><i class="fas fa-info-circle"></i></button>
        </div>
        
        <div class="priority-content">
          <div class="priority-row">
            <div class="priority-item">
              <div class="priority-label">High</div>
              <div class="priority-value high">85</div>
            </div>
            <div class="priority-item">
              <div class="priority-label">Medium</div>
              <div class="priority-value medium">25</div>
            </div>
            <div class="priority-item">
              <div class="priority-label">Low</div>
              <div class="priority-value low">27</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Second row: Resolution, Cost and Priority Resolution -->
    <div class="overview-row">
      <!-- Ticket Resolution Card -->
      <div class="overview-card">
        <div class="card-header">
          <h4>Ticket Resolution Within Due Date</h4>
          <button class="info-icon"><i class="fas fa-info-circle"></i></button>
        </div>
        
        <div class="resolution-content">
          <div class="resolution-value">561 / 2118</div>
        </div>
      </div>

      <!-- Maintenance Cost Card -->
      <div class="overview-card">
        <div class="card-header">
          <h4>Maintenance Cost</h4>
          <button class="info-icon"><i class="fas fa-info-circle"></i></button>
        </div>
        
        <div class="cost-content">
          <div class="cost-value"><span class="rupee">₹</span> 5000</div>
        </div>
      </div>

      <!-- Priority Wise Resolution Card -->
      <div class="overview-card">
        <div class="card-header">
          <h4>Priority Wise Ticket Resolution</h4>
          <button class="info-icon"><i class="fas fa-info-circle"></i></button>
        </div>
        
        <div class="priority-resolution">
          <div class="resolution-item">
            <div class="resolution-days high">8.99<span>Days</span></div>
            <div class="resolution-label">High</div>
          </div>
          <div class="resolution-item">
            <div class="resolution-days medium">8.51<span>Days</span></div>
            <div class="resolution-label">Medium</div>
          </div>
          <div class="resolution-item">
            <div class="resolution-days low">11.8<span>Days</span></div>
            <div class="resolution-label">Low</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Third row: Due dates -->
    <div class="overview-row">
      <!-- Due Today Card -->
      <div class="overview-card">
        <div class="card-header">
          <h4>Due Today</h4>
          <button class="info-icon"><i class="fas fa-info-circle"></i></button>
        </div>
        
        <div class="due-content">
          <div class="due-value">0</div>
        </div>
      </div>

      <!-- Due Tomorrow Card -->
      <div class="overview-card">
        <div class="card-header">
          <h4>Due Tomorrow</h4>
          <button class="info-icon"><i class="fas fa-info-circle"></i></button>
        </div>
        
        <div class="due-content">
          <div class="due-value">0</div>
        </div>
      </div>

      <!-- Due This Week Card -->
      <div class="overview-card">
        <div class="card-header">
          <h4>Due This Week</h4>
          <button class="info-icon"><i class="fas fa-info-circle"></i></button>
        </div>
        
        <div class="due-content">
          <div class="due-value">0</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MaintenanceOverview',
  data() {
    return {
      tillNow: false
    };
  },
  computed: {
    ...mapGetters(['getMaintenanceStats', 'getSelectedDateRange']),
    stats() {
      return this.getMaintenanceStats;
    },
    totalTickets() {
      return this.stats.start + 
             this.stats.inProgress + 
             this.stats.onHold + 
             this.stats.waitingForApproval + 
             this.stats.completed + 
             this.stats.cancelled;
    },
    totalCapacity() {
      return 2198; // This would be dynamic in a real application
    },
    progressPercentage() {
      return (this.totalTickets / this.totalCapacity) * 100;
    },
    formatDateRange() {
      if (!this.getSelectedDateRange.start || !this.getSelectedDateRange.end) {
        return '1 Nov 2024 - 30 Nov 2024'; // Default date range as shown in the image
      }
      
      const options = { day: 'numeric', month: 'short', year: 'numeric' };
      const start = this.getSelectedDateRange.start.toLocaleDateString('en-US', options);
      const end = this.getSelectedDateRange.end.toLocaleDateString('en-US', options);
      
      return `${start} - ${end}`;
    }
  },
  methods: {
    navigatePrevious() {
      // Logic to navigate to previous date range
      this.$emit('navigate-previous');
    },
    navigateNext() {
      // Logic to navigate to next date range
      this.$emit('navigate-next');
    },
    toggleTillNow() {
      this.tillNow = !this.tillNow;
      this.$emit('toggle-till-now', this.tillNow);
    }
  }
}
</script>

<style scoped>
.maintenance-overview {
  width: 100%;
  padding: 20px;
  color: #333;
}

.overview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.overview-header h3 {
  font-size: 22px;
  font-weight: 500;
  margin: 0;
  color: #333;
}

.date-navigation {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-arrow {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #4CAF50;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.date-range {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 14px;
}

.toggle-container {
  display: flex;
  align-items: center;
  margin-left: 15px;
}

.toggle-label {
  font-size: 14px;
  margin-right: 8px;
}

/* Toggle Switch */
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: .4s;
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #4CAF50;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

/* Cards Layout */
.overview-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.overview-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  padding: 15px;
  flex: 1;
}

.ticket-summary {
  flex: 2;
}

.priority-summary {
  flex: 1;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.card-header h4 {
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  color: #333;
}

.info-icon {
  background: none;
  border: none;
  color: #aaa;
  cursor: pointer;
  font-size: 16px;
}

/* Ticket Status Content */
.ticket-status-content {
  display: flex;
  justify-content: center;
}

.status-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.status-item {
  text-align: center;
  min-width: 90px;
}

.status-label {
  font-size: 14px;
  color: #777;
  margin-bottom: 5px;
}

.status-value {
  font-size: 24px;
  font-weight: 600;
}

/* Priority Content */
.priority-content {
  display: flex;
  justify-content: center;
}

.priority-row {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.priority-item {
  text-align: center;
  padding: 0 15px;
}

.priority-label {
  font-size: 14px;
  color: #777;
  margin-bottom: 5px;
}

.priority-value {
  font-size: 24px;
  font-weight: 600;
}

.status-value.blue,
.stat-value.blue {
  color: #2196F3;
}

.status-value.orange,
.stat-value.orange {
  color: #FF9800;
}

.status-value.purple,
.stat-value.purple {
  color: #9C27B0;
}

.status-value.green,
.stat-value.green {
  color: #4CAF50;
}

.status-value.pink,
.stat-value.pink {
  color: #E91E63;
}

.status-value.red,
.stat-value.red {
  color: #F44336;
}

.status-value.high,
.priority-value.high,
.stat-value.high {
  color: #F44336;
}

.status-value.medium,
.priority-value.medium,
.stat-value.medium {
  color: #FF9800;
}

.status-value.low,
.priority-value.low,
.stat-value.low {
  color: #4CAF50;
}

/* Resolution Card */
.resolution-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
}

.resolution-value {
  font-size: 28px;
  font-weight: 600;
}

/* Maintenance Cost */
.cost-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
}

.cost-value {
  font-size: 28px;
  font-weight: 600;
  color: #4CAF50;
}

.rupee {
  font-weight: normal;
}

/* Priority Resolution */
.priority-resolution {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100px;
}

.resolution-item {
  text-align: center;
}

.resolution-days {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 5px;
}

.resolution-days.high {
  color: #F44336;
}

.resolution-days.medium {
  color: #FF9800;
}

.resolution-days.low {
  color: #4CAF50;
}

.resolution-days span {
  font-size: 12px;
  font-weight: normal;
  margin-left: 3px;
}

.resolution-label {
  font-size: 14px;
  color: #777;
}

/* Due Content */
.due-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
}

.due-value {
  font-size: 28px;
  font-weight: 600;
  color: #4CAF50;
}
</style>
