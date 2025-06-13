const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/filmes.json');
const { listarFilmes } = require('../controllers/filmesController');

router.get('/filmes', listarFilmes);

module.exports = router;


router.get('/', (req, res) => {
  const filmes = lerFilmes();
  res.json(filmes);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const filmes = lerFilmes();
  const filme = filmes.find(f => f.id === id);

  if (filme) {
    res.status(200).json(filme);
  } else {
    res.status(404).json({ mensagem: 'Filme não encontrado' });
  }
});

function lerFilmes() {
  const dados = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(dados);
}

module.exports = router;