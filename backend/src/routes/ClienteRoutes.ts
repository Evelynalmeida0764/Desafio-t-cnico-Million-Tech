import { Router } from 'express';
import { ClienteController } from '../controllers/ClienteController';

const router = Router();
const clienteController = new ClienteController();

export function setClienteRoutes(app: Router) {
    app.post('/clientes/register', clienteController.registrarCliente.bind(clienteController));
    app.get('/clientes', clienteController.listarClientes.bind(clienteController));
}