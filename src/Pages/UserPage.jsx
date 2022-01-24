import '../css/UserPage.css';
import { Link, useNavigate } from 'react-router-dom';
import UserAccount from '../components/UserAccount';

function UserPage() {
  let navigate = useNavigate();
  function Close(){
    const user = '';
    const account = false;
    localStorage.setItem('account', account);
    localStorage.setItem('user', user);
    navigate("../",{replace: true});
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