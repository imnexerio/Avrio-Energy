<template>
  <div class="header">
    <div class="header-left">
      <h1 class="title">{{ title }}</h1>
      <div class="filter">
        <select class="filter-select">
          <option value="all">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="in-progress">In Progress</option>
          <option value="on-hold">On Hold</option>
        </select>
      </div>
    </div>
    <div class="header-right">
      <div class="header-actions">
        <button class="action-icon"><i class="fas fa-cog"></i></button>
        <button class="action-icon"><i class="fas fa-bell"></i></button>
        <button class="action-icon"><i class="fas fa-sign-out-alt"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  margin-bottom: 16px;
}

.header-left {
  display: flex;
  align-items: center;
}

.title {
  font-size: 24px;
  font-weight: 500;
  color: #333;
  margin: 0;
  margin-right: 20px;
}

.filter {
  position: relative;
}

.filter-select {
  padding: 8px 32px 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  appearance: none;
  font-size: 14px;
}

.filter::after {
  content: '▼';
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  color: #666;
  pointer-events: none;
}

.header-right {
  display: flex;
  align-items: center;
}

.header-actions {
  display: flex;
  gap: 16px;
}

.action-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.action-icon:hover {
  background-color: #f8f9fa;
}
</style>
