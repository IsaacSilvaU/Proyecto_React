import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Inicio from './components/Inicio'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login/>}/>  
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/" element={<Inicio/>}/>
      </Routes>
      <footer className='App-footer'>
        <a className="App-link" href="https://vasscompany.com/" target="_blank"rel="noopener noreferrer">
          Elaborado por Estudiante Semillero Java - VASS
        </a>
      </footer>
    </Router>
  );
}

export default App;
