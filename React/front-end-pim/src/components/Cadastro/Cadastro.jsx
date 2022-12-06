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

const Cadastro = () => {
  const [maxCoberturas, setMaxCoberturas] = useState(false);
  const [fipe, setFipe] = useState(null);
  const [marcas, setMarcas] = useState(null);
  const [values, setValues] = useState(null);
  const [fieldValues, setFieldValues] = useState({});
  const [coberturas, setCoberturas] = useState([]);

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
    const fipe = new FipeAPI();
    fipe
      .get()
      .then((res) => {
        setFipe(res.data);
        setMarcas(removeDuplicates(res.data));
      })
      .catch((error) => console.log(error));
  }, []);

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

  const handleOnKeyDown = (keyEvent) => {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  };
  return (
    <>
      <Formik
        initialValues={{ primeiroNome: '', sobrenome: '', coberturas: [] }}
        enableReinitialize
        validationSchema={Yup.object().shape({
            primeiroNome: Yup.string().required("Required"),
            sobrenome: Yup.string().required("Required")
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        {({
          isSubmitting,
          handleChange,
          handleBlur,
          values,
          setFieldValue,
        }) => (
          <Form
            className="row g-3"
            onKeyDown={handleOnKeyDown}
            autoComplete="off"
          >
            <div className="text-center text-primary text-bold mt-5">
              <h3 style={{ fontWeight: "bold" }}>
                Cadastre sua solicitação gratuitamente ;D
              </h3>
              <h6 style={{ fontWeight: "lighter" }}>
                Informe os dados do véiculo e seu condutor.
              </h6>
            </div>
            <TextInput
              label="Primeiro nome"
              name="primeiroNome"
              type="text"
              placeholder="Primeiro nome"
            ></TextInput>
            <TextInput
              label="Sobrenome"
              name="sobrenome"
              type="text"
              placeholder="Sobrenome"
            ></TextInput>

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
            <h3 className="mb-1">Informações do veiculo</h3>
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
                            onValueChange={(itemValue) =>
                              console.log(itemValue)
                            }
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
                disabled
              />
            </div>
            <div className="text-center">
                <hr />
              <Button type="submit" className="mb-3 mt-2">
                Cadastrar
              </Button>
              <Button type="button" variant="danger" className="mb-3 mt-2 ms-2">
                Resetar
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};



export default Cadastro;
