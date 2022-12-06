package teste.testado.Modelo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "coberturas")
public class Coberturas {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCobertura;
    private String descricao;
    private String valor;
    @Column(name = "fk_id_solicitacao")
    private Long idSolicitacao;

    public Coberturas(){
    }

    public Coberturas(Long idCobertura, String descricao, String valor, Long idSolicitacao){
        this.idCobertura = idCobertura;
        this.descricao = descricao;
        this.valor = valor;
        this.idSolicitacao = idSolicitacao;
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