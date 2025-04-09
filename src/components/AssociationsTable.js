import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTableContainer = styled(TableContainer)({
  marginBottom: '16px',
});

function AssociationsTable({ data }) {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Regras de Associação
      </Typography>
      <StyledTableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Antecedentes</TableCell>
              <TableCell>Consequentes</TableCell>
              <TableCell>Suporte</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((association, index) => (
              <TableRow key={index}>
                <TableCell>{association.antecedents.join(', ')}</TableCell>
                <TableCell>{association.consequents.join(', ')}</TableCell>
                <TableCell>{association.support.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </div>
  );
}

export default AssociationsTable;
