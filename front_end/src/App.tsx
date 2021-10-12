import { useCallback, useState } from "react";
import { css } from "@emotion/css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { EntradaDados } from "./components/EntradaDados";
import { Historico } from "./components/Historico";
import api from "./api/apiCalculo";
import { AxiosError } from "axios";

interface InterfaceHistorico {
  solucao: number;
  numeroInicial: number,
  tempoExecucao: number;
}

export function App() {
  const [historicoDeCalculos, setHistoricoDeCalculos] = useState<
    InterfaceHistorico[]
  >([]);

  // constante que armazena o máximo de consultas permitidas pelo usuário por sessão
  const numeroMaximoDeConsultas: number = 30;

  const enviarDados = useCallback(
    async (numero: number) => {
      if (numero >= 100) {

        await api
          .get(`/calculo?input=${numero}`)
          .then((response) => {
            setHistoricoDeCalculos([...historicoDeCalculos, response.data]);
          })
          .catch((error: Error | AxiosError) => {
            toast.error(
              `Erro na comunicação com o servidor com a seguinte mensagem: ${error.message}`
            );
          });
      } else {
        toast.error("Por favor insira um número maior do que 100.");
      }
    },
    [historicoDeCalculos]
  );

  return (
    <>
      <div className={styles.container}>
        <EntradaDados enviarDadosHandler={enviarDados} />
        <Historico historico={historicoDeCalculos} />
      </div>
      <ToastContainer />
    </>
  );
}

const styles = {
  container: css`
    font-family: "Roboto", sans-serif;
    margin: 0;
    margin-top: 2rem;
    padding: 0;
    box-sizing: border-box;
    html {
      @media (max-width: 1080px) {
        font-size: 93.75%;
      }
      @media (max-width: 720px) {
        font-size: 87.5%;
      }
    }
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
};