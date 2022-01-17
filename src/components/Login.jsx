import React, { useState } from "react";
import '../css/Login.css';
import { Link, useNavigate } from "react-router-dom";

export default function Login(){
    const [userUser2, setUserUser] = useState('');
    const [userPassword2, setUserPassword] = useState('');
    let navigate2 = useNavigate();
    
    function LogIn(){
        const userUser = localStorage.getItem('userUser');
        const userPassword = localStorage.getItem('userPassword');
        const userName = localStorage.getItem("userName");
        
        if ((userUser2 === userUser && userPassword2 === userPassword) && (userUser2 !== '' || userPassword2 !== '')){
            console.log("Bienvenido")
            alert(`Bienvenido ${userName}`)
            navigate2("../UserPage",{replace: true});
        }else if (userUser2 === '' || userPassword2 === ''){
            alert("No se ha ingresado la información completa.")
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
      <body className='App-bodyl'>
          <h1>BANCO HC</h1>
          <h2>Inicio de Sesión</h2>
          <div className="containerl">
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