package teste.testado.Controller.Form;

import teste.testado.Modelo.perfilSite;

public class ClienteForm {

    private Integer idCliente;
    private String cpf;
    private String email;
    private String primeiroNome;
    private String senha;
    private String sobrenome;

    public Integer getIdCliente(){
        return this.idCliente;
    }

    public void setIdCliente(Integer idCliente){
        this.idCliente = idCliente;
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
        return this.primeiroNome;
    }

    public void setPrimeiroNome(String primeiroNome){
        this.primeiroNome = primeiroNome;
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
        return new perfilSite(idCliente, cpf, email, primeiroNome, senha, sobrenome);
    }


}
