import React, { useEffect, useRef, useState } from 'react';
import { Typography, Paper, styled } from '@mui/material';
import Chart from 'chart.js/auto'; // Importa Chart.js

const StyledPaper = styled(Paper)({
  padding: '16px',
  marginBottom: '16px',
  backgroundColor: '#f5f5f5',
  border: '1px solid #ccc',
  overflow: 'auto',
  height: '400px', // Ajuste a altura conforme necessário
});

function ClusterDisplay() {
  const chartRef = useRef(null);
  const [clusterData, setClusterData] = useState(null);

  // Simulação de dados de cluster (substitua com seus dados reais)
  useEffect(() => {
    // Aqui você vai substituir por seus dados reais vindos do backend
    const simulatedData = [
      { idade: 10, tempo_uso: 2.5, cluster: 0, genero: 'Masculino', tipo_dia: 'Fim de Semana', tipo_uso: 'Recreativo' },
      { idade: 5, tempo_uso: 3.0, cluster: 0, genero: 'Feminino', tipo_dia: 'Dia de Semana', tipo_uso: 'Educacional' },
      { idade: 10, tempo_uso: 1.0, cluster: 1, genero: 'Masculino', tipo_dia: 'Dia de Semana', tipo_uso: 'Educacional' },
      { idade: 8, tempo_uso: 4.0, cluster: 0, genero: 'Masculino', tipo_dia: 'Fim de Semana', tipo_uso: 'Recreativo' },
      { idade: 15, tempo_uso: 2.0, cluster: 1, genero: 'Feminino', tipo_dia: 'Fim de Semana', tipo_uso: 'Recreativo' },
      { idade: 15, tempo_uso: 1.5, cluster: 2, genero: 'Masculino', tipo_dia: 'Dia de Semana', tipo_uso: 'Educacional' },
      { idade: 11, tempo_uso: 3.5, cluster: 0, genero: 'Feminino', tipo_dia: 'Fim de Semana', tipo_uso: 'Recreativo' },
      { idade: 8, tempo_uso: 0.8, cluster: 1, genero: 'Masculino', tipo_dia: 'Dia de Semana', tipo_uso: 'Educacional' },
      { idade: 9, tempo_uso: 4.5, cluster: 0, genero: 'Feminino', tipo_dia: 'Fim de Semana', tipo_uso: 'Recreativo' },
      { idade: 12, tempo_uso: 2.2, cluster: 2, genero: 'Feminino', tipo_dia: 'Dia de Semana', tipo_uso: 'Recreativo' },
      { idade: 11, tempo_uso: 3.5, cluster: 0, genero: 'Feminino', tipo_dia: 'Fim de Semana', tipo_uso: 'Recreativo' },
      { idade: 6, tempo_uso: 6.8, cluster: 1, genero: 'Masculino', tipo_dia: 'Dia de Semana', tipo_uso: 'Educacional' },
      { idade: 9, tempo_uso: 4.5, cluster: 0, genero: 'Feminino', tipo_dia: 'Fim de Semana', tipo_uso: 'Recreativo' },
      { idade: 7, tempo_uso: 3.2, cluster: 2, genero: 'Feminino', tipo_dia: 'Dia de Semana', tipo_uso: 'Recreativo' },
      { idade: 13, tempo_uso: 6.8, cluster: 1, genero: 'Masculino', tipo_dia: 'Dia de Semana', tipo_uso: 'Educacional' },
      { idade: 14, tempo_uso: 3.5, cluster: 0, genero: 'Feminino', tipo_dia: 'Fim de Semana', tipo_uso: 'Recreativo' },
      { idade: 7, tempo_uso: 3.2, cluster: 2, genero: 'Feminino', tipo_dia: 'Dia de Semana', tipo_uso: 'Recreativo' },
    ];

    setClusterData(simulatedData);
  }, []);

  // Cria o gráfico quando os dados estão disponíveis
  useEffect(() => {
    if (clusterData && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Cores para os clusters
      const clusterColors = ['#e44e4e', '#4ee481', '#4e81e4'];

      // Prepara os dados para o Chart.js
      const datasets = [];
      for (let i = 0; i < 3; i++) {
        const dataPoints = clusterData.filter(data => data.cluster === i);
        datasets.push({
          label: `Cluster ${i}`,
          data: dataPoints.map(data => ({ x: data.idade, y: data.tempo_uso, r: 5 })), // 'r' para o tamanho do ponto
          backgroundColor: clusterColors[i],
          pointHoverRadius: 10, // Aumenta o raio no hover
        });
      }

      // Cria o gráfico de dispersão
      new Chart(ctx, {
        type: 'scatter',
        data: {
          datasets: datasets,
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              type: 'linear',
              position: 'bottom',
              title: {
                display: true,
                text: 'Idade',
              },
            },
            y: {
              type: 'linear',
              position: 'left',
              title: {
                display: true,
                text: 'Tempo de Uso',
              },
            },
          },
          // Configuração do tooltip para mostrar os dados
          plugins: {
            tooltip: {
              callbacks: {
                label: (context) => {
                  const dataPoint = clusterData.find(
                    (data) => data.idade === context.parsed.x && data.tempo_uso === context.parsed.y
                  );
                  return [
                    `Idade: ${dataPoint.idade}`,
                    `Gênero: ${dataPoint.genero}`,
                    `Tipo de Dia: ${dataPoint.tipo_dia}`,
                    `Tipo de Uso: ${dataPoint.tipo_uso}`,
                    `Tempo de Uso: ${dataPoint.tempo_uso}h`,
                    `Cluster: ${dataPoint.cluster}`,
                  ];
                },
              },
            },
          },
        },
      });
    }
  }, [clusterData]);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Distribuição de Clusters
      </Typography>
      <StyledPaper>
        <canvas ref={chartRef} />
      </StyledPaper>
    </div>
  );
}

export default ClusterDisplay;
