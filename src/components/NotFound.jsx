import React from 'react';
import '../css/NotFound.css';
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="App">
      <header className="App-header">
        <Link className="link" to="/">Inicio</Link>
        <Link className="link" to="/Login">Login</Link>
        <Link className="link" to="/SignUp">Registro</Link>
      </header>

      <div className='App-bodyE'>
        <img src='./error-404.jpg' className='imageError' alt='Sitio no encontrado'></img>
      </div>
    </div>
  );
}

export default NotFound;