import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { trackPromise } from "react-promise-tracker";

import ClientesAPI from "../../api/Clientes";

import { acessToken } from "../../data/Token";

import LoadingModal from "../LoadinModal";
import Spinner from "../Spinner";

import { BsFillCheckSquareFill } from "react-icons/bs";
import Form from "react-bootstrap/Form";

const Login = (props) => {
  const navigate = useNavigate();

  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [loadingIcon, setLoadingIcon] = useState(<Spinner></Spinner>);

  const [errorEmail, setErrorEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notValidated, setNotValidated] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  function validateCliente() {
    if (email === "") {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }

    if (password === "") {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }

    if (!errorPassword && !errorEmail) {
      setLoadingMessage("Buscando clientes");

      const clientes = new ClientesAPI();
      setShowLoadingModal(true);
      trackPromise(
        clientes
          .validateCliente(email, password)
          .then((data) => {
            if (Object.keys(data.data).length > 0) {
              localStorage.setItem(
                "user",
                data.data[0].primeiroNome + " " + data.data[0].sobrenome
              );
              localStorage.setItem("email", data.data[0].email);
              localStorage.setItem("id", data.data[0].idCliente);
              localStorage.setItem("cpf", data.data[0].cpf);
              localStorage.setItem("expiration", acessToken.expiration);
              setLoadingMessage("Login com sucesso");
              setLoadingIcon(<BsFillCheckSquareFill style={{ height: '20px', width: '20px', color: "green"}}></BsFillCheckSquareFill>);
              sleep(1000).then(() => {
                setShowLoadingModal(false);
                navigate("/AS");
              });
            } else {
              setShowLoadingModal(false);
              setNotValidated(true);
            }
          })
          .catch((error) => console.log(error))
      );
    }
  }

  return (
    <>
      <Form>
        <h2 className="mb-3">Logar</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {errorEmail ? (
            <Form.Text className="text-danger">Empty email</Form.Text>
          ) : (
            <Form.Text className="text-muted">
              Nunca divida dados de login
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {errorPassword ? (
            <Form.Text className="text-danger">
              Password cannot be empty
            </Form.Text>
          ) : null}
        </Form.Group>
        <div className="mt-3">
          {notValidated ? (
            <Form.Text className="text-danger">User not found</Form.Text>
          ) : null}
          <hr />
          <Button variant="primary" onClick={() => validateCliente()}>
            Login
          </Button>
          <Button
            className="ms-1"
            variant="secondary"
            onClick={() => props.flip()}
          >
            Pagina de Registro
          </Button>
        </div>
      </Form>
      {showLoadingModal ? (
        <LoadingModal
          show={showLoadingModal}
          title="Validando cliente"
          text={loadingMessage}
          icon={loadingIcon}
        ></LoadingModal>
      ) : null}
    </>
  );
};

export default Login;
