import React, {useState} from "react";
import '../css/SignUp.css';
import { useNavigate} from "react-router-dom";
import { Button, useToast } from '@chakra-ui/react'

var registry = [];

export default function SignUp(){
    const [userName, setUserName] = useState('');
    const [userLastN, setUserLastN] = useState('');
    const [userCC, setUserCC] = useState('');
    const [userMail, setUserMail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [userUser, setUserUser] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const toast = useToast();

    function Delete(){
      setUserName('');
      setUserLastN('');
      setUserCC('');
      setUserMail('');
      setUserPhone('');
      setUserAddress('');
      setUserUser('');
      setUserPassword('');
      console.log("Delete")
    }

    let navigate = useNavigate();

    function Registro(){
        let balance = Math.trunc(Math.random()*(100000000 - 100000) + 100000);
        let credit = Math.trunc(Math.random()*(10000000 - 10000) + 10000);
        let debt = Math.trunc(Math.random()*(1000000 - 1000) + 1000);

/*         const internationalNumberFormat = new Intl.NumberFormat('en-US');
        balance = internationalNumberFormat.format(balance);
        credit = internationalNumberFormat.format(credit);
        debt = internationalNumberFormat.format(debt); */

        if (userName==='' || userLastN==='' || userCC==='' || userUser==='' || userPassword===''){
            toast({
                title: `Error. Como mínimo debes ingresar tu nombre y apellido, cédula, nombre de usuario y contraseña.`,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }else{
            const user ={
                userName:userName,
                userLastN:userLastN,
                userCC:userCC, 
                userMail:userMail, 
                userPhone:userPhone, 
                userAddress:userAddress, 
                userUser:userUser, 
                userPassword:userPassword,
                balance:balance,
                credit:credit,
                debt:debt,
            };
    
            const JsonReg = JSON.stringify(user);
            registry.push(JsonReg);
            const JsonRegistry = JSON.stringify(registry);
            localStorage.setItem('JsonRegistry',JsonRegistry);
            toast({
                title: `¡Registro exitoso!`,
                status: "success",
                duration: 1000,
                isClosable: true,
            });
            navigate("../Login",{replace: true});
        }
    }

return(
    <>
    <form>
        <ul>
            <li>
                <label for="name">Nombres: </label>
                <input type="text" value={userName} onChange={(v)=>setUserName(v.target.value)} placeholder=" Nombres"></input> 
            </li>
            <li>
                <label for="name">Apellidos: </label>
                <input type="text" value={userLastN} onChange={(v)=>setUserLastN(v.target.value)} placeholder=" Apellidos"></input>
            </li>
            <li>
                <label for="number">Cédula de Ciudadanía: </label>
                <input type="number" value={userCC} onChange={(v)=>setUserCC(v.target.value)} placeholder=" Número de CC"></input>
            </li>
            <li>
                <label for="mail">Correo Electrónico: </label>
                <input type="mail" value={userMail} onChange={(v)=>setUserMail(v.target.value)} placeholder=" tucorreo@email"></input>
            </li>
            <li>
                <label for="number">Número de teléfono: </label>
                <input type="number" value={userPhone} onChange={(v)=>setUserPhone(v.target.value)} placeholder=" # de Contacto"></input>
            </li>
            <li>
                <label for="text">Dirección: </label>
                <input type="text" value={userAddress} onChange={(v)=>setUserAddress(v.target.value)} placeholder=" Residencia"></input>
            </li>
            <li>
                <label for="text">Nombre de Usuario: </label>
                <input type="text" value={userUser} onChange={(v)=>setUserUser(v.target.value)} placeholder=" User name"></input>
            </li>
            <li>
                <label for="passowrd">Contraseña: </label>
                <input type="password" value={userPassword} onChange={(v)=>setUserPassword(v.target.value)} placeholder=" Password"></input>
            </li>
        </ul>
    </form>
    <div className="btn">
        <Button className="btn-left" onClick={Delete} size='md' colorScheme='blackAlpha' fontSize='0.9vw'>
            Limpiar
        </Button>
        <Button className="btn-right" onClick={Registro} size='md' colorScheme='teal' fontSize='0.9vw'>
            Registrar
        </Button>
    </div>
    </>
  )
}