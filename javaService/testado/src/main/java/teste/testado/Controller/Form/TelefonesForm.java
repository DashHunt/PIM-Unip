package teste.testado.Controller.Form;

import teste.testado.Modelo.Telefones;

public class TelefonesForm {

    private Long idTelefone;
    private String telefone;
    private Long idSolicitacao;

    public Telefones converter() {
        return new Telefones(idTelefone, telefone, idSolicitacao);
    }

    public Long getIdTelefone() {
        return idTelefone;
    }

    public void setIdTelefone(Long idTelefone) {
        this.idTelefone = idTelefone;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public Long getIdSolicitacao() {
        return idSolicitacao;
    }

    public void setIdSolicitacao(Long idSolicitacao) {
        this.idSolicitacao = idSolicitacao;
    }

}