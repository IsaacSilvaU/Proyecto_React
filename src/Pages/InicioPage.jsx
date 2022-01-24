import React from 'react';
import '../css/Inicio.css';
import { Link } from "react-router-dom";
import { useEffect } from "react";

function InicioPage() {
  useEffect(()=>{
    const account = localStorage.getItem('account');
    if(account === 'true'){
      console.log(account);
    }else if(account === 'false'){
      console.log(account);
    }
  },[]);

return (
  <div className="App">
    <header className="App-header">
      <Link className="link" to="/UserPage">Tu Cuenta</Link>
      <Link className="link" to="/Login">Login</Link>
      <Link className="link" to="/SignUp">Registro</Link>
    </header>

    <div className='App-bodyi'>
      <h1>BANCO HOLA-COLOMBIA</h1>
      <p className='parrafo'>Tu mejor Banco Online</p>
      <img src='./banco-online.jpg' className='image' alt='Imagen descriptiva'></img>
    </div>
  </div>
  );
}

export default InicioPage;