import React, { useState, useEffect } from 'react';
import KpiCards from './components/KpiCards';
import AgeChart from './components/AgeChart';
import DayHoursChart from './components/DayHoursChart';
import DayMediaChart from './components/DayMediaChart';
import ClustersChart from './components/ClustersChart';
import ClassificationDisplay from './components/ClassificationDisplay';
import AssociationsTable from './components/AssociationsTable';
import PivotTable from './components/PivotTable';
import './App.css'; // Importe o arquivo CSS

function App() {
  const [kpis, setKpis] = useState(null);
  const [ageData, setAgeData] = useState(null);
  const [dayHoursData, setDayHoursData] = useState(null);
  const [dayMediaData, setDayMediaData] = useState(null);
  const [clustersData, setClustersData] = useState(null);
  const [classificationData, setClassificationData] = useState(null);
  const [associationsData, setAssociationsData] = useState(null);
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
        const associationsResponse = await fetch('http://localhost:3000/api/associacoes');
        const pivotResponse = await fetch('http://localhost:3000/api/pivot?linha=genero&coluna=tipo_uso');

        if (!kpisResponse.ok || !ageResponse.ok || !dayHoursResponse.ok ||
            !dayMediaResponse.ok || !clustersResponse.ok || !classificationResponse.ok ||
            !associationsResponse.ok || !pivotResponse.ok) {
          throw new Error('Erro ao buscar dados da API');
        }

        const kpisData = await kpisResponse.json();
        const ageData = await ageResponse.json();
        const dayHoursData = await dayHoursResponse.json();
        const dayMediaData = await dayMediaResponse.json();
        const clustersData = await clustersResponse.json();
        const classificationData = await classificationResponse.json();
        const associationsData = await associationsResponse.json();
        const pivotData = await pivotResponse.json();

        setKpis(kpisData);
        setAgeData(ageData);
        setDayHoursData(dayHoursData);
        setDayMediaData(dayMediaData);
        setClustersData(clustersData);
        setClassificationData(classificationData);
        setAssociationsData(associationsData);
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
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Análise de Uso de Tela</h1>
        {/* Aqui você pode adicionar um componente de seleção ou outros elementos do cabeçalho */}
      </header>

      <div className="kpi-cards-section">
        {kpis && <KpiCards kpis={kpis} />}
      </div>

      <div className="charts-grid">
        <div className="chart-item">
          {ageData && <AgeChart data={ageData} />}
        </div>
        <div className="chart-item">
          {dayHoursData && <DayHoursChart data={dayHoursData} />}
        </div>
        <div className="chart-item">
          {dayMediaData && <DayMediaChart data={dayMediaData} />}
        </div>
        <div className="chart-item">
          {clustersData && <ClustersChart data={clustersData} />}
        </div>
        <div className="chart-item">
          {classificationData && <ClassificationDisplay data={classificationData} />}
        </div>
        <div className="chart-item">
          {associationsData && <AssociationsTable data={associationsData} />}
        </div>
        <div className="chart-item">
          {pivotData && <PivotTable data={pivotData} />}
        </div>
      </div>
    </div>
  );
}

export default App;
