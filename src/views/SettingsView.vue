<template>
  <div class="settings-dashboard">
    <SidebarNav />
    <div class="main-content">
      <HeaderComponent title="Settings" />
      
      <div class="settings-container">
        <div class="settings-sidebar">
          <div class="settings-nav">
            <div class="settings-nav-item active">
              <i class="settings-icon profile"></i>
              <span>Profile</span>
            </div>
            <div class="settings-nav-item">
              <i class="settings-icon account"></i>
              <span>Account</span>
            </div>
            <div class="settings-nav-item">
              <i class="settings-icon notifications"></i>
              <span>Notifications</span>
            </div>
            <div class="settings-nav-item">
              <i class="settings-icon appearance"></i>
              <span>Appearance</span>
            </div>
            <div class="settings-nav-item">
              <i class="settings-icon security"></i>
              <span>Security</span>
            </div>
            <div class="settings-nav-item">
              <i class="settings-icon integrations"></i>
              <span>Integrations</span>
            </div>
            <div class="settings-nav-item">
              <i class="settings-icon billing"></i>
              <span>Billing</span>
            </div>
          </div>
        </div>
        
        <div class="settings-content">
          <div class="settings-panel">
            <div class="settings-panel-header">
              <h2>Profile Settings</h2>
              <p>Manage your personal information and preferences</p>
            </div>
            
            <div class="profile-section">
              <div class="profile-avatar">
                <div class="avatar-image">
                  <span>JS</span>
                </div>
                <button class="change-avatar-btn">Change Photo</button>
              </div>
              
              <div class="profile-details">
                <div class="form-row">
                  <div class="form-group">
                    <label>First Name</label>
                    <input type="text" value="John" />
                  </div>
                  <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" value="Smith" />
                  </div>
                </div>
                
                <div class="form-row">
                  <div class="form-group">
                    <label>Email Address</label>
                    <input type="email" value="john.smith@example.com" />
                  </div>
                  <div class="form-group">
                    <label>Phone Number</label>
                    <input type="tel" value="+1 (555) 123-4567" />
                  </div>
                </div>
                
                <div class="form-group full-width">
                  <label>Job Title</label>
                  <input type="text" value="Property Manager" />
                </div>
                
                <div class="form-group full-width">
                  <label>Bio</label>
                  <textarea rows="4">Property management professional with over 10 years of experience in commercial and residential properties. Specializing in maintenance management and tenant relations.</textarea>
                </div>
              </div>
            </div>
            
            <div class="form-section">
              <h3>Preferences</h3>
              
              <div class="form-row">
                <div class="form-group">
                  <label>Language</label>
                  <select>
                    <option>English (US)</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Time Zone</label>
                  <select>
                    <option>Eastern Time (ET)</option>
                    <option>Central Time (CT)</option>
                    <option>Mountain Time (MT)</option>
                    <option>Pacific Time (PT)</option>
                  </select>
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label>Date Format</label>
                  <select>
                    <option>MM/DD/YYYY</option>
                    <option>DD/MM/YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Currency</label>
                  <select>
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                    <option>GBP (£)</option>
                    <option>CAD (C$)</option>
                  </select>
                </div>
              </div>
              
              <div class="form-group checkbox-group">
                <label class="checkbox-container">
                  <input type="checkbox" checked />
                  <span class="checkbox-text">Enable two-factor authentication</span>
                </label>
              </div>
              
              <div class="form-group checkbox-group">
                <label class="checkbox-container">
                  <input type="checkbox" checked />
                  <span class="checkbox-text">Receive email notifications</span>
                </label>
              </div>
              
              <div class="form-group checkbox-group">
                <label class="checkbox-container">
                  <input type="checkbox" />
                  <span class="checkbox-text">Receive SMS notifications</span>
                </label>
              </div>
            </div>
            
            <div class="form-actions">
              <button class="cancel-button">Cancel</button>
              <button class="save-button">Save Changes</button>
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
  name: 'SettingsView',
  components: {
    SidebarNav,
    HeaderComponent
  }
}
</script>

<style scoped>
.settings-dashboard {
  display: flex;
  min-height: 100vh;
  background-color: #f5f7fa;
}

.main-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.settings-container {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.settings-sidebar {
  width: 220px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 15px 0;
}

.settings-nav {
  display: flex;
  flex-direction: column;
}

.settings-nav-item {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: #666;
  cursor: pointer;
}

.settings-nav-item.active {
  background-color: #f5f7fa;
  color: #4CAF50;
  border-left: 3px solid #4CAF50;
}

.settings-icon {
  margin-right: 10px;
  font-size: 16px;
}

/* Icons using emoji as placeholders */
.profile::before { content: '👤'; }
.account::before { content: '🔑'; }
.notifications::before { content: '🔔'; }
.appearance::before { content: '🎨'; }
.security::before { content: '🔒'; }
.integrations::before { content: '🔌'; }
.billing::before { content: '💳'; }

.settings-content {
  flex: 1;
}

.settings-panel {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 25px 30px;
}

.settings-panel-header {
  margin-bottom: 30px;
}

.settings-panel-header h2 {
  margin: 0 0 10px 0;
  color: #333;
}

.settings-panel-header p {
  margin: 0;
  color: #666;
}

.profile-section {
  display: flex;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #f0f0f0;
}

.profile-avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
}

.avatar-image {
  width: 100px;
  height: 100px;
  background-color: #4CAF50;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
}

.change-avatar-btn {
  background: none;
  border: 1px solid #e0e0e0;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  color: #333;
}

.profile-details {
  flex: 1;
}

.form-section {
  margin-bottom: 30px;
}

.form-section h3 {
  margin: 0 0 20px 0;
  color: #333;
  font-size: 16px;
}

.form-row {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 12px;
  color: #666;
  margin-bottom: 5px;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
}

.form-group textarea {
  resize: vertical;
}

.form-group.full-width {
  width: 100%;
}

.checkbox-group {
  margin-bottom: 10px;
}

.checkbox-container {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.checkbox-container input {
  margin-right: 10px;
}

.checkbox-text {
  font-size: 14px;
  color: #333;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.cancel-button {
  padding: 10px 20px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  cursor: pointer;
  color: #333;
}

.save-button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

@media (max-width: 992px) {
  .settings-container {
    flex-direction: column;
  }
  
  .settings-sidebar {
    width: 100%;
  }
  
  .settings-nav {
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .settings-nav-item {
    padding: 10px 15px;
  }
  
  .settings-nav-item.active {
    border-left: none;
    border-bottom: 3px solid #4CAF50;
  }
}

@media (max-width: 768px) {
  .settings-dashboard {
    flex-direction: column;
  }
  
  .profile-section {
    flex-direction: column;
  }
  
  .profile-avatar {
    margin-right: 0;
    margin-bottom: 20px;
  }
  
  .form-row {
    flex-direction: column;
    gap: 15px;
  }
}
</style>
