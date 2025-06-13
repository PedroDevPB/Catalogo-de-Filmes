const fs = require('fs');
const path = require('path');

const getUsuarios = () => {
  const dataPath = path.join(__dirname, '../data/users.json');
  const UsuariosData = fs.readFileSync(dataPath);
  return JSON.parse(UsuariosData);
};

module.exports = { getUsuarios };
