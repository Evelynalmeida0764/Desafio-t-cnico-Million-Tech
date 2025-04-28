import React, { useState } from 'react';
import axios from 'axios';

const Login: React.FC = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const api = axios.create({
            baseURL: 'http://localhost:3000/api/',
        });
      const response = await api.post<{ message: string; token: string }>('auth/login', {
        usuario,
        senha,
      });

      alert(response.data.message); // Exibe a mensagem de sucesso


            
      localStorage.setItem('token', response.data.token); // Salva o token no localStorage
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erro ao fazer login');
    }
  };

  return (
    <div style={{textAlign: 'center', marginTop: '50px '}}>
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