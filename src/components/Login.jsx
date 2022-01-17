import React, {useState, useEffect} from "react";
import '../css/Login.css';
import { Link } from "react-router-dom";

export default function Login(){
    const [userUser2, setUserUser] = useState('');
    const [userPassword2, setUserPassword] = useState('');

    function LogIn(){
        const userUser = localStorage.getItem('userUser');
        const userPassword = localStorage.getItem('userPassword');
        const userName = localStorage.getItem("userName");
        
        if (userUser2 == userUser && userPassword2 == userPassword){
            console.log("Bienvenido")
            alert(`Bienvenido ${userName}`)
        }else{
            alert("Usuario o contraseña incorrectos.");
        }

    }

return(
  <>
      <header className="App-header">
          <Link className="link" to="/">Inicio</Link>
          <Link className="link" to="/SignUp">Registro</Link>
      </header>
      <body className='App-body'>
          <h1>BANCO HOLA-MUNDO</h1>
          <h2>Inicio de Sesión</h2>
          <div className="container">
              {/* <form onSubmit={Registro()}> */}
              <form>
                  <ul>
                    <li>
                        <label for="text">Nombre de Usuario: </label>
                        <input type="text" value={userUser2} onChange={(v)=>setUserUser(v.target.value)} placeholder=" Juan21"></input>
                    </li>
                    <li>
                        <label for="passowrd">Contraseña: </label>
                        <input type="password" value={userPassword2} onChange={(v)=>setUserPassword(v.target.value)} placeholder="***"></input>
                    </li>
                  </ul>
              </form>
              <div className="btn">
                  <button className="btn-right" onClick={LogIn}>
                      Iniciar Sesión
                  </button>
              </div>
          </div>
      </body>
  </>
    )
}