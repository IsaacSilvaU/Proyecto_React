import React, {useState} from "react";
import '../css/Recover.css';
import { useNavigate} from "react-router-dom";
import { Button, useToast } from '@chakra-ui/react';

export default function Recover(){
    const [userCC2, setUserCC2] = useState('');
    const [userMail2, setUserMail2] = useState('');
    const [userUser2, setUserUser2] = useState('');
    const [userPassword2, setUserPassword2] = useState('');

    const toast = useToast();

    function Delete(){
        setUserCC2('');
        setUserMail2('');
        setUserUser2('');
        setUserPassword2('');
    }

    let navigate2 = useNavigate();
    function Recovering(){
        console.log("Hola1");
        if (userMail2==='' || userCC2==='' || userUser2==='' || userPassword2===''){
            toast({
                title: `Error. Por favor diligenciar todos los campos.`,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            console.log("Hola2");
        }else{
            const listaDeObjetos = JSON.parse(localStorage.getItem('JsonRegistry'));
            console.log("Hola3");
            let comprobation = 1;
            for(let i=0; i < listaDeObjetos.length; i++) {
                var userInfo = JSON.parse(listaDeObjetos[i]);
                console.log(userInfo.userMail);
                console.log(userInfo.userCC);
                if(userMail2 === userInfo.userMail){
                    if(userCC2 === userInfo.userCC){
                        console.log("Hola4");
                        const user ={
                            userName:userInfo.userName,
                            userLastN:userInfo.userLastN,
                            userCC:userInfo.userCC, 
                            userMail:userInfo.userMail, 
                            userPhone:userInfo.userPhone, 
                            userAddress:userInfo.userAddress, 
                            userUser:userUser2, 
                            userPassword:userPassword2,
                            balance:userInfo.balance,
                            credit:userInfo.credit,
                            debt:userInfo.debt,
                        };
                        listaDeObjetos[i] = JSON.stringify(user);
                        console.log(listaDeObjetos[i]);
                        const JsonRegistry = JSON.stringify(listaDeObjetos);
                        console.log(JsonRegistry);
                        localStorage.setItem('JsonRegistry',JsonRegistry);

                        toast({
                            title: `Datos actualizados ${userInfo.userName}. Serás redirigido al login`,
                            status: "success",
                            duration: 1000,
                            isClosable: true,
                        });
                        navigate2("../Login",{replace: true});
                        comprobation = 2;
                    }
                }else if (i === listaDeObjetos.length-1 && comprobation !== 2){
                    toast({
                        title: "Información de usuario incorrecta",
                        status: "warning",
                        duration: 1000,
                        isClosable: true,
                    });
                }
            }
        }
    }

return(
    <>
        <h3 className="subtitle">Por favor diligenciar todos los datos</h3>
        <form>
            <ul>
                <li>
                <h3>Ingresa el correo electrónico y cédula de registro</h3>
                    <label for="mail">Correo Electrónico: </label>
                    <input type="mail" value={userMail2} onChange={(v)=>setUserMail2(v.target.value)} placeholder=" tucorreo@email"></input>
                </li>
                <li>
                    <label for="number">CC: </label>
                    <input type="number" value={userCC2} onChange={(v)=>setUserCC2(v.target.value)} placeholder=" Número de CC"></input>
                </li>
                <br/>
                <li>
                <h3>Ingresa los nuevos datos de usuario</h3>
                    <label for="text">Nuevo nombre de Usuario: </label>
                    <input type="text" value={userUser2} onChange={(v)=>setUserUser2(v.target.value)} placeholder=" User name"></input>
                </li>
                <br/>
                <li>
                    <label for="passowrd">Nueva Contraseña: </label>
                    <input type="password" value={userPassword2} onChange={(v)=>setUserPassword2(v.target.value)} placeholder=" Password"></input>
                </li>
            </ul>
        </form>
        <div className="btn">
            <Button className="btn-left-R" onClick={Delete}>
                Limpiar
            </Button>
            <Button className="btn-right-R" onClick={Recovering}>
                Actualizar
            </Button>
        </div>
    </>
  )
}