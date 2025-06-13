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

function deletarUsuario(req, res) {
  const email = req.params.email;

  try {
    if (!fs.existsSync(filePath)) return res.status(404).json({ error: 'Base de usuários não encontrada.' });

    const data = fs.readFileSync(filePath, 'utf-8');
    let usuarios = JSON.parse(data);
    const inicial = usuarios.length;

    usuarios = usuarios.filter(user => user.email !== email);

    if (usuarios.length === inicial) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    fs.writeFileSync(filePath, JSON.stringify(usuarios, null, 2));
    res.status(200).json({ message: 'Usuário deletado com sucesso.' });

  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar usuário.' });
  }
}


module.exports = {
  listarUsuarios,
  registrarUsuario,
  deletarUsuario
};
