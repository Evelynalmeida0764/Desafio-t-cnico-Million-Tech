import React, { useState } from 'react';

const AdicionarCliente: React.FC = () => {
    const [clienteName, setClienteName] = useState('');
    const [clienteEmail, setClienteEmail] = useState('');
    const [clienteTelefone, setClienteTelefone] = useState('');
    const [clienteEndereço, setClienteEndereço] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle client creation logic here
        console.log('Cliente Adicionado:', { clienteName, clienteEmail, clienteTelefone, clienteEndereço });
    };

    return (
        <div className="container">
            <h2>Adicionar Cliente</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                <label className="form-label">Nome:</label>
                <input
                    className="form-control"
                    type="text"
                    value={clienteName}
                    onChange={(e) => setClienteName(e.target.value)}
                    required
                />
                </div>

                <div className="mb-2">
                <label className="form-label">Email:</label>
                <input
                    className="form-control"
                    type="email"
                    value={clienteEmail}
                    onChange={(e) => setClienteEmail(e.target.value)}
                    required
                />
                </div>

                <div className="mb-2">
                <label className="form-label">Telefone:</label>
                <input
                    className="form-control"
                    type="tel"
                    value={clienteTelefone}
                    onChange={(e) => setClienteTelefone(e.target.value)}
                    required
                />
                </div>

                <div className="mb-2">
                <label className="form-label">Endereço:</label>
                <input
                    className="form-control"
                    type="text"
                    value={clienteEndereço}
                    onChange={(e) => setClienteEndereço(e.target.value)}
                    required
                />
                </div>

                <button className="btn btn-primary" type="submit">Adicionar Cliente</button>
            </form>
            </div>
    );
};

export default AdicionarCliente;