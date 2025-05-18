// This utility function helps easily apply images from our image URLs to components
import { images } from './imageUrls.js';

export const applyImages = {
  // Apply logo to components
  logo() {
    return images.logo;
  },
  
  // Apply vendor logo by name
  vendorLogo(vendorName) {
    const vendorMap = {
      'EcoTech Systems': images.vendors.ecoTech,
      'SecureGuard Pro': images.vendors.secureGuard,
      'PrecisionMech': images.vendors.precisionMech,
      'CleanSpace Solutions': images.vendors.cleanSpace
    };
    return vendorMap[vendorName] || 'https://via.placeholder.com/80';
  },
  
  // Apply offer image by type
  offerImage(offerType) {
    const offerMap = {
      'HVAC': images.offers.hvacMaintenance,
      'Energy': images.offers.energyAudit,
      'Security': images.offers.securitySystem
    };
    return offerMap[offerType] || 'https://via.placeholder.com/150';
  },
    // Get a property image by index (cycles through available images)
  propertyImage(index) {
    const idx = index % images.properties.length;
    return images.properties[idx];
  },
  
  // Get a property image by property name
  propertyImageByName(propertyName) {
    const propertyMap = {
      'Eastside Plaza': images.properties[6],
      'Northview Heights': images.properties[7],
      'Westfield Industries': images.properties[8]
    };
    
    return propertyMap[propertyName] || this.propertyImage(propertyName.length % images.properties.length);
  },
  
  // Get marketplace banner
  marketplaceBanner() {
    return images.banners.marketplace;
  },
  
  // Get user avatar
  userAvatar() {
    return images.avatars.default;
  },
  
  // Get category icon by name
  categoryIcon(category) {
    return images.icons[category.toLowerCase()] || '';
  },
  
  // Get map marker by status
  mapMarker(status) {
    const statusMap = {
      'active': images.markers.active,
      'maintenance': images.markers.maintenance,
      'inactive': images.markers.inactive
    };
    return statusMap[status.toLowerCase()] || images.markers.default;
  },
  
  // Get building icon by type
  buildingIcon(type) {
    return images.buildings[type.toLowerCase()] || '';
  }
};
