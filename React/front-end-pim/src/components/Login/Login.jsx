import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import Form from "react-bootstrap/Form";

const Login = (props) => {
  const [errorEmail, setErrorEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
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
          <Form.Text className="text-danger">Wrong email</Form.Text>
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
        {errorEmail ? (
          <Form.Text className="text-danger">
            Password cannot be empty
          </Form.Text>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remeber me" />
      </Form.Group>
      <div className="mt-3">
        <hr />
        <Button variant="primary">Login</Button>
        <Button
          className="ms-1"
          variant="secondary"
          onClick={() => props.flip()}
        >
          Pagina de Registro
        </Button>
      </div>
    </Form>
  );
};

export default Login;
