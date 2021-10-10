import { EntradaDados } from './components/EntradaDados';
import { Historico } from './components/Historico';
import { useState } from 'react';
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
        console.log(historicoDeCalculos);
      } catch (error) {
        console.log("[-] Erro!");
      }
    } else {
      console.log("[-] Erro!");
    }
  }

  return (
    <>
      <EntradaDados
        enviarDadosHandler={enviarDados}
      /><br />
      <Historico
        historico={historicoDeCalculos}
      />
    </>
  );
}

export default App;
