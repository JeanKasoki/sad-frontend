import React, { useState } from 'react';
import { Typography, Paper, styled, FormControl, InputLabel, Select, MenuItem, Slider, Button } from '@mui/material';

const StyledPaper = styled(Paper)({
  padding: '16px',
  marginBottom: '16px',
  backgroundColor: '#f5f5f5',
  border: '1px solid #ccc',
  overflow: 'auto',
  maxHeight: '600px',
});

function ClassificationDisplay() {
  const [idade, setIdade] = useState(10); // Valor inicial
  const [genero, setGenero] = useState('Masculino');
  const [tipoUso, setTipoUso] = useState('Recreativo');
  const [tipoDia, setTipoDia] = useState('Fim de Semana');
  const [classificacao, setClassificacao] = useState('');
  const [sugestoes, setSugestoes] = useState([]);

  // Função para simular a classificação de risco (substitua com sua lógica real)
  const simularClassificacao = () => {
    // *** AQUI VOCÊ VAI SUBSTITUIR COM A LÓGICA DO SEU MODELO DE CLASSIFICAÇÃO ***
    // Esta é apenas uma simulação para o exemplo
    let risco = 0;
    let sugestoesSimuladas = [];

    if (idade < 12) risco += 2;
    if (genero === 'Masculino') risco += 1;
    if (tipoUso === 'Recreativo') risco += 3;
    if (tipoDia === 'Fim de Semana') risco += 1;

    if (risco <= 3) {
      setClassificacao('Baixo');
      sugestoesSimuladas = ['Continue com hábitos saudáveis de uso de tela.', 'Incentive atividades fora das telas.'];
    } else if (risco <= 5) {
      setClassificacao('Médio');
      sugestoesSimuladas = ['Estabeleça horários para o uso de tela.', 'Monitore o conteúdo que está sendo consumido.'];
    } else {
      setClassificacao('Alto');
      sugestoesSimuladas = ['Reduza o tempo de tela, especialmente nos fins de semana.', 'Procure ajuda profissional para dependência de tela.'];
    }

    setSugestoes(sugestoesSimuladas);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Simulador de Classificação de Risco de Dependência
      </Typography>
      <StyledPaper>
        <FormControl fullWidth margin="normal">
          <InputLabel id="idade-label">Idade</InputLabel>
          <Slider
            value={idade}
            onChange={(e, newValue) => setIdade(newValue)}
            aria-labelledby="idade-label"
            valueLabelDisplay="auto"
            min={5} // Idade mínima (ajuste conforme necessário)
            max={15} // Idade máxima (ajuste conforme necessário)
          />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="genero-label">Gênero</InputLabel>
          <Select
            labelId="genero-label"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          >
            <MenuItem value="Masculino">Masculino</MenuItem>
            <MenuItem value="Feminino">Feminino</MenuItem>
            <MenuItem value="Outro">Outro/Prefiro não dizer</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="tipo-uso-label">Tipo de Uso</InputLabel>
          <Select
            labelId="tipo-uso-label"
            value={tipoUso}
            onChange={(e) => setTipoUso(e.target.value)}
          >
            <MenuItem value="Educacional">Educacional</MenuItem>
            <MenuItem value="Recreativo">Recreativo</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="tipo-dia-label">Tipo de Dia</InputLabel>
          <Select
            labelId="tipo-dia-label"
            value={tipoDia}
            onChange={(e) => setTipoDia(e.target.value)}
          >
            <MenuItem value="Dia de Semana">Dia de Semana</MenuItem>
            <MenuItem value="Fim de Semana">Fim de Semana</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" color="primary" onClick={simularClassificacao}>
          Simular Classificação
        </Button>

        {classificacao && (
          <div style={{ marginTop: '16px' }}>
            <Typography variant="h6">
              Classificação de Risco: <span style={{ fontWeight: 'bold' }}>{classificacao}</span>
            </Typography>
            {/* Aqui você pode adicionar mais informações ao passar o mouse (tooltip) */}
            {/* Por exemplo: "Baseado em: idade > 6.5 e uso recreativo" */}
          </div>
        )}

        {sugestoes.length > 0 && (
          <div style={{ marginTop: '16px' }}>
            <Typography variant="subtitle1">Sugestões:</Typography>
            <ul>
              {sugestoes.map((sugestao, index) => (
                <li key={index}>{sugestao}</li>
              ))}
            </ul>
          </div>
        )}
      </StyledPaper>
    </div>
  );
}

export default ClassificationDisplay;
