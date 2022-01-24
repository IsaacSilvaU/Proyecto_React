import React, { useState } from "react";
import '../css/Login.css';
import { useNavigate } from "react-router-dom";
import { Button } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

export default function LoginPage(){
    
    const [userUser2, setUserUser] = useState('');
    const [userPassword2, setUserPassword] = useState('');
    let navigate2 = useNavigate();
    const toast = useToast();

    function LogIn(){
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
                    toast({
                        title: `Bienvenido ${userInfo.userName}`,
                        status: "success",
                        duration: 1000,
                        isClosable: true,
                      });
                    const Name = userInfo.userName;
                    const account = true;
                    localStorage.setItem('user',Name);
                    localStorage.setItem('account',account);
                    navigate2("../UserPage",{replace: true});

                }else if (userPassword2 === ''){
                    toast({
                        title: "No se ha ingresado la información completa.",
                        status: "warning",
                        duration: 1000,
                        isClosable: true,
                      });
                }else{
                    toast({
                        title: "Usuario o contraseña incorrectos.",
                        status: "error",
                        duration: 1000,
                        isClosable: true,
                      });
                }
                break;
            }
        }
        if (userUser2 !== userInfo.userUser ){
            toast({
                title: "Usuario no encontrado",
                status: "error",
                duration: 1000,
                isClosable: true,
            });
        }
    }

return(
  <>
    <form>
        <ul>
            <li>
                <label for="text">Nombre de Usuario: </label>
                <input type="text" value={userUser2} onChange={(v)=>setUserUser(v.target.value)} placeholder=" User name"></input>
            </li>
            <li>
                <label for="passowrd">Contraseña: </label>
                <input type="password" value={userPassword2} onChange={(v)=>setUserPassword(v.target.value)} placeholder=" Password"></input>
            </li>
        </ul>
    </form>
    <div className="btn">
        <Button className="btn-right" onClick={LogIn}>
            Iniciar Sesión
        </Button>
    </div>
  </>
    )
}