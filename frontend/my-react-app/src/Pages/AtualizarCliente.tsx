import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import ClienteForm from '../Components/ClienteForm';
import { ICliente } from '../types/ICliente';
import { pegarClientePorId, atualizarCliente } from '../services/ClienteService'; // você vai precisar criar essas funções!

const AtualizarCliente: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [cliente, setCliente] = useState<ICliente | null>(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  useEffect(() => {
    const carregarCliente = async () => {
      try {
        if (id) {
          const dadosCliente = await pegarClientePorId(parseInt(id));
          setCliente(dadosCliente);
        }
      } catch (error) {
        console.error('Erro ao buscar cliente:', error);
        setErro('Erro ao carregar dados do cliente.');
      }
    };

    carregarCliente();
  }, [id]);

  const handleAtualizarCliente = async (dadosAtualizados: Omit<ICliente, 'id'>) => {
    setLoading(true);
    setErro('');

    try {
      if (id) {
        await atualizarCliente(parseInt(id), dadosAtualizados);
        alert('Cliente atualizado com sucesso!');
        navigate('/ListaCliente');
      }
    } catch (error) {
      console.error('Erro ao atualizar cliente:', error);
      setErro('Erro ao atualizar cliente.');
    } finally {
      setLoading(false);
    }
  };

  if (!cliente) {
    return (
      <>
        <Navbar />
        <div className="container mt-4">
          <p>Carregando dados do cliente...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>Atualizar Cliente</h2>
        <ClienteForm
          cliente={cliente}
          onSubmit={handleAtualizarCliente}
          loading={loading}
          erro={erro}
          tituloBotao="Salvar"
        />
      </div>
    </>
  );
};

export default AtualizarCliente;
