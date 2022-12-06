package teste.testado.Controller.DTO;

import java.util.List;
import java.util.stream.Collectors;

import teste.testado.Modelo.QuantidadeMes;

public class QuantidadeMesDto {
    private Integer mes;
    private Integer quantidade;

    public QuantidadeMesDto(QuantidadeMes quantidadeMes){
        this.mes = quantidadeMes.getMes();
        this.quantidade = quantidadeMes.getQuantidade();
    }

    public Integer getMes() {
        return mes;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public static List<QuantidadeMesDto> converter(List<QuantidadeMes> list) {
        return list.stream().map(QuantidadeMesDto::new).collect(Collectors.toList());
    }
    
}
