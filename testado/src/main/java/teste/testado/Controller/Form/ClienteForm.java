package teste.testado.Controller.Form;

import teste.testado.Modelo.perfilSite;

public class ClienteForm {

    private int id_cliente;
    private String cpf;
    private String email;
    private String primeiro_nome;
    private String senha;
    private String sobrenome;

    public int getIdCliente(){
        return this.id_cliente;
    }

    public void setIdCliente(int id_cliente){
        this.id_cliente = id_cliente;
    }

    public String getCpf(){
        return this.cpf;
    }

    public void setCpf(String cpf){
        this.cpf = cpf;
    }

    public String getEmail(){
        return this.email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public String getPrimeiroNome(){
        return this.primeiro_nome;
    }

    public void setPrimeiroNome(String primeiro_nome){
        this.primeiro_nome = primeiro_nome;
    }

    public String getSenha(){
        return this.senha;
    }

    public void setSenha(String senha){
        this.senha = senha;
    }

    public String getSobrenome(){
        return this.sobrenome;
    }

    public void setSobrenome(String sobrenome){
        this.sobrenome = sobrenome;
    }

    public perfilSite converter() {
        return new perfilSite(id_cliente, cpf, email, primeiro_nome, senha, sobrenome);
    }


}
