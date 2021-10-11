import { css } from '@emotion/css';

interface InterfaceHistorico {
  solucao: number,
  tempoExecucao: number
}
interface HistoricoProps {
  historico: InterfaceHistorico[]
}
export const Historico = (props: HistoricoProps) => {

  return (
    <table className={css`
      margin-top:4remm;
      border-spacing: 0 0.5rem;
      tr{
        color:#363F5F;
        font-weight:400;
        padding: 1rem 2rem;
        text-align:left;
        line-height:1.5rem;
      }
      td{
        padding: 1rem 2rem;
        border:0;
        background: #FFFFFF;
        color:#363F5F;
        border-radius:.25rem;
      }
    `}>
      <tr>
        <td>Resultado</td>
        <td>Tempo de Execução</td>
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