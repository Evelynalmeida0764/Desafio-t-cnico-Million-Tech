import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { connectDatabase } from '../src/Data/DataContext';
import { Cliente } from './models/ClienteModel';
import clienteRoutes from './routes/ClienteRoutes';

const app = express();

// Middleware para processar JSON
app.use(express.json());

// Configuração do Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Desafio Million Tech',
            version: '1.0.0',
            description: 'Documentação da API usando Swagger',
        },
        servers: [
            {
                url: 'http://localhost:3000/api', // Inclua o prefixo /api aqui
            },
        ],
    },
    apis: ['./src/routes/*.ts'] // Caminho para os arquivos de rotas
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Conexão com o banco de dados e sincronização
const startApp = async () => {
    try {
        await connectDatabase();
        await Cliente.sync(); // Sincroniza o modelo Cliente com o banco de dados
        console.log('Database synchronized');

        // Inicia o servidor
        app.listen(3000, () => {
            console.log('Servidor rodando em http://localhost:3000');
            console.log('Swagger disponível em http://localhost:3000/api-docs');
        });
    } catch (error) {
        console.error('Error starting the application:', error);
    }
};

app.use('/api', clienteRoutes); // Prefixo para as rotas

startApp();