// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";
import { trackPromise } from "react-promise-tracker";

import {
  getCarro,
  getModelos,
  getAnos,
  getTipos,
} from "../../data/DependentFields";

import TextInput from "../Inputs/TextInput";
import Select from "../Inputs/Select";
import FormBoostrap from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

import LoadingSpinner from "../LoadingSpinner";
import LoadingModal from "../LoadingModal";
import ConfirmationModal from "../ConfirmationModal";

import { FcCheckmark, FcHighPriority } from "react-icons/fc";

import Solicitacoes from "../../data/Solicitacoes";
import Sleep from "../../data/Sleep";
import BackToTop from "../BackToTop";
import SolicitacoesAPI from "../../api/Solicitacoes";
import ClientesAPI from "../../api/Clientes";
import FipeAPI from "../../api/Fipe";
import ClienteSearcher from "../Inputs/ClientSearcher";
import CoberturasAPI from "../../api/Coberturas";
import SpinnerComponent from "../Spinner";
import { routes } from "../../helpers/helpers";

const SolicitacaoComponent = (props) => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [serverCoberturas, setServerCoberturas] = useState(null);
  const [objCobertura, setObjCoberturas] = useState(null);
  const [solicitacao, setSolicitacoes] = useState({});
  const [valuesSolicitacao, setValuesSolicitacao] = useState(null);

  const [confirmationDeletion, setConfirmationDeletion] = useState(false);
  const [deleteCobertura, setDeleteCobertura] = useState(false);

  const [nomeCobertura, setNomeCobertura] = useState(null);
  const [indexCobertura, setIndexCobertura] = useState(null);
  const [arrayHelpersCoberturas, setArrayHelpersCoberturas] = useState(null);

  const [fetchLoading, setFetchLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalIcon, setModalIcon] = useState(null);

  const [loading, setLoading] = useState(true);
  const [confirmation, setConfirmation] = useState(false);
  const [maxCoberturas, setMaxCoberturas] = useState(false);

  const [fipe, setFipe] = useState(null);
  const [carro, setValues] = useState(null);
  const [fieldValues, setFieldValues] = useState({});
  const [marcas, setMarcas] = useState(null);

  function removeDuplicates(arrayOfObjects) {
    let newArray = arrayOfObjects.map((o) => ({ marca: o.marca }));

    newArray = newArray.reduce((unique, o) => {
      if (!unique.some((obj) => obj.marca === o.marca)) {
        unique.push(o);
      }
      return unique;
    }, []);

    return newArray;
  }

  useEffect(() => {
    if (carro !== null) {
      setSolicitacoes((current) =>
        current.map((obj) => {
          return {
            ...obj,
            valorFipe: carro.valor,
            modelo: carro.modelo,
            marca: carro.marca,
            tipo: carro.tipo,
            ano: carro.ano,
            modelos: [{ modelo: carro.modelo }],
            anos: [{ ano: carro.ano }],
            tipos: [{ tipo: carro.tipo }],
          };
        })
      );
    }
  }, [carro]);

  console.log(solicitacao);

  function handleDelete(values) {
    setValuesSolicitacao(values);
    setModalMessage("Excluir solicitacao?");
    setConfirmationDeletion(true);
  }

  function deleteSolicitacao() {
    if (confirmationDeletion) {
      console.log("Deletando cliente");
      valuesSolicitacao.dataExclusao = getTodayDate();

      setModalMessage("Excluindo solicitacao");
      setModalIcon(<SpinnerComponent></SpinnerComponent>);

      setFetchLoading(true);

      const solicitacao = new SolicitacoesAPI();

      solicitacao
        .update(valuesSolicitacao)
        .then((res) => {
          setModalMessage("Operação realizada com sucesso");
          setModalIcon(
            <FcCheckmark
              style={{ height: "30px", width: "30px" }}
            ></FcCheckmark>
          );
          Sleep(1000).then(() => {
            setFetchLoading(false);
            navigate(routes.solicitacaoAll.path);
          });
        })
        .catch((error) => console.log(error));
    }
  }

  function incluirNovoItem(novoItem, idSolicitacao, objAPI) {
    let dataCoberturas = [];

    novoItem.forEach((cobertura) => {
      let data = {
        descricao: cobertura,
        valor: "500",
        idSolicitacao: idSolicitacao,
      };
      dataCoberturas.push(data);
    });

    console.log(dataCoberturas.length);
    console.log(dataCoberturas);

    dataCoberturas.forEach((coberturas) => {
      console.log(coberturas);
      objAPI
        .post(coberturas)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    });
  }

  function atualizaCoberturas(coberturas, idSolicitacao) {
    const coberturasAPI = new CoberturasAPI();
    console.log(idSolicitacao);
    let itemAtualizado, novoItem;

    if (id !== undefined) {
      itemAtualizado = serverCoberturas[0].coberturas.filter(
        (x) => !coberturas.includes(x)
      );
      novoItem = coberturas.filter(
        (x) => !serverCoberturas[0].coberturas.includes(x)
      );
    } else {
      itemAtualizado = [];
      novoItem = coberturas;
    }

    if (itemAtualizado.length > 0) {
      let objToBeUpdated = objCobertura[0].filter((cobertura) => {
        return cobertura.descricao == itemAtualizado[0];
      });
      objToBeUpdated[0].descricao = novoItem[0];
      console.log(objToBeUpdated[0]);

      coberturasAPI
        .update(objToBeUpdated[0])
        .then((res) => {
          if (novoItem.length > 0) {
            let index = novoItem.indexOf(objToBeUpdated[0].descricao);
            novoItem.splice(index, 1);
            incluirNovoItem(novoItem, idSolicitacao, coberturasAPI);
          }
          setModalMessage("Operação realizada com sucesso");
          setModalIcon(
            <FcCheckmark
              style={{ height: "30px", width: "30px" }}
            ></FcCheckmark>
          );
          Sleep(1000).then(() => {
            setFetchLoading(false);
          });
          window.location.reload();
        })
        .catch((error) => console.log(error));
    } else {
      console.log(novoItem);
      if (novoItem.length > 0) {
        incluirNovoItem(novoItem, idSolicitacao, coberturasAPI);
      }
      setModalMessage("Operação realizada com sucesso");
      setModalIcon(
        <FcCheckmark style={{ height: "30px", width: "30px" }}></FcCheckmark>
      );
      Sleep(1000).then(() => {
        setFetchLoading(false);
      });
      window.location.reload();
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      const solicitacoes = new SolicitacoesAPI();
      let serverIndex = [];
      trackPromise(
        solicitacoes
          .getByID(id)
          .then((dataSolicitacoes) => {
            console.log(dataSolicitacoes.data);
            const clientes = new ClientesAPI();
            const coberturasAPI = new CoberturasAPI();
            const fipe = new FipeAPI();

            clientes
              .getByID(dataSolicitacoes.data[0].idCliente)
              .then((dataClientes) => {
                dataSolicitacoes.data.forEach((solicitacao, index) => {
                  const clienteInfo = dataClientes.data.filter((cliente) => {
                    return cliente.idCliente == solicitacao.idCliente;
                  });

                  dataSolicitacoes.data[index]["primeiroNome"] =
                    clienteInfo[0].primeiroNome;
                  dataSolicitacoes.data[index]["sobrenome"] =
                    clienteInfo[0].sobrenome;
                  dataSolicitacoes.data[index]["idCliente"] =
                    clienteInfo[0].idCliente;
                  fipe
                    .getCarro(dataSolicitacoes.data[0].idCarro)
                    .then((res) => {
                      dataSolicitacoes.data[index]["marca"] = res.data[0].marca;
                      dataSolicitacoes.data[index]["modelo"] =
                        res.data[0].modelo;
                      dataSolicitacoes.data[index]["modelos"] = [
                        { modelo: res.data[0].modelo },
                      ];
                      dataSolicitacoes.data[index]["ano"] = res.data[0].ano;
                      dataSolicitacoes.data[index]["anos"] = [
                        { ano: res.data[0].ano },
                      ];
                      dataSolicitacoes.data[index]["tipo"] = res.data[0].tipo;
                      dataSolicitacoes.data[index]["tipos"] = [
                        { tipo: res.data[0].tipo },
                      ];
                      dataSolicitacoes.data[index]["valorFipe"] =
                        res.data[0].valor;
                      console.log(res.data[0].modelo);
                    })
                    .catch((error) => console.log(error));

                  coberturasAPI
                    .getByID(id)
                    .then((res) => {
                      console.log("Coberturas");
                      console.log(res.data);

                      let descricaoCoberturas = [];
                      res.data.forEach((cobertura, index) => {
                        descricaoCoberturas.push(cobertura.descricao);
                      });

                      serverIndex.push(res.data);
                      dataSolicitacoes.data[index]["coberturas"] =
                        descricaoCoberturas;
                      console.log(dataSolicitacoes.data);

                      const fipe = new FipeAPI();
                      fipe
                        .get()
                        .then((res) => {
                          setFipe(res.data);
                          setMarcas(removeDuplicates(res.data));
                        })
                        .catch((error) => console.log(error));

                      setLoading(false);
                    })
                    .catch((error) => {
                      setFetchLoading(true);
                      setModalMessage("Operação falhou");
                      setModalIcon(
                        <FcHighPriority
                          style={{ height: "30px", width: "30px" }}
                        ></FcHighPriority>
                      );
                      Sleep(1000).then(() => {
                        setFetchLoading(false);
                      });
                    });
                });
                setObjCoberturas(serverIndex);
                setServerCoberturas(dataSolicitacoes.data);
                setSolicitacoes(dataSolicitacoes.data);
              })
              .catch((error) => {
                setModalMessage("Operação falhou");
                setModalIcon(
                  <FcHighPriority
                    style={{ height: "30px", width: "30px" }}
                  ></FcHighPriority>
                );
                setFetchLoading(true);
                Sleep(1000).then(() => {
                  setFetchLoading(false);
                });
              });
          })
          .catch((error) => {
            setModalMessage("Operação falhou");
            setModalIcon(
              <FcHighPriority
                style={{ height: "30px", width: "30px" }}
              ></FcHighPriority>
            );
            setFetchLoading(true);
            Sleep(1000).then(() => {
              setFetchLoading(false);
            });
          })
      );
    } else {
      const fipe = new FipeAPI();
      fipe
        .get()
        .then((res) => {
          console.log(res.data);
          setFipe(res.data);
          setMarcas(removeDuplicates(res.data));
          setSolicitacoes([Solicitacoes]);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  useEffect(() => {
    if (deleteCobertura) {
      const coberturasAPI = new CoberturasAPI();

      coberturasAPI.delete(id, nomeCobertura).catch((error) => {
        console.log("ignorar error");
        console.log(error);
      });

      arrayHelpersCoberturas.remove(indexCobertura);
      setConfirmation(false);
      setDeleteCobertura(false);
    }
  }, [deleteCobertura]);

  const handleOnKeyDown = (keyEvent) => {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  };

  function getTodayDate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    return dd + "/" + mm + "/" + yyyy;
  }

  Yup.addMethod(Yup.array, "unique", function (message, mapper = (a) => a) {
    return this.test("unique", message, function (list) {
      return list.length === new Set(list.map(mapper)).size;
    });
  });

  return (
    <>
      {loading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <>
          <Formik
            initialValues={solicitacao[0]}
            enableReinitialize={true}
            validationSchema={Yup.object().shape({
              cnh: Yup.string().required("Required"),
              cnhDataEmissao: Yup.string().required("Required"),
              coberturas: Yup.array()
                .required("Escolha pelo menos uma cobertura") // these constraints are shown if and only if inner constraints are satisfied
                .min(1, "Minimum of 1 friends")
                .max(6, "Maximo de 6 coberturas por solicitação")
                .unique("Valores tem que ser unicos"),
              dataCadastro: Yup.string().required("Required"),
              dataNascimento: Yup.string().required("Required"),
              enderecoBairro: Yup.string().required("Required"),
              enderecoCep: Yup.string().required("Required"),
              enderecoEstado: Yup.string().required("Required"),
              enderecoLogradouro: Yup.string().required("Required"),
              enderecoNumero: Yup.string().required("Required"),
              genero: Yup.string().required("Required"),
              rg: Yup.string().required("Required"),
              rgDataEmissao: Yup.string().required("Required"),
              status: Yup.string().required("Required"),
              primeiroNome: Yup.string().required("Required"),
              sobrenome: Yup.string().required("Required"),
              searcher: Yup.string().when(
                ["primeiroNome", "sobrenome", "idCliente"],
                {
                  is: ("primeiroNome", "sobrenome", "idCliente") == "",
                  then: Yup.string().required("Required"),
                }
              ),
              idCliente: Yup.string().required("Required"),
              rgUf: Yup.string().required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              const { coberturas } = values;

              delete values["primeiroNome"];
              delete values["sobrenome"];
              delete values["dataApolice"];
              delete values["dataExclusao"];
              delete values["coberturas"];
              delete values["marca"];
              delete values["modelo"];
              delete values["ano"];
              delete values["tipo"];
              delete values["marcas"];
              delete values["modelos"];
              delete values["anos"];
              delete values["tipos"];
              delete values["searcher"];
              delete values["valorFipe"];

              if (carro !== null) {
                values["idCarro"] = carro.idCarro;
              }
              values["dataModificacao"] = getTodayDate();
              console.log(values);

              const solicitacao = new SolicitacoesAPI();
              setModalMessage("Carregando operação");
              setModalIcon(<SpinnerComponent></SpinnerComponent>);
              setFetchLoading(true);

              if (id !== undefined) {
                trackPromise(
                  solicitacao
                    .update(values)
                    .then((res) => {
                      atualizaCoberturas(coberturas, id);
                      setSubmitting(false);
                    })
                    .catch((error) => {
                      setModalMessage("Operação falhou");
                      setModalIcon(
                        <FcHighPriority
                          style={{ height: "30px", width: "30px" }}
                        ></FcHighPriority>
                      );
                      Sleep(1000).then(() => {
                        setFetchLoading(false);
                        setSubmitting(false);
                        window.location.reload();
                      });
                    })
                );
              } else {
                trackPromise(
                  solicitacao
                    .post(values)
                    .then((res) => {
                      console.log(res.data);
                      atualizaCoberturas(coberturas, res.data.idSolicitacao);
                      setSubmitting(false);
                    })
                    .catch((error) => {
                      setModalMessage("Operação falhou");
                      setModalIcon(
                        <FcHighPriority
                          style={{ height: "30px", width: "30px" }}
                        ></FcHighPriority>
                      );
                      Sleep(1000).then(() => {
                        setFetchLoading(false);
                        setSubmitting(false);
                        window.location.reload();
                      });
                    })
                );
              }
            }}
          >
            {({ isSubmitting, handleChange, values, setFieldValue }) => (
              <Form className="row g-3" onKeyDown={handleOnKeyDown}>
                <TextInput
                  label="Status"
                  name="status"
                  type="text"
                  placeholder="Status"
                  disabled
                />
                <TextInput
                  label="Data cadastro"
                  name="dataCadastro"
                  type="text"
                  placeholder="Data cadastro"
                  disabled
                />

                <div className="mt-1">
                  <hr />
                  <h5> Informacoes do cliente</h5>
                </div>
                <ClienteSearcher
                  label="Procurar cliente"
                  name="searcher"
                  type="number"
                  values={setFieldValue}
                ></ClienteSearcher>
                <TextInput
                  label="Nome"
                  name="primeiroNome"
                  type="text"
                  placeholder="Nome"
                  disabled
                />
                <TextInput
                  label="Sobrenome"
                  name="sobrenome"
                  type="text"
                  placeholder="Sobrenome"
                  disabled
                />
                <TextInput
                  label="ID Cliente"
                  name="idCliente"
                  type="text"
                  placeholder="ID cliente"
                  disabled
                />
                <div className="mt-1">
                  <hr />
                  <h5> Informacoes basicas</h5>
                </div>
                <TextInput label="RG" name="rg" type="text" placeholder="RG" />
                <TextInput
                  label="RG Data Emissão"
                  name="rgDataEmissao"
                  type="text"
                  placeholder="RG Data Emissão"
                />
                <TextInput
                  label="RG UF"
                  name="rgUf"
                  type="text"
                  placeholder="RG UF"
                />
                <TextInput
                  label="Genero"
                  name="genero"
                  type="text"
                  placeholder="Genero"
                />
                <TextInput
                  label="Data nascimento"
                  name="dataNascimento"
                  type="text"
                  placeholder="Data nascimento"
                />
                <hr />
                <h5>Endereço</h5>
                <TextInput
                  label="CEP"
                  name="enderecoCep"
                  type="text"
                  placeholder="CEP"
                />
                <TextInput
                  label="Estado"
                  name="enderecoEstado"
                  type="text"
                  placeholder="Estado"
                />
                <TextInput
                  label="Bairro"
                  name="enderecoBairro"
                  type="text"
                  placeholder="Bairro"
                />
                <TextInput
                  label="Rua"
                  name="enderecoLogradouro"
                  type="text"
                  placeholder="Rua"
                />
                <TextInput
                  label="Numero"
                  name="enderecoNumero"
                  type="text"
                  placeholder="Numero"
                />
                <hr />
                <h5>Informações do Condutor</h5>

                <TextInput
                  label="CNH Numero"
                  name="cnh"
                  type="text"
                  placeholder="CNH Numero"
                />
                <TextInput
                  label="CNH Data emissão"
                  name="cnhDataEmissao"
                  type="text"
                  placeholder="CNH Data emissão"
                />
                <hr />
                <h5>Informações do Carro</h5>
                <Select
                  label="Qual a marca do carro?"
                  name="marca"
                  onChange={async (e) => {
                    const { value } = e.target;
                    const modelos = await getModelos(value, fipe);
                    setFieldValue("marca", value);
                    setFieldValue("modelo", "");
                    setFieldValue("modelos", modelos);
                  }}
                >
                  <option value="">Selecione a marca</option>
                  {marcas
                    ? marcas.map((value, index) => (
                        <option>{value.marca}</option>
                      ))
                    : null}
                </Select>
                <Select
                  label="Qual o modelo do carro?"
                  name="modelo"
                  onChange={async (e) => {
                    const { value } = e.target;
                    const anos = await getAnos(value, fipe);
                    setFieldValue("modelo", value);
                    setFieldValue("ano", "");
                    setFieldValue("anos", anos);
                  }}
                >
                  <option value="">Selecione o modelo</option>
                  {values.modelos &&
                    values.modelos.map((r) => (
                      <option key={r.modelo} value={r.modelo}>
                        {r.modelo}
                      </option>
                    ))}
                </Select>
                <Select
                  label="Qual o ano do carro?"
                  name="ano"
                  onChange={async (e) => {
                    const { value } = e.target;
                    const tipos = await getTipos(values.modelo, value, fipe);
                    setFieldValue("ano", value);
                    setFieldValue("tipo", "");
                    setFieldValue("tipos", tipos);
                  }}
                >
                  <option value="-">Selecione o ano</option>
                  {values.anos &&
                    values.anos.map((r) => (
                      <option key={r.ano} value={r.ano}>
                        {r.ano}
                      </option>
                    ))}
                </Select>
                <Select
                  label="Informe o tipo combustivel do carro"
                  name="tipo"
                  onChange={async (e) => {
                    const { value } = e.target;
                    setFieldValue("tipo", value);
                    setValues(
                      await getCarro(values, value, fipe, setFieldValues)
                    );
                  }}
                >
                  <option value="">Selecione o combustivel</option>
                  {values.tipos &&
                    values.tipos.map((r) => (
                      <option key={r.tipo} value={r.tipo}>
                        {r.tipo}
                      </option>
                    ))}
                </Select>
                <TextInput
                  label="Valor fipe"
                  name="valorFipe"
                  type="text"
                  placeholder="Valor fipe"
                />
                <hr />
                {localStorage.getItem("role") === "godmode" ? (
                  <h3 className="mb-1">Coberturas</h3>
                ) : null}

                <FieldArray
                  name="coberturas"
                  render={(arrayHelpers) => (
                    <div className="">
                      {values.coberturas
                        ? values.coberturas.map((cobertura, index) => (
                            <div key={index} className="mb-3 col-md-12">
                              <FormBoostrap className="mb-2">{`Selecione a cobertura de numero ${
                                index + 1
                              }`}</FormBoostrap>
                              <InputGroup>
                                <FormBoostrap.Select
                                  className="form-select"
                                  name={`coberturas.${index}`}
                                  aria-label="Selecione uma cobertura"
                                  label="Selecione uma cobertura"
                                  value={values.coberturas[index]}
                                  onChange={(e) => {
                                    handleChange(e);
                                  }}
                                >
                                  <option value="Selecione uma cobertura">
                                    Selecione uma cobertura
                                  </option>
                                  <option value="Casco">Casco</option>
                                  <option value="Furto ou roubo">
                                    Furto ou roubo
                                  </option>
                                  <option value="Danos parciais">
                                    Danos parciais
                                  </option>
                                  <option value="Perda total">
                                    Perda total
                                  </option>
                                  <option value="Seguro buraco">
                                    Seguro buraco
                                  </option>
                                </FormBoostrap.Select>
                                {localStorage.getItem("role") === "godmode" ? (
                                  <Button
                                    variant="outline-secondary"
                                    id="button-addon2"
                                    onClick={() => {
                                      setNomeCobertura(cobertura);
                                      setIndexCobertura(index);
                                      setArrayHelpersCoberturas(arrayHelpers);
                                      setConfirmation(true);

                                      // if (maxCoberturas) {
                                      //   setMaxCoberturas(!maxCoberturas);
                                      // }
                                      // arrayHelpers.remove(index);
                                    }}
                                  >
                                    X
                                  </Button>
                                ) : null}
                              </InputGroup>
                            </div>
                          ))
                        : null}
                      {localStorage.getItem("role") === "godmode" ? (
                        <Button
                          type="button"
                          onClick={() => {
                            if (values.coberturas.length < 6) {
                              arrayHelpers.push("");
                            } else {
                              setMaxCoberturas(true);
                            }
                          }}
                          className="mb-3"
                        >
                          {/* show this when user has removed all friends from the list */}
                          Adicione uma cobertura
                        </Button>
                      ) : null}
                      {maxCoberturas ? (
                        <h6 className="text-danger">
                          Maximo de coberturas por contrato é 6
                        </h6>
                      ) : null}
                    </div>
                  )}
                />
                {localStorage.getItem("role") === "godmode" ? (
                  <>
                    <hr />
                    <TextInput
                      label="Valor total"
                      name="valorTotal"
                      type="text"
                      placeholder="Valor total"
                    />
                    <div className="row mt-3">
                      <div className="col-sm-12">
                        <button
                          type="submit"
                          color="primary"
                          className="btn btn-primary shadow-sm"
                          style={{ width: "100px", marginRight: "5px" }}
                          disabled={isSubmitting}
                        >
                          {" "}
                          Salvar
                        </button>
                        {props.edit ? (
                          <button
                            type="button"
                            className="btn btn-danger shadow-sm"
                            style={{ width: "100px" }}
                            onClick={() => handleDelete(values)}
                          >
                            {" "}
                            Deletar
                          </button>
                        ) : null}
                      </div>
                    </div>
                    <hr />
                  </>
                ) : null}
              </Form>
            )}
          </Formik>
          {confirmation ? (
            <ConfirmationModal
              show={confirmation}
              setShow={setConfirmation}
              title="Excluir cobertura?"
              body="Tem certeza que deseja excluir essa cobertura?"
              action={setDeleteCobertura}
            ></ConfirmationModal>
          ) : null}
          {fetchLoading ? (
            <LoadingModal
              show={fetchLoading}
              title={modalMessage}
              body={modalMessage}
              icon={modalIcon}
            ></LoadingModal>
          ) : null}
          {confirmationDeletion ? (
            <ConfirmationModal
              show={confirmationDeletion}
              setShow={setConfirmationDeletion}
              title={modalMessage}
              body={modalMessage}
              action={deleteSolicitacao}
            ></ConfirmationModal>
          ) : null}
          <BackToTop></BackToTop>
        </>
      )}
    </>
  );
};

export default SolicitacaoComponent;
