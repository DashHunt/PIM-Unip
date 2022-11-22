import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line
import { strings, routes } from "../../helpers/helpers";

import BootstrapTable from "react-bootstrap-table-next";
import { BiEditAlt, BiTrash } from "react-icons/bi";

import Clientes from "../../data/Clientes";
import ClientesColumns from "../../data/ClientesColumns";
import Topbar from "../Topbar";
import LoadingSpinner from "../LoadingSpinner";
import { Button } from "react-bootstrap";

const ClientesTable = () => {
  const [loading, setLoading] = useState(true);
  const [columns, setColumns] = useState(ClientesColumns);
  const [clientes, setClientes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      addActionColumns();
      setClientes(Clientes);
      setLoading(false);
    }, 2000);
    // eslint-disable-next-line
  }, []);

  function addActionColumns() {
    // eslint-disable-next-line
    let formatter = columns.some((obj) => {
      if (obj.hasOwnProperty("formatter")) return true;
    });

    if (!formatter) {
      const editColumn = {
        dataField: "Actions",
        text: "Actions",
        formatter: Actions,
      };
      setColumns([...columns, editColumn]);
    }
  }

  function HandleEdit(row) {
    navigate("/PIM/cliente/" + row.ID_cliente);
  }

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

  return (
    <>
      <Topbar>
        {loading ? (
          <LoadingSpinner></LoadingSpinner>
        ) : (
          <>
            <div style={{ height: "15px" }}></div>
            <div className="row mb-3">
              <div className="col mb-3">
                <h4>Clientes</h4>
              </div>

              <BootstrapTable
                keyField="ID_cliente"
                data={clientes}
                columns={columns}
                striped
                bordered
                wrapperClasses="table-responsive"
              />
            </div>
            <Button
              className="p-2 p-sm-2 float-end"
              type="button"
              href={routes.cliente.path}
            >
              Novo cliente
            </Button>
            <div style={{ height: "60px" }}></div>
          </>
        )}
      </Topbar>
    </>
  );
};

export default ClientesTable;
