import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import AtualizarCleinte from './Pages/AtualizarCliente';
import ListaCliente from './Pages/ListaClientes';
import AdicionarCliente from './Pages/AdicionarCliente';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/ListaCliente' element={<ListaCliente />} />
        <Route path='/AdicionarCliente' element={<AdicionarCliente />} />
        <Route path='/AtualizarCliente/:id' element={<AtualizarCleinte />} />
      </Routes>
    </Router>
  );
};

export default App;
