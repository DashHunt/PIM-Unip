import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import Form from "react-bootstrap/Form";

const Register = (props) => {
  const [errorEmail, setErrorEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form style={{ width: "300px" }}>
    <h2 className="mb-3">Registrar</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control
          type="password"
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>CPF</Form.Label>
        <Form.Control
          type="text"
          placeholder="Digite seu CPF"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          placeholder="Digite seu Nome"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Sobrenome</Form.Label>
        <Form.Control
          type="text"
          placeholder="Digite seu Sobrenome"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </Form.Group>
      <div className="mt-3">
        <hr />
        <Button variant="primary">Submit</Button>

        <Button
          className="ms-1"
          variant="secondary"
          onClick={() => props.flip()}
        >
          Pagina de Login
        </Button>
      </div>
    </Form>
  );
};

export default Register;
