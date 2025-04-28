import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o useNavigate
import api from '../services/api'; // Ajuste o caminho conforme necessário

const Login: React.FC = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Inicializa o hook useNavigate

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post<{ message: string; token: string }>('auth/login', {
        usuario,
        senha,
      });

      alert(response.data.message); // Exibe a mensagem de sucesso
      localStorage.setItem('token', response.data.token); // Salva o token no localStorage
      navigate('/ListaCliente'); // Redireciona para a página de ListaCliente
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erro ao fazer login');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px ' }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;