import React, { useState, useEffect } from "react";

import Topbar from "../Topbar/Topbar";
import BackToTop from "../BackToTop";

import CadastroOne from "./CadastroOne";
import CadastroTwo from "./CadastroTwo";
import CadastroThree from "./CadastroThree";
import CadastroFour from "./CadastroFour";
import ProgressComponent from "../ProgressBar";
import getTodayDate from "../../data/Today";
import SolicitacoesAPI from "../../api/Solicitacoes";
import CoberturasAPI from "../../api/Coberturas";
import FetchModal from "../FetchModal";
import Spinner from "../Spinner";

import { FcCheckmark } from "react-icons/fc";
import Sleep from "../../data/Sleep";

const CadastroPage = () => {
  const [data, setData] = useState({
    primeiroNome: "",
    sobrenome: "",
    idCliente: "",
    rgDataEmissao: "",
    rgUf: "",
    rg: "",
    genero: "",
    dataNascimento: "",
    idade: "",
    marca: "",
    modelo: "",
    ano: "",
    tipo: "",
    utilizacao: "",
    enderecoCep: "",
    enderecoEstado: "",
    enderecoBairro: "",
    enderecoLogradouro: "",
    enderecoNumero: "",
    cnh: "",
    cnhDataEmissao: "",
    coberturas: [],
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalIcon, setModalIcon] = useState(null);
  console.log(data);

  useEffect(() => {
    const userName = localStorage.getItem("user");
    const idCliente = parseInt(localStorage.getItem("id"));
    const [primeiroNome, sobrenome] = userName.split(" ");

    if (localStorage.getItem("simulacao") !== null) {
      const {
        idade,
        ano,
        marca,
        modelo,
        tipo,
        utilizacao,
        valorTotal,
        coberturas,
        modelos,
        marcas,
        anos,
        tipos,
        valorFipe,
        valorTotalIdade,
        idCarro
      } = JSON.parse(localStorage.getItem("simulacao"));
      setData({
        ...data,
        primeiroNome: primeiroNome,
        sobrenome: sobrenome,
        idCliente: idCliente,
        idade,
        ano,
        marca,
        modelo,
        tipo,
        utilizacao,
        valorTotal,
        coberturas,
        modelos,
        marcas,
        anos,
        tipos,
        valorFipe,
        valorTotalIdade,
        idCarro
      });
    } else {
      setData({
        ...data,
        primeiroNome: primeiroNome,
        sobrenome: sobrenome,
        idCliente: idCliente,
      });
    }
    // eslint-disable-next-line
  }, []);

  const fetchRequest = (formData) => {
    const { coberturas } = formData;

    delete formData["ano"];
    delete formData["anos"];
    delete formData["modelos"];
    delete formData["modelo"];
    delete formData["utilizacao"];
    delete formData["tipos"];
    delete formData["tipo"];
    delete formData["marcas"];
    delete formData["marca"];
    delete formData["coberturas"];
    delete formData["idade"];
    delete formData["valorFipe"];
    delete formData["valorTotalIdade"];

    formData["dataCadastro"] = getTodayDate();
    formData["dataModificacao"] = getTodayDate();
    formData["status"] = "S";

    setModalTitle("Incluindo solicitação");
    setModalMessage("Um momento enquanto incluimos sua solicitação!");
    setModalIcon(<Spinner></Spinner>);
    setShowModal(true);

    const solicitacoes = new SolicitacoesAPI();
    const coberturaAPI = new CoberturasAPI();
    solicitacoes
      .post(formData)
      .then((res) => {
        console.log(res.data);
        let dataCoberturas = [];

        coberturas.forEach((cobertura) => {
          let data = {
            descricao: cobertura,
            valor: "500",
            idSolicitacao: res.data.idSolicitacao,
          };
          dataCoberturas.push(data);
        });

        dataCoberturas.forEach((coberturas) => {
          console.log(coberturas);
          coberturaAPI
            .post(coberturas)
            .then((res) => {
              setModalTitle("Bem vindo à AS Seguradora!");
              setModalMessage(
                "Solicitação realizada com sucesso. É um prazer ter você conosco! :D"
              );
              setModalIcon(
                <FcCheckmark
                  style={{ height: "30px", width: "30px" }}
                ></FcCheckmark>
              );
              Sleep(2000).then(() => {
                setShowModal(false);
              });
            })
            .catch((err) => console.log(err));
        });
      })
      .catch((error) => console.log(error));
    console.log("Form submitted", formData);
  };

  const handleOnKeyDown = (keyEvent) => {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      fetchRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePreviouStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <CadastroOne
      handleOnChange={handleOnKeyDown}
      next={handleNextStep}
      data={data}
    ></CadastroOne>,
    <CadastroTwo
      handleOnChange={handleOnKeyDown}
      next={handleNextStep}
      prev={handlePreviouStep}
      setNewValorFipe={setData}
      setNewData={setData}
      data={data}
    ></CadastroTwo>,
    <CadastroThree
      handleOnChange={handleOnKeyDown}
      next={handleNextStep}
      prev={handlePreviouStep}
      setNewData={setData}
      data={data}
    ></CadastroThree>,
    <CadastroFour
      handleOnChange={handleOnKeyDown}
      next={handleNextStep}
      prev={handlePreviouStep}
      setNewData={setData}
      data={data}
    ></CadastroFour>,
  ];

  return (
    <Topbar>
      <div
        className="mt-5 container bg-light rounded shadow mb-5"
        style={{ height: "100%", fontFamily: "Poppins, sans-serif" }}
      >
        <div style={{ height: "15px" }}></div>
        <div className="text-center text-primary text-bold">
          <h3 style={{ fontWeight: "bold" }}>
            Cadastre sua solicitação gratuitamente!
          </h3>
          <h5 style={{ fontWeight: "lighter" }} className="mb-3">
            Seu progresso:
          </h5>
          <ProgressComponent currentStep={currentStep}></ProgressComponent>
        </div>
        <hr />
        {/* <Cadastro></Cadastro> */}
        {steps[currentStep]}
      </div>
      <BackToTop></BackToTop>
      {showModal ? (
        <FetchModal
          show={showModal}
          title={modalTitle}
          message={modalMessage}
          icon={modalIcon}
        ></FetchModal>
      ) : null}
    </Topbar>
  );
};

export default CadastroPage;
