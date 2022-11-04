import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";

import {strings} from '../helpers/helpers'

import { BiEditAlt, BiTrash } from "react-icons/bi";

import Solicitacoes from "../data/Solicitacoes";

import Topbar from "./Topbar";

const SolicitacoesComponent = () => {
  const [solicitacoes, setSolicitacoes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setSolicitacoes(Solicitacoes);
    console.log(strings.teste)
  }, []);

  const HandleEdit = (row) => {
    navigate("/PIM/solicitacoes/" + row.ID);
  };

  const Actions = (data, row) => {
    return (
      <>
        <div>
          <span style={{ color: "green", cursor: "pointer" }}>
            <BiEditAlt
              onClick={() => {
                HandleEdit(row);
              }}
            ></BiEditAlt>
          </span>
          <span style={{ color: "red", cursor: "pointer" }}>
            <BiTrash></BiTrash>
          </span>
        </div>
      </>
    );
  };

  const columns = [
    {
      dataField: "ID",
      text: "ID Solicitacao",
    },
    {
      dataField: "ID_cliente",
      text: "ID Cliente",
    },
    {
      dataField: "status",
      text: "Status",
    },
    {
      dataField: "RG",
      text: "RG",
    },
    {
      dataField: "RG_data_emissao",
      text: "RG data emissao",
    },
    {
      dataField: "RG_uf",
      text: "RG UF",
    },
    {
      dataField: "endereco_logradouro",
      text: "Rua",
    },
    {
      dataField: "endereco_bairro",
      text: "Bairro",
    },
    {
      dataField: "endereco_numero",
      text: "Numero",
    },
    {
      dataField: "endereco_cep",
      text: "CEP",
    },
    {
      dataField: "Genero",
      text: "Genero",
    },
    {
      dataField: "Actions",
      text: "Actions",
      formatter: Actions,
    },
  ];

  return (
    <>
      <Topbar>
        <div style={{ height: "30px" }}></div>
        <BootstrapTable
          keyField="ID"
          data={solicitacoes}
          columns={columns}
          striped
          bordered
        />
        <div style={{ height: "30px" }}></div>
      </Topbar>
    </>
  );
};

export default SolicitacoesComponent;
