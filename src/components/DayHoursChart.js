import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Paper, styled } from '@mui/material'; // Importe Paper e styled

ChartJS.register(ArcElement, Tooltip, Legend);

const StyledPaper = styled(Paper)({ // Defina o StyledPaper
  padding: '16px',
  marginBottom: '16px',
  backgroundColor: '#f5f5f5',
  border: '1px solid #ccc',
  overflow: 'auto',
  maxHeight: '600px', // Opcional: ajuste a altura máxima se necessário
  display: 'flex',        // Adiciona display flex
  justifyContent: 'center', // Centraliza horizontalmente
  alignItems: 'center',     // Centraliza verticalmente
});

function DayHoursChart() {
  const data = {
    labels: ['Dias Úteis', 'Fim de Semana'],
    datasets: [
      {
        label: 'Total de Horas de Uso de Tela',
        data: [49398, 61769],
        backgroundColor: [
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
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
        text: 'Total de Horas de Uso de Tela por Dia',
      },
    },
  };

  return (
    <StyledPaper>
      <Pie data={data} options={options} />
    </StyledPaper>
  );
}

export default DayHoursChart;
