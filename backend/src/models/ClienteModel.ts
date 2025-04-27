import { DataTypes, Model } from 'sequelize';
import sequelize from '../Data/DataContext';

export class Cliente extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public telefone?: string;
    public endereço?: string;
}

Cliente.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        endereço: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'Cliente',
        tableName: 'clientes',
        timestamps: true, // Adiciona os campos createdAt e updatedAt automaticamente
    }
);