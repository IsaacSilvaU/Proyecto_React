import '../css/UserPage.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useToast, Button } from '@chakra-ui/react';

export default function Transaction(){
  const [userCC2, setUserCC2] = useState('');
  const [userBalance2, setUserBalance] = useState(0);


  let navigate = useNavigate();
  const toast = useToast();

  function TransactionBalance(){
  const userDocument = localStorage.getItem('userDocument');

    console.log("Hola1");

    if (userCC2==='' || userBalance2===''){
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
        console.log(typeof userInfo.balance);

        if(userCC2 === userInfo.userCC){
            console.log("Hola4");
            const user ={
                userName:userInfo.userName,
                userLastN:userInfo.userLastN,
                userCC:userInfo.userCC, 
                userMail:userInfo.userMail, 
                userPhone:userInfo.userPhone, 
                userAddress:userInfo.userAddress, 
                userUser:userInfo.userUser, 
                userPassword:userInfo.userPassword,
                balance:parseInt(userInfo.balance) + parseInt(userBalance2),
                credit:userInfo.credit,
                debt:userInfo.debt,
            };
            listaDeObjetos[i] = JSON.stringify(user);
            console.log(listaDeObjetos[i]);
            const JsonRegistry = JSON.stringify(listaDeObjetos);
            console.log(JsonRegistry);
            localStorage.setItem('JsonRegistry',JsonRegistry);

            toast({
                title: `Transferencia de ${userBalance2} a ${userInfo.userName} realizado exitosamente`,
                status: "success",
                duration: 2000,
                isClosable: true,
            });
            navigate("../UserPage",{replace: true});
            comprobation = 2;
        }else if (i === listaDeObjetos.length-1 && comprobation !== 2){
        toast({
          title: "Información de usuario incorrecta",
          status: "warning",
          duration: 1000,
          isClosable: true,
        });
      }
    }
    for(let i=0; i < listaDeObjetos.length; i++) {
      userInfo = JSON.parse(listaDeObjetos[i]);
      console.log(userInfo.userCC);

      if(userDocument === userInfo.userCC){
          console.log("Hola6");
          const user ={
              userName:userInfo.userName,
              userLastN:userInfo.userLastN,
              userCC:userInfo.userCC, 
              userMail:userInfo.userMail, 
              userPhone:userInfo.userPhone, 
              userAddress:userInfo.userAddress, 
              userUser:userInfo.userUser, 
              userPassword:userInfo.userPassword,
              balance:parseInt(userInfo.balance) - parseInt(userBalance2),
              credit:userInfo.credit,
              debt:userInfo.debt,
          };
          listaDeObjetos[i] = JSON.stringify(user);
          console.log(listaDeObjetos[i]);
          const JsonRegistry = JSON.stringify(listaDeObjetos);
          console.log(JsonRegistry);
          localStorage.setItem('JsonRegistry',JsonRegistry);
        }
      }
  }
}

return (
<>
        <h3 className="subtitle">Por favor diligenciar todos los datos</h3>
        <br/>
        <form>
            <ul>
                <li>
                <h3>Cédula de la persona a transferir</h3>
                    <label for="number">CC: </label>
                    <input type="number" value={userCC2} onChange={(v)=>setUserCC2(v.target.value)} placeholder=" Número de CC"></input>
                </li>
                <br/>
                <li>
                    <label for="number">Monto a transferir: </label>
                    <input type="number" value={userBalance2} onChange={(v)=>setUserBalance(v.target.value)} placeholder=""></input>
                </li>
            </ul>
        </form>
        <div className="btn">
          <Button className="btn-R" onClick={TransactionBalance} size='md' colorScheme='teal' fontSize='0.9vw'>
              Enviar monto
          </Button>
        </div>
    </>
  )
}