import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Link className="link" to="/Login">Login</Link>
          <Link className="link" to="/SignUp">Registro</Link>
          <Routes>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
          </Routes>
        </BrowserRouter>
      </header>
      <body className='App-body'>
        <h1>
          BANCO HOLA-MUNDO
        </h1>
        <p>Tu mejor Banca Online</p>
        <img src='./banco-online.jpg' className='image'></img>
      </body>
      <footer className='App-footer'>
        <a
          className="App-link"
          href="https://vasscompany.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Elaborado por Estudiante Semillero Java - VASS
        </a>
      </footer>
    </div>
  );
}

export default App;
