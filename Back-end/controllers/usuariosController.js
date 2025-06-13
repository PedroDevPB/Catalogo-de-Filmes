const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/users.json');

function listarUsuarios(req, res) {
  try {
    const data = fs.existsSync(filePath)
      ? fs.readFileSync(filePath, 'utf-8')
      : '[]';
    const usuarios = JSON.parse(data);
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao ler usuários' });
  }
}

function registrarUsuario(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Campos obrigatórios ausentes.' });
  }

  try {
    const data = fs.existsSync(filePath)
      ? fs.readFileSync(filePath)
      : '[]';
    let usuarios = JSON.parse(data);
    usuarios = usuarios.filter(user => user.email !== email);
    usuarios.push({ name, email, password });

    fs.writeFileSync(filePath, JSON.stringify(usuarios, null, 2));
    res.status(201).json({ message: 'Usuário registrado com sucesso.' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao registrar usuário' });
  }
}

module.exports = {
  listarUsuarios,
  registrarUsuario
};
