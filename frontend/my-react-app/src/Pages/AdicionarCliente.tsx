import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { criarCliente } from '../services/ClienteService';
import { ICliente } from '../types/ICliente';
import ClienteForm from '../Components/ClienteForm';

const AdicionarCliente: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  const handleAdicionarCliente = async (novoCliente: Omit<ICliente, 'id'>) => {
    setLoading(true);
    setErro('');

    try {
      if (!novoCliente.nome.trim()) {
        throw new Error('Nome é obrigatório');
      }
      if (!novoCliente.email.trim()) {
        throw new Error('Email é obrigatório');
      }

      await criarCliente(novoCliente);

      alert('Cliente adicionado com sucesso!');
      navigate('/ListaCliente');
    } catch (error) {
      console.error('Erro ao adicionar cliente:', error);
      setErro(error instanceof Error ? error.message : 'Erro ao adicionar cliente');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>Adicionar Cliente</h2>
        <ClienteForm
          onSubmit={handleAdicionarCliente}
          loading={loading}
          erro={erro}
          tituloBotao="Adicionar Cliente"
        />
      </div>
    </>
  );
};

export default AdicionarCliente;
