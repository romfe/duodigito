// importação das bibliotecas da aplicação
import { useState } from "react";
import { css } from '@emotion/css';

interface EntradaDadosProps {
  enviarDadosHandler: (numeroEntrada: number) => void
}

export const EntradaDados = (props: EntradaDadosProps) => {

  // estado que armazena o número informado pelo usuário
  const [numeroDeEntrada, setNumeroDeEntrada] = useState(0)

  const changeNumeroHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumeroDeEntrada(parseFloat(event.target.value));
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
        className={css`
        margin-top:2rem;
        padding: 0 1.5rem;
        height: 3rem;
        border-radius:.25rem;
        background:#E7E9EE;
        border:1px solid #D7D7D7;
        font-weight:400;
        font-size:1rem;
        &::placeholder{
          color:#969CB3;
        }
        `}
      />
      <button
        onClick={enviarDados}
        className={css`
        padding:.25rem;
        width:7rem;
        height:3rem;
        background:#5429CC;
        color:#FFF;
        border-radius:.25rem;
        border:0;
        font-size:1rem;
        margin-top:1.5rem;
        font-weight:600;
        transition:filter .5s;
        &:hover{
          filter:brightness(.9);
        }  
        `}
      >Enviar
      </button>
    </>
  );
}