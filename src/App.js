import React, { useState, useEffect } from 'react';
import KpiCards from './components/KpiCards';
import AgeChart from './components/AgeChart';
import DayHoursChart from './components/DayHoursChart';
import DayMediaChart from './components/DayMediaChart';
import ClustersChart from './components/ClustersChart';
import ClassificationDisplay from './components/ClassificationDisplay';
import PivotTable from './components/PivotTable';
import Dashboard from './components/Dashboard'; 
import './App.css'; 
import { Box, Typography } from '@mui/material'; 

function App() {
  const [kpis, setKpis] = useState(null);
  const [ageData, setAgeData] = useState(null);
  const [dayHoursData, setDayHoursData] = useState(null);
  const [dayMediaData, setDayMediaData] = useState(null);
  const [clustersData, setClustersData] = useState(null);
  const [classificationData, setClassificationData] = useState(null);
  const [pivotData, setPivotData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const kpisResponse = await fetch('http://localhost:3000/api/kpis');
        const ageResponse = await fetch('http://localhost:3000/api/por-idade');
        const dayHoursResponse = await fetch('http://localhost:3000/api/horas-por-dia');
        const dayMediaResponse = await fetch('http://localhost:3000/api/media-dia');
        const clustersResponse = await fetch('http://localhost:3000/api/clusters');
        const classificationResponse = await fetch('http://localhost:3000/api/classificacao');
        const pivotResponse = await fetch('http://localhost:3000/api/pivot?linha=genero&coluna=tipo_uso');

        if (!kpisResponse.ok || !ageResponse.ok || !dayHoursResponse.ok ||
            !dayMediaResponse.ok || !clustersResponse.ok || !classificationResponse.ok ||
            !pivotResponse.ok) {
          throw new Error('Erro ao buscar dados da API');
        }

        const kpisData = await kpisResponse.json();
        const ageData = await ageResponse.json();
        const dayHoursData = await dayHoursResponse.json();
        const dayMediaData = await dayMediaResponse.json();
        const clustersData = await clustersResponse.json();
        const classificationData = await classificationResponse.json();
        const pivotData = await pivotResponse.json();

        setKpis(kpisData);
        setAgeData(ageData);
        setDayHoursData(dayHoursData);
        setDayMediaData(dayMediaData);
        setClustersData(clustersData);
        setClassificationData(classificationData);
        setPivotData(pivotData);
        setLoading(false);

      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Carregando dados...</div>;
  }

  if (error) {
    return <div>Erro ao carregar dados: {error.message}</div>;
  }

  return (
    <div className="App">
      <Box
        sx={{
          backgroundColor: '#19272b', // Cor azul primária do tema
          color: 'white', // Texto branco
          padding: '16px', // Espaçamento interno
          textAlign: 'center', // Centralizar o texto
          width: '100%', // Ocupar toda a largura
        }}
      >
        <Typography variant="h5" component="h1">
          Dashboard
        </Typography>
      </Box>
      <Dashboard
        kpis={kpis}
        ageData={ageData}
        dayHoursData={dayHoursData}
        dayMediaData={dayMediaData}
        clustersData={clustersData}
        classificationData={classificationData}
        pivotData={pivotData}
      />
    </div>
  );
}

export default App;
