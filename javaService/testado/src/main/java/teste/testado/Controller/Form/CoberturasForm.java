package teste.testado.Controller.Form;

import teste.testado.Modelo.Coberturas;

public class CoberturasForm {

    private Long idCobertura;
    private String descricao;
    private String valor;
    private Long idSolicitacao;

    public Coberturas converter() {
        return new Coberturas(idCobertura, descricao, valor, idSolicitacao);
    }

    public Long getIdCobertura() {
        return idCobertura;
    }

    public void setIdCobertura(Long idCobertura) {
        this.idCobertura = idCobertura;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getValor() {
        return valor;
    }

    public void setValor(String valor) {
        this.valor = valor;
    }

    public Long getIdSolicitacao() {
        return idSolicitacao;
    }

    public void setIdSolicitacao(Long idSolicitacao) {
        this.idSolicitacao = idSolicitacao;
    }

}