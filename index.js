const express = require('express');
const db = require('./db');

const app = express();
const PORT = 3000;

app.get('/musicas', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT id, nome_musica FROM musica');
    res.json(rows);
  } catch (error) {
    console.error('Erro completo:', error);
    res.status(500).json({
      erro: 'Erro ao buscar músicas',
      detalhe: error.message
    });
  }
});
    

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});