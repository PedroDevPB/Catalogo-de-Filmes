
const express = require('express');
const router = express.Router();
const {
  listarUsuarios,
  registrarUsuario
} = require('../controllers/usuariosController');

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Lista todos os usuários
 *     responses:
 *       200:
 *         description: Lista de usuários.
 */
router.get('/', listarUsuarios);

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Registra um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso.
 */
router.post('/', registrarUsuario);

module.exports = router;
