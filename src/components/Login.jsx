import '../css/Login.css';
import { useNavigate } from "react-router-dom";
import UserPage from './UserPage';

export default function Login(userUser2, userPassword2){
    let navigate2 = useNavigate();
    let text = '';

    const listaDeObjetos = JSON.parse(localStorage.getItem('JsonRegistry'));
    console.log(listaDeObjetos);

    for(let i=0; i < listaDeObjetos.length; i++) {
        var userInfo = JSON.parse(listaDeObjetos[i]);
        console.log(userInfo.userName);
        console.log(userUser2);

        if(userInfo.userUser === userUser2){
            console.log(userInfo.userUser);
            console.log(userInfo.userPassword);
            
            if ((userUser2 === userInfo.userUser && userPassword2 === userInfo.userPassword) && (userUser2 !== '' || userPassword2 !== '')){
                console.log(`Bienvenido ${userInfo.userName}`);
                alert(`Bienvenido ${userInfo.userName}`);
                //var Name = userInfo.userName;
                <UserPage name= "hola"/>;
                navigate2("../UserPage",{replace: false});

            }else if (userPassword2 === ''){
                alert("No se ha ingresado la información completa.")
                text = "No se ha ingresado la información completa."
            }else if (userUser2 !== userInfo.userUser && userPassword2 !== userInfo.userPassword){
                alert("Usuario o contraseña incorrectos.");
                text = "Usuario o contraseña incorrectos."
            }else{
                alert("Usuario o contraseña incorrectos.");
                text = "Usuario o contraseña incorrectos."
            }
            break;
        }
    }
    if (userUser2 !== userInfo.userUser ){
        alert("Usuario no encontrado");
        text = "Usuario no encontrado"
    }
    return text
}