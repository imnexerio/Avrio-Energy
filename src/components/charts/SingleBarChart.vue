<template>
  <div class="single-bar-chart">
    <div class="chart-header">
      <div class="legend-items">
        <div class="legend-item">
          <span class="legend-color" style="background-color: #4CAF50;"></span>
          <span class="legend-text">Cost</span>
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
  name: 'SingleBarChart',
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
            grid: {
              display: false
            }
          },
          y: {
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
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Cost',
            data: [12000, 19000, 3000, 5000, 2000, 3000, 20000],
            backgroundColor: '#4CAF50'
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
.single-bar-chart {
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
  height: 280px;
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
