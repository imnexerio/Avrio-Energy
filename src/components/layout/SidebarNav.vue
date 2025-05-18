<template>
  <div class="sidebar" 
       :class="{ 'expanded': isHovering }" 
       @mouseenter="handleSidebarHover(true)" 
       @mouseleave="handleSidebarHover(false)">
    <div class="logo">
      <span class="logo-letter">A</span>
    </div>
    <nav class="nav-menu">
      <router-link to="/" class="nav-item" active-class="active" @mouseenter="showTooltip('Home', $event)" @mouseleave="hideTooltip">
        <i class="nav-icon fas fa-home"></i>
        <div class="nav-content" v-show="isHovering">
          <span class="nav-text">Home</span>
          <span class="nav-description">Dashboard overview</span>
        </div>
      </router-link>
      <router-link to="/buildings" class="nav-item" active-class="active" @mouseenter="showTooltip('Buildings', $event)" @mouseleave="hideTooltip">
        <i class="nav-icon fas fa-building"></i>
        <div class="nav-content" v-show="isHovering">
          <span class="nav-text">Buildings</span>
          <span class="nav-description">Manage building properties</span>
        </div>
      </router-link>
      <router-link to="/assets" class="nav-item" active-class="active" @mouseenter="showTooltip('Assets', $event)" @mouseleave="hideTooltip">
        <i class="nav-icon fas fa-cubes"></i>
        <div class="nav-content" v-show="isHovering">
          <span class="nav-text">Assets</span>
          <span class="nav-description">Track and maintain assets</span>
        </div>
      </router-link>
      <router-link to="/portfolio" class="nav-item" active-class="active" @mouseenter="showTooltip('Portfolio', $event)" @mouseleave="hideTooltip">
        <i class="nav-icon fas fa-city"></i>
        <div class="nav-content" v-show="isHovering">
          <span class="nav-text">Portfolio</span>
          <span class="nav-description">Property portfolio analytics</span>
        </div>
      </router-link>
      <router-link to="/maintenance" class="nav-item" active-class="active" @mouseenter="showTooltip('Maintenance', $event)" @mouseleave="hideTooltip">
        <i class="nav-icon fas fa-tools"></i>
        <div class="nav-content" v-show="isHovering">
          <span class="nav-text">Maintenance</span>
          <span class="nav-description">Manage maintenance tasks</span>
        </div>
      </router-link>
      <router-link to="/tickets" class="nav-item" active-class="active" @mouseenter="showTooltip('Tickets', $event)" @mouseleave="hideTooltip">
        <i class="nav-icon fas fa-ticket-alt"></i>
        <div class="nav-content" v-show="isHovering">
          <span class="nav-text">Tickets</span>
          <span class="nav-description">Service request tickets</span>
        </div>
      </router-link>
      <router-link to="/avrioAdvisor" class="nav-item" active-class="active" @mouseenter="showTooltip('Advisor', $event)" @mouseleave="hideTooltip">
        <i class="nav-icon fas fa-lightbulb"></i>
        <div class="nav-content" v-show="isHovering">
          <span class="nav-text">Advisor</span>
          <span class="nav-description">Intelligent recommendations</span>
        </div>
      </router-link>
      <router-link to="/savings" class="nav-item" active-class="active" @mouseenter="showTooltip('Savings', $event)" @mouseleave="hideTooltip">
        <i class="nav-icon fas fa-dollar-sign"></i>
        <div class="nav-content" v-show="isHovering">
          <span class="nav-text">Savings</span>
          <span class="nav-description">Cost optimization</span>
        </div>
      </router-link>
      <router-link to="/marketplace" class="nav-item" active-class="active" @mouseenter="showTooltip('Marketplace', $event)" @mouseleave="hideTooltip">
        <i class="nav-icon fas fa-store"></i>
        <div class="nav-content" v-show="isHovering">
          <span class="nav-text">Marketplace</span>
          <span class="nav-description">Purchase services and products</span>
        </div>
      </router-link>
      <router-link to="/tasks" class="nav-item" active-class="active" @mouseenter="showTooltip('Tasks', $event)" @mouseleave="hideTooltip">
        <i class="nav-icon fas fa-tasks"></i>
        <div class="nav-content" v-show="isHovering">
          <span class="nav-text">Tasks</span>
          <span class="nav-description">Task assignments and progress</span>
        </div>
      </router-link>
      <router-link to="/reports" class="nav-item" active-class="active" @mouseenter="showTooltip('Reports', $event)" @mouseleave="hideTooltip">
        <i class="nav-icon fas fa-chart-bar"></i>
        <div class="nav-content" v-show="isHovering">
          <span class="nav-text">Reports</span>
          <span class="nav-description">Analytics and reporting</span>
        </div>
      </router-link>
      <router-link to="/settings" class="nav-item" active-class="active" @mouseenter="showTooltip('Settings', $event)" @mouseleave="hideTooltip">
        <i class="nav-icon fas fa-cog"></i>
        <div class="nav-content" v-show="isHovering">
          <span class="nav-text">Settings</span>
          <span class="nav-description">System configuration</span>
        </div>
      </router-link>
    </nav>
    <div class="sidebar-tooltip" v-if="hoveredItem && !isHovering" :style="tooltipStyle">
      {{ hoveredItem }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarNav',
  data() {
    return {
      isHovering: false,
      hoverTimeout: null,
      hoveredItem: null,
      tooltipPosition: { top: 0 }
    }
  },
  computed: {
    tooltipStyle() {
      return {
        top: `${this.tooltipPosition.top}px`
      }
    }
  },
  methods: {
    handleSidebarHover(isHovering) {
      // Clear any existing timeout
      if (this.hoverTimeout) {
        clearTimeout(this.hoverTimeout);
      }
      
      // Use timeout for smoother experience (avoid accidental triggers)
      if (isHovering) {
        this.isHovering = true;
      } else {
        // Small delay before collapsing when mouse leaves
        this.hoverTimeout = setTimeout(() => {
          this.isHovering = false;
        }, 300);
      }
    },
    showTooltip(text, event) {
      if (!this.isHovering) {
        this.hoveredItem = text;
        // Use relative position to the element instead of adding a fixed offset
        const rect = event.currentTarget.getBoundingClientRect();
        // Place tooltip at the middle of the nav item's height
        this.tooltipPosition.top = rect.top + (rect.height / 2) - 12;
      }
    },
    hideTooltip() {
      this.hoveredItem = null;
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 60px;
  background-color: #4CAF50;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  color: white;
  transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-x: hidden;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1050;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  will-change: width;
}

.sidebar.expanded {
  width: 220px;
  align-items: flex-start;
}

.logo {
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  margin-left: 10px;
}

.logo-letter {
  color: #4CAF50;
  font-size: 20px;
  font-weight: bold;
}

.nav-menu {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.nav-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 15px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  position: relative;
  width: 100%;
  transition: background-color 0.2s;
  box-sizing: border-box;
  height: 48px;
}

.sidebar:not(.expanded) .nav-item {
  justify-content: center;
  padding: 12px 0;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.15);
}

.nav-item.active {
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
}

.nav-item.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background-color: white;
}

.nav-icon {
  font-size: 18px;
  min-width: 20px;
  text-align: center;
  transition: margin 0.3s;
  margin-left: 0;
}

.sidebar:not(.expanded) .nav-icon {
  margin: 0 auto;
}

.nav-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 12px;
  width: calc(100% - 20px);
  overflow: hidden;
  opacity: 0;
  transform: translateX(0);
  visibility: hidden;
  transition: opacity 0.2s ease, visibility 0.2s ease;
}

.sidebar.expanded .nav-content {
  opacity: 1;
  visibility: visible;
}

.nav-text {
  white-space: nowrap;
  display: block;
  font-weight: 500;
  font-size: 14px;
  color: white;
}

.nav-description {
  display: block;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 2px;
  white-space: nowrap;
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sidebar-tooltip {
  position: fixed;
  left: 65px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  z-index: 1051;
  pointer-events: none;
  transition: opacity 0.2s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  /* Remove transform transitions to keep tooltip positioning stable */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .sidebar.expanded {
    width: 180px;
  }

  .nav-description {
    max-width: 110px;
  }
}
</style>
