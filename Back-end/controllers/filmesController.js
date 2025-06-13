const { getFilmes } = require('../models/filmesModel');

const listarFilmes = (req, res) => {
  const filmes = getFilmes();
  res.json(filmes);
};

module.exports = { listarFilmes };
