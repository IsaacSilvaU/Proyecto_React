import React, { useState } from "react";
/* import '../css/Login.css'; */
import { useNavigate } from "react-router-dom";
import { Button, useToast, useColorMode, InputGroup, InputRightAddon, InputLeftElement, useColorModeValue, Center, Box, Text, Input, InputRightAddonut, HStack, InputRightElement } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon, LockIcon } from "@chakra-ui/icons";
import Transaction from "./Transaction";
    
export default function LoginPage(){
    
    const [userUser2, setUserUser] = useState('');
    const [userPassword2, setUserPassword] = useState('');
    const [show, setShow] = useState(false);
    const colorShowIcon = useColorModeValue("gray.500", "white");
    const colorInteractiveElements = "blue.600";
    const colorHover = "blue.300";
    const { toggleColorMode } = useColorMode();
    const colorBackground = useColorModeValue("gray.300", "gray.700");
    const colorBackgroundInputs = useColorModeValue("white", "gray.500");
    const colorText = useColorModeValue("black", "white");
    const handleClick = () => setShow(!show);
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
/*                     navigate2(`../UserPage/${userDocument}`,{replace: true});
                    <Transaction userDocument={userDocument}/> */
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
    <Box p={10} pb={5}>
        <HStack>
            <label for="text">Nombre de Usuario: </label>
            <InputGroup p={3} className="Username">
            <Input
                value={userUser2}
                onChange={(v)=>setUserUser(v.target.value)}
                color={colorText}
                bg={colorBackgroundInputs}
                placeholder="username"
                borderColor="black"
                _hover={{ borderColor: colorHover }}
                h='2vw'
            />
            </InputGroup>
        </HStack>
        <HStack>
            <label for="text">Contraseña: </label>
            <InputGroup p={3} className="Password">
            <Input
                value={userPassword2}
                onChange={(v)=>setUserPassword(v.target.value)}
                color={colorText}
                bg={colorBackgroundInputs}
                placeholder="password"
                borderColor="black"
                _hover={{ borderColor: colorHover }}
                type={show ? "text" : "password"}
                h='2vw'
            />
                <InputRightAddon onClick={handleClick} h='2vw'>
                    {show ? (
                    <ViewOffIcon color={colorShowIcon} />
                    ) : (
                    <ViewIcon color={colorShowIcon} />
                    )}
                </InputRightAddon>
            </InputGroup>
        </HStack>

    </Box>
    <div className="btn">
        <Button className="btn-right2" size='md' mt={5} colorScheme='teal' fontSize='0.8vw' variant='outline' onClick={()=>navigate2("../Recover",{replace: true})}>
            ¿Olvidó su contraseña?
        </Button>
        <Button className="btn-right" size='md' mt={5} colorScheme='teal' fontSize='0.9vw' onClick={LogIn}>
            Iniciar Sesión
        </Button>
    </div>
  </>
    )
}