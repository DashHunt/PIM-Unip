import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { strings } from "../../helpers/helpers";

import BootstrapTable from "react-bootstrap-table-next";
import { BiEditAlt, BiTrash } from "react-icons/bi";

import Solicitacoes from "../../data/Solicitacoes";
import SolicitacoesColumns from "../../data/SolicitacoesColumns";
import Topbar from "../Topbar";
import LoadingSpinner from "../LoadingSpinner";

const SolicitacoesComponent = () => {
  const [loading, setLoading] = useState(true);
  const [columns, setColumns] = useState(SolicitacoesColumns);
  const [solicitacoes, setSolicitacoes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => {
      addActionColumns()
      setSolicitacoes(Solicitacoes);
      setLoading(false);
    }, 2000);
  }, []);

  function addActionColumns() {
    let formatter = columns.some((obj) => {if (obj.hasOwnProperty("formatter")) return true});

    if (!formatter) {
      const editColumn = {
        dataField: "Actions",
        text: "Actions",
        formatter: Actions,
      };
      setColumns([...columns, editColumn]);
    }
  }

  function HandleEdit(row){
    navigate("/PIM/solicitacoes/" + row.ID);
  };

  const Actions = (data, row) => {
    return (
      <>
        <div>
          <span style={{ color: "green", cursor: "pointer" }}>
            <BiEditAlt
              onClick={() => HandleEdit(row)}
            ></BiEditAlt>
          </span>
          <span style={{ color: "red", cursor: "pointer" }}>
            <BiTrash></BiTrash>
          </span>
        </div>
      </>
    );
  };

  return (
    <>
      <Topbar>
        {loading ? (
          <LoadingSpinner></LoadingSpinner>
        ) : (
          <>
            <div style={{ height: "30px" }}></div>
            <BootstrapTable
              keyField="ID"
              data={solicitacoes}
              columns={columns}
              striped
              bordered
              wrapperClasses="table-responsive"
            />
            <div style={{ height: "30px" }}></div>
          </>
        )}
      </Topbar>
    </>
  );
};

export default SolicitacoesComponent;
