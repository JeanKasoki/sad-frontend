import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Paper, styled } from '@mui/material'; // Importe Paper e styled

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StyledPaper = styled(Paper)({ // Defina o StyledPaper
  padding: '16px',
  marginBottom: '16px',
  backgroundColor: '#f5f5f5',
  border: '1px solid #ccc',
  overflow: 'auto',
  maxHeight: '600px', // Opcional: ajuste a altura máxima se necessário
});

function AgeChart() {
  const data = [
    { idade: 5, tempo_medio: 1.71 },
    { idade: 6, tempo_medio: 2.24 },
    { idade: 7, tempo_medio: 2.82 },
    { idade: 8, tempo_medio: 3.39 },
    { idade: 9, tempo_medio: 3.92 },
    { idade: 10, tempo_medio: 4.92 },
  ];

  const chartData = {
    labels: data.map(item => `Idade ${item.idade}`),
    datasets: [
      {
        label: 'Tempo Médio Ponderado de Tela por Idade',
        data: data.map(item => item.tempo_medio),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Tempo Médio Ponderado de Tela por Idade',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y.toFixed(2) + ' horas';
            }
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Tempo Médio (horas)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Idade',
        },
      },
    },
  };

  return (
    <StyledPaper>
      <Line data={chartData} options={options} />
    </StyledPaper>
  );
}

export default AgeChart;
