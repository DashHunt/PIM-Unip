package teste.testado.Modelo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "funcionarios")
public class Funcionarios {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idFuncionario;
    private String dataCadastro;
    private String dataDesligamento;
    @Column(name = "email")
    private String email;
    @Column(name = "senha")
    private String senha;
    private String sobrenome;
    private String status;
    private String username;

    public Funcionarios(){
    }

    public Funcionarios(Integer idFuncionario, String dataCadastro, String dataDesligamento, String email, String senha, String sobrenome, String status, String username){
        this.idFuncionario = idFuncionario;
        this.dataCadastro = dataCadastro;
        this.dataDesligamento = dataDesligamento;
        this.email = email;
        this.senha = senha;
        this.sobrenome = sobrenome;
        this.status = status;
        this.username = username;
    }

    public Integer getIdFuncionario() {
        return idFuncionario;
    }

    public void setIdFuncionario(Integer idFuncionario) {
        this.idFuncionario = idFuncionario;
    }

    public String getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(String dataCadastro) {
        this.dataCadastro = dataCadastro;
    }

    public String getDataDesligamento() {
        return dataDesligamento;
    }

    public void setDataDesligamento(String dataDesligamento) {
        this.dataDesligamento = dataDesligamento;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    

}
