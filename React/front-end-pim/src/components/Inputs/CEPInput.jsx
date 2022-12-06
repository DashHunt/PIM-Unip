import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useField } from "formik";
import { useState } from "react";

import CEP from "../../api/CEP";

function CEPInput({ label, values, ...props }) {
  const [field, meta] = useField(props);
  const [errorCEP, setErrorCEP] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function procurarCEP(value) {
    if (value.length >= 8) {
      setErrorCEP(false);
      const cepAPI = new CEP();
      cepAPI
        .get(value)
        .then((res) => {
          props.setData((prev) => ({
            ...prev,
            enderecoEstado: res.data.uf,
            enderecoBairro: res.data.bairro,
            enderecoLogradouro: res.data.logradouro,
          }));
        })
        .catch((err) => {
          setErrorCEP(true);
          setErrorMessage("Falha na requisição de CEP");
        });
    } else {
      setErrorCEP(true);
      setErrorMessage("O CEP Deve conter no minimo 8 caracteres");
    }
  }

  return (
    <div className="">
      <label htmlFor={props.id || props.name} className="form-label">
        {label}
      </label>
      {meta.touched && meta.error ? (
        <>
          <InputGroup className="">
            <Form.Control
              placeholder="Procurar CEP"
              aria-label="Procurar CEP"
              aria-describedby="basic-addon2"
              className="border-danger"
              {...field}
              {...props}
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              className="border-danger text-danger"
              onClick={() => procurarCEP(meta.value)}
            >
              Procurar CEP
            </Button>
          </InputGroup>
          <div className="text-danger">{meta.error}</div>
        </>
      ) : (
        <InputGroup className="">
          <Form.Control
            placeholder="Procurar CEP"
            aria-label="Procurar CEP"
            aria-describedby="basic-addon2"
            {...field}
            {...props}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={() => procurarCEP(meta.value)}
          >
            Procurar CEP
          </Button>
        </InputGroup>
      )}
      {errorCEP ? <h6 className="text-danger mt-2">{errorMessage}</h6> : null}
    </div>
  );
}

export default CEPInput;
