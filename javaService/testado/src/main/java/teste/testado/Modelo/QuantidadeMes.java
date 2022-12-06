package teste.testado.Modelo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class QuantidadeMes {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer mes;
    private Integer quantidade;

    public QuantidadeMes(){
    }

    public QuantidadeMes(Integer mes, Integer quantidade){
        this.mes = mes;
        this.quantidade = quantidade;
    }

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

    

}
