import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTableContainer = styled(TableContainer)({
  marginBottom: '16px',
  overflowX: 'auto', // Manter o overflow automático para outras situações, se necessário
  maxWidth: '100%', // Adiciona uma largura máxima para evitar overflow excessivo
});

const StyledPaper = styled(Paper)({
  padding: '16px',
  marginBottom: '16px',
  backgroundColor: '#f5f5f5',
  border: '1px solid #ccc',
  // overflow: 'auto', // Removi o overflow aqui, pois o TableContainer cuidará do scroll se necessário
  maxHeight: '600px', // Opcional: ajuste a altura máxima se necessário
});

function PivotTable() {
  const data = [
    { genero: 'Feminino', educacional: 1.27, recreativo: 3.10, total: 4.37 },
    { genero: 'Masculino', educacional: 1.23, recreativo: 3.38, total: 4.61 },
    { genero: 'Outro/Prefiro não dizer', educacional: 1.18, recreativo: 3.31, total: 4.49 },
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
      Tempo Médio de Uso por Gênero e Atividade
      </Typography>
      <StyledPaper>
        <StyledTableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Gênero</TableCell>
                <TableCell>Educacional</TableCell>
                <TableCell>Recreativo</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.genero}</TableCell>
                  <TableCell>{row.educacional}</TableCell>
                  <TableCell>{row.recreativo}</TableCell>
                  <TableCell>{row.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
      </StyledPaper>
    </div>
  );
}

export default PivotTable;
