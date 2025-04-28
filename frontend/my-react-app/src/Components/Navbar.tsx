import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/AdicionarCliente">
            Adicionar Cliente
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ListaCliente">
            Lista de Clientes
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;