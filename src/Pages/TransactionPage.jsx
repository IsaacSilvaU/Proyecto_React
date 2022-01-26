import '../css/Transaction.css';
import { Link } from "react-router-dom";
import React, { Suspense, lazy } from 'react';
import { Skeleton, Stack } from '@chakra-ui/react';
const Transaction = lazy(()=>import('../components/Transaction'));

export default function TransactionPage(){

return(
  <>
    <header className="App-header-T">
        <Link className="link-T" to="/">Inicio</Link>
        <Link className="link-T" to="/UserPage">Tu Cuenta</Link>
    </header>
    <div className='App-body-T'>
      <h1>BANCO HC</h1>
      <h2>Realizar Transferencia</h2>
      <div className="container-T">
        <Suspense fallback={<Stack>
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          </Stack>}
          >
          <Transaction/>
        </Suspense>
      </div>
    </div>
  </>
  )
}