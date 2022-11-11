package teste.testado.Modelo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class perfilSite {
    
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_cliente;
    private String cpf;
    private String email;
    private String primeiro_nome;
    private String senha;
    private String sobrenome;

    public perfilSite(){
    }

    public perfilSite(int id_cliente, String cpf, String email, String primeiro_nome, String senha, String sobrenome){
        this.id_cliente = id_cliente;
        this.cpf = cpf;
        this.email = email;
        this.primeiro_nome = primeiro_nome;
        this.senha = senha;
        this.sobrenome = sobrenome;
    }

    public int getIdCliente(){
        return id_cliente;
    }

    public void setIdCliente(int id_cliente){
        this.id_cliente = id_cliente;
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
        return primeiro_nome;
    }

    public void setPrimeiroNome(String primeiro_nome){
        this.primeiro_nome = primeiro_nome;
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

