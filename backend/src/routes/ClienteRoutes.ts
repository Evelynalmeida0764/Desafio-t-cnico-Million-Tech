import { Router } from 'express';
import Express from 'express'; // Importa o Express
import { ClienteController } from '../controllers/ClienteController';
import LoginController from '../controllers/LoginController'; // Importa o LoginController
import cors from 'cors'; // Importa o middleware CORS

const router = Router();    

const clienteController = new ClienteController();
/**
 * @swagger
 * /clientes:
 *   post:
 *     summary: Cria um novo cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               telefone:
 *                 type: string
 *               endereco:
 *                 type: string
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 */
router.post('/clientes', (req, res) => clienteController.registrarCliente(req, res));

/**
 * @swagger
 * /clientes:
 *   get:
 *     summary: Lista todos os clientes
 *     responses:
 *       200:
 *         description: Lista de clientes
 */
router.get('/clientes', (req, res) => clienteController.listarClientes(req, res));

/**
 * @swagger
 * /clientes/{id}:
 *   put:
 *     summary: Atualiza um cliente existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do cliente a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               telefone:
 *                 type: string
 *               endereco:
 *                 type: string
 *             required:
 *               - nome
 *               - email
 *               - telefone
 *     responses:
 *       200:
 *         description: Cliente atualizado com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Cliente não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put('/clientes/:id', (req, res) => clienteController.atualizarCliente(req, res));
//  A PARTIR DAQUI O COPILOT FAZ PRA CONECTAR COM O FRONT NÃO SEI PQ
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Realiza o login do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *       401:
 *         description: Credenciais inválidas
 */
router.post('/auth/login', new LoginController().login); // Adiciona a rota de login

export default router;