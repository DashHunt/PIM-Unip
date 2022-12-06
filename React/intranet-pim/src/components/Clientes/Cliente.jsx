// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextInput from "../Inputs/TextInput";

import { FcCheckmark, FcHighPriority } from "react-icons/fc";
import SpinnerComponent from "../Spinner";
import LoadingModal from "../LoadingModal";

import Sleep from "../../data/Sleep";
import Clientes from "../../data/Clientes";
import BackToTop from "../BackToTop";
import ClientesAPI from "../../api/Clientes";

const ClienteComponent = (props) => {
  const { id } = useParams();
  const [clientes, setClientes] = useState({});

  const [fetchLoading, setFetchLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalIcon, setModalIcon] = useState(null);

  useEffect(() => {
    const clientes = new ClientesAPI();

    if (id !== undefined) {
      console.log("Diferente de vazio");
      clientes
        .getByID(id)
        .then((data) => {
          setClientes(data.data);
        })
        .catch((error) => console.log(error));
    } else {
      console.log(Clientes);
      setClientes(Clientes);
    }
  }, []);

  const handleOnKeyDown = (keyEvent) => {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  };

  //TODO: implement same logic as Solicitacoes
  return (
    <>
      <Formik
        initialValues={clientes[0]}
        enableReinitialize
        validationSchema={Yup.object().shape({
          email: Yup.string().email("E-mail inválido").required("Required"),
          primeiroNome: Yup.string().required("Required"),
          sobrenome: Yup.string().required("Required"),
          senha: Yup.string()
            .required("Required")
            .min(8, "Senha deve conter no minimo 8 caracteres"),
          cpf: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          if (id !== undefined) {
            console.log("Edicao");

            setModalMessage("Atualizando cliente");
            setModalIcon(<SpinnerComponent></SpinnerComponent>);
            setFetchLoading(true);

            const clientes = new ClientesAPI();

            clientes
              .update(values)
              .then((res) => {
                setModalMessage("Operação realizada com sucesso");
                setModalIcon(
                  <FcCheckmark
                    style={{ height: "30px", width: "30px" }}
                  ></FcCheckmark>
                );
                Sleep(1000).then(() => {
                  setFetchLoading(false);
                  setSubmitting(false);
                });
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            console.log("Inclusao");

            setModalMessage("Incluindo cliente");
            setModalIcon(<SpinnerComponent></SpinnerComponent>);
            setFetchLoading(true);

            const clientes = new ClientesAPI();

            clientes
              .post(values)
              .then((res) => {
                setModalMessage("Operação realizada com sucesso");
                setModalIcon(
                  <FcCheckmark
                    style={{ height: "30px", width: "30px" }}
                  ></FcCheckmark>
                );
                Sleep(1000).then(() => {
                  setFetchLoading(false);
                  setSubmitting(false);
                });
              })
              .catch((error) => {
                console.log(error);
              });
          }
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
            <TextInput label="CPF" name="cpf" type="text" placeholder="CPF" />
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
              </div>
            </div>
            <hr />
          </Form>
        )}
      </Formik>
      {fetchLoading ? (
        <LoadingModal
          show={fetchLoading}
          title={modalMessage}
          body={modalMessage}
          icon={modalIcon}
        ></LoadingModal>
      ) : null}
      <BackToTop></BackToTop>
    </>
  );
};

export default ClienteComponent;
