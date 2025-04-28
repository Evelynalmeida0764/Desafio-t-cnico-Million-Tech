import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import AtualizarCleinte from './Pages/AtualizarCliente';
import ListaCliente from './Pages/ListaClientes';
import AdicionarCliente from './Pages/AdicionarCliente';
import NaoAutorizado from './Pages/NaoAutorizado'; // Importa a página de erro
import ProtectedRoute from './Components/ProtectedRoute'; // Importa o ProtectedRoute

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/ListaCliente"
          element={
            <ProtectedRoute>
              <ListaCliente />
            </ProtectedRoute>
          }
        />
        <Route
          path="/AdicionarCliente"
          element={
            <ProtectedRoute>
              <AdicionarCliente />
            </ProtectedRoute>
          }
        />
        <Route
          path="/AtualizarCliente/:id"
          element={
            <ProtectedRoute>
              <AtualizarCleinte />
            </ProtectedRoute>
          }
        />
        <Route path="/NaoAutorizado" element={<NaoAutorizado />} />
      </Routes>
    </Router>
  );
};

export default App;
