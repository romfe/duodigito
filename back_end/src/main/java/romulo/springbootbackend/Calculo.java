package romulo.springbootbackend;

public class Calculo {
    private final Double solucao;
    private final Double numeroInicial;
    private final long tempoExecucao;


    public Calculo(Double solucao, Double numeroInicial, long tempoExecucao) {
        this.solucao = solucao;
        this.numeroInicial = numeroInicial;
        this.tempoExecucao = tempoExecucao;
    }

    public Double getNumeroInicial(){return numeroInicial;}
    public Double getSolucao() {
        return solucao;
    }

    public long getTempoExecucao() {
        return tempoExecucao;
    }

}
