import '../css/UserPage.css';
import { Link, useNavigate } from 'react-router-dom';
import UserAccount from '../components/UserAccount';
import { useToast } from '@chakra-ui/react';

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
    <UserAccount/>
  </>
  )
}

export default UserPage;