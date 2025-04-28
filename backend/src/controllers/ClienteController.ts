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
            res.status(500).json({ message: 'Erro ao registrar cliente', error });
        }
    }

    // Listar todos os clientes
    public async listarClientes(req: Request, res: Response): Promise<void> {
        try {
            const clientes = await this.clienteService.pegarTodosClientes();
            res.status(200).json(clientes);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar clientes', error });
        }
    }

    // Buscar cliente por ID
    public async getClienteById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const cliente = await this.clienteService.pegarClientePorId(Number(id));
            if (!cliente) {
                res.status(404).json({ message: 'Cliente não encontrado' });
                return;
            }
            res.status(200).json(cliente);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar cliente', error });
        }
    }

    // Atualizar cliente
    public async atualizarCliente(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const clienteData = req.body;
            const clienteAtualizado = await this.clienteService.atualizarCliente(Number(id), clienteData);

            if (!clienteAtualizado) {
                res.status(404).json({ message: 'Cliente não encontrado' });
                return;
            }

            res.status(200).json(clienteAtualizado); // Retorna o cliente atualizado
        } catch (error) {
            res.status(500).json({ message: 'Erro ao atualizar cliente erro 500', error });
        }
    }
}