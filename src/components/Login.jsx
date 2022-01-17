import React, {useEffect, useState} from "react";
import '../css/Login.css';
import { Link } from "react-router-dom";

export default function Login(){
  const [userName, setUserName] = useState('');
  const [userLastN, setUserLastN] = useState('');
  const [userCC, setUserCC] = useState('');
  const [userMail, setUserMail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userAddress, setUserAddress] = useState('');

  function Delete(){
      setUserName('');
      setUserLastN('');
      setUserCC('');
      setUserMail('');
      setUserPhone('');
      setUserAddress('');
      console.log("Delete")
  }

  function Registro(){
      localStorage.setItem('userName', userName);
      localStorage.setItem('userLastN', userLastN);
      localStorage.setItem('userCC', userCC);
      localStorage.setItem('userMail', userMail);
      localStorage.setItem('userPhone', userPhone);
      localStorage.setItem('userAddress', userAddress);
      console.log("hola")
  }

/*     useEffect(()=>{
      <><h1>Registro</h1></>
  },[]); */

return(
  <>
      <header className="App-header">
          <Link className="link" to="/">Inicio</Link>
          <Link className="link" to="/SignUp">Registro</Link>
      </header>
      <body className='App-body'>
          <h1>BANCO HOLA-MUNDO</h1>
          <h2>Registro a sucursal virtual</h2>
          <div className="container">
              {/* <form onSubmit={Registro()}> */}
              <form>
                  <ul>
                      <li>
                          <label for="name">Nombres: </label>
                          <input type="text" value={userName} onChange={(v)=>setUserName(v.target.value)} placeholder=" Juan Carlos"></input> 
                      </li>
                      <li>
                          <label for="name">Apellidos: </label>
                          <input type="text" value={userLastN} onChange={(v)=>setUserLastN(v.target.value)} placeholder=" Silva Colmenarez"></input>
                      </li>
                      <li>
                          <label for="number">Cédula de Ciudadanía: </label>
                          <input type="number" value={userCC} onChange={(v)=>setUserCC(v.target.value)} placeholder=" 123456789"></input>
                      </li>
                      <li>
                          <label for="mail">Correo Electrónico: </label>
                          <input type="mail" value={userMail} onChange={(v)=>setUserMail(v.target.value)} placeholder=" juan@hotmail.com"></input>
                      </li>
                      <li>
                          <label for="number">Número de teléfono: </label>
                          <input type="text" value={userPhone} onChange={(v)=>setUserPhone(v.target.value)} placeholder=" 317-1263456"></input>
                      </li>
                      <li>
                          <label for="text">Dirección: </label>
                          <input type="text" value={userAddress} onChange={(v)=>setUserAddress(v.target.value)} placeholder=" Cll. 1 Av. 2 #2-21"></input>
                      </li>
                  </ul>
              </form>
              <div className="btn">
                  <button className="btn-left" onClick={Delete}>
                      Limpiar
                  </button>
                  <button className="btn-right" onClick={Registro}>
                      Registrar
                  </button>
              </div>
          </div>
      </body>
  </>
    )
}