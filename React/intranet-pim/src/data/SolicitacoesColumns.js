const SolicitacoesColumns = [
  {
    dataField: "idSolicitacao",
    text: "ID Solicitacao",
    sort: true,
    headerStyle: (colum, colIndex) => {
      return { width: '120px', cursor: 'pointer'};
    },
    hidden: true
  },
  {
    dataField: "primeiroNome",
    text: "Nome",
  },
  {
    dataField: "sobrenome",
    text: "Sobrenome",
  },
  {
    dataField: "idCliente",
    text: "ID Cliente",
    sort: true,
    headerStyle: (colum, colIndex) => {
      return { width: '120px', cursor: 'pointer'};
    },
  },
  {
    dataField: "status",
    text: "Status",
  },
  {
    dataField: "rg",
    text: "RG",
  },
  {
    dataField: "rgDataEmissao",
    text: "RG data emissao",
  },
  {
    dataField: "rgUf",
    text: "RG UF",
  },
  {
    dataField: "enderecoLogradouro",
    text: "Rua",
  },
  {
    dataField: "enderecoBairro",
    text: "Bairro",
  },
  {
    dataField: "enderecoNumero",
    text: "Numero",
  },
  {
    dataField: "enderecoCep",
    text: "CEP",
  },
  {
    dataField: "genero",
    text: "Gênero",
  },
];

export default SolicitacoesColumns;
