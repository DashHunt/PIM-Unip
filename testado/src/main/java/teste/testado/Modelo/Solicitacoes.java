package teste.testado.Modelo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "solicitacao_proposta")
public class Solicitacoes {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_solicitacao")
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
    @Column(name = "data_exclusao")
    private String dataExclusao;
    private String dataApolice;
    @Column(name = "status")
    private String status;
    @Column(name = "fk_id_cliente")
    private Integer idCliente;

    public Solicitacoes(){
    }

    public Solicitacoes(Integer idSolicitacao, String rg, String rgDataEmissao, String rgUf, String enderecoLogradouro, String enderecoNumero, String enderecoBairro, String enderecoCep, String enderecoEstado, String dataNascimento, String cnh, String cnhDataEmissao, String genero, String dataCadastro, String dataModificacao, String dataExclusao, String dataApolice, String status, Integer idCliente){
        this.idSolicitacao = idSolicitacao;
        this.rg = rg;
        this.rgDataEmissao = rgDataEmissao;
        this.rgUf = rgUf;
        this.enderecoLogradouro = enderecoLogradouro;
        this.enderecoNumero = enderecoNumero;
        this.enderecoBairro = enderecoBairro;
        this.enderecoCep = enderecoCep;
        this.enderecoEstado = enderecoEstado;
        this.dataNascimento = dataNascimento;
        this.cnh = cnh;
        this.cnhDataEmissao = cnhDataEmissao;
        this.genero = genero;
        this.dataCadastro = dataCadastro;
        this.dataModificacao = dataModificacao;
        this.dataExclusao = dataExclusao;
        this.dataApolice = dataApolice;
        this.status = status;
        this.idCliente = idCliente;
    }

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

}
