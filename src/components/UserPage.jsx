import React from 'react';
import '../css/UserPage.css';
import {Link, useNavigate} from 'react-router-dom';

function UserPage() {

  let navigate = useNavigate();

  function Close(){
    const userName = '';
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
    localStorage.setItem('userPassword', userPassword);
    navigate("../",{replace: true});

  }
  return (
    <>
      <header className="App-header">
          <Link className="link" to="/">Inicio</Link>
          <button onClick={Close}>Cerras Sesión</button>
      </header>
      <div className='App-bodyu'>
            <h1>Bienvenido {localStorage.getItem("userName")}</h1>
        <div className='containeru'>
          <div className='container-left'>
            <h2>Cuenta de ahorros y corriente</h2>
            <h3>Ahorros: </h3>
            <p>Saldo disponible: $7.235.600</p>
          </div>
          <div className='container-right'>
            <h2>Tarjetas de crédito</h2>
            <h3>Mastercard ***123: </h3>
            <p>Cupo disponible: $6.000.000</p>
            <p>Pago mínimo: $200.000</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserPage;