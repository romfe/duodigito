//importação de bibliotecas
import { useState } from 'react';
import { css } from '@emotion/css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//importação de componentes da aplicação
import { EntradaDados } from './components/EntradaDados';
import { Historico } from './components/Historico';
import api from './api/apiCalculo';


interface InterfaceHistorico {
  solucao: number,
  numeroInicial: number,
  tempoExecucao: number
}

function App() {
  // estado para armazenar o histórico de consultas do usuário
  const [historicoDeCalculos, setHistoricoDeCalculos] = useState<InterfaceHistorico[]>([]);

  // variável que armazena o máximo de consultas permitidas pelo usuário por sessão
  const numeroMaximoDeConsultas: number = 30;

  // função que envia os dados à api e adiciona a resposta à constante historicoDeCalculos
  // também verifica o número informado pelo usuário e exibe mensagens de erro
  const enviarDados = async (numero: number) => {
    if (numero > 100) {

      if (historicoDeCalculos.length >= numeroMaximoDeConsultas) {

        toast.error("Número máximo de consultas atingido. Atualize a página e tente novamente")

      } else {

        try {

          const response = await api.get(`/calculo?input=${numero}`);
          const existeSolucao: InterfaceHistorico = (response.data);

          if (existeSolucao.solucao === 0) {
            // caso a API não tenha encontrado solução, retorna o valor 0
            // a mensagem de erro é exibida ao usuário
            toast.error("Não foi encontrada solução. Verifique o número informado");
          } else {

            // caso a API retorne um valor válido, a nova resposta é armazenada 
            setHistoricoDeCalculos([...historicoDeCalculos, response.data]);
          }
        } catch (error) {
          toast.error("Erro na comunicação com o servidor.");
        }
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
