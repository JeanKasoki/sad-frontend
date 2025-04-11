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

function AssociationChart() {
  const data = [
    { regra: 'Masculino + Fim de Semana', suporte: 16.67 },
    { regra: 'Feminino + Educacional', suporte: 11.11 },
    { regra: 'Recreativo + Dias Úteis', suporte: 16.67 },
  ];

  const chartData = {
    labels: data.map(item => item.regra),
    datasets: [
      {
        label: 'Suporte das Regras de Associação',
        data: data.map(item => item.suporte),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Suporte das Regras de Associação',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y.toFixed(2) + '%';
            }
            return label;
          }
        }
      }
    },
  };

  return <Bar data={chartData} options={options} />;
}

export default AssociationChart;
