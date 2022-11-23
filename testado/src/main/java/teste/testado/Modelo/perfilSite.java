package teste.testado.Modelo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "perfil_site")
public class PerfilSite {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCliente;
    private String cpf;
    @Column(name = "email")
    private String email;
    private String primeiroNome;
    @Column(name = "senha")
    private String senha;
    private String sobrenome;

    public PerfilSite(){
    }

    public PerfilSite(Integer idCliente, String cpf, String email, String primeiroNome, String senha, String sobrenome){
        this.idCliente = idCliente;
        this.cpf = cpf;
        this.email = email;
        this.primeiroNome = primeiroNome;
        this.senha = senha;
        this.sobrenome = sobrenome;
    }

    public Integer getIdCliente(){
        return idCliente;
    }

    public void setIdCliente(Integer idCliente){
        this.idCliente = idCliente;
    }

    public String getCpf(){
        return cpf;
    }

    public void setCpf(String cpf){
        this.cpf = cpf;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public String getPrimeiroNome(){
        return primeiroNome;
    }

    public void setPrimeiroNome(String primeiroNome){
        this.primeiroNome = primeiroNome;
    }

    public String getSenha(){
        return senha;
    }

    public void setSenha(String senha){
        this.senha = senha;
    }

    public String getSobrenome(){
        return sobrenome;
    }

    public void setSobrenome(String sobrenome){
        this.sobrenome = sobrenome;
    }

}

