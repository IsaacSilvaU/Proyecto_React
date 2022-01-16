import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Inicio from './components/Inicio'

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
            <Route path="/Inicio" element={<Inicio/>}/>
          </Routes>
        </BrowserRouter>
      </header>

      <Inicio/>
        
      <footer className='App-footer'>
        <a className="App-link" href="https://vasscompany.com/" target="_blank"rel="noopener noreferrer">
          Elaborado por Estudiante Semillero Java - VASS
        </a>
      </footer>
    </div>
  );
}

export default App;
