import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTableContainer = styled(TableContainer)({
  marginBottom: '16px',
});

function PivotTable({ data }) {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Tabela Pivot
      </Typography>
      <StyledTableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Gênero</TableCell>
              <TableCell>Tipo de Uso</TableCell>
              <TableCell>Tempo Médio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.linha}</TableCell>
                <TableCell>{item.coluna}</TableCell>
                <TableCell>{item.tempo_medio.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </div>
  );
}

export default PivotTable;
