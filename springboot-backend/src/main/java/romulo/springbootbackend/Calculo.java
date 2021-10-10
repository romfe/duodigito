package romulo.springbootbackend;

public class Calculo {
    private final Double solucao;
    private final long tempoExecucao;

    public Calculo(Double solucao, long tempoExecucao) {
        this.solucao = solucao;
        this.tempoExecucao = tempoExecucao;
    }

    public Double getSolucao() {
        return solucao;
    }

    public long getTempoExecucao() {
        return tempoExecucao;
    }

}
