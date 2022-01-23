import React from 'react';
import '../css/UserPage.css';
import {Link, useNavigate} from 'react-router-dom';

function UserPage(props) {
  let navigate = useNavigate();
  const listaDeObjetos = JSON.parse(localStorage.getItem('JsonRegistry'));
  const user = localStorage.getItem('user');
  //window.location.href = window.location.href.split("UserPage/")[0]+"/Luis";
  for(let i=0; i < listaDeObjetos.length; i++) {
    const userInfo = JSON.parse(listaDeObjetos[i]);
    
    if(userInfo.userName === user){
      var userName = userInfo.userName;
      var userLastN = userInfo.userLastN;
      var userCC = userInfo.userCC;
      var userPhone = userInfo.userPhone;
      var userMail = userInfo.userMail;
      var userAddress = userInfo.userAddress;
      var balance = userInfo.balance;
      var credit = userInfo.credit;
      var debt = userInfo.debt;
      break;
    }/* else if(userInfo.userName !== user){
      alert("No has iniciado sesión, serás redirigido al login en 3 segundos");
      setTimeout(() => {navigate("../Login",{replace: false});}, 3000);
    } */
}

  function Close(){
/*     const userName = '';
    const userLastN = '';
    const userCC = '';
    const userMail = '';
    const userPhone = '';
    const userAddress = '';
    const userUser = '';
    const userPassword = '';
    localStorage.setItem('userName', userName);
    localStorage.setItem('userLastN', userLastN);
    localStorage.setItem('userCC', userCC);
    localStorage.setItem('userMail', userMail);
    localStorage.setItem('userPhone', userPhone);
    localStorage.setItem('userAddress', userAddress);
    localStorage.setItem('userUser', userUser);
    localStorage.setItem('userPassword', userPassword); */
    navigate("../",{replace: true});

  }
  return (
    <>
      <header className="App-header">
          <Link className="link" to="/">Inicio</Link>
          <button onClick={Close}>Cerras Sesión</button>
      </header>
      <div className='App-bodyu'>
            <h1>Bienvenido {userName}</h1>
        <div className='containeru'>
          <div className='container-left'>
            <h2>Cuentas de ahorros y corriente</h2>
            <h3>Ahorros: </h3>
            <p>Saldo disponible: ${balance}</p>
            <br/><br/>
            <h2>Información de contacto:</h2>
            <p>Nombre de usuario: {userName} {userLastN}</p>
            <p>Documento de identidad: {userCC}</p>
            <p>Correo electrónico: {userMail}</p>
            <p>Teléfono de contacto: {userPhone}</p>
            <p>Dirección: {userAddress}</p>
          </div>
          <div className='container-right'>
            <h2>Tarjetas de crédito</h2>
            <h3>Mastercard ***123: </h3>
            <p>Cupo disponible: ${credit}</p>
            <p>Pago mínimo: ${debt}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserPage;