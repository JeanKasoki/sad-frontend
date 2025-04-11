// src/components/Dashboard.js
import React, { useState } from 'react';
import { Box, Button, Container } from '@mui/material';
import AgeChart from './AgeChart';
import DayHoursChart from './DayHoursChart';
import DayMediaChart from './DayMediaChart';
import ClustersChart from './ClustersChart';
import ClassificationDisplay from './ClassificationDisplay';
import PivotTable from './PivotTable';
import KpiCards from './KpiCards'; // Importe o KpiCards

function Dashboard({
  kpis,
  ageData,
  dayHoursData,
  dayMediaData,
  clustersData,
  classificationData,
  pivotData,
}) {
  const [selectedChart, setSelectedChart] = useState('kpis'); // Alterado para 'kpis'

  const handleChartChange = (chartName) => {
    setSelectedChart(chartName);
  };

  const renderChart = () => {
    switch (selectedChart) {
      case 'kpis':
        return kpis && <KpiCards kpis={kpis} />;
      case 'age':
        return ageData && <AgeChart data={ageData} />;
      case 'dayHours':
        return dayHoursData && <DayHoursChart data={dayHoursData} />;
      case 'dayMedia':
        return dayMediaData && <DayMediaChart data={dayMediaData} />;
      case 'clusters':
        return clustersData && <ClustersChart data={clustersData} />;
      case 'classification':
        return classificationData && <ClassificationDisplay data={classificationData} />;
      case 'pivotTable':
        return pivotData && <PivotTable data={pivotData} />;
      default:
        return kpis && <KpiCards kpis={kpis} />; // Exibe KpiCards por padrão
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingTop: '60px',
      }}
    >
  <Box sx={{ minHeight: 100, border: '2px solid #ccc', borderRadius: 3, p: 3, bgcolor: 'white' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
          <Button variant="outlined" sx={{ bgcolor: '#13414f', color: 'white' }} onClick={() => handleChartChange('kpis')}>
            KPIs
          </Button>
          <Button variant="outlined" sx={{ bgcolor: '#13414f', color: 'white' }} onClick={() => handleChartChange('age')}>
            Tempo por Idade
          </Button>
          <Button variant="outlined" sx={{ bgcolor: '#13414f', color: 'white' }} onClick={() => handleChartChange('dayHours')}>
            Total por Tipo de Dia
          </Button>
          <Button variant="outlined" sx={{ bgcolor: '#13414f', color: 'white' }} onClick={() => handleChartChange('dayMedia')}>
            Média por Tipo de Dia
          </Button>
          <Button variant="outlined" sx={{ bgcolor: '#13414f', color: 'white' }} onClick={() => handleChartChange('clusters')}>
            Distribuição de Clusters
          </Button>
          <Button variant="outlined" sx={{ bgcolor: '#13414f', color: 'white' }} onClick={() => handleChartChange('classification')}>
            Classificação de Risco
          </Button>
          <Button variant="outlined" sx={{ bgcolor: '#13414f', color: 'white' }} onClick={() => handleChartChange('pivotTable')}>
            Tempo por Gênero e Atividade
          </Button>
        </Box>
        {renderChart()}
      </Box>
    </Container>
  );
}

export default Dashboard;
