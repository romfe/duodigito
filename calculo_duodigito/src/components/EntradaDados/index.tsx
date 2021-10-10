import { useState } from "react";

interface EntradaDadosProps {
  enviarDadosHandler: (numeroEntrada: number) => void
}

export const EntradaDados = (props: EntradaDadosProps) => {
  const [numeroDeEntrada, setNumeroDeEntrada] = useState(0)

  const changeNumeroHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumeroDeEntrada(parseInt(event.target.value));
  }

  const enviarDados = () => {
    props.enviarDadosHandler(numeroDeEntrada);
  }
  return (
    <>
      <input
        type="number"
        id="numero"
        name="numero"
        onChange={changeNumeroHandler}
        placeholder="0"
      />
      <button
        onClick={enviarDados}
      >Enviar
      </button>
    </>
  );
}