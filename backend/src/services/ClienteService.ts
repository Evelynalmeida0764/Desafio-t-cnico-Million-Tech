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
alert(clientes.length)
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
    public async atualizarCliente(id: number, clienteData: Partial<Cliente>): Promise<Cliente | null> {
        try {
            const [linhasAtualizadas, clientesAtualizados] = await Cliente.update(clienteData, {
                where: { id },
                returning: true, // Retorna os dados atualizados
            });

            if (linhasAtualizadas === 0) {
                return null; // Nenhum cliente foi atualizado
                alert('Nenhum cliente encontrado para atualizar');
            }

            return clientesAtualizados[0]; // Retorna o cliente atualizado
        } catch (error) {
            console.error('Erro ao atualizar cliente:', error);
            throw error;
        }
    }
}