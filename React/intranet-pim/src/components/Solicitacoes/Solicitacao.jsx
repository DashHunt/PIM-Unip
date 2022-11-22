// eslint-disable-next-line
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import TextInput from "../Inputs/TextInput";

import Solicitacoes from "../../data/Solicitacoes";
import BackToTop from "../BackToTop";

const SolicitacaoComponent = (props) => {
  const handleOnKeyDown = (keyEvent) => {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  };

  return (
    <>
      <Formik
        initialValues={Solicitacoes[0]}
        enableReinitialize
        validationSchema={Yup.object().shape({
          RG: Yup.string()
            .required("Required")
            .max(100, "Field must be less than 100"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        {({ isSubmitting, handleChange, values, setFieldValue }) => (
          <Form className="row g-3" onKeyDown={handleOnKeyDown}>
            <TextInput
              label="Status"
              name="status"
              type="text"
              placeholder="Status"
              disabled
            />
            <TextInput
              label="Data cadastro"
              name="Data_cadastro"
              type="text"
              placeholder="Data cadastro"
              disabled
            />

            <div className="mt-1">
              <hr />
              <h5> Informacoes basicas</h5>
            </div>
            
            <TextInput
              label="Nome"
              name="nome"
              type="text"
              placeholder="Nome"
            />
            <TextInput
              label="Sobrenome"
              name="sobrenome"
              type="text"
              placeholder="Sobrenome"
            />
            <TextInput label="RG" name="RG" type="text" placeholder="RG" />
            <TextInput
              label="RG Data Emissão"
              name="RG_data_emissao"
              type="text"
              placeholder="Origem"
            />
            <TextInput
              label="Genero"
              name="Genero"
              type="text"
              placeholder="Genero"
            />
            <TextInput
              label="Data nascimento"
              name="data_nascimento"
              type="text"
              placeholder="Data nascimento"
            />
            <hr />
            <h5>Endereço</h5>
            <TextInput
              label="CEP"
              name="endereco_cep"
              type="text"
              placeholder="CEP"
            />
            <TextInput
              label="Estado"
              name="endereco_estado"
              type="text"
              placeholder="Estado"
            />
            <TextInput
              label="Cidade"
              name="endereco_cidade"
              type="text"
              placeholder="Cidade"
            />
            <TextInput
              label="Bairro"
              name="endereco_bairro"
              type="text"
              placeholder="Bairro"
            />
            <TextInput
              label="Rua"
              name="endereco_logradouro"
              type="text"
              placeholder="Rua"
            />
            <TextInput
              label="Numero"
              name="endereco_numero"
              type="text"
              placeholder="Numero"
            />
            <TextInput
              label="Complemento"
              name="complemento"
              type="text"
              placeholder="Complemento"
            />
            <hr />
            <h5>Informações do Condutor</h5>

            <TextInput
              label="CNH Numero"
              name="CNH_numero"
              type="text"
              placeholder="CNH Numero"
            />
            <TextInput
              label="CNH Data emissão"
              name="CNH_data_emissao"
              type="text"
              placeholder="CNH Data emissão"
            />
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
                {props.edit ? (
                  <button
                    type="button"
                    className="btn btn-danger shadow-sm"
                    style={{ width: "100px" }}
                  >
                    {" "}
                    Deletar
                  </button>
                ) : null}
              </div>
            </div>
            <hr />
          </Form>
        )}
      </Formik>
      <BackToTop></BackToTop>
    </>
  );
};

export default SolicitacaoComponent;
