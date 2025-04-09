import React from 'react';
import { Typography, Paper, styled } from '@mui/material';

const StyledPaper = styled(Paper)({
  padding: '16px',
  marginBottom: '16px',
  backgroundColor: '#e0f7fa',
});

function ClassificationDisplay({ data }) {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Classificação de Risco de Dependência
      </Typography>
      <StyledPaper>
        <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>
          {data.arvore}
        </Typography>
      </StyledPaper>
    </div>
  );
}

export default ClassificationDisplay;
