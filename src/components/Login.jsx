import React, { useState } from "react";
import '../css/Login.css';
import { useNavigate } from "react-router-dom";
import { Button, useToast, useColorMode, InputGroup, InputRightElement, InputLeftElement, useColorModeValue, Center, Box, Text, Input } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon, LockIcon } from "@chakra-ui/icons";
    
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
    <form>
        <ul>
            <li>
                <label for="text">Nombre de Usuario: </label>
                <input type="text" value={userUser2} onChange={(v)=>setUserUser(v.target.value)} placeholder=" User name"></input>
            </li>
            <li>
            <label for="text">Contraseña: </label>
            <Box className="Input2" w="100%" mp='5vw'>
              <InputGroup>
                <InputLeftElement
                    children={<LockIcon color={colorInteractiveElements} />}
                />
                <Input
                    value={userPassword2}
                    onChange={(v)=>setUserPassword(v.target.value)}
                    color={colorText}
                    bg={colorBackgroundInputs}
                    placeholder="password"
                    borderColor="black"
                    _hover={{ borderColor: colorHover }}
                    type={show ? "text" : "password"}
                />
                <InputRightElement onClick={handleClick}>
                    {show ? (
                    <ViewOffIcon color={colorShowIcon} />
                    ) : (
                    <ViewIcon color={colorShowIcon} />
                    )}
                </InputRightElement>
                </InputGroup>
            </Box>
            </li>

{/*             <Center>

<Box w="100%">
      <Text>Email:</Text>
      <InputGroup>
        <Input
          color={colorText}
          bg={colorBackgroundInputs}
          placeholder="email@email.com"
          borderColor="black"
          _hover={{ borderColor: colorHover }}
        />
      </InputGroup>
    </Box>

    <Box w="100%">
      <Text>Password:</Text>
      <InputGroup>
        <InputLeftElement
          children={<LockIcon color={colorInteractiveElements} />}
        />
        <Input
          color={colorText}
          bg={colorBackgroundInputs}
          placeholder="password"
          borderColor="black"
          _hover={{ borderColor: colorHover }}
          type={show ? "text" : "password"}
        />
        <InputRightElement onClick={handleClick} left='8vw'>
          {show ? (
            <ViewOffIcon color={colorShowIcon} />
          ) : (
            <ViewIcon color={colorShowIcon} />
          )}
        </InputRightElement>
      </InputGroup>
    </Box>
</Center> */}

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