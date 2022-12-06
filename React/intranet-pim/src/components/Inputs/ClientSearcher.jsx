import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useField } from "formik";
import ClientesAPI from "../../api/Clientes";
import { useState } from "react";

function ClienteSearcher({ label, values, ...props }) {
  const [field, meta] = useField(props);
  const [clienteNotFound, setClienteNotFound] = useState(false);

  function ProcurarCliente(value) {
    const clientes = new ClientesAPI();
    clientes
      .getByID(value)
      .then((res) => {
        if(Object.keys(res.data).length > 0) {
            setClienteNotFound(false)
            values("primeiroNome", res.data[0].primeiroNome)
            values("sobrenome", res.data[0].sobrenome)
            values("idCliente", res.data[0].idCliente)
        }else{
            setClienteNotFound(true)
        }
      })
      .catch((error) => console.log(error));
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
              placeholder="Procurar cliente"
              aria-label="Procurar cliente"
              aria-describedby="basic-addon2"
              className="border-danger"
              {...field}
              {...props}
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              onClick={() => ProcurarCliente(meta.value)}
              className="border-danger text-danger"
            >
              Procurar cliente
            </Button>
          </InputGroup>
          <div className="text-danger">{meta.error}</div>
        </>
      ) : (
        <InputGroup className="">
          <Form.Control
            placeholder="Procurar cliente"
            aria-label="Procurar cliente"
            aria-describedby="basic-addon2"
            {...field}
            {...props}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={() => ProcurarCliente(meta.value)}
          >
            Procurar cliente
          </Button>
        </InputGroup>
      )}
      {clienteNotFound ? <h6 className="text-danger mt-1">Cliente não encontrado</h6>: null}
    </div>
  );
}

export default ClienteSearcher;
