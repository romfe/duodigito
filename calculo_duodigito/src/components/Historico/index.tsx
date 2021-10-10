interface InterfaceHistorico {
  solucao: number,
  tempoExecucao: number
}
interface HistoricoProps {
  historico: InterfaceHistorico[]
}
export const Historico = (props: HistoricoProps) => {

  return (
    <table>
      <tr>
        <th>Resultado</th>
        <th>Tempo de Execução</th>
      </tr>
      <tbody>
        {props.historico.map((operacao: InterfaceHistorico) =>
          <tr>
            <td>{operacao.solucao}</td>
            <td>{operacao.tempoExecucao}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}