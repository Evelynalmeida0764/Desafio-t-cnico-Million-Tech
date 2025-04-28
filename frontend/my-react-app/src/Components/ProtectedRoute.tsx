import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = sessionStorage.getItem('token'); // Verifica se o token está salvo

  if (!token) {
    // Se o token não existir, redireciona para a página de erro
    return <Navigate to="/NaoAutorizado" />;
  }

  return <>{children}</>; // Renderiza o conteúdo protegido
};

export default ProtectedRoute;