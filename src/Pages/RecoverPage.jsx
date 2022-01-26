import '../css/Recover.css';
import { Link } from "react-router-dom";
import React, { Suspense, lazy } from 'react';
import { Skeleton, Stack } from '@chakra-ui/react';
const Recover = lazy(()=>import('../components/Recover'));

export default function RecoverPage(){

return(
  <>
    <header className="App-header-R">
        <Link className="link-R" to="/">Inicio</Link>
        <Link className="link-R" to="/Login">Login</Link>
    </header>
    <div className='App-body-R'>
      <h1>BANCO HC</h1>
      <h2>Recuperación de usuario y clave</h2>
      <div className="container-R">
        <Suspense fallback={<Stack>
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          </Stack>}
          >
          <Recover/>
        </Suspense>
      </div>
    </div>
  </>
  )
}