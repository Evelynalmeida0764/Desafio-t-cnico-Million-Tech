import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdicionarCliente from '../Pages/AdicionarCliente';
import AtualizarCliente from '../Pages/AtualizarCliente';
import ListaCliente from '../Pages/ListaClientes';

const MainApp: React.FC = () => {
  return (
    <div>
      <Routes>
        {/* Redireciona para ListaCliente ao acessar /app */}
        <Route path="/" element={<Navigate to="/ListaCliente" replace />} />
        <Route path="/AdicionarCliente" element={<AdicionarCliente />} />
        <Route path="/AtualizarCliente" element={<AtualizarCliente />} />
      </Routes>
    </div>
  );
};

export default MainApp;