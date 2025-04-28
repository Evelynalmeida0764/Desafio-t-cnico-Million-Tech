// src/Components/ClienteForm.tsx
import React, { useState, useEffect } from 'react';
import { ICliente } from '../types/ICliente';

interface ClienteFormProps {
  cliente?: ICliente; // cliente opcional, para modo de edição
  onSubmit: (cliente: Omit<ICliente, 'id'>) => void;
  loading?: boolean;
  erro?: string;
  tituloBotao?: string;
}

const ClienteForm: React.FC<ClienteFormProps> = ({
  cliente,
  onSubmit,
  loading = false,
  erro = '',
  tituloBotao = 'Salvar'
}) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  useEffect(() => {
    if (cliente) {
      setNome(cliente.nome || '');
      setEmail(cliente.email || '');
      setTelefone(cliente.telefone || '');
      setEndereco(cliente.endereco || '');
    }
  }, [cliente]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ nome, email, telefone: telefone || undefined, endereco: endereco || undefined });
  };

  return (
    <form onSubmit={handleSubmit}>
      {erro && (
        <div className="alert alert-danger" role="alert">
          {erro}
        </div>
      )}

      <div className="mb-3">
        <label className="form-label">Nome:</label>
        <input
          className="form-control"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          className="form-control"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Telefone:</label>
        <input
          className="form-control"
          type="tel"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Endereço:</label>
        <input
          className="form-control"
          type="text"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" type="submit" disabled={loading}>
        {loading ? 'Salvando...' : tituloBotao}
      </button>
    </form>
  );
};

export default ClienteForm;
