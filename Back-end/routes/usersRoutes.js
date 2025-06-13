const express = require('express');
const router = express.Router();
const {
  listarUsuarios,
  registrarUsuario,
  deletarUsuario,
  atualizarUsuario
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

/**
 * @swagger
 * /usuarios/{email}:
 *   delete:
 *     summary: Remove um usuário pelo e-mail
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
router.delete('/:email', deletarUsuario);

/**
 * @swagger
 * /usuarios/{email}:
 *   put:
 *     summary: Atualiza os dados de um usuário pelo e-mail
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: E-mail do usuário a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
router.put('/:email', atualizarUsuario);

module.exports = router;
