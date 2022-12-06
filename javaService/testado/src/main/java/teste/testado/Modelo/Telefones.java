package teste.testado.Modelo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "telefones")
public class Telefones {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTelefone;
    private String telefone;
    @Column(name = "fk_id_solicitacao")
    private Long idSolicitacao;

    public Telefones(){
    }

    public Telefones(Long idTelefone, String Telefone, Long idSolicitacao){
        this.idTelefone = idTelefone;
        this.telefone = Telefone;
        this.idSolicitacao = idSolicitacao;
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