<template>
  <div class="stacked-bar-chart">
    <div class="chart-header">
      <div class="legend-items">
        <div class="legend-item">
          <span class="legend-color" style="background-color: #FF5252;"></span>
          <span class="legend-text">Common</span>
        </div>
        <div class="legend-item">
          <span class="legend-color" style="background-color: #4CAF50;"></span>
          <span class="legend-text">General</span>
        </div>
        <div class="legend-item">
          <span class="legend-color" style="background-color: #7C4DFF;"></span>
          <span class="legend-text">Medium</span>
        </div>
        <div class="legend-item">
          <span class="legend-color" style="background-color: #FFC107;"></span>
          <span class="legend-text">High Priority</span>
        </div>
        <div class="legend-item">
          <span class="legend-color" style="background-color: #2196F3;"></span>
          <span class="legend-text">Low</span>
        </div>
      </div>
    </div>
    
    <div class="chart-container">
      <Bar :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default {
  name: 'StackedBarChart',
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
      },
      localChartData: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 
                'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15'],
        datasets: [
          {
            label: 'Common',
            data: [30, 25, 15, 30, 35, 20, 25, 30, 20, 15, 35, 25, 20, 30, 25],
            backgroundColor: '#FF5252'
          },
          {
            label: 'General',
            data: [50, 65, 40, 55, 60, 45, 50, 55, 45, 40, 60, 50, 45, 55, 50],
            backgroundColor: '#4CAF50'
          },
          {
            label: 'Medium',
            data: [20, 25, 30, 35, 25, 30, 35, 30, 35, 40, 30, 35, 40, 35, 30],
            backgroundColor: '#7C4DFF'
          },
          {
            label: 'High Priority',
            data: [25, 20, 35, 20, 15, 25, 20, 15, 20, 25, 15, 20, 25, 20, 15],
            backgroundColor: '#FFC107'
          },
          {
            label: 'Low',
            data: [35, 40, 30, 25, 20, 30, 25, 20, 25, 30, 20, 25, 30, 25, 20],
            backgroundColor: '#2196F3'
          }
        ]
      }
    };
  },
  computed: {
    chartData() {
      return this.localChartData;
    }
  },
  mounted() {
    // Re-render chart when parent forces re-render with key
    this.$watch(() => this.$parent.chartRenderKey, () => {
      this.$forceUpdate();
    });
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

@media (max-width: 768px) {
  .chart-container {
    height: 250px;
  }
}
</style>
