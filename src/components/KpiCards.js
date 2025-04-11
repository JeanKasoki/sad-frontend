import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)({
  marginBottom: '16px',
  backgroundColor: '#f5f5f5',
});

function KpiCards() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Indicadores Chave de Desempenho (KPIs)
      </Typography>
      <StyledCard>
        <CardContent>
          <Typography variant="h6">Tempo Médio Total de Uso de Tela</Typography>
          <Typography variant="body1">4.49 horas</Typography>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Typography variant="h6">Tempo Médio Educacional</Typography>
          <Typography variant="body1">1.23 horas</Typography>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Typography variant="h6">Tempo Médio Recreativo</Typography>
          <Typography variant="body1">3.26 horas</Typography>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Typography variant="h6">Percentual do Tempo Educacional</Typography>
          <Typography variant="body1">27.43%</Typography>
        </CardContent>
      </StyledCard>
      <StyledCard>
        <CardContent>
          <Typography variant="h6">Percentual do Tempo Recreativo</Typography>
          <Typography variant="body1">72.56%</Typography>
        </CardContent>
      </StyledCard>
    </div>
  );
}

export default KpiCards;
