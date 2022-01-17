import React, {Component} from 'react';
import '../css/Inicio.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";/* 
import Login from './components/Login'
import SignUp from './components/SignUp' */

function Inicio() {
  return (
    <div className="App">
      <header className="App-header">
        <Link className="link" to="/Login">Login</Link>
        <Link className="link" to="/SignUp">Registro</Link>
      </header>

      <div className='App-body'>
        <h1>BANCO HOLA-MUNDO</h1>
        <p className='parrafo'>Tu mejor Banca Online</p>
        <img src='./banco-online.jpg' className='image'></img>
      </div>
    </div>
  );
}

export default Inicio;
