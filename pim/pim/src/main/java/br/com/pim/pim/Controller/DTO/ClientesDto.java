package br.com.pim.pim.Controller.DTO;

import java.util.List;
import java.util.stream.Collectors;

import Modelo.classClientes;

public class ClientesDto {
    
    private int id_cliente;
    private String cpf;
    private String email;
    private String primeiro_nome;
    private String senha;
    private String sobrenome;

    public ClientesDto(classClientes clientes){
        this.id_cliente = clientes.getIdCliente();
        this.cpf = clientes.getCpf();
        this.email = clientes.getEmail();
        this.primeiro_nome = clientes.getPrimeiroNome();
        this.senha = clientes.getSenha();
        this.sobrenome = clientes.getSobrenome();
    }

    public int getIdCliente(){
        return id_cliente;
    }

    public String getCpf(){
        return cpf;
    }

    public String getEmail(){
        return email;
    }

    public String getPrimeiroNome(){
        return primeiro_nome;
    }

    public String getSenha(){
        return senha;
    }

    public String getSobrenome(){
        return sobrenome;
    }

    public static List<ClientesDto> converter(List<classClientes> clientes) {
        return clientes.stream().map(ClientesDto::new).collect(Collectors.toList());
    }

}
