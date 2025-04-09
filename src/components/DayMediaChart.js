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

function DayMediaChart({ data }) {
  const chartData = {
    labels: data.map(item => item.tipo_dia),
    datasets: [
      {
        label: 'Média Ponderada de Uso de Tela por Tipo de Dia',
        data: data.map(item => item.tempo_medio_ponderado),
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Média Ponderada de Uso de Tela por Tipo de Dia',
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}

export default DayMediaChart;
