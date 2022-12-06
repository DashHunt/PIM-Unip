import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Formik, Form } from "formik";

import { trackPromise } from "react-promise-tracker";

import { BsFillCheckSquareFill } from "react-icons/bs";

import * as Yup from "yup";

import LoadingModal from "../LoadinModal";
import Spinner from "../Spinner";

import TextInput from "../Inputs/TextInput";
import ClientesAPI from "../../api/Clientes";

const Register = (props) => {
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [loadingIcon, setLoadingIcon] = useState(<Spinner></Spinner>);

  const handleOnKeyDown = (keyEvent) => {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  };

  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  return (
    <>
      <Formik
        initialValues={{ cpf: "", email: "", primeiroNome: "", sobrenome: "" }}
        enableReinitialize
        validationSchema={Yup.object().shape({
          cpf: Yup.string().required("Required"),
          email: Yup.string().required("Required"),
          primeiroNome: Yup.string().required("Required"),
          sobrenome: Yup.string().required("Required"),
          senha: Yup.string()
            .required("Required")
            .min(8, "Senha deve conter no minimo 8 caracteres"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setLoadingMessage("Registrando cliente");

          const clientes = new ClientesAPI();
          setShowLoadingModal(true);
          trackPromise(
            clientes
              .registerClientes(values)
              .then((res) => {
                setLoadingMessage("Registro com sucesso");
                setLoadingIcon(
                  <BsFillCheckSquareFill
                    style={{ height: "20px", width: "20px", color: "green" }}
                  ></BsFillCheckSquareFill>
                );
                sleep(1000).then(() => {
                  setShowLoadingModal(false);
                });
              })
              .catch((error) => console.log(error))
          );

          setSubmitting(false);
        }}
      >
        {({ isSubmitting, handleChange, values, setFieldValue }) => (
          <Form onKeyDown={handleOnKeyDown} style={{ width: "300px" }}>
            <h2>Registrar</h2>
            <h6 className="text-muted mb-3">Registre-se gratuitamente</h6>
            <TextInput
              label="Email"
              name="email"
              type="text"
              placeholder="Email"
            />
            <TextInput
              label="Senha"
              name="senha"
              type="password"
              placeholder="Senha"
            />
            <TextInput
              label="CPF"
              name="cpf"
              type="text"
              placeholder="CPF"
              maxLength="14"
            />
            <TextInput
              label="Primeiro nome"
              name="primeiroNome"
              type="text"
              placeholder="Primeiro nome"
            />
            <TextInput
              label="Sobrenome"
              name="sobrenome"
              type="text"
              placeholder="Sobrenome"
            />
            <div className="mt-3">
              <hr />
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                Submit
              </Button>

              <Button
                className="ms-1"
                variant="secondary"
                onClick={() => props.flip()}
              >
                Pagina de Login
              </Button>
            </div>
            {showLoadingModal ? (
              <LoadingModal
                show={showLoadingModal}
                title="Registrando cliente"
                text={loadingMessage}
                icon={loadingIcon}
              ></LoadingModal>
            ) : null}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Register;
