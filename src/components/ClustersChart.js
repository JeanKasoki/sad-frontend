import React from 'react';
import { Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function ClustersChart({ data }) {
  // Assuming 'data' is an array of cluster labels
  const chartData = {
    datasets: [
      {
        label: 'Clusters de Uso de Tela',
        data: data.clusters.map((cluster, index) => ({
          x: index, // Use index for x-coordinate
          y: cluster, // Use cluster label for y-coordinate
        })),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Clusters de Uso de Tela',
      },
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Crianças',
        },
      },
      y: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Cluster',
        },
      },
    },
  };

  return <Scatter data={chartData} options={options} />;
}

export default ClustersChart;
