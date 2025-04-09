import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)({
  marginBottom: '16px',
  backgroundColor: '#f5f5f5',
});

function KpiCards({ kpis }) {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Indicadores Chave de Desempenho (KPIs)
      </Typography>
      <StyledCard>
        <CardContent>
          <Typography variant="h6">Tempo Médio Total de Uso de Tela</Typography>
          <Typography variant="body1">{kpis.tempoMedioTotal} horas</Typography>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Typography variant="h6">Tempo Médio Educacional</Typography>
          <Typography variant="body1">{kpis.tempoMedioEducacional} horas</Typography>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Typography variant="h6">Tempo Médio Recreativo</Typography>
          <Typography variant="body1">{kpis.tempoMedioRecreativo} horas</Typography>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Typography variant="h6">Percentual do Tempo Educacional</Typography>
          <Typography variant="body1">{kpis.percentualEducacional}%</Typography>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Typography variant="h6">Percentual do Tempo Recreativo</Typography>
          <Typography variant="body1">{kpis.percentualRecreativo}%</Typography>
        </CardContent>
      </StyledCard>
    </div>
  );
}

export default KpiCards;

