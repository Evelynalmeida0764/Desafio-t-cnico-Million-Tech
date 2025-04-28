import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const ListaCliente: React.FC = () => {
    const [cliente, setClients] = useState<any[]>([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await fetch('/api/clientes'); // Adjust the API endpoint as needed
                const data = await response.json();
                setClients(data);
            } catch (error) {
                console.error('Error fetching clients:', error);
            }
        };

        fetchClients();
    }, []);


    return (        
        <>
        <Navbar/>    
        <table className="table">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                        <button type="button" className="btn btn-primary">
                            <Link to="/atualizar-cliente" style={{ color: 'white', textDecoration: 'none' }}>
                            AtualizarCliente
                            </Link>
                        </button>
                    </td>                
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>
                        <button type="button" className="btn btn-primary">
                            <Link to="/atualizar-cliente" style={{ color: 'white', textDecoration: 'none' }}>
                            AtualizarCliente
                            </Link>
                        </button>
                    </td>    
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>John</td>
                    <td>Doe</td>
                    <td>@social</td>
                    <td>
                        <button type="button" className="btn btn-primary">
                            <Link to="/atualizar-cliente" style={{ color: 'white', textDecoration: 'none' }}>
                            AtualizarCliente
                            </Link>
                        </button>
                    </td>    
                </tr>
            </tbody>
        </table>
        </>
    );
};

export default ListaCliente;