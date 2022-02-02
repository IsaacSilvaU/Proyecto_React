import React, { useState } from "react";
import '../css/Login.css';
import { useNavigate } from "react-router-dom";
import { Button, useToast,  Container,
    ChakraProvider,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
    extendTheme,
    Box, } from '@chakra-ui/react';

    const activeLabelStyles = {
        transform: 'scale(0.85) translateY(-24px) translateX(-10px)',
      }

      export const theme = extendTheme({
        components: {
          Form: {
            variants: {
              floating: {
                container: {
                  _focusWithin: {
                    label: {
                      ...activeLabelStyles,
                    },
                  },
                  'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label':
                    {
                      ...activeLabelStyles,
                    },
                  label: {
                    top: 0,
                    left: 0,
                    zIndex: 2,
                    position: 'absolute',
                    backgroundColor: 'white',
                    pointerEvents: 'none',
                    mx: 3,
                    px: 1,
                    my: 2,
                  },
                },
              },
            },
          },
        },
      })

export default function LoginPage(){
    
    const [userUser2, setUserUser] = useState('');
    const [userPassword2, setUserPassword] = useState('');
    let navigate2 = useNavigate();
    const toast = useToast();

    function LogIn(){
        const listaDeObjetos = JSON.parse(localStorage.getItem('JsonRegistry'));

        for(let i=0; i < listaDeObjetos.length; i++) {
            var userInfo = JSON.parse(listaDeObjetos[i]);
            if(userInfo.userUser === userUser2){
                if ((userUser2 === userInfo.userUser && userPassword2 === userInfo.userPassword) && (userUser2 !== '' || userPassword2 !== '')){
                    toast({
                        title: `Bienvenido ${userInfo.userName}`,
                        status: "success",
                        duration: 1000,
                        isClosable: true,
                      });
                    const userDocument = userInfo.userCC;
                    const account = true;
                    localStorage.setItem('userDocument',userDocument);
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
                        status: "warning",
                        duration: 1000,
                        isClosable: true,
                      });
                }
                break;
            }
        }
        if (userUser2 !== userInfo.userUser ){
            toast({
                title: "Usuario o contraseña incorrectos",
                status: "error",
                duration: 1000,
                isClosable: true,
            });
        }
    }

return(
  <>
      <ChakraProvider theme={theme}>
      <Box p={8}>
        <FormControl variant='floating' id='first-name' isRequired isInvalid>
          <Input placeholder=' ' />
          {/* It is important that the Label comes after the Control due to css selectors */}
          <FormLabel>First name</FormLabel>
          <FormHelperText>Keep it very short and sweet!</FormHelperText>
          <FormErrorMessage>Your First name is invalid</FormErrorMessage>
        </FormControl>
      </Box>
    </ChakraProvider>
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
        <Button className="btn-right2" size='md' colorScheme='teal' fontSize='0.8vw' variant='outline' onClick={()=>navigate2("../Recover",{replace: true})}>
            ¿Olvidó su contraseña?
        </Button>
        <Button className="btn-right" size='md' colorScheme='teal' fontSize='0.9vw' onClick={LogIn}>
            Iniciar Sesión
        </Button>
    </div>
  </>
    )
}