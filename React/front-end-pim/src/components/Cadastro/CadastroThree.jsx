import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";

import { Button } from "react-bootstrap";
import TextInputSide from "../Inputs/TextInputSide";
import CEPInput from "../Inputs/CEPInput";

const CadastroThree = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  const getFormatedDate = (currentDate) => {
    console.log(currentDate.split("/").reverse().join("-"))
    return currentDate.split("/").reverse().join("-");
  };

  return (
    <Formik
      initialValues={props.data}
      validationSchema={Yup.object().shape({
        enderecoCep: Yup.string().required("Required"),
        enderecoEstado: Yup.string().required("Required"),
        enderecoBairro: Yup.string().required("Required"),
        enderecoLogradouro: Yup.string().required("Required"),
        enderecoNumero: Yup.string().required("Required"),
        cnh: Yup.string().required("Required"),
        cnhDataEmissao: Yup.date()
          .required("Required")
          .max(
            getFormatedDate(new Date().toLocaleDateString()),
            "Data de emissão deve ser menor que hoje"
          ),
      })}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ values }) => (
        <Form
          className="row g-3"
          onKeyDown={props.handleOnKeyDown}
          autoComplete="off"
        >
          <div className="text-primary">
            <h6 style={{ fontWeight: "bold" }}>Informações do endereço</h6>
          </div>
          <CEPInput
            label="CEP"
            name="enderecoCep"
            type="text"
            placeholder="CEP"
            setData={props.setNewData}
          ></CEPInput>
          {/* <TextInputSide
            label="CEP"
            name="enderecoCep"
            type="text"
            placeholder="CEP"
          /> */}
          <TextInputSide
            label="Estado"
            name="enderecoEstado"
            type="text"
            placeholder="Estado"
          />
          <TextInputSide
            label="Bairro"
            name="enderecoBairro"
            type="text"
            placeholder="Bairro"
          />
          <TextInputSide
            label="Rua"
            name="enderecoLogradouro"
            type="text"
            placeholder="Rua"
          />
          <TextInputSide
            label="Numero"
            name="enderecoNumero"
            type="text"
            placeholder="Numero"
          />

          <hr />
          <h5>Informações do Condutor</h5>
          <TextInputSide
            label="CNH Numero"
            name="cnh"
            type="text"
            placeholder="CNH Numero"
          />
          <TextInputSide
            label="CNH Data emissão"
            name="cnhDataEmissao"
            type="date"
            placeholder="CNH Data emissão"
          />
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

export default CadastroThree;
