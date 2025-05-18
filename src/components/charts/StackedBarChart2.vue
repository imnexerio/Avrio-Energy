<template>
  <div class="stacked-bar-chart">
    <div class="chart-header">
      <div class="legend-items">
        <div class="legend-item">
          <span class="legend-color" style="background-color: #2196F3;"></span>
          <span class="legend-text">Complete</span>
        </div>
        <div class="legend-item">
          <span class="legend-color" style="background-color: #4CAF50;"></span>
          <span class="legend-text">Pending</span>
        </div>
        <div class="legend-item">
          <span class="legend-color" style="background-color: #673AB7;"></span>
          <span class="legend-text">Overdue</span>
        </div>
        <div class="legend-item">
          <span class="legend-color" style="background-color: #FFC107;"></span>
          <span class="legend-text">In Progress</span>
        </div>
        <div class="legend-item">
          <span class="legend-color" style="background-color: #FF5722;"></span>
          <span class="legend-text">Other</span>
        </div>
      </div>
    </div>
    
    <div class="chart-container">
      <div v-if="isLoading || !isDataReady" class="loading-indicator">
        Loading chart data...
      </div>
      <Bar v-else :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default {
  name: 'StackedBarChart2',
  components: {
    Bar
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 10,
            right: 10,
            bottom: 10,
            left: 10
          }
        },
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false
            }
          },
          y: {
            stacked: true,
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.05)'
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    };
  },
  computed: {
    isLoading() {
      return false;
    },
    isDataReady() {
      return true;
    },
    chartData() {
      // Different data pattern for variation
      return {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Complete',
            data: [30, 40, 35, 50, 45, 60, 55, 65, 70, 65, 75, 80],
            backgroundColor: '#2196F3'
          },
          {
            label: 'Pending',
            data: [20, 15, 25, 15, 25, 15, 20, 15, 10, 20, 15, 10],
            backgroundColor: '#4CAF50'
          },
          {
            label: 'Overdue',
            data: [10, 15, 10, 5, 10, 5, 10, 5, 10, 5, 5, 5],
            backgroundColor: '#673AB7'
          },
          {
            label: 'In Progress',
            data: [15, 10, 15, 10, 5, 10, 5, 10, 5, 10, 5, 5],
            backgroundColor: '#FFC107'
          },
          {
            label: 'Other',
            data: [5, 5, 5, 10, 5, 5, 5, 5, 5, 5, 5, 5],
            backgroundColor: '#FF5722'
          }
        ]
      };
    }
  }
};
</script>

<style scoped>
.stacked-bar-chart {
  width: 100%;
}

.chart-header {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.legend-items {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.legend-item {
  display: flex;
  align-items: center;
  font-size: 14px;
}

.legend-color {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 2px;
  margin-right: 8px;
}

.legend-text {
  color: #666;
}

.chart-container {
  height: 350px;
  position: relative;
}

.loading-indicator {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  color: #666;
}
</style>
