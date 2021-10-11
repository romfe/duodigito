import { useState } from 'react';
import { css } from '@emotion/css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { EntradaDados } from './components/EntradaDados';
import { Historico } from './components/Historico';
import api from './api/apiCalculo';

interface InterfaceHistorico {
  solucao: number,
  tempoExecucao: number
}

function App() {
  const [historicoDeCalculos, setHistoricoDeCalculos] = useState<InterfaceHistorico[]>([]);

  const enviarDados = async (numero: number) => {
    if (numero >= 100) {
      try {
        const response = await api.get(`/calculo?input=${numero}`);
        setHistoricoDeCalculos([...historicoDeCalculos, response.data]);
      } catch (error) {
        toast.error("Erro na comunicação com o servidor.");
      }
    } else {
      toast.error("Por favor insira um número maior do que 100.");
    }
  }

  return (
    <>
      <div className={css`
      font-family:'Roboto', sans-serif;
      margin:0;
      margin-top:2rem;
      padding:0;
      box-sizing:border-box;
      html{
        @media(max-width:1080px){ 
          font-size:93.75%;
        }
        @media(max-width:720px){ 
          font-size:87.5%;
        }
      }
      button{ 
        cursor:pointer;
      }
      position:fixed;
      top:0;
      left:0;
      right:0;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
    `}>
        <EntradaDados
          enviarDadosHandler={enviarDados}
        />
        <Historico
          historico={historicoDeCalculos}
        />

      </div>
      <ToastContainer />
    </>
  );
}

export default App;
