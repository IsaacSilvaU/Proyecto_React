import '../css/UserPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import React, { Suspense, lazy } from 'react';
import { Skeleton, Stack } from '@chakra-ui/react';
const UserAccount = lazy(()=>import('../components/UserAccount'));

function UserPage() {
  const toast = useToast();

  let navigate = useNavigate();
  function Close(){
    const user = '';
    const account = false;
    localStorage.setItem('account', account);
    localStorage.setItem('user', user);
    toast({
      title: "Sesión Cerrada. Serás redirigido al inicio",
      status: "success",
      duration: 1000,
      isClosable: true,
      position: 'top',
    });
    setTimeout(() => {
      navigate("../",{replace: true});}, 1300);
  }

return (
  <>
    <header className="App-header">
      <Link className="link" to="/">Inicio</Link>
      <button onClick={Close}>Cerras Sesión</button>
    </header>
    <Suspense fallback={<Stack>
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      <Skeleton height='20px' />
      </Stack>}
    >
      <UserAccount/>
    </Suspense>
  </>
  )
}

export default UserPage;