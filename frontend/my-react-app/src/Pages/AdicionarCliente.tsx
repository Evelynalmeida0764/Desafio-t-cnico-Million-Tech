import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar'; // Ajuste para o seu componente Navbar correto
import { criarCliente } from '../services/ClienteService';
import { ICliente } from '../types/ICliente';

const AdicionarCliente: React.FC = () => {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setErro('');

        try {
            // Validações básicas
            if (!nome.trim()) {
                throw new Error('Nome é obrigatório');
            }
            if (!email.trim()) {
                throw new Error('Email é obrigatório');
            }

            // Criar objeto cliente usando a interface
            const novoCliente: Omit<ICliente, 'id'> = {
                nome,
                email,
                telefone: telefone || undefined,
                endereco: endereco || undefined
            };

            // Chamar o serviço para criar o cliente
            await criarCliente(novoCliente);
            
            alert('Cliente adicionado com sucesso!');
            navigate('/ListaCliente'); // Redireciona para a lista após sucesso
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
                
                {erro && (
                    <div className="alert alert-danger" role="alert">
                        {erro}
                    </div>
                )}
                
                <form onSubmit={handleSubmit}>
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

                    <button 
                        className="btn btn-primary" 
                        type="submit" 
                        disabled={loading}
                    >
                        {loading ? 'Adicionando...' : 'Adicionar Cliente'}
                    </button>
                </form>
            </div>
        </>
    );
};

export default AdicionarCliente;