<template>
  <div class="portfolio-detail">
    <div class="table-container">
      <table class="portfolio-table">
        <thead>
          <tr>
            <th class="checkbox-col"><input type="checkbox" @change="toggleSelectAll" v-model="selectAll" /></th>
            <th>Building Name</th>
            <th>Status</th>
            <th>Cost</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Building Supply Co.</td>
            <td><span class="status-indicator status-green"></span>Active</td>
            <td>$542.00</td>
            <td><button class="action-btn">Details</button></td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Urban City Hall</td>
            <td><span class="status-indicator status-yellow"></span>Pending</td>
            <td>$684.00</td>
            <td><button class="action-btn">Details</button></td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Industrial-Project-404</td>
            <td><span class="status-indicator status-red"></span>Inactive</td>
            <td>$0.00</td>
            <td><button class="action-btn action-warning">Escalating</button></td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Order to go HQ</td>
            <td><span class="status-indicator status-blue"></span>Pending</td>
            <td>$123.00</td>
            <td><button class="action-btn">Details</button></td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>ABC Project #01</td>
            <td><span class="status-indicator status-blue"></span>Inactive</td>
            <td>$456.00</td>
            <td><button class="action-btn">Details</button></td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Martin Group (JAL, INC., MARX)</td>
            <td><span class="status-indicator status-blue"></span>Inactive</td>
            <td>$348.00</td>
            <td><button class="action-btn">Details</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pagination">
      <button class="prev-page">&lt;</button>
      <button class="page active">1</button>
      <button class="page">2</button>
      <button class="page">3</button>
      <button class="next-page">&gt;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioDetail',
  data() {
    return {
      selectAll: false
    };
  },
  methods: {
    toggleSelectAll() {
      // In a real application, this would toggle all checkboxes
    }
  }
};
</script>

<style scoped>
.portfolio-detail {
  width: 100%;
}

.table-container {
  overflow-x: auto;
  background-color: #fff;
  border-radius: 8px;
}

.portfolio-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.portfolio-table th {
  background-color: #f8f9fa;
  color: #666;
  font-weight: 500;
  text-align: left;
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
}

.portfolio-table td {
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
}

.checkbox-col {
  width: 40px;
  text-align: center;
}

.status-indicator {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
}

.status-green {
  background-color: #4CAF50;
}

.status-yellow {
  background-color: #FFC107;
}

.status-red {
  background-color: #F44336;
}

.status-blue {
  background-color: #2196F3;
}

.action-btn {
  padding: 6px 12px;
  background-color: #e8f5e9;
  color: #4CAF50;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
}

.action-warning {
  background-color: #ffebee;
  color: #F44336;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}

.pagination button {
  border: 1px solid #ddd;
  background: white;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.pagination button.active {
  background-color: #4CAF50;
  color: white;
  border-color: #4CAF50;
}
</style>
