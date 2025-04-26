import { connectDatabase } from '../src/Data/DataContext';
import { Cliente } from './models/ClienteModel';

const startApp = async () => {
    try {
        // Conecta ao banco de dados
        await connectDatabase();

        // Sincroniza os modelos com o banco de dados
        await Cliente.sync(); // Cria a tabela 'clientes' se ela não existir
        console.log('Database synchronized');

        // Inicie o servidor ou outras operações aqui
    } catch (error) {
        console.error('Error starting the application:', error);
    }
};

startApp();