<template>
  <div class="tickets-dashboard">
    <SidebarNav />
    <div class="main-content">
      <HeaderComponent title="Ticketing System" />
      
      <div class="dashboard-content">
        <!-- Status Overview Cards -->
        <div class="status-cards">
          <div class="status-card open">
            <div class="status-icon">
              <i class="fas fa-exclamation-circle"></i>
            </div>
            <div class="status-details">
              <h3>Open Tickets</h3>
              <p class="count">42</p>
            </div>
          </div>
          
          <div class="status-card in-progress">
            <div class="status-icon">
              <i class="fas fa-sync-alt"></i>
            </div>
            <div class="status-details">
              <h3>In Progress</h3>
              <p class="count">28</p>
            </div>
          </div>
          
          <div class="status-card on-hold">
            <div class="status-icon">
              <i class="fas fa-pause-circle"></i>
            </div>
            <div class="status-details">
              <h3>On Hold</h3>
              <p class="count">15</p>
            </div>
          </div>
          
          <div class="status-card closed">
            <div class="status-icon">
              <i class="fas fa-check-circle"></i>
            </div>
            <div class="status-details">
              <h3>Closed</h3>
              <p class="count">87</p>
            </div>
          </div>
        </div>
        
        <!-- Ticketing Chart -->
        <div class="chart-section">
          <h3>Ticket Volume Over Time</h3>
          <TicketingChart />
        </div>
        
        <!-- Tickets Table -->
        <div class="tickets-section">
          <div class="tickets-header">
            <h3>Recent Tickets</h3>
            <div class="ticket-controls">
              <div class="search-bar">
                <input type="text" placeholder="Search tickets..." />
                <button><i class="fas fa-search"></i></button>
              </div>
              <button class="create-ticket-btn">+ New Ticket</button>
            </div>
          </div>
          
          <div class="filter-bar">
            <div class="filter-group">
              <label>Status:</label>
              <select>
                <option>All Statuses</option>
                <option>Open</option>
                <option>In Progress</option>
                <option>On Hold</option>
                <option>Closed</option>
              </select>
            </div>
            
            <div class="filter-group">
              <label>Priority:</label>
              <select>
                <option>All Priorities</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Critical</option>
              </select>
            </div>
            
            <div class="filter-group">
              <label>Building:</label>
              <select>
                <option>All Buildings</option>
                <option>West Tower</option>
                <option>East Complex</option>
                <option>South Building</option>
                <option>North Center</option>
                <option>Central Plaza</option>
              </select>
            </div>
            
            <div class="filter-group">
              <label>Date Range:</label>
              <select>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 90 Days</option>
                <option>This Year</option>
                <option>All Time</option>
              </select>
            </div>
          </div>
          
          <table class="tickets-table">
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Title</th>
                <th>Building</th>
                <th>Requested By</th>
                <th>Assigned To</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(ticket, index) in tickets" :key="index">
                <td>{{ ticket.id }}</td>
                <td>{{ ticket.title }}</td>
                <td>{{ ticket.building }}</td>
                <td>{{ ticket.requestedBy }}</td>
                <td>{{ ticket.assignedTo }}</td>
                <td><span :class="'priority-badge ' + ticket.priority.toLowerCase()">{{ ticket.priority }}</span></td>
                <td><span :class="'status-badge ' + ticket.status.toLowerCase().replace(' ', '-')">{{ ticket.status }}</span></td>
                <td>{{ ticket.created }}</td>
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
import TicketingChart from '@/components/charts/TicketingChart.vue'

export default {
  name: 'TicketsView',
  components: {
    SidebarNav,
    HeaderComponent,
    TicketingChart
  },
  data() {
    return {
      tickets: [
        {
          id: 'TK-1025',
          title: 'HVAC failure in conference room',
          building: 'West Tower',
          requestedBy: 'John Smith',
          assignedTo: 'Mike Johnson',
          priority: 'High',
          status: 'In Progress',
          created: '2025-05-15'
        },
        {
          id: 'TK-1024',
          title: 'Elevator #2 making unusual noise',
          building: 'East Complex',
          requestedBy: 'Sarah Williams',
          assignedTo: 'Robert Chen',
          priority: 'Medium',
          status: 'Open',
          created: '2025-05-14'
        },
        {
          id: 'TK-1023',
          title: 'Water leak in bathroom on floor 3',
          building: 'South Building',
          requestedBy: 'Lisa Garcia',
          assignedTo: 'Unassigned',
          priority: 'Critical',
          status: 'Open',
          created: '2025-05-14'
        },
        {
          id: 'TK-1022',
          title: 'Replace broken window in office 208',
          building: 'North Center',
          requestedBy: 'David Lee',
          assignedTo: 'Mark Wilson',
          priority: 'Low',
          status: 'On Hold',
          created: '2025-05-12'
        },
        {
          id: 'TK-1021',
          title: 'Security door not locking properly',
          building: 'Central Plaza',
          requestedBy: 'Emily Clark',
          assignedTo: 'Sophia Martinez',
          priority: 'High',
          status: 'Closed',
          created: '2025-05-10'
        },
        {
          id: 'TK-1020',
          title: 'Lighting issue in parking garage',
          building: 'West Tower',
          requestedBy: 'Ryan Thompson',
          assignedTo: 'Mike Johnson',
          priority: 'Medium',
          status: 'Closed',
          created: '2025-05-08'
        }
      ]
    }
  }
}
</script>

<style scoped>
.tickets-dashboard {
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

.status-cards {
  display: flex;
  flex-wrap: wrap; /* Allow cards to wrap on small screens */
  gap: 15px; /* Use gap for consistent spacing */
  margin-bottom: 20px;
}

.status-card {
  flex: 1;
  min-width: 200px; /* Minimum width before wrapping */
  border-radius: 8px;
  padding: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  background: white;
}

.status-card:last-child {
  margin-right: 0;
}

.status-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
}

.status-icon i {
  font-size: 20px;
  color: white;
}

.open .status-icon {
  background-color: #F44336;
}

.in-progress .status-icon {
  background-color: #2196F3;
}

.on-hold .status-icon {
  background-color: #FF9800;
}

.closed .status-icon {
  background-color: #4CAF50;
}

.status-details h3 {
  margin: 0 0 5px 0;
  font-size: 16px;
  color: #666;
}

.count {
  font-size: 28px;
  font-weight: bold;
  margin: 0;
  color: #333;
}

.chart-section {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.tickets-section {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  overflow-x: auto; /* Allow horizontal scrolling within the table container only */
}

.tickets-header {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping on small screens */
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px; /* Add gap for spacing when wrapped */
}

.ticket-controls {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping on small screens */
  align-items: center;
  gap: 10px; /* Add gap for spacing when wrapped */
}

.search-bar {
  display: flex;
  flex: 1;
  min-width: 200px; /* Minimum width for search bar */
  max-width: 400px; /* Maximum width for search bar */
}

.search-bar input {
  width: 250px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
}

.search-bar button {
  padding: 8px 15px;
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;
  border-left: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.create-ticket-btn {
  padding: 8px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  gap: 10px; /* Add spacing between wrapped items */
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 4px;
  margin-bottom: 20px;
}

.filter-group {
  display: flex;
  align-items: center;
  margin-right: 10px; /* Add spacing between filter groups */
  min-width: 150px; /* Set minimum width for filter groups */
}

.filter-group label {
  margin-right: 8px;
  font-weight: bold;
}

.filter-group select {
  padding: 6px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.tickets-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed; /* Fixed layout to control column widths */
  min-width: 650px; /* Minimum width to ensure readability */
}

.tickets-table th, .tickets-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  white-space: nowrap; /* Prevent text wrapping */
  overflow: hidden;
  text-overflow: ellipsis; /* Add ellipsis for text overflow */
}

.tickets-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.tickets-table tr:hover {
  background-color: #f9f9f9;
}

.priority-badge, .status-badge {
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
}

.critical {
  background-color: #ffebee;
  color: #f44336;
}

.high {
  background-color: #fff8e1;
  color: #ff9800;
}

.medium {
  background-color: #e3f2fd;
  color: #2196F3;
}

.low {
  background-color: #e8f5e9;
  color: #4CAF50;
}

.open {
  background-color: #ffebee;
  color: #f44336;
}

.in-progress {
  background-color: #e3f2fd;
  color: #2196F3;
}

.on-hold {
  background-color: #fff8e1;
  color: #ff9800;
}

.closed {
  background-color: #e8f5e9;
  color: #4CAF50;
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
  background-color: #2196F3;
}

.edit {
  background-color: #4CAF50;
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
  background-color: #2196F3;
  color: white;
  border-color: #2196F3;
}
</style>
