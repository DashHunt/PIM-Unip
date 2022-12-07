import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import { user, acessToken } from "../data/Login";

import Form from "react-bootstrap/Form";
import FuncionariosAPI from "../api/Funcionarios";

const Login = () => {
  const navigate = useNavigate();
  const [errorEmail, setErrorEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notValidated, setNotValidated] = useState(false);

  // eslint-disable-next-line
  const [errorPassword, setErrorPassword] = useState(false);

  function validateEmail(string) {
    return String(string)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  function SubmitLogin() {
    if (!validateEmail(email)) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }

    if (password !== "") {
      const funcionarios = new FuncionariosAPI();

      funcionarios
        .validateLogin(email, password)
        .then((data) => {
          if (Object.keys(data.data).length > 0) {
            console.log(data.data);
            setNotValidated(false);
            localStorage.setItem("username", data.data[0].username);
            localStorage.setItem("role", data.data[0].roles);
            localStorage.setItem("acessToken", acessToken.token);
            localStorage.setItem("expiration", acessToken.expiration);
            navigate("/PIM/");
          } else {
            setNotValidated(true);
          }
        })
        .catch((error) => console.log(error));
      // eslint-disable-next-line
      // if (email == user.email && password == user.password) {
      // }
    } else {
      setErrorPassword(true);
    }
  }

  return (
    <div
      className="position-relative"
      style={{
        backgroundColor: "#0F30AB",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ position: "absolute", height: "100%", width: "100%" }}
      >
        <div className="bg-white text-dark rounded p-4 p-sm-3 shadow-sm">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              {errorEmail ? (
                <Form.Text className="text-danger">Wrong email</Form.Text>
              ) : (
                <Form.Text className="text-muted">
                  Não divida dados de login com ninguem
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
              {errorEmail ? (
                <Form.Text className="text-danger">
                  Password cannot be empty
                </Form.Text>
              ) : null}
            </Form.Group>
            {notValidated ? (
              <div className="mb-2">
                <Form.Text className="text-danger">
                  User not found
                </Form.Text>
              </div>
            ) : null}
            <Button variant="primary" onClick={() => SubmitLogin()}>
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
