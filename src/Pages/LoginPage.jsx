import '../css/Login.css';
import { Link } from "react-router-dom";
import Login from '../components/Login';

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
            <Login/>
        </div>
    </div>
  </>
  )
}