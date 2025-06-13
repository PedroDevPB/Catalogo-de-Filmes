
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/filmes.json');

/**
 * @swagger
 * /filmes:
 *   get:
 *     summary: Lista todos os filmes
 *     responses:
 *       200:
 *         description: Lista de filmes.
 */
router.get('/', (req, res) => {
  const filmes = lerFilmes();
  res.json(filmes);
});

/**
 * @swagger
 * /filmes/{id}:
 *   get:
 *     summary: Busca um filme por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Filme encontrado
 *       404:
 *         description: Filme não encontrado
 */
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
