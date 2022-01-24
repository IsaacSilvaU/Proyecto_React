import '../css/SignUp.css';
import { Link } from "react-router-dom";
import SignUp from "../components/SignUp"

export default function SignUpPage(){

return(
  <>
    <header className="App-header">
        <Link className="link" to="/">Inicio</Link>
        <Link className="link" to="/Login">Login</Link>
    </header>
    <div className='App-body'>
      <h1>BANCO HC</h1>
      <h2>Registro a sucursal virtual</h2>
      <div className="container">
        <SignUp/>
      </div>
    </div>
  </>
  )
}