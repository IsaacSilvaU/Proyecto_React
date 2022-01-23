import React, { useState } from "react";
import '../css/Login.css';
import { Link, useNavigate } from "react-router-dom";
import UserPage from './UserPage';

export default function Login(){
    
    const [userUser2, setUserUser] = useState('');
    const [userPassword2, setUserPassword] = useState('');
    let navigate2 = useNavigate();
    
    function LogIn(){
        const listaDeObjetos = JSON.parse(localStorage.getItem('JsonRegistry'));
        console.log(listaDeObjetos);

        function Search(userUser2, listaDeObjetos){

            for(let i=0; i < listaDeObjetos.length; i++) {
                var userInfo = JSON.parse(listaDeObjetos[i]);
                console.log(userInfo.userName);
                console.log(userUser2);

                if(userInfo.userUser === userUser2){
                    console.log(userInfo.userUser);
                    console.log(userInfo.userPassword);
                    
                    if ((userUser2 === userInfo.userUser && userPassword2 === userInfo.userPassword) && (userUser2 !== '' || userPassword2 !== '')){
                        console.log(`Bienvenido ${userInfo.userName}`);
                        alert(`Bienvenido ${userInfo.userName}`);
                        var Name = userInfo.userName;
                        <UserPage name= "hola"/>;
                        navigate2("../UserPage",{replace: false});

                    }else if (userPassword2 === ''){
                        alert("No se ha ingresado la información completa.")
                    }else if (userUser2 !== userInfo.userUser && userPassword2 !== userInfo.userPassword){
                        alert("Usuario o contraseña incorrectos.");
                    }else{
                        alert("Usuario o contraseña incorrectos.");
                    }
                    break;
                }
            }
            if (userUser2 !== userInfo.userUser ){
                alert("Usuario no encontrado");
            }
        }

        Search(userUser2, listaDeObjetos);
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
              <form>
                  <ul>
                    <li>
                        <label for="text">Nombre de Usuario: </label>
                        <input type="text" value={userUser2} onChange={(v)=>setUserUser(v.target.value)} placeholder=" User name"></input>
                    </li>
                    <li>
                        <label for="passowrd">Contraseña: </label>
                        <input type="password" value={userPassword2} onChange={(v)=>setUserPassword(v.target.value)} placeholder=" Password"></input>
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