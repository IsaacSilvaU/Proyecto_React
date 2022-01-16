import React from 'react';
import '../css/Inicio.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function Inicio() {
  return (
    <body className='App-body'>
      <h1>BANCO HOLA-MUNDO</h1>
      <p className='parrafo'>Tu mejor Banca Online</p>
      <img src='./banco-online.jpg' className='image'></img>
    </body>
  );
}

export default Inicio;
