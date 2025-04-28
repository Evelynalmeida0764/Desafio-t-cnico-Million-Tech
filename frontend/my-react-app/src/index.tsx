import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/global.css';
import { Navbar } from 'react-bootstrap';


ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);