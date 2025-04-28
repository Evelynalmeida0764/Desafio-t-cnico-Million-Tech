import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { pegarTodosClientes } from '../services/ClienteService'; // Importa o serviço para consumir a API
import { ICliente } from '../types/ICliente';

const ListaCliente: React.FC = () => {
    const [clientes, setClientes] = useState<ICliente[]>([]); // Estado para armazenar os clientes

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const clientes = await pegarTodosClientes(); // Chama o serviço e obtém os dados
                setClientes(clientes); // Atualiza o estado com os dados recebidos
            } catch (error) {
                console.error('Erro ao buscar clientes:', error);
            }
        };

        fetchClientes();
    }, []);

    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <h1>Lista de Clientes</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Email</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Endereço</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((cliente, index) => (
                            <tr key={cliente.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{cliente.nome}</td>
                                <td>{cliente.email}</td>
                                <td>{cliente.telefone || 'Não informado'}</td>
                                <td>{cliente.endereco || 'Não informado'}</td>
                                <td>
                                    <button type="button" className="btn btn-primary">
                                        <Link
                                            to={`/AtualizarCliente/${cliente.id}`}
                                            style={{ color: 'white', textDecoration: 'none' }}
                                        >
                                            Editar
                                        </Link>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ListaCliente;