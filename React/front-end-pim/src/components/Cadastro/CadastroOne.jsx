import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";

import { Button } from "react-bootstrap";
import TextInputSide from "../Inputs/TextInputSide";
import TextInput from "../Inputs/TextInput";
import Select from "../Inputs/Select";
import UF from "../../api/UF";

const CadastroOne = (props) => {
  const [UFS, setUFs] = useState([{}]);

  const handleSubmit = (values) => {
    props.next(values);
  };

  useEffect(() => {
    const UFApi = new UF();
    UFApi.get()
      .then((res) => {
        const sortedData = res.data.sort((a, b) =>
          a.sigla > b.sigla ? 1 : b.sigla > a.sigla ? -1 : 0
        );
        setUFs(sortedData);
      })
      .catch((error) => console.log(error));
  }, []);

  const getFormatedDate = (currentDate) => {
    return currentDate.split("/").reverse().join("-");
  };

  return (
    <Formik
      initialValues={props.data}
      enableReinitialize
      onSubmit={handleSubmit}
      validationSchema={Yup.object().shape({
        primeiroNome: Yup.string().required("Required"),
        sobrenome: Yup.string().required("Required"),
        idCliente: Yup.string().required("Required"),
        rgDataEmissao: Yup.date()
          .required("Required")
          .max(
            getFormatedDate(new Date().toLocaleDateString()),
            "Data de emissão deve ser menor que hoje"
          ),
        rgUf: Yup.string().required("Required"),
        rg: Yup.string().required("Required"),
        genero: Yup.string().required("Required"),
        dataNascimento: Yup.date()
          .max("07/12/2004", "O condutor deve ter no minimo 18 anos")
          .required("Campo obrigatório"),
      })}
    >
      {() => (
        <Form
          className="row g-3"
          onKeyDown={props.handleOnKeyDown}
          autoComplete="off"
        >
          <div className="text-primary">
            <h6 style={{ fontWeight: "bold" }}>Informações do condutor</h6>
          </div>
          <TextInputSide
            label="Primeiro nome"
            name="primeiroNome"
            type="text"
            placeholder="Primeiro nome"
            disabled
          ></TextInputSide>
          <TextInputSide
            label="Sobrenome"
            name="sobrenome"
            type="text"
            placeholder="Sobrenome"
            disabled
          ></TextInputSide>
          <TextInput
            label="ID Cliente"
            name="idCliente"
            type="text"
            placeholder="ID Cliente"
            disabled
          ></TextInput>

          <div className="mt-1">
            <hr />
            <h5> Informacoes basicas</h5>
          </div>
          <TextInputSide label="RG" name="rg" type="text" placeholder="RG" />
          <TextInputSide
            label="RG Data Emissão"
            name="rgDataEmissao"
            type="date"
            placeholder="RG Data Emissão"
          />
          <Select label="RG UF" name="rgUf">
            <option value="Selecione um opcao">Selecione um opcao</option>
            {UFS.map((uf) => {
              return <option value={uf.sigla}>{uf.sigla}</option>;
            })}
          </Select>
          <Select label="Genero" name="genero">
            <option value="Selecione um opcao">Selecione um opcao</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </Select>
          <TextInputSide
            label="Data nascimento"
            name="dataNascimento"
            type="date"
            placeholder="Data nascimento"
            maxLength="8"
          />
          <div className="text-center">
            <Button type="submit" className="mb-3 mt-2 ms-2 float-right">
              Proximo
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CadastroOne;
