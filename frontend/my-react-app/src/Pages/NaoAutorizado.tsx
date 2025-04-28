import React from 'react';
import { useNavigate } from 'react-router-dom';

const NaoAutorizado: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Você não está autorizado a visualizar esta página</h1>
      <button onClick={() => navigate('/')}>Voltar para o Login</button>
    </div>
  );
};

export default NaoAutorizado;