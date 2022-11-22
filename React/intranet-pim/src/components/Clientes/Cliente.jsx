// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextInput from "../Inputs/TextInput";

import Clientes from "../../data/Clientes";
import BackToTop from "../BackToTop";

const ClienteComponent = (props) => {
  const handleOnKeyDown = (keyEvent) => {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  };

  //TODO: implement same logic as Solicitacoes
  return (
    <>
      <Formik
        initialValues={Clientes[0]}
        enableReinitialize
        validationSchema={Yup.object().shape({})}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        {({ isSubmitting, handleChange, values, setFieldValue }) => (
          <Form className="row g-3" onKeyDown={handleOnKeyDown}>
            <div className="mt-1">
              <hr />
              <h5> Informações do cliente</h5>
            </div>
            <TextInput
              label="Primeiro nome"
              name="primeiro_nome"
              type="text"
              placeholder="Primeiro nome"
            />
            <TextInput
              label="Sobrenome"
              name="sobrenome"
              type="text"
              placeholder="Sobrenome"
            />
            <TextInput label="CPF" name="CPF" type="text" placeholder="CPF" />
            <TextInput
              label="E-mail"
              name="email"
              type="text"
              placeholder="E-mail"
            />

            {localStorage.getItem("role") === "admin" ||
            localStorage.getItem("role") === "godmode" ? (
              <TextInput
                label="Senha do usuario"
                name="senha"
                type="text"
                placeholder="Senha do usuario"
              />
            ) : (
              <TextInput
                label="Senha do usuario"
                name="senha"
                type="password"
                placeholder="Senha do usuario"
              />
            )}

            <hr />
            <div className="row">
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
                  >
                    {" "}
                    Deletar
                  </button>
                ) : null}
              </div>
            </div>
            <hr />
          </Form>
        )}
      </Formik>
      <BackToTop></BackToTop>
    </>
  );
};

export default ClienteComponent;
