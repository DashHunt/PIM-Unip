import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BootstrapTable from "react-bootstrap-table-next";
import { Button } from "react-bootstrap";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

// eslint-disable-next-line
import { routes, strings } from "../../helpers/helpers";

import SolicitacoesAPI from "../../api/Solicitacoes";
import ClientesAPI from "../../api/Clientes";
import SolicitacoesColumns from "../../data/SolicitacoesColumns";
import Sleep from "../../data/Sleep";

import { FcCheckmark, FcHighPriority } from "react-icons/fc";

import Topbar from "../Topbar";
import LoadingSpinner from "../LoadingSpinner";
import ConfirmationModal from "../ConfirmationModal";
import LoadingModal from "../LoadingModal";
import SpinnerComponent from "../Spinner";

const TableSolicitacoes = () => {
  const [loading, setLoading] = useState(true);
  const [columns, setColumns] = useState(SolicitacoesColumns);
  const [solicitacoes, setSolicitacoes] = useState([]);

  const [fetchLoading, setFetchLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [confirmationDeletion, setConfirmationDeletion] = useState(false);
  const [modalIcon, setModalIcon] = useState(null);
  const [confirmation, setConfirmation] = useState(false);
  const [valuesSolicitacao, setValuesSolicitacao] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    addActionColumns();
    const solicitacoes = new SolicitacoesAPI();

    solicitacoes
      .get()
      .then((dataSolicitacoes) => {
        const clientes = new ClientesAPI();

        clientes
          .getByID()
          .then((dataClientes) => {
            dataSolicitacoes.data.forEach((solicitacao, index) => {
              const clienteInfo = dataClientes.data.filter((cliente) => {
                if (cliente.idCliente == solicitacao.idCliente) {
                  dataSolicitacoes.data[index]["primeiroNome"]  = cliente.primeiroNome;
                  dataSolicitacoes.data[index]["sobrenome"]     = cliente.sobrenome;
                  dataSolicitacoes.data[index]["idCliente"]     = cliente.idCliente;
                }
              });
            });
            setSolicitacoes(dataSolicitacoes.data);
          })
          .catch((error) => {
            console.log(error);
          });

        setLoading(false);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, []);

  function addActionColumns() {
    // eslint-disable-next-line
    let formatter = columns.some((obj) => {
      if (obj.hasOwnProperty("formatter")) return true;
    });

    if (!formatter) {
      const editColumn = {
        dataField: "Ações",
        text: "Ações",
        formatter: Actions,
      };
      setColumns([...columns, editColumn]);
    }
  }

  function HandleEdit(row) {
    navigate("/PIM/solicitacao/" + row.idSolicitacao);
  }
  function HandleDelete(values) {
    setValuesSolicitacao(values);
    setModalMessage("Excluir solicitacao?");
    setConfirmationDeletion(true);
  }

  function deleteSolicitacao() {
    if (confirmationDeletion) {
      console.log("Deletando cliente");
      valuesSolicitacao.dataExclusao = getTodayDate();
      console.log(valuesSolicitacao)

      setModalMessage("Excluindo solicitacao");
      setModalIcon(<SpinnerComponent></SpinnerComponent>);

      setFetchLoading(true);

      const solicitacao = new SolicitacoesAPI();

      solicitacao
        .update(valuesSolicitacao)
        .then((res) => {
          setModalMessage("Operação realizada com sucesso");
          setModalIcon(
            <FcCheckmark
              style={{ height: "30px", width: "30px" }}
            ></FcCheckmark>
          );
          Sleep(1000).then(() => {
            setFetchLoading(false);
            window.location.reload()
          });
        })
        .catch((error) => console.log(error));
    }
  }

  function getTodayDate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    return dd + "/" + mm + "/" + yyyy;
  }

  const Actions = (data, row) => {
    return (
      <>
        {localStorage.getItem("role") === "godmode" ||
        localStorage.getItem("role") === "admin" ? (
          <div>
            <span style={{ color: "green", cursor: "pointer" }}>
              <BiEditAlt onClick={() => HandleEdit(row)}></BiEditAlt>
            </span>
            <span style={{ color: "red", cursor: "pointer" }}>
              <BiTrash onClick={() => HandleDelete(row)}></BiTrash>
            </span>
          </div>
        ) : (
          <div>
            <span style={{ color: "blue", cursor: "pointer" }}>
              <BsEye onClick={() => HandleEdit(row)}></BsEye>
            </span>
          </div>
        )}
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
                <h4>Solicitacoes</h4>
              </div>

              <BootstrapTable
                keyField="ID"
                data={solicitacoes}
                columns={columns}
                striped
                bordered
                wrapperClasses="table-responsive"
              />
            </div>
            {localStorage.getItem("role") === "godmode" ||
            localStorage.getItem("role") === "admin" ? (
              <Button
                className="p-2 p-sm-2 float-end"
                type="button"
                href={routes.solicitacao.path}
              >
                Nova solicitacao
              </Button>
            ) : null}
            <div style={{ height: "60px" }}></div>
            {fetchLoading ? (
              <LoadingModal
                show={fetchLoading}
                title={modalMessage}
                body={modalMessage}
                icon={modalIcon}
              ></LoadingModal>
            ) : null}
            {confirmationDeletion ? (
              <ConfirmationModal
                show={confirmationDeletion}
                setShow={setConfirmationDeletion}
                title={modalMessage}
                body={modalMessage}
                action={deleteSolicitacao}
              ></ConfirmationModal>
            ) : null}
          </>
        )}
      </Topbar>
    </>
  );
};

export default TableSolicitacoes;
