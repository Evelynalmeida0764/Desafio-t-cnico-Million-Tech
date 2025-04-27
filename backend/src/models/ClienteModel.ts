import { DataTypes, Model } from 'sequelize';
import sequelize from '../Data/DataContext';

export class Cliente extends Model {
    public id!: number;
    public nome!: string;
    public email!: string;
    public telefone?: string;
    public endereco?: string;
}

Cliente.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        endereco: { // Certifique-se de que o campo está configurado corretamente
            type: DataTypes.STRING,
            allowNull: true, // Permite valores nulos
        },
    },
    {
        sequelize,
        modelName: 'Cliente',
        tableName: 'clientes',
        timestamps: false,
    }
);