import { useState } from "react";

export const EntradaDados = () => {
  const [numeroDeEntrada, setNumeroDeEntrada] = useState(0)
  const changeNumeroHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumeroDeEntrada(parseInt(event.target.value))
  }
  const enviarDados = () => {
    if (numeroDeEntrada >= 100) {
      console.log("O número enviado foi: ", numeroDeEntrada);
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