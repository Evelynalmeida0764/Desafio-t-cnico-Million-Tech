import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdicionarCliente from './Pages/AdicionarCliente';
import AtualizarCliente from './Pages/AtualizarCliente';
import ListaCliente from './Pages/ListaClientes';


const App: React.FC = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ml-2" >
        <Link to="/AdicionarCliente">AdicionarCliente</Link>
        <Link to="/ListaCliente">ListaCliente</Link>
      </nav>
      <Routes>
        <Route path="/AdicionarCliente" element={<AdicionarCliente />} />
        <Route path="/ListaCliente" element={<ListaCliente />} />
        <Route path="/AtulizarCliente" element={<AtualizarCliente />} />
      </Routes>
    </Router>
  );
};

export default App;