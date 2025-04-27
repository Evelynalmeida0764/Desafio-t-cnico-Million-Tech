import { Request, Response } from 'express';
import { ClienteService } from '../services/ClienteService';

export class ClienteController {
    private clienteService: ClienteService;

    constructor() {
        this.clienteService = new ClienteService();
    }

    // Criar um novo cliente
    public async registrarCliente(req: Request, res: Response): Promise<void> {
        try {
            const clienteData = req.body;
            const newCliente = await this.clienteService.criarCliente(clienteData);
            res.status(201).json(newCliente);
        } catch (error) {
            res.status(500).json({ message: 'Error registering cliente', error });
        }
    }

    // Listar todos os clientes
    public async listarClientes(req: Request, res: Response): Promise<void> {
        try {
            const clientes = await this.clienteService.pegarTodosClientes();
            res.status(200).json(clientes);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving clientes', error });
        }
    }

    // Buscar cliente por ID
    public async getClienteById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const cliente = await this.clienteService.pegarClientePorId(Number(id));
            if (!cliente) {
                res.status(404).json({ message: 'Cliente not found' });
                return;
            }
            res.status(200).json(cliente);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving cliente', error });
        }
    }

    // Atualizar cliente
    public async atualizarCliente(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const clienteData = req.body;
            const [updatedRows] = await this.clienteService.atualizarCliente(Number(id), clienteData);
            if (updatedRows === 0) {
                res.status(404).json({ message: 'Cliente not found' });
                return;
            }
            res.status(200).json({ message: 'Cliente updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error updating cliente', error });
        }
    }
}