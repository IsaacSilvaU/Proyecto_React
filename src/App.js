import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Inicio from './components/Inicio'
import UserPage from './components/UserPage'
import NotFound from './components/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login/>}/>  
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/UserPage" element={<UserPage/>}/>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      <footer className='App-footer'>
        <a className="App-link" href="https://www.linkedin.com/in/isaac-nahaniel-silva-urbina-0685b3100/" target="_blank"rel="noopener noreferrer">
          Elaborado por Estudiante Semillero Java
        </a>
        <a className="App-link2" href="https://vasscompany.com/" target="_blank"rel="noopener noreferrer">
          VASS Company - Complex made Simple
        </a>
      </footer>
    </Router>
  );
}

export default App;
