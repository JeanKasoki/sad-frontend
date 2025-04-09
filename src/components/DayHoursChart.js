import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

function DayHoursChart({ data }) {
  const chartData = {
    labels: data.map(item => item.tipo_dia),
    datasets: [
      {
        label: 'Total de Horas de Uso de Tela por Tipo de Dia',
        data: data.map(item => item.horas_totais),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Total de Horas de Uso de Tela por Tipo de Dia',
      },
    },
  };

  return <Pie data={chartData} options={options} />;
}

export default DayHoursChart;
