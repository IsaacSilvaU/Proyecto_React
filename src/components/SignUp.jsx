import React, {useState} from "react";
import '../css/SignUp.css';
import { Link, useNavigate} from "react-router-dom";

var registry = [];

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

        const user ={
            userName:userName,
            userLastN:userLastN,
            userCC:userCC, 
            userMail:userMail, 
            userPhone:userPhone, 
            userAddress:userAddress, 
            userUser:userUser, 
            userPassword:userPassword,
        };
        
        const JsonReg = JSON.stringify(user);
        registry.push(JsonReg);
        const JsonRegistry = JSON.stringify(registry)
        localStorage.setItem('JsonRegistry',JsonRegistry)
        //console.log(registry);

        console.log("Registro exitoso");
        alert('Registro exitoso!');
        navigate("../Login",{replace: true});
    }
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
                            <input type="text" value={userName} onChange={(v)=>setUserName(v.target.value)} placeholder=" Nombres"></input> 
                        </li>
                        <li>
                            <label for="name">Apellidos: </label>
                            <input type="text" value={userLastN} onChange={(v)=>setUserLastN(v.target.value)} placeholder=" Apellidos"></input>
                        </li>
                        <li>
                            <label for="number">Cédula de Ciudadanía: </label>
                            <input type="number" value={userCC} onChange={(v)=>setUserCC(v.target.value)} placeholder=" Número de CC"></input>
                        </li>
                        <li>
                            <label for="mail">Correo Electrónico: </label>
                            <input type="mail" value={userMail} onChange={(v)=>setUserMail(v.target.value)} placeholder=" tucorreo@email"></input>
                        </li>
                        <li>
                            <label for="number">Número de teléfono: </label>
                            <input type="number" value={userPhone} onChange={(v)=>setUserPhone(v.target.value)} placeholder=" # de Contacto"></input>
                        </li>
                        <li>
                            <label for="text">Dirección: </label>
                            <input type="text" value={userAddress} onChange={(v)=>setUserAddress(v.target.value)} placeholder=" Residencia"></input>
                        </li>
                        <li>
                            <label for="text">Nombre de Usuario: </label>
                            <input type="text" value={userUser} onChange={(v)=>setUserUser(v.target.value)} placeholder=" User name"></input>
                        </li>
                        <li>
                            <label for="passowrd">Contraseña: </label>
                            <input type="password" value={userPassword} onChange={(v)=>setUserPassword(v.target.value)} placeholder=" Password"></input>
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