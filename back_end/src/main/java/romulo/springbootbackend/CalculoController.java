package romulo.springbootbackend;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class CalculoController {
    @CrossOrigin()
    @GetMapping("/calculo")
    public Calculo calculo(@RequestParam(value="input")Double input){
        double numeroEntrada = input;
        int multiplo = 2;
        double calculoMultiplo;
        double solucao = 0.0;
        String numeroString = "";
        char primeiroDigito;
        int contadorDeDigitosDiferentes = 0;
        long horaComeco = System.nanoTime();

        while(solucao == 0.0){

            contadorDeDigitosDiferentes = 0;
            calculoMultiplo = multiplo * numeroEntrada;
            numeroString = Double.toString(calculoMultiplo).replace(".","");
            if(numeroString.charAt(numeroString.length() - 1) == '0'){ // se o último dígito for 0, desconsiderar o dígito
                numeroString = numeroString.substring(0, numeroString.length() - 1);
            }
            primeiroDigito = numeroString.charAt(0);
            // testar se é duodígito
            for(int i = 1; i < numeroString.length(); i++){
                if(numeroString.charAt(i) != primeiroDigito){
                    contadorDeDigitosDiferentes++;
                }
            }

            if(contadorDeDigitosDiferentes <= 2){// se for duodígito, atribuir à solução
                solucao = calculoMultiplo;
            }
            multiplo++;
        }
        long horaFim = System.nanoTime();
        long tempoExecucao = (horaFim - horaComeco);
        return new Calculo(solucao, tempoExecucao);
    }
}
