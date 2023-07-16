import { onMounted } from "vue";
import Chart from "chart.js/auto";

export default function useChart(chartData, chartCanvas) {
  onMounted(() => {
    const ctx = chartCanvas.value.getContext("2d");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: chartData.labels,
        datasets: [
          {
            label: "Data",
            data: chartData.data,
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });
}
