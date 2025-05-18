import { createStore } from 'vuex'

export default createStore({
  state: {
    loading: true,
    selectedDateRange: {
      start: new Date(new Date().setDate(new Date().getDate() - 30)),
      end: new Date()
    },
    portfolioItems: [],
    maintenanceStats: {},
    ticketingData: {}
  },
  getters: {
    isLoading: state => state.loading,
    getSelectedDateRange: state => state.selectedDateRange,
    getPortfolioItems: state => state.portfolioItems,
    getMaintenanceStats: state => state.maintenanceStats,
    getTicketingData: state => state.ticketingData
  },
  mutations: {
    SET_LOADING(state, isLoading) {
      state.loading = isLoading;
    },
    SET_DATE_RANGE(state, dateRange) {
      state.selectedDateRange = dateRange;
    },
    SET_PORTFOLIO_ITEMS(state, items) {
      state.portfolioItems = items;
    },
    SET_MAINTENANCE_STATS(state, stats) {
      state.maintenanceStats = stats;
    },
    SET_TICKETING_DATA(state, data) {
      state.ticketingData = data;
    }
  },
  actions: {
    updateDateRange({ commit, dispatch }, dateRange) {
      commit('SET_DATE_RANGE', dateRange);
      dispatch('fetchAllData');
    },
    setPortfolioItems({ commit }, items) {
      commit('SET_PORTFOLIO_ITEMS', items);
    },
    fetchAllData({ commit }) {
      commit('SET_LOADING', true);
      // In a real application, these would be API calls
      // For this demo, we'll generate mock data
      
      // Generate portfolio items
      const portfolioItems = generatePortfolioItems();
      commit('SET_PORTFOLIO_ITEMS', portfolioItems);
      
      // Generate maintenance stats
      const maintenanceStats = generateMaintenanceStats();
      commit('SET_MAINTENANCE_STATS', maintenanceStats);
      
      // Generate ticketing data
      const ticketingData = generateTicketingData();
      commit('SET_TICKETING_DATA', ticketingData);
      
      commit('SET_LOADING', false);
    }
  }
})

// Mock data generators
function generatePortfolioItems() {
  const statuses = ['Completed', 'In Progress', 'On Hold', 'Cancelled'];
  const types = ['Building Inspection', 'Plumbing Repair', 'Electrical Check', 'HVAC Maintenance', 'Roof Inspection'];
  
  // Delhi-NCR region coordinates
  const locations = [
    { lat: 28.6139, lng: 77.2090 }, // Delhi
    { lat: 28.6328, lng: 77.2200 }, // Connaught Place
    { lat: 28.6292, lng: 77.1800 }, // Karol Bagh
    { lat: 28.5189, lng: 77.1750 }, // Vasant Kunj
    { lat: 28.4595, lng: 77.0266 }, // Gurgaon
    { lat: 28.5355, lng: 77.3910 }  // Noida
  ];
  
  return Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `${types[Math.floor(Math.random() * types.length)]} ${i + 1}`,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    date: new Date(new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 30))),
    cost: Math.floor(Math.random() * 10000) / 100,
    location: locations[i % locations.length]
  }));
}

function generateMaintenanceStats() {
  return {
    start: 54,
    inProgress: 9,
    onHold: 3,
    waitingForApproval: 0,
    completed: 944,
    cancelled: 37,
    overDue: 137,
    highPriority: 85,
    mediumPriority: 15,
    lowPriority: 27
  };
}

function generateTicketingData() {
  const days = 30;
  const creationData = Array.from({ length: days }, () => Math.floor(Math.random() * 100) + 50);
  const completionData = Array.from({ length: days }, () => Math.floor(Math.random() * 100) + 40);
  
  const categories = ['Plumbing', 'Electrical', 'HVAC', 'Structural', 'Cosmetic'];
  const barChartData = categories.map(category => ({
    category,
    values: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 20)
  }));
  
  return {
    lineChart: {
      labels: Array.from({ length: days }, (_, i) => `Day ${i + 1}`),
      creation: creationData,
      completion: completionData
    },
    barCharts: barChartData
  };
}
