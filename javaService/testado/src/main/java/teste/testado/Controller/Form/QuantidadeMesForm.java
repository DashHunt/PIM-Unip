package teste.testado.Controller.Form;

import teste.testado.Modelo.QuantidadeMes;

public class QuantidadeMesForm {
    private Integer mes;
    private Integer quantidade;

    public Integer getMes() {
        return mes;
    }

    public void setMes(Integer mes) {
        this.mes = mes;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public QuantidadeMes converter() {
        return new QuantidadeMes(mes, quantidade);
    }
}
