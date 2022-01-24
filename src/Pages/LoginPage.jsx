import React, { Suspense, lazy } from 'react';
import { Skeleton, Stack } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import '../css/Login.css';
const Login = lazy(()=>import('../components/Login'));

export default function LoginPage(){

return(
  <>
    <header className="App-header">
        <Link className="link" to="/">Inicio</Link>
        <Link className="link" to="/SignUp">Registro</Link>
    </header>
    <div className='App-bodyl'>
        <h1>BANCO HC</h1>
        <h2>Inicio de Sesión</h2>
        <div className="containerl">
        <Suspense fallback={<Stack>
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          </Stack>}
        >
            <Login/>
        </Suspense>
        </div>
    </div>
  </>
  )
}