package teste.testado.Controller.DTO;

import java.util.List;
import java.util.stream.Collectors;


import teste.testado.Modelo.Fipe;

public class FipeDto {
    private Integer idCarro;
    private String marca;
    private String modelo;
    private String ano;
    private String tipo;
    private String valor;

    public FipeDto(Fipe fipe){
        this.idCarro = fipe.getIdCarro();
        this.marca = fipe.getMarca();
        this.modelo = fipe.getModelo();
        this.ano = fipe.getAno();
        this.tipo = fipe.getTipo();
        this.valor = fipe.getValor();
    }

    public Integer getIdCarro() {
        return idCarro;
    }

    public String getMarca() {
        return marca;
    }

    public String getModelo() {
        return modelo;
    }

    public String getAno() {
        return ano;
    }

    public String getTipo() {
        return tipo;
    }

    public String getValor() {
        return valor;
    }

    public static List<FipeDto> converter(List<Fipe> list) {
        return list.stream().map(FipeDto::new).collect(Collectors.toList());
    }

}
