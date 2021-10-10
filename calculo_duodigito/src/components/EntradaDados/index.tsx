import { useState } from "react";
//import axios from 'axios';
import api from '../../api/apiCalculo';


export const EntradaDados = () => {
  const [numeroDeEntrada, setNumeroDeEntrada] = useState(0)
  const changeNumeroHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumeroDeEntrada(parseInt(event.target.value))
  }
  const enviarDados = async () => {

    if (numeroDeEntrada >= 100) {
      try {
        const response = await api.get(`/calculo?input=${numeroDeEntrada}`);
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log("[-] Erro!")
      }
    } else {
      console.log("[-] Erro!");
    }
  }
  return (
    <>
      <input
        type="number"
        id="numero"
        name="numero"
        onChange={changeNumeroHandler}
      />
      <button
        onClick={enviarDados}
      >Enviar
      </button>
    </>
  );
}