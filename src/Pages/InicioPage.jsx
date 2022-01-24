import React, { useEffect, Suspense } from 'react';
import '../css/Inicio.css';
import { Skeleton, Stack } from '@chakra-ui/react';
import { Link } from "react-router-dom";
//const Image = lazy(()=>import('./banco-online.jpg'));
function InicioPage() {
  const accnt = localStorage.getItem('account');
  var account = false;
  if(accnt === 'true'){
    account = true;
    console.log(account);
  }else if(accnt === 'false'){
    account = false
    console.log(account);
  }
  useEffect(()=>{
  },[]);

return (
  <div className="App">
    <header className="App-header">
      {account ? <Link className="link" to="/UserPage">Tu Cuenta</Link> : <p></p>}
      <Link className="link" to="/Login">Login</Link>
      <Link className="link" to="/SignUp">Registro</Link>
    </header>

    <div className='App-bodyi'>
      <h1>BANCO HOLA-COLOMBIA</h1>
      <p className='parrafo'>Tu mejor Banco Online</p>
      <Suspense fallback={<Stack>
        <Skeleton height='20px' />
        <Skeleton height='20px' />
        <Skeleton height='20px' />
        </Stack>}
      >
        <img src='./banco-online.jpg' className='image' alt='Imagen descriptiva'></img>
      </Suspense>
    </div>
  </div>
  );
}

export default InicioPage;