import React, { useState, useEffect } from 'react'; // Importe o React e os hooks
import KpiCards from './components/KpiCards';
import AgeChart from './components/AgeChart';
import DayHoursChart from './components/DayHoursChart';
import DayMediaChart from './components/DayMediaChart';
import ClustersChart from './components/ClustersChart';
import ClassificationDisplay from './components/ClassificationDisplay';
import AssociationsTable from './components/AssociationsTable';
import PivotTable from './components/PivotTable';

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
    <div>
      <h1>Análise de Uso de Tela</h1>

      {kpis && <KpiCards kpis={kpis} />}
      {ageData && <AgeChart data={ageData} />}
      {dayHoursData && <DayHoursChart data={dayHoursData} />}
      {dayMediaData && <DayMediaChart data={dayMediaData} />}
      {clustersData && <ClustersChart data={clustersData} />}
      {classificationData && <ClassificationDisplay data={classificationData} />}
      {associationsData && <AssociationsTable data={associationsData} />}
      {pivotData && <PivotTable data={pivotData} />}
    </div>
  );
}

export default App;
