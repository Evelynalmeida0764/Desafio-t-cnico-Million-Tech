import { Cliente } from '../models/ClienteModel';

export class ClienteService {
    // Método para criar um novo cliente
    public async criarCliente(clienteData: {
        nome: string;
        email: string;
        telefone?: string;
        endereco?: string;
    }): Promise<Cliente> {
        try {
            const novoCliente = await Cliente.create(clienteData);
            return novoCliente;
        } catch (error) {
            console.error('Erro ao criar cliente:', error);
            throw error;
        }
    }

    // Método para buscar todos os clientes
    public async pegarTodosClientes(): Promise<Cliente[]> {
        try {
            const clientes = await Cliente.findAll();
            return clientes;
        } catch (error) {
            console.error('Erro ao buscar clientes:', error);
            throw error;
        }
    }

    // Método para buscar um cliente por ID
    public async pegarClientePorId(id: number): Promise<Cliente | null> {
        try {
            const cliente = await Cliente.findByPk(id);
            return cliente;
        } catch (error) {
            console.error('Erro ao buscar cliente por ID:', error);
            throw error;
        }
    }

    // Método para atualizar um cliente
    public async atualizarCliente(id: number, clienteData: Partial<Cliente>): Promise<[number, Cliente[]]> {
        try {
            const linhasAtualizadas = await Cliente.update(clienteData, {
                where: { id },
                returning: true, // Retorna os dados atualizados (opcional)
            });
            return linhasAtualizadas;
        } catch (error) {
            console.error('Erro ao atualizar cliente:', error);
            throw error;
        }
    }
}