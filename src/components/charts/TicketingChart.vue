<template>
  <div class="ticketing-chart">
    <div class="chart-controls">
      <div class="legend-items">
        <div class="legend-item">
          <span class="legend-color" style="background-color: #FF4081;"></span>
          <span class="legend-text">Creation Rate</span>
        </div>
        <div class="legend-item">
          <span class="legend-color" style="background-color: #4CAF50;"></span>
          <span class="legend-text">Completion Rate</span>
        </div>
      </div>
    </div>
    
    <div class="chart-container">
      <LineChart :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script>
import { Line as LineChart } from 'vue-chartjs';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default {
  name: 'TicketingChart',
  components: {
    LineChart
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
        elements: {
          line: {
            tension: 0.3
          },
          point: {
            radius: 3
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
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Creation Rate',
            data: [65, 59, 80, 81, 56, 75, 60, 70, 82, 75, 68, 72],
            borderColor: '#FF4081',
            backgroundColor: 'rgba(255, 64, 129, 0.1)',
            fill: false,
            borderWidth: 2,
            pointBackgroundColor: '#FF4081'
          },
          {
            label: 'Completion Rate',
            data: [40, 50, 60, 45, 62, 68, 50, 59, 70, 65, 60, 55],
            borderColor: '#4CAF50',
            backgroundColor: 'rgba(76, 175, 80, 0.1)',
            fill: false,
            borderWidth: 2,
            pointBackgroundColor: '#4CAF50'
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
.ticketing-chart {
  width: 100%;
}



.chart-controls {
  display: flex;
  justify-content: flex-end;
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
