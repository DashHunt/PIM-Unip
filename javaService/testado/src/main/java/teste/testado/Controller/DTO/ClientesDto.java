package teste.testado.Controller.DTO;

import java.util.List;
import java.util.stream.Collectors;

import teste.testado.Modelo.perfilSite;

public class ClientesDto {
    
    private Integer idCliente;
    private String cpf;
    private String email;
    private String primeiroNome;
    private String senha;
    private String sobrenome;

    public ClientesDto(perfilSite clientes){
        this.idCliente = clientes.getIdCliente();
        this.cpf = clientes.getCpf();
        this.email = clientes.getEmail();
        this.primeiroNome = clientes.getPrimeiroNome();
        this.senha = clientes.getSenha();
        this.sobrenome = clientes.getSobrenome();
    }

    public Integer getIdCliente(){
        return idCliente;
    }

    public String getCpf(){
        return cpf;
    }

    public String getEmail(){
        return email;
    }

    public String getPrimeiroNome(){
        return primeiroNome;
    }

    public String getSenha(){
        return senha;
    }

    public String getSobrenome(){
        return sobrenome;
    }

    public static List<ClientesDto> converter(List<perfilSite> list) {
        return list.stream().map(ClientesDto::new).collect(Collectors.toList());
    }

}