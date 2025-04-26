import { Sequelize } from 'sequelize';
import { Cliente } from './../models/ClienteModel';
import { ClienteController } from './../controllers/ClienteController';

// Configuração do Sequelize
const sequelize = new Sequelize('Cliente', 'postgres', ' ', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false, // Desativa logs de SQL no console (opcional)
});

// Função para conectar ao banco de dados
export const connectDatabase = async (): Promise<void> => {
    try {
        await sequelize.authenticate();
        console.log('Connected to the PostgreSQL database');
    } catch (error) {
        console.error('Database connection error:', error);
        throw error;
    }
};

// Exporta o Sequelize para ser usado nos modelos
export default sequelize;