import React, { useState, useEffect } from 'react';

const AtualizandoCliente: React.FC = () => {
  const [client, setClient] = useState({ name: '', email: '' });

  useEffect(() => {
    // Lógica para buscar os dados do cliente
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClient({ ...client, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para atualizar o cliente
    await fetch('/api/clients/1', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(client),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="name"
          value={client.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={client.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Atualizar Cliente</button>
    </form>
  );
};

export default AtualizandoCliente;