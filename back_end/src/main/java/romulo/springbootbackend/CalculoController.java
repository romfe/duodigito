package romulo.springbootbackend;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class CalculoController {

    public long tempoExecucao(long horaFim, long horaInicio) {
        return horaFim - horaInicio;
    }


    @CrossOrigin()
    @GetMapping("/calculo")
    public Calculo calculo(@RequestParam(value="input")Double input){


        double numeroEntrada = input; // variável que contém o número informado pelo usuário
        double novoMultiplo; // variável que recebe os múltiplos do número de entrada
        double menorMultiploDuodigito = 0.0; // variável que irá conter a solução do problema

        int multiplicador = 2;
        int quantidadeDeDigitosDiferentes; // contador de dígitos diferentes

        String numeroString = "";
        char primeiroDigito;

        boolean solucaoEncontrada = false;
        long horaComeco = System.nanoTime(); // variável que contém a hora de início do cálculo


        while(!solucaoEncontrada){

            quantidadeDeDigitosDiferentes = 1;

            try {
                novoMultiplo = multiplicador * numeroEntrada; // cálculo do múltiplo seguinte
                numeroString = Double.toString(novoMultiplo).replace(".", "");

                // condicional para remover o último zero depois da vírgula, caso exista
                if (numeroString.charAt(numeroString.length() - 1) == '0') {
                    numeroString = numeroString.substring(0, numeroString.length() - 1);
                }

                primeiroDigito = numeroString.charAt(0);


                // estrutura de repetiçao que conta o número de algarismos diferentes no múltiplo
                for (int i = 1; i < numeroString.length(); i++) {
                    if (numeroString.charAt(i) != primeiroDigito) {
                        quantidadeDeDigitosDiferentes++;
                    }
                }

                // caso o múltiplo seja duodígito, atribui-se o resultado à variável menorMultiploDuodigito
                if (quantidadeDeDigitosDiferentes <= 2) {
                    menorMultiploDuodigito = novoMultiplo;
                    solucaoEncontrada = true;
                }

                // aumenta o multiplicador para calcular o próximo múltiplo
                multiplicador++;

                // para evitar que o programa rode indefinidamente
                if (multiplicador > 10000000) return new Calculo(0.0, 0.0, 0);

            }catch(Exception err){
                return new Calculo(0.0, 0.0, 0);
            }
        }


        long tempo = tempoExecucao(System.nanoTime(), horaComeco); // método do cálculo do tempo de execução
        return new Calculo(menorMultiploDuodigito, numeroEntrada, tempo);
    }
}
