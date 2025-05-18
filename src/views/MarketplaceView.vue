<template>
  <div class="marketplace-dashboard">
    <SidebarNav />
    <div class="main-content">
      <HeaderComponent title="Marketplace" />
        <div class="dashboard-content">        <!-- Hero Banner -->
        <div class="marketplace-banner" :style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${images.banners.marketplace})` }">
          <div class="banner-content">
            <h2>Avrio Marketplace</h2>
            <p>Find trusted vendors, services, and solutions for your property management needs</p>
            <div class="search-container">
              <input type="text" placeholder="Search for vendors, services, or solutions..." />
              <button><i class="fas fa-search"></i> Search</button>
            </div>
          </div>
        </div>
          <!-- Category Navigation -->
        <div class="category-nav">
          <div class="category-item active">
            <img :src="images.icons.maintenance" alt="Maintenance" class="category-icon" />
            <span>Maintenance</span>
          </div>
          <div class="category-item">
            <img :src="images.icons.energy" alt="Energy" class="category-icon" />
            <span>Energy</span>
          </div>
          <div class="category-item">
            <img :src="images.icons.security" alt="Security" class="category-icon" />
            <span>Security</span>
          </div>
          <div class="category-item">
            <img :src="images.icons.cleaning" alt="Cleaning" class="category-icon" />
            <span>Cleaning</span>
          </div>
          <div class="category-item">
            <img :src="images.icons.landscaping" alt="Landscaping" class="category-icon" />
            <span>Landscaping</span>
          </div>
          <div class="category-item">
            <img :src="images.icons.consulting" alt="Consulting" class="category-icon" />
            <span>Consulting</span>
          </div>
          <div class="category-item">
            <img :src="images.icons.equipment" alt="Equipment" class="category-icon" />
            <span>Equipment</span>
          </div>
          <div class="category-item">
            <i class="fas fa-ellipsis-h"></i>
            <span>More</span>
          </div>
        </div>
        
        <!-- Featured Vendors -->
        <div class="section-header">
          <h3>Featured Vendors</h3>
          <button class="view-all-btn">View All</button>
        </div>
        
        <div class="vendor-grid">
          <div class="vendor-card" v-for="(vendor, index) in featuredVendors" :key="index">
            <div class="vendor-logo">
              <img :src="vendor.logo" alt="Vendor logo" />
            </div>
            <div class="vendor-info">
              <h4>{{ vendor.name }}</h4>
              <p class="vendor-category">{{ vendor.category }}</p>
              <div class="vendor-rating">
                <span class="stars">★★★★★</span>
                <span class="rating-count">({{ vendor.ratings }})</span>
              </div>
              <p class="vendor-desc">{{ vendor.description }}</p>
            </div>
            <div class="vendor-actions">
              <button class="contact-btn">Contact</button>
              <button class="details-btn">View Details</button>
            </div>
          </div>
        </div>
        
        <!-- Special Offers -->
        <div class="section-header">
          <h3>Special Offers</h3>
          <button class="view-all-btn">View All</button>
        </div>
        
        <div class="offers-grid">
          <div class="offer-card" v-for="(offer, index) in specialOffers" :key="index">
            <div class="offer-badge">{{ offer.discount }}</div>
            <div class="offer-image">
              <img :src="offer.image" alt="Offer image" />
            </div>
            <div class="offer-info">
              <h4>{{ offer.title }}</h4>
              <p class="offer-vendor">by {{ offer.vendor }}</p>
              <p class="offer-desc">{{ offer.description }}</p>
              <div class="offer-price">
                <span class="original-price">${{ offer.originalPrice }}</span>
                <span class="discount-price">${{ offer.discountPrice }}</span>
              </div>
            </div>
            <button class="claim-offer-btn">Claim Offer</button>
          </div>
        </div>
        
        <!-- Recent Transactions -->
        <div class="section-header">
          <h3>Your Recent Transactions</h3>
          <button class="view-all-btn">View All</button>
        </div>
        
        <table class="transactions-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Vendor</th>
              <th>Service</th>
              <th>Building</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(transaction, index) in recentTransactions" :key="index">
              <td>{{ transaction.date }}</td>
              <td>{{ transaction.vendor }}</td>
              <td>{{ transaction.service }}</td>
              <td>{{ transaction.building }}</td>
              <td>${{ transaction.amount }}</td>
              <td><span :class="'status-badge ' + transaction.status.toLowerCase()">{{ transaction.status }}</span></td>
              <td>
                <button class="action-btn">Details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarNav from '@/components/layout/SidebarNav.vue'
import HeaderComponent from '@/components/layout/HeaderComponent.vue'
import { images } from '@/assets/imageUrls.js'

export default {
  name: 'MarketplaceView',
  components: {
    SidebarNav,
    HeaderComponent
  },  data() {
    return {
      images,
      featuredVendors: [
        {
          name: 'EcoTech Systems',
          category: 'Energy Management',
          logo: images.vendors.ecoTech,
          ratings: 124,
          description: 'Leading provider of energy-efficient solutions for commercial buildings.'
        },
        {
          name: 'SecureGuard Pro',
          category: 'Security & Surveillance',
          logo: images.vendors.secureGuard,
          ratings: 96,
          description: 'Complete security solutions with advanced monitoring technology.'
        },
        {
          name: 'PrecisionMech',
          category: 'HVAC & Maintenance',
          logo: images.vendors.precisionMech,
          ratings: 158,
          description: 'Expert HVAC services with 24/7 support and maintenance contracts.'
        },
        {
          name: 'CleanSpace Solutions',
          category: 'Cleaning Services',
          logo: images.vendors.cleanSpace,
          ratings: 87,
          description: 'Eco-friendly commercial cleaning services with certified professionals.'
        }
      ],
      specialOffers: [
        {
          title: 'Annual HVAC Maintenance Package',
          vendor: 'PrecisionMech',
          discount: '25% OFF',
          image: images.offers.hvacMaintenance,
          description: 'Complete annual maintenance for all HVAC systems with parts included.',
          originalPrice: '4,500',
          discountPrice: '3,375'
        },
        {
          title: 'Energy Audit & Optimization',
          vendor: 'EcoTech Systems',
          discount: '20% OFF',
          image: images.offers.energyAudit,
          description: 'Comprehensive energy audit with detailed efficiency recommendations.',
          originalPrice: '2,800',
          discountPrice: '2,240'
        },        {
          title: 'Security System Upgrade',
          vendor: 'SecureGuard Pro',
          discount: '15% OFF',
          image: images.offers.securitySystem,
          description: 'Modern security system upgrade with smart monitoring capabilities.',
          originalPrice: '5,200',
          discountPrice: '4,420'
        }
      ],
      recentTransactions: [
        {
          date: '2025-05-10',
          vendor: 'EcoTech Systems',
          service: 'LED Lighting Retrofit',
          building: 'West Tower',
          amount: '12,450',
          status: 'Completed'
        },
        {
          date: '2025-05-05',
          vendor: 'PrecisionMech',
          service: 'Quarterly HVAC Maintenance',
          building: 'East Complex',
          amount: '3,200',
          status: 'Completed'
        },
        {
          date: '2025-04-28',
          vendor: 'CleanSpace Solutions',
          service: 'Deep Cleaning Service',
          building: 'South Building',
          amount: '1,850',
          status: 'In Progress'
        },
        {
          date: '2025-04-20',
          vendor: 'SecureGuard Pro',
          service: 'Security System Maintenance',
          building: 'North Center',
          amount: '950',
          status: 'Pending'
        }
      ]
    }
  }
}
</script>

<style scoped>
.marketplace-dashboard {
  display: flex;
  height: 100vh;
}

.main-content {
  flex: 1;
  padding: 20px;
  background-color: #f5f7fa;
  overflow-y: auto;
}

.dashboard-content {
  margin-top: 20px;
}

.marketplace-banner {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('');
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('') !important;
  background-size: cover;
  background-position: center;
  padding: 40px;
  border-radius: 8px;
  margin-bottom: 20px;
  color: white;
  text-align: center;
}

.banner-content h2 {
  font-size: 28px;
  margin: 0 0 10px 0;
}

.banner-content p {
  font-size: 16px;
  margin-bottom: 20px;
  opacity: 0.9;
}

.search-container {
  display: flex;
  max-width: 700px;
  margin: 0 auto;
}

.search-container input {
  flex: 1;
  padding: 12px 15px;
  font-size: 16px;
  border: none;
  border-radius: 4px 0 0 4px;
}

.search-container button {
  padding: 12px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 16px;
}

.category-nav {
  display: flex;
  justify-content: space-between;
  background: white;
  padding: 15px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.category-icon {
  width: 24px;
  height: 24px;
  margin-bottom: 6px;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.category-item.active {
  background-color: #e8f5e9;
  color: #4CAF50;
}

.category-item:hover {
  background-color: #f5f5f5;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 15px 0;
}

.section-header h3 {
  margin: 0;
}

.view-all-btn {
  padding: 6px 12px;
  background-color: transparent;
  color: #2196F3;
  border: 1px solid #2196F3;
  border-radius: 4px;
  cursor: pointer;
}

.vendor-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.vendor-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
}

.vendor-logo {
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f5f5f5;
}

.vendor-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.vendor-info h4 {
  margin: 0 0 5px 0;
}

.vendor-category {
  color: #666;
  font-size: 14px;
  margin: 0 0 10px 0;
}

.vendor-rating {
  margin-bottom: 10px;
}

.stars {
  color: #FFC107;
}

.rating-count {
  color: #666;
  font-size: 14px;
  margin-left: 5px;
}

.vendor-desc {
  font-size: 14px;
  color: #333;
  margin-bottom: 15px;
  flex-grow: 1;
}

.vendor-actions {
  display: flex;
  justify-content: space-between;
}

.contact-btn, .details-btn {
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.contact-btn {
  background-color: #2196F3;
  color: white;
  border: none;
  flex: 1;
  margin-right: 10px;
}

.details-btn {
  background-color: white;
  color: #2196F3;
  border: 1px solid #2196F3;
  flex: 1;
}

.offers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.offer-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  position: relative;
}

.offer-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #F44336;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: bold;
}

.offer-image {
  height: 150px;
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 8px 8px 0 0;
}

.offer-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.offer-card:hover .offer-image img {
  transform: scale(1.05);
}

.offer-info {
  padding: 15px;
}

.offer-info h4 {
  margin: 0 0 5px 0;
}

.offer-vendor {
  color: #666;
  font-size: 14px;
  margin: 0 0 10px 0;
}

.offer-desc {
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
}

.offer-price {
  margin-bottom: 15px;
}

.original-price {
  color: #999;
  text-decoration: line-through;
  margin-right: 10px;
}

.discount-price {
  color: #F44336;
  font-weight: bold;
  font-size: 18px;
}

.claim-offer-btn {
  width: 100%;
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
}

.transactions-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.transactions-table th, .transactions-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.transactions-table th {
  background-color: #f5f5f5;
  font-weight: bold;
}

.status-badge {
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
}

.completed {
  background-color: #e8f5e9;
  color: #4CAF50;
}

.in.progress {
  background-color: #e3f2fd;
  color: #2196F3;
}

.pending {
  background-color: #fff8e1;
  color: #FF9800;
}

.action-btn {
  padding: 5px 10px;
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
