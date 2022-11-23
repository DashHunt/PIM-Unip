package teste.testado.Controller.DTO;

import java.util.List;
import java.util.stream.Collectors;

import teste.testado.Modelo.Telefones;

public class TelefonesDto {
    private Long idTelefone;
    private String telefone;
    private Long idSolicitacao;

    public TelefonesDto(Telefones telefones){
        this.idTelefone = telefones.getIdTelefone();
        this.telefone = telefones.getTelefone();
        this.idSolicitacao = telefones.getIdSolicitacao();
    }

    public Long getIdTelefone() {
        return idTelefone;
    }

    public String getTelefone() {
        return telefone;
    }

    public Long getIdSolicitacao() {
        return idSolicitacao;
    }

    public static List<TelefonesDto> converter(List<Telefones> list) {
        return list.stream().map(TelefonesDto::new).collect(Collectors.toList());
    }

}