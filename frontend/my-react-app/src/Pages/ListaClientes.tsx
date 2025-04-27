import React, { useEffect, useState } from 'react';

const ListClients: React.FC = () => {
    const [clients, setClients] = useState<any[]>([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await fetch('/api/clients'); // Adjust the API endpoint as needed
                const data = await response.json();
                setClients(data);
            } catch (error) {
                console.error('Error fetching clients:', error);
            }
        };

        fetchClients();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            await fetch(`/api/clients/${id}`, {
                method: 'DELETE',
            });
            setClients(clients.filter(client => client.id !== id));
        } catch (error) {
            console.error('Error deleting client:', error);
        }
    };

    return (
        <div>
            <h1>List of Clients</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map(client => (
                        <tr key={client.id}>
                            <td>{client.id}</td>
                            <td>{client.name}</td>
                            <td>{client.email}</td>
                            <td>
                                <button onClick={() => handleDelete(client.id)}>Delete</button>
                                <button onClick={() => {/* Navigate to update client page */}}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListClients;