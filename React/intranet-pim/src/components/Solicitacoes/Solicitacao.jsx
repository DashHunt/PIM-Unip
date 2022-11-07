// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import Topbar from "../Topbar";

import { IoMdArrowRoundBack } from "react-icons/io";

import Solicitacoes from "../../data/Solicitacoes";

const SolicitacaoComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const FilteredSolicitacao = () => {
    // eslint-disable-next-line
    return Solicitacoes.filter((solicitacao) => solicitacao.ID == id);
  };

  const Return = () => {
    navigate("/PIM/solicitacoes");
  };

  return (
    <>
      <Topbar>
        {FilteredSolicitacao().map((solicitacao, key) => {
          return (
            <>
              <Form>
                <Form.Group className="mb-3">
                  <br />
                  <div>
                    <h2>
                      <IoMdArrowRoundBack
                        style={{ cursor: "pointer" }}
                        onClick={() => Return()}
                      />
                      Info Solicitacao
                    </h2>
                  </div>
                  <hr className="mt-3" />
                  <h4>Infos gerenciais</h4>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>ID</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="ID cliente"
                        value={solicitacao.ID}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Status</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="ID cliente "
                        value={solicitacao.status}
                      />
                    </Form.Group>
                  </Row>

                  <hr className="mt-3" />
                  <h4>Endereco</h4>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Rua</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="ID cliente "
                        value={solicitacao.endereco_logradouro}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Numero</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="ID cliente"
                        value={solicitacao.endereco_numero}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Bairro</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="ID cliente "
                        value={solicitacao.endereco_bairro}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>CEP</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="ID cliente"
                        value={solicitacao.endereco_cep}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Estado</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="ID cliente "
                        value={solicitacao.endereco_estado}
                      />
                    </Form.Group>
                  </Row>

                  <hr className="mt-3" />
                  <h4>Informacoes basicas</h4>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>RG Data Emissao</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="ID cliente"
                        value={solicitacao.RG_data_emissao}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>RG</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="ID cliente"
                        value={solicitacao.RG}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>RG UF</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="ID cliente "
                        value={solicitacao.RG_uf}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Data nascimento</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="ID cliente"
                        value={solicitacao.data_nascimento}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>CNH Numero</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="ID cliente "
                        value={solicitacao.CNH_numero}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>CNH Data Emissao</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="ID cliente"
                        value={solicitacao.CNH_data_emissao}
                      />
                    </Form.Group>
                  </Row>
                </Form.Group>
                <hr className="mt-3" />

                <Button
                  variant="primary"
                  type="submit"
                  className="btn btn-primary mb-3"
                >
                  Submit
                </Button>
              </Form>
            </>
          );
        })}
      </Topbar>
    </>
  );
};

export default SolicitacaoComponent;
