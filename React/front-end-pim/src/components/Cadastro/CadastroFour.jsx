import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";

import { Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import FormBoostrap from "react-bootstrap/Form";

import FipeAPI from "../../api/Fipe";

import TextInput from "../FormInputs/TextInput";
import Select from "../FormInputs/Select";

const CadastroFour = (props) => {
  const [maxCoberturas, setMaxCoberturas] = useState(false);
  const [valorCoberturas, setValorCoberturas] = useState(1000);
  const [coberturas, setCoberturas] = useState(props.data.coberturas);
  const [valorTotal, setValorTotal] = useState(props.data.valorTotal);

  const handleSubmit = (values) => {
    props.next(values, true);
  };

  useEffect(() => {
    console.log(adicionaValoresCoberturas());
  }, []);

  function adicionaValoresCoberturas() {
    let novoValor = props.data.valorTotalIdade;

    console.log(coberturas);
    coberturas.forEach((cobertura) => {
      switch (cobertura) {
        case "Casco":
          var valorCobertura = Math.round(
            props.data.valorFipe
              .toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
              .replace("R$", "")
              .replace(".", "") / 100
          );
          if (novoValor > 0) {
            novoValor = novoValor + valorCobertura;
          } else {
            novoValor = valorCobertura;
          }
          break;
        case "Furto ou roubo":
          var valorCobertura = Math.round(
            props.data.valorFipe
              .toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
              .replace("R$", "")
              .replace(".", "") / 100
          );
          if (novoValor > 0) {
            novoValor = novoValor + valorCobertura;
          } else {
            novoValor = valorCobertura;
          }
          break;
        case "Danos parciais":
          var valorCobertura = Math.round(
            props.data.valorFipe
              .toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
              .replace("R$", "")
              .replace(".", "") / 100
          );
          if (novoValor > 0) {
            novoValor = novoValor + valorCobertura;
          } else {
            novoValor = valorCobertura;
          }
          break;
        case "Perda total":
          var valorCobertura = Math.round(
            props.data.valorFipe
              .toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
              .replace("R$", "")
              .replace(".", "") / 100
          );
          if (novoValor > 0) {
            novoValor = novoValor + valorCobertura;
          } else {
            novoValor = valorCobertura;
          }
          break;
        case "Seguro buraco":
          var valorCobertura = Math.round(
            props.data.valorFipe
              .toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })
              .replace("R$", "")
              .replace(".", "") / 100
          );
          if (novoValor > 0) {
            novoValor = novoValor + valorCobertura;
          } else {
            novoValor = valorCobertura;
          }
          break;
      }
    });

    return novoValor;
  }

  function atualizaValorTotal() {
    const valorAtual = valorTotal;
    const valorCobertura = Math.round(
      props.data.valorFipe
        .toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })
        .replace("R$", "")
        .replace(".", "") / 100
    );

    return valorAtual - valorCobertura;
  }

  useEffect(() => {
    console.log(adicionaValoresCoberturas());
    setValorTotal(adicionaValoresCoberturas());
  }, [coberturas]);

  useEffect(() => {
    props.setNewData((prev) => ({
      ...prev,
      valorTotal: valorTotal,
      coberturas: coberturas,
    }));
  }, [valorTotal]);

  return (
    <Formik
      validationSchema={Yup.object().shape({
        coberturas: Yup.array()
          .required("Escolha pelo menos uma cobertura") // these constraints are shown if and only if inner constraints are satisfied
          .min(1, "Minimum of 1 friends")
          .max(6, "Maximo de 6 coberturas por solicitação"),
      })}
      initialValues={props.data}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ handleChange, values }) => (
        <Form
          className="row g-3"
          onKeyDown={props.handleOnKeyDown}
          autoComplete="off"
        >
          <div className="text-primary">
            <h6 style={{ fontWeight: "bold" }}>Informações de cobertura</h6>
          </div>
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
                            console.log(values.coberturas[index]);
                            console.log(values.coberturas);
                            if (
                              !coberturas.includes(values.coberturas[index])
                            ) {
                              setCoberturas((coberturas) => [
                                ...coberturas,
                                e.target.value,
                              ]);
                            } else {
                              const tempCoberturas = coberturas;

                              const indexAtt = tempCoberturas.indexOf(
                                values.coberturas[index]
                              );
                              if (indexAtt !== -1) {
                                tempCoberturas[indexAtt] = e.target.value;
                              }

                              setCoberturas(tempCoberturas);
                            }
                            handleChange(e);
                          }}
                        >
                          <option value="Selecione uma cobertura">
                            Selecione uma cobertura
                          </option>
                          <option value="Casco">Casco</option>
                          <option value="Furto ou roubo">Furto ou roubo</option>
                          <option value="Danos parciais">Danos parciais</option>
                          <option value="Perda total">Perda total</option>
                          <option value="Seguro buraco">Seguro buraco</option>
                        </FormBoostrap.Select>
                        <Button
                          variant="outline-secondary"
                          id="button-addon2"
                          onClick={() => {
                            if (maxCoberturas) {
                              setMaxCoberturas(!maxCoberturas);
                            }
                            console.log(atualizaValorTotal());
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
          <div className="container mb-5 text-center">
            <h3 className="mb-1 text-center">
              <strong>Valor total</strong>
            </h3>
            <TextInput
              label="Valor total da solicitacao"
              name="valorTotal"
              type="text"
              placeholder="Valor total da solicitacao"
              value={valorTotal}
              disabled
            />
          </div>

          <div className="text-center">
            <Button
              type="button"
              className="mb-3 mt-2"
              onClick={() => props.prev(values)}
            >
              Anterior
            </Button>
            <Button type="submit" className="mb-3 mt-2 ms-2 float-right">
              Salvar
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CadastroFour;
