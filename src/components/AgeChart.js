import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function AgeChart({ data }) {
  const chartData = {
    labels: data.map(item => item.faixa_etaria),
    datasets: [
      {
        label: 'Tempo Médio de Uso de Tela por Faixa Etária',
        data: data.map(item => item.tempo_medio),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Tempo Médio de Uso de Tela por Faixa Etária',
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}

export default AgeChart;
