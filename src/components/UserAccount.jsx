import '../css/UserPage.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function UserAccount() {
  let navigate = useNavigate();
  const listaDeObjetos = JSON.parse(localStorage.getItem('JsonRegistry'));
  const user = localStorage.getItem('user');
  //window.location.href = window.location.href.split("UserAccount/")[0]+"/Luis";

  for(let i=0; i < listaDeObjetos.length; i++) {
    var userInfo = JSON.parse(listaDeObjetos[i]);
    
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
    }
}
useEffect(()=>{
  if(userInfo.userName !== user){
    alert("No has iniciado sesión, serás redirigido al login");
    setTimeout(() => {navigate("../Login",{replace: false});}, 100);
  }
})

return (
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
  )
}

export default UserAccount;