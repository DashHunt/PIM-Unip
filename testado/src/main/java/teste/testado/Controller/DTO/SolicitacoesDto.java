package teste.testado.Controller.DTO;

import java.util.List;
import java.util.stream.Collectors;

import teste.testado.Modelo.Solicitacoes;

public class SolicitacoesDto {
    private Long idSolicitacao;
    private String rg;
    private String rgDataEmissao;
    private String rgUf;
    private String enderecoLogradouro;
    private String enderecoNumero;
    private String enderecoBairro;
    private String enderecoCep;
    private String enderecoEstado;
    private String dataNascimento;
    private String cnh;
    private String cnhDataEmissao;
    private String genero;
    private String dataCadastro;
    private String dataModificacao;
    private String dataExclusao;
    private String dataApolice;
    private String status;
    private Long idCliente;

    public SolicitacoesDto(Solicitacoes solicitacoes){
        this.idSolicitacao = solicitacoes.getIdSolicitacao();
        this.rg = solicitacoes.getRg();
        this.rgDataEmissao = solicitacoes.getRgDataEmissao();
        this.rgUf = solicitacoes.getRgUf();
        this.enderecoLogradouro = solicitacoes.getEnderecoLogradouro();
        this.enderecoNumero = solicitacoes.getEnderecoNumero();
        this.enderecoBairro = solicitacoes.getEnderecoBairro();
        this.enderecoCep = solicitacoes.getEnderecoCep();
        this.enderecoEstado = solicitacoes.getEnderecoEstado();
        this.dataNascimento = solicitacoes.getDataNascimento();
        this.cnh = solicitacoes.getCnh();
        this.cnhDataEmissao = solicitacoes.getCnhDataEmissao();
        this.genero = solicitacoes.getGenero();
        this.dataCadastro = solicitacoes.getDataCadastro();
        this.dataModificacao = solicitacoes.getDataModificacao();
        this.dataExclusao = solicitacoes.getDataExclusao();
        this.dataApolice = solicitacoes.getDataApolice();
        this.status = solicitacoes.getStatus();
        this.idCliente = solicitacoes.getIdCliente();
    }

    public Long getIdSolicitacao() {
        return idSolicitacao;
    }
    public String getRg() {
        return rg;
    }
    public String getRgDataEmissao() {
        return rgDataEmissao;
    }
    public String getRgUf() {
        return rgUf;
    }
    public String getEnderecoLogradouro() {
        return enderecoLogradouro;
    }
    public String getEnderecoNumero() {
        return enderecoNumero;
    }
    public String getEnderecoBairro() {
        return enderecoBairro;
    }
    public String getEnderecoCep() {
        return enderecoCep;
    }
    public String getEnderecoEstado() {
        return enderecoEstado;
    }
    public String getDataNascimento() {
        return dataNascimento;
    }
    public String getCnh() {
        return cnh;
    }
    public String getCnhDataEmissao() {
        return cnhDataEmissao;
    }
    public String getGenero() {
        return genero;
    }
    public String getDataCadastro() {
        return dataCadastro;
    }
    public String getDataModificacao() {
        return dataModificacao;
    }
    public String getDataExclusao() {
        return dataExclusao;
    }
    public String getDataApolice() {
        return dataApolice;
    }
    public String getStatus() {
        return status;
    }
    public Long getIdCliente() {
        return idCliente;
    }

    public static List<SolicitacoesDto> converter(List<Solicitacoes> list) {
        return list.stream().map(SolicitacoesDto::new).collect(Collectors.toList());
    }

    
}
