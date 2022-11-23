package teste.testado.Controller.DTO;

import java.util.List;
import java.util.stream.Collectors;

import teste.testado.Modelo.Funcionarios;

public class FuncionariosDto {
    private int idFuncionario;
    private String dataCadastro;
    private String dataDesligamento;
    private String email;
    private String senha;
    private String sobrenome;
    private String status;
    private String username;

    public FuncionariosDto(Funcionarios funcionarios){
        this.idFuncionario = funcionarios.getIdFuncionario();
        this.dataCadastro = funcionarios.getDataCadastro();
        this.dataDesligamento = funcionarios.getDataDesligamento();
        this.email = funcionarios.getEmail();
        this.senha = funcionarios.getSenha();
        this.sobrenome = funcionarios.getSobrenome();
        this.status = funcionarios.getStatus();
        this.username = funcionarios.getUsername();
    }

    public int getIdFuncionario() {
        return idFuncionario;
    }

    public String getDataCadastro() {
        return dataCadastro;
    }

    public String getDataDesligamento() {
        return dataDesligamento;
    }

    public String getEmail() {
        return email;
    }

    public String getSenha() {
        return senha;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public String getStatus() {
        return status;
    }

    public String getUsername() {
        return username;
    }

    public static List<FuncionariosDto> converter(List<Funcionarios> list) {
        return list.stream().map(FuncionariosDto::new).collect(Collectors.toList());
    }

}
