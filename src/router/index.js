import { createRouter, createWebHistory } from 'vue-router'
import MaintenanceView from '../views/MaintenanceView.vue'
import HomeView from '../views/HomeView.vue'
import TasksView from '../views/TasksView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ReportsView from '../views/ReportsView.vue'
import SettingsView from '../views/SettingsView.vue'
import BuildingsView from '../views/BuildingsView.vue'
import AssetsView from '../views/AssetsView.vue'
import AvrioAdvisorView from '../views/AvrioAdvisorView.vue'
import SavingsView from '../views/SavingsView.vue'
import TicketsView from '../views/TicketsView.vue'
import MarketplaceView from '../views/MarketplaceView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
    {
    path: '/buildings',
    name: 'buildings',
    component: BuildingsView
  },
    {
    path: '/assets',
    name: 'assets',
    component: AssetsView
  },
    {
    path: '/avrioAdvisor',
    name: 'avrioAdvisor',
    component: AvrioAdvisorView
  },
    {
    path: '/savings',
    name: 'savings',
    component: SavingsView
  },
  {
    path: '/maintenance',
    name: 'maintenance',
    component: MaintenanceView
  },
    {
    path: '/tickets',
    name: 'tickets',
    component: TicketsView
  },
    {
    path: '/marketplace',
    name: 'marketplace',
    component: MarketplaceView
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: TasksView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView
  },
  {
    path: '/reports',
    name: 'reports',
    component: ReportsView
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
