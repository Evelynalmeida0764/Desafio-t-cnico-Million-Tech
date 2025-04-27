import React, { useState } from 'react';

const AdicionarCliente: React.FC = () => {
    const [clienteName, setClienteName] = useState('');
    const [clienteEmail, setClienteEmail] = useState('');
    const [clienteTelefone, setClienteTelefone] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle client creation logic here
        console.log('Cliente Adicionado:', { clienteName, clienteEmail, clienteTelefone });
    };

    return (
        <div>
            <h1>Adicinar Cliente</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={clienteName}
                            onChange={(e) => setClienteName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={clienteEmail}
                            onChange={(e) => setClienteEmail(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Phone:
                        <input
                            type="tel"
                            value={clienteTelefone}
                            onChange={(e) => setClienteTelefone(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Adicionar CLiente</button>
            </form>
        </div>
    );
};

export default AdicionarCliente;