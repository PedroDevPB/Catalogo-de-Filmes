const express = require('express');
const router = express.Router();
const {
  listarUsuarios,
  registrarUsuario
} = require('../controllers/usuariosController');

router.get('/', listarUsuarios);
router.post('/', registrarUsuario);

module.exports = router;
