// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import { IoMdArrowRoundBack } from "react-icons/io";

import Topbar from "../Topbar";

import Clientes from "../../data/Clientes";

const ClienteComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const FilteredCliente = () => {
    // eslint-disable-next-line
    return Clientes.filter((solicitacao) => solicitacao.ID_cliente == id);
  };

  const Return = () => {
    navigate("/PIM/clientes");
  };

  return (
    <>
      <Topbar>
        {FilteredCliente().map((cliente, key) => {
          return (
            <>
              <br />
              <div>
                <h2>
                  <IoMdArrowRoundBack
                    style={{ cursor: "pointer" }}
                    onClick={() => Return()}
                  />
                  Info cliente
                </h2>
              </div>
              <hr className="mt-3" />
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>ID cliente</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ID cliente"
                    value={cliente.ID_cliente}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>CPF</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="CPF"
                    value={cliente.CPF}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ID cliente"
                    value={cliente.email}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Primeiro nome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="CPF"
                    value={cliente.primeiro_nome}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Sobrenome</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ID cliente"
                    value={cliente.sobrenome}
                  />
                </Form.Group>
              </Row>
              <hr className="mt-3" />

              <Button
                variant="primary"
                type="submit"
                className="btn btn-primary mb-3"
              >
                Salvar
              </Button>
              {id ? (
                <Button
                  variant="danger"
                  className="mb-3"
                  style={{marginLeft: '5px'}}
                >
                  Excluir cliente
                </Button>
              ) : null}
            </>
          );
        })}
      </Topbar>
    </>
  );
};

export default ClienteComponent;
