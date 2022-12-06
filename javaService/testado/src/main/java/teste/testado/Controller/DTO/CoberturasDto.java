package teste.testado.Controller.DTO;

import java.util.List;
import java.util.stream.Collectors;

import teste.testado.Modelo.Coberturas;

public class CoberturasDto {
    private Long idCobertura;
    private String descricao;
    private String valor;
    private Long idSolicitacao;

    public CoberturasDto(Coberturas coberturas){
        this.idCobertura = coberturas.getIdCobertura();
        this.descricao = coberturas.getDescricao();
        this.valor = coberturas.getValor();
        this.idSolicitacao = coberturas.getIdSolicitacao();
    }

    public Long getIdCobertura() {
        return idCobertura;
    }

    public String getDescricao() {
        return descricao;
    }

    public String getValor() {
        return valor;
    }

    public Long getIdSolicitacao() {
        return idSolicitacao;
    }

    public static List<CoberturasDto> converter(List<Coberturas> list) {
        return list.stream().map(CoberturasDto::new).collect(Collectors.toList());
    }

}
