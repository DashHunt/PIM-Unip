import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
// eslint-disable-next-line
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";

import FormBoostrap from "react-bootstrap/Form";

import TextInput from "../FormInputs/TextInput";
import Select from "../FormInputs/Select";
// eslint-disable-next-line
import SelectButton from "../FormInputs/SelectButton";
import { Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

import CardComponent from "./Card";
import CardGroupComponent from "./CardGroup";
import FipeAPI from "../../api/Fipe";
import { routes } from "../../helpers/helpers";

const Simulacao = () => {
  const navigate = useNavigate();

  const [maxCoberturas, setMaxCoberturas] = useState(false);
  const [fipe, setFipe] = useState(null);
  const [marcas, setMarcas] = useState(null);
  const [values, setValues] = useState(null);
  const [fieldValues, setFieldValues] = useState({});
  const [coberturas, setCoberturas] = useState([]);
  const [idadeMenor, setIdadeMenor] = useState(false);
  const [valorTotalCarro, setValorTotalCarro] = useState("R$0");
  const [valorTotalCoberturas, setValorTotalCoberturas] = useState(0);
  const [valorTotalIdade, setValorTotalIdade] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);

  function getCarro(values, tipo) {
    console.log("Calculate Values");
    console.log(values);

    setFieldValues(values);

    return new Promise((resolve, reject) => {
      let newArray = fipe.filter(function (el) {
        return (
          el.marca == values.marca &&
          el.modelo == values.modelo &&
          el.ano == values.ano &&
          el.tipo == tipo
        );
      });
      resolve(newArray[0].valor);
    });
  }

  useEffect(() => {
    if (values !== null) {
      console.log(values)
      setValorTotalCarro(values);
    }
  }, [values]);
  
  useEffect(() => {
    console.log(coberturas);
    coberturas.forEach((cobertura) => {
      switch (cobertura) {
        case "Casco":
          if (valorTotalCarro !== "R$0") {
            setValorTotalCoberturas(
              Math.round(
                valorTotalCoberturas +
                  parseInt(
                    valorTotalCarro
                      .toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })
                      .replace("R$", "")
                      .replace(".", "")
                  ) /
                    100
              )
            );
          } else {
            setValorTotalCoberturas(500);
          }
          break;
        case "Danos parciais":
          if (valorTotalCarro !== "R$0") {
            setValorTotalCoberturas(
              Math.round(
                valorTotalCoberturas +
                  parseInt(
                    valorTotalCarro
                      .toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })
                      .replace("R$", "")
                      .replace(".", "")
                  ) /
                    100
              )
            );
          } else {
            setValorTotalCoberturas(500);
          }
          break;
        case "Seguro buraco":
          if (valorTotalCarro !== "R$0") {
            setValorTotalCoberturas(
              Math.round(
                valorTotalCoberturas +
                  parseInt(
                    valorTotalCarro
                      .toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })
                      .replace("R$", "")
                      .replace(".", "")
                  ) /
                    100
              )
            );
          } else {
            setValorTotalCoberturas(500);
          }
          break;
        case "Furto ou roubo":
          if (valorTotalCarro !== "R$0") {
            setValorTotalCoberturas(
              Math.round(
                valorTotalCoberturas +
                  parseInt(
                    valorTotalCarro
                      .toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })
                      .replace("R$", "")
                      .replace(".", "")
                  ) /
                    100
              )
            );
          } else {
            setValorTotalCoberturas(500);
          }
          break;
      }
    });
  }, [coberturas]);

  useEffect(() => {
    setValorTotal(valorTotalCoberturas + valorTotalIdade);
  }, [valorTotalCoberturas, valorTotalIdade]);

  function getModelos(marca) {
    return new Promise((resolve, reject) => {
      let newArray = fipe.filter(function (el) {
        return el.marca == marca;
      });

      newArray = newArray.reduce((unique, o) => {
        if (!unique.some((obj) => obj.modelo === o.modelo)) {
          unique.push(o);
        }
        return unique;
      }, []);

      resolve(newArray);
    });
  }

  function getAnos(modelo) {
    return new Promise((resolve, reject) => {
      let newArray = fipe.filter(function (el) {
        return el.modelo == modelo;
      });

      newArray = newArray.reduce((unique, o) => {
        if (!unique.some((obj) => obj.ano === o.ano)) {
          unique.push(o);
        }
        return unique;
      }, []);

      resolve(newArray);
    });
  }

  function getTipos(modelo, ano) {
    return new Promise((resolve, reject) => {
      let newArray = fipe.filter(function (el) {
        return el.modelo == modelo && el.ano == ano;
      });

      newArray = newArray.reduce((unique, o) => {
        if (!unique.some((obj) => obj.tipo === o.tipo)) {
          unique.push(o);
        }
        return unique;
      }, []);

      resolve(newArray);
    });
  }

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

  function calculateIdade(idade) {
    // console.log(idade);
    switch (true) {
      case idade < 18:
        setIdadeMenor(true);
        setValorTotalIdade(0);
        break;
      case idade >= 18 && idade < 22:
        setIdadeMenor(false);
        setValorTotalIdade(1000);
        setValorTotal(valorTotal + 1000);
        break;
      case idade >= 22 && idade < 26:
        setIdadeMenor(false);
        setValorTotalIdade(750);
        setValorTotal(valorTotal + 750);
        break;
      case idade >= 26 && idade < 30:
        setIdadeMenor(false);
        setValorTotalIdade(500);
        setValorTotal(valorTotal + 500);
        break;
      case idade >= 30 && idade < 35:
        setIdadeMenor(false);
        setValorTotalIdade(250);
        setValorTotal(valorTotal + 250);
        break;
      case idade >= 35 && idade < 40:
        setIdadeMenor(false);
        setValorTotalIdade(250);
        setValorTotal(valorTotal + 250);
        break;
      case idade > 40:
        setIdadeMenor(false);
        setValorTotalIdade(250);
        setValorTotal(valorTotal + 250);
        break;
    }
  }

  useEffect(() => {
    const fipe = new FipeAPI();
    fipe
      .get()
      .then((res) => {
        setFipe(res.data);
        setMarcas(removeDuplicates(res.data));
      })
      .catch((error) => console.log(error));
  }, []);

  const handleOnKeyDown = (keyEvent) => {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  };

  return (
    <Formik
      initialValues={{ coberturas: [] }}
      enableReinitialize
      validationSchema={Yup.object().shape({
        coberturas: Yup.array()
          .required("Escolha pelo menos uma cobertura") // these constraints are shown if and only if inner constraints are satisfied
          .min(1, "Minimum of 1 friends")
          .max(6, "Maximo de 6 coberturas por solicitação"),
        idade: Yup.string().required("Required"),
        marca: Yup.string().required("Required"),
        modelo: Yup.string().required("Required"),
        ano: Yup.string().required("Required"),
        tipo: Yup.string().required("Required"),
        utilizacao: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        const coberturas = values["coberturas"];
        values["valorTotal"] = valorTotal
        values["valorFipe"] = valorTotalCarro
        values["valorTotalIdade"] = valorTotalIdade
        
        if(localStorage.getItem("user") !== null){
          localStorage.setItem('simulacao', JSON.stringify(values));
          navigate(routes.cadastro.path)
        }else{
          navigate(routes.login.path)
        }
        console.log(values);
        console.log(coberturas);
      }}
    >
      {({ isSubmitting, handleChange, handleBlur, values, setFieldValue }) => (
        <Form className="row g-3" onKeyDown={handleOnKeyDown}>
          <div className="text-center text-primary text-bold mt-5">
            <h3 style={{ fontWeight: "bold" }}>Olá, vamos começar? ;D</h3>
            <h6 style={{ fontWeight: "lighter" }}>
              Informe os dados do véiculo e seu condutor.
            </h6>
            <h6 className="mt-3 text-danger">
              <strong>*Se liga:</strong> Para que os dados da simulação fiquem
              salvos, é necessário estar logado!<strong>*</strong>
            </h6>
          </div>
          <TextInput
            label="Idade do condutor"
            name="idade"
            type="number"
            placeholder="Idade do condutor"
            onChange={(e) => {
              const { value } = e.target;
              setFieldValue("idade", value);
              calculateIdade(value);
            }}
          ></TextInput>
          {idadeMenor ? (
            <span className="text-danger">
              Idade deve ser maior que 18 anos
            </span>
          ) : null}
          <Select label="Utilização" name="utilizacao">
            <option value="Selecione um opcao">Selecione um opcao</option>
            <option value="Particular">Particular</option>
            <option value="Comercial">Comercial</option>
          </Select>
          <Select
            label="Qual a marca do carro?"
            name="marca"
            onChange={async (e) => {
              const { value } = e.target;
              const modelos = await getModelos(value);
              setFieldValue("marca", value);
              setFieldValue("modelo", "");
              setFieldValue("modelos", modelos);
            }}
          >
            <option value="">Selecione a marca</option>
            {marcas
              ? marcas.map((value, index) => <option>{value.marca}</option>)
              : null}
          </Select>
          <Select
            label="Qual o modelo do carro?"
            name="modelo"
            onChange={async (e) => {
              const { value } = e.target;
              const anos = await getAnos(value);
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
              const tipos = await getTipos(values.modelo, value);
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
              setValues(await getCarro(values, value));
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
          <hr />
          <h3 className="mb-1">Coberturas</h3>
          <FieldArray
            name="coberturas"
            render={(arrayHelpers) => (
              <div className="">
                {values.coberturas ? (
                  values.coberturas.map((cobertura, index) => (
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
                            setCoberturas((coberturas) => [
                              ...coberturas,
                              e.target.value,
                            ]);
                            handleChange(e);
                          }}
                        >
                          <option value="Selecione uma cobertura">
                            Selecione uma cobertura
                          </option>
                          <option value="Casco">Casco</option>
                          <option value="Furto ou roubo">Furto ou roubo</option>
                          <option value="Danos parciais">Danos parciais</option>
                          <option value="Danos totais">Perda total</option>
                          <option value="Seguro buraco">Seguro buraco</option>
                        </FormBoostrap.Select>
                        <Button
                          variant="outline-secondary"
                          id="button-addon2"
                          onClick={() => {
                            if (maxCoberturas) {
                              setMaxCoberturas(!maxCoberturas);
                            }
                            const valor = Math.round(
                              parseInt(
                                valorTotalCarro
                                  .toLocaleString("pt-br", {
                                    style: "currency",
                                    currency: "BRL",
                                  })
                                  .replace("R$", "")
                                  .replace(".", "")
                              ) / 100
                            );
                            setValorTotalCoberturas(
                              valorTotalCoberturas - valor
                            );
                            arrayHelpers.remove(index);
                          }}
                        >
                          X
                        </Button>
                      </InputGroup>
                    </div>
                  ))
                ) : (
                  <Button
                    type="button"
                    onClick={() => {
                      if (values.coberturas.length <= 6) {
                        arrayHelpers.push("");
                      }
                    }}
                  >
                    {/* show this when user has removed all friends from the list */}
                    Adicione uma cobertura
                  </Button>
                )}
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
                {maxCoberturas ? (
                  <h6 className="text-danger">
                    Maximo de coberturas por contrato é 6
                  </h6>
                ) : null}
              </div>
            )}
          />
          <hr />
          <div className="container">
            <div className="text-center text-secondary text-bold mb-4">
              <h3 className="text-primary" style={{ fontWeight: "bold" }}>
                Seu seguro deu:
              </h3>
              <h6 style={{ fontWeight: "lighter" }}>
                *Lembrando que isso é só uma simulação! Todos esses valores
                podem mudar.*
              </h6>
            </div>
            <div className="d-flex justify-content-center">
              <CardGroupComponent>
                <CardComponent
                  title="Valor total coberturas"
                  subtitle="Com base nas coberturas escolhidas"
                  paragraph={`R$${valorTotalCoberturas}`}
                />
                <CardComponent
                  title="Valor total idade"
                  paragraph={`R$${valorTotalIdade}`}
                />
                <CardComponent
                  title="Valor total carro"
                  subtitle="Segundo tabela fipe de 2019"
                  paragraph={valorTotalCarro}
                />
              </CardGroupComponent>
            </div>
          </div>
          <div className="text-center">
            <h3 style={{ fontWeight: "bold" }}>Valor total</h3>
            <h3>{`R$${valorTotal}`}</h3>
          </div>
          <div className="text-center">
            <hr />
            <h2 style={{ fontWeight: "bold" }}>
              Gostou do valor da simulação?
            </h2>
            <h4>Cadastre sua proposta agora mesmo!</h4>
            <h5 className="mt-3 text-danger">
              <strong>*Se liga:</strong> Para que os dados da simulação fiquem
              salvos, é necessário estar logado!<strong>*</strong>
            </h5>
            <Button type="submit" className="mb-3 mt-2">
              Cadastrar proposta
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Simulacao;
