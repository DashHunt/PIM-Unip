package teste.testado.Controller.Form;

import teste.testado.Modelo.Solicitacoes;

public class SolicitacoesForm {

    private Integer idSolicitacao;
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
    private Integer idCliente;
    private String valorTotal;
    
    public Integer getIdSolicitacao() {
        return idSolicitacao;
    }
    public void setIdSolicitacao(Integer idSolicitacao) {
        this.idSolicitacao = idSolicitacao;
    }
    public String getRg() {
        return rg;
    }
    public void setRg(String rg) {
        this.rg = rg;
    }
    public String getRgDataEmissao() {
        return rgDataEmissao;
    }
    public void setRgDataEmissao(String rgDataEmissao) {
        this.rgDataEmissao = rgDataEmissao;
    }
    public String getRgUf() {
        return rgUf;
    }
    public void setRgUf(String rgUf) {
        this.rgUf = rgUf;
    }
    public String getEnderecoLogradouro() {
        return enderecoLogradouro;
    }
    public void setEnderecoLogradouro(String enderecoLogradouro) {
        this.enderecoLogradouro = enderecoLogradouro;
    }
    public String getEnderecoNumero() {
        return enderecoNumero;
    }
    public void setEnderecoNumero(String enderecoNumero) {
        this.enderecoNumero = enderecoNumero;
    }
    public String getEnderecoBairro() {
        return enderecoBairro;
    }
    public void setEnderecoBairro(String enderecoBairro) {
        this.enderecoBairro = enderecoBairro;
    }
    public String getEnderecoCep() {
        return enderecoCep;
    }
    public void setEnderecoCep(String enderecoCep) {
        this.enderecoCep = enderecoCep;
    }
    public String getEnderecoEstado() {
        return enderecoEstado;
    }
    public void setEnderecoEstado(String enderecoEstado) {
        this.enderecoEstado = enderecoEstado;
    }
    public String getDataNascimento() {
        return dataNascimento;
    }
    public void setDataNascimento(String dataNascimento) {
        this.dataNascimento = dataNascimento;
    }
    public String getCnh() {
        return cnh;
    }
    public void setCnh(String cnh) {
        this.cnh = cnh;
    }
    public String getCnhDataEmissao() {
        return cnhDataEmissao;
    }
    public void setCnhDataEmissao(String cnhDataEmissao) {
        this.cnhDataEmissao = cnhDataEmissao;
    }
    public String getGenero() {
        return genero;
    }
    public void setGenero(String genero) {
        this.genero = genero;
    }
    public String getDataCadastro() {
        return dataCadastro;
    }
    public void setDataCadastro(String dataCadastro) {
        this.dataCadastro = dataCadastro;
    }
    public String getDataModificacao() {
        return dataModificacao;
    }
    public void setDataModificacao(String dataModificacao) {
        this.dataModificacao = dataModificacao;
    }
    public String getDataExclusao() {
        return dataExclusao;
    }
    public void setDataExclusao(String dataExclusao) {
        this.dataExclusao = dataExclusao;
    }
    public String getDataApolice() {
        return dataApolice;
    }
    public void setDataApolice(String dataApolice) {
        this.dataApolice = dataApolice;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public Integer getIdCliente() {
        return idCliente;
    }
    public void setIdCliente(Integer idCliente) {
        this.idCliente = idCliente;
    }

    public String getValorTotal() {
        return valorTotal;
    }
    public void setValorTotal(String valorTotal) {
        this.valorTotal = valorTotal;
    }

    public Solicitacoes converter() {
        return new Solicitacoes(idSolicitacao, rg, rgDataEmissao, rgUf, enderecoLogradouro, enderecoNumero, enderecoBairro, enderecoCep, enderecoEstado, dataNascimento, cnh, cnhDataEmissao, genero, dataCadastro, dataModificacao, dataExclusao, dataApolice, status, idCliente, valorTotal);
    }
    
}
