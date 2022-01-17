import React, {useState} from "react";
import '../css/SignUp.css';
import { Link, useNavigate} from "react-router-dom";

export default function SignUp(){
    const [userName, setUserName] = useState('');
    const [userLastN, setUserLastN] = useState('');
    const [userCC, setUserCC] = useState('');
    const [userMail, setUserMail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [userUser, setUserUser] = useState('');
    const [userPassword, setUserPassword] = useState('');
    
    function Delete(){
      setUserName('');
      setUserLastN('');
      setUserCC('');
      setUserMail('');
      setUserPhone('');
      setUserAddress('');
      setUserUser('');
      setUserPassword('');
      console.log("Delete")
    }

    let navigate = useNavigate();

    function Registro(){
        localStorage.setItem('userName', userName);
        localStorage.setItem('userLastN', userLastN);
        localStorage.setItem('userCC', userCC);
        localStorage.setItem('userMail', userMail);
        localStorage.setItem('userPhone', userPhone);
        localStorage.setItem('userAddress', userAddress);
        localStorage.setItem('userUser', userUser);
        localStorage.setItem('userPassword', userPassword);
        console.log("Registro exitoso")
        alert('Registro exitoso!');
        navigate("../Login",{replace: true});
    }

/*     useEffect(()=>{
        <><h1>Registro</h1></>
    },[]); */

  return(
    <>
        <header className="App-header">
            <Link className="link" to="/">Inicio</Link>
            <Link className="link" to="/Login">Login</Link>
        </header>
        <body className='App-body'>
            <h1>BANCO HC</h1>
            <h2>Registro a sucursal virtual</h2>
            <div className="container">
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
                            <input type="number" value={userPhone} onChange={(v)=>setUserPhone(v.target.value)} placeholder=" 317-1263456"></input>
                        </li>
                        <li>
                            <label for="text">Dirección: </label>
                            <input type="text" value={userAddress} onChange={(v)=>setUserAddress(v.target.value)} placeholder=" Cll. 1 Av. 2 #2-21"></input>
                        </li>
                        <li>
                            <label for="text">Nombre de Usuario: </label>
                            <input type="text" value={userUser} onChange={(v)=>setUserUser(v.target.value)} placeholder=" Juan21"></input>
                        </li>
                        <li>
                            <label for="passowrd">Contraseña: </label>
                            <input type="password" value={userPassword} onChange={(v)=>setUserPassword(v.target.value)} placeholder="***"></input>
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