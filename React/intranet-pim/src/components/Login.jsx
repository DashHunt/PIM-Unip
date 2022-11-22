import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import { user, acessToken } from "../data/Login";

import Form from "react-bootstrap/Form";

const Login = () => {
  const navigate = useNavigate();
  const [errorEmail, setErrorEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      // eslint-disable-next-line
      if (email == user.email && password == user.password) {
        localStorage.setItem("user", user.user);
        localStorage.setItem("role", user.role);
        localStorage.setItem("acessToken", acessToken.token);
        localStorage.setItem("expiration", acessToken.expiration);
        navigate('/PIM/')
      }
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
                placeholder="Enter your email address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              {errorEmail ? (
                <Form.Text className="text-danger">Wrong email</Form.Text>
              ) : (
                <Form.Text className="text-muted">
                  Never share your email with anybody
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
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
