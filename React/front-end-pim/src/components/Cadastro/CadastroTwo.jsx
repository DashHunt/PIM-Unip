import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextInput from "../FormInputs/TextInput";
import Select from "../FormInputs/Select";
import { Button } from "react-bootstrap";

import FipeAPI from "../../api/Fipe";

const CadastroTwo = (props) => {
  const [maxCoberturas, setMaxCoberturas] = useState(false);
  const [fipe, setFipe] = useState(null);
  const [marcas, setMarcas] = useState(null);
  const [values, setValues] = useState(null);
  const [fieldValues, setFieldValues] = useState({});
  const [coberturas, setCoberturas] = useState([]);
  const [valorTotalCarro, setValorTotalCarro] = useState("R$0");
  const [valorTotalCoberturas, setValorTotalCoberturas] = useState(0);
  const [idadeMenor, setIdadeMenor] = useState(false);

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

      props.setNewValorFipe((prev) => ({
        ...prev,
        marca: values.marca,
        modelo: values.modelo,
        modelos: values.modelos,
        tipo: tipo,
        tipos: values.tipos,
        ano: values.ano,
        anos: values.anos,
        valorFipe: newArray[0].valor,
        utilizacao: values.utilizacao
      }));
      resolve(newArray[0].valor);
    });
  }

  useEffect(() => {
    if (values !== null) {
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
      }
    });
  }, [coberturas]);

  useEffect(() => {
    console.log(valorTotalCoberturas);
  }, [valorTotalCoberturas]);

  function getModelos(marca) {
    console.log("Entrei");
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
    console.log(props.data.valorTotal);
    if (idade.length === 2) {
      switch (true) {
        case idade < 18:
          setIdadeMenor(true);
          props.setNewData((prev) => ({
            ...prev,
            valorTotalIdade: 0,
            idade: idade,
          }));
          break;
        case idade >= 18 && idade < 22:
          setIdadeMenor(false);
          props.setNewData((prev) => ({
            ...prev,
            valorTotalIdade: 1000,
            valorTotal: props.data.valorTotal
              ? props.data.valorTotal + 1000
              : 1000,
            idade: idade,
          }));

          break;
        case idade >= 22 && idade < 26:
          setIdadeMenor(false);
          props.setNewData((prev) => ({
            ...prev,
            valorTotalIdade: 750,
            valorTotal: props.data.valorTotal
              ? props.data.valorTotal + 750
              : 750,
            idade: idade,
          }));
          break;
        case idade >= 26 && idade < 30:
          setIdadeMenor(false);
          props.setNewData((prev) => ({
            ...prev,
            valorTotalIdade: 500,
            valorTotal: props.data.valorTotal
              ? props.data.valorTotal + 500
              : 500,
            idade: idade,
          }));
          break;
        case idade >= 30 && idade < 35:
          setIdadeMenor(false);
          props.setNewData((prev) => ({
            ...prev,
            valorTotalIdade: 250,
            valorTotal: props.data.valorTotal
              ? props.data.valorTotal + 250
              : 250,
            idade: idade,
          }));
          break;
        case idade >= 35 && idade < 40:
          setIdadeMenor(false);
          props.setNewData((prev) => ({
            ...prev,
            valorTotalIdade: 250,
            valorTotal: props.data.valorTotal
              ? props.data.valorTotal + 250
              : 250,
            idade: idade,
          }));
          break;
        case idade > 40:
          setIdadeMenor(false);
          props.setNewData((prev) => ({
            ...prev,
            valorTotalIdade: 250,
            valorTotal: props.data.valorTotal
              ? props.data.valorTotal + 250
              : 250,
            idade: idade,
          }));
          break;
      }
    } else {
      props.setNewData((prev) => ({
        ...prev,
        valorTotalIdade: 0,
        valorTotal: 0,
        idade: idade,
      }));
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

  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <Formik
      initialValues={props.data}
      enableReinitialize
      validationSchema={Yup.object().shape({
        idade: Yup.string().required("Required"),
        marca: Yup.string().required("Required"),
        modelo: Yup.string().required("Required"),
        ano: Yup.string().required("Required"),
        tipo: Yup.string().required("Required"),
        utilizacao: Yup.string().required("Required"),
      })}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, handleChange, handleBlur, values, setFieldValue }) => (
        <Form className="row g-3" onKeyDown={handleOnKeyDown}>
          <div className="text-primary">
            <h6 style={{ fontWeight: "bold" }}>Informações do carro</h6>
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
            value={values.marca}
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
          <div className="text-center">
            <Button
              type="button"
              className="mb-3 mt-2"
              onClick={() => props.prev(values)}
            >
              Anterior
            </Button>
            <Button type="submit" className="mb-3 mt-2 ms-2 float-right">
              Proximo
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CadastroTwo;
