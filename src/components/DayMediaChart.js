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
import { Paper, styled } from '@mui/material'; // Importe Paper e styled

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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

function DayMediaChart() {
  const data = [
    { tipo_dia: 'Dias Úteis', tempo_medio_ponderado: 3.74 },
    { tipo_dia: 'Fim de Semana', tempo_medio_ponderado: 4.68 },
  ];

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
  };

  return (
    <StyledPaper>
      <Bar data={chartData} options={options} />
    </StyledPaper>
  );
}

export default DayMediaChart;
