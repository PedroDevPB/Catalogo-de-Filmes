const fs = require('fs');
const path = require('path');

const getFilmes = () => {
  const dataPath = path.join(__dirname, '../data/filmes.json');
  const filmesData = fs.readFileSync(dataPath);
  return JSON.parse(filmesData);
};

module.exports = { getFilmes };
