import React from "react";

import Lottie from "react-lottie-player";

import lottieJson from "../../static/80753-alot-of-things-going-in-the-head.json";

import StepStyles from './StepByStep.css';

const StepByStep = () => {
  return (
    <div
      className="row justify-content-center"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="content-wrapper">
        <div className="col-12 col-lg">
          <div className="text-wrapper">
            <h2>
              <strong>Seguro que cabe no bolso!</strong>
            </h2>
            <p className="mt-4 font-weight-light">
              Simule e cadastre a sua solicitação gratuitamente, sem lero-lero e
              com total liberdade. Assim que finalizar, nossos corretores irão
              analisar e trarão a melhor proposta para você!
            </p>
            <div className="mt-5">
              <div className="d-flex mb-3">
                <div
                  className="bg-white rounded-circle text-primary text-center"
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                >
                  <p style={{ fontSize: "2rem" }}>1</p>
                </div>
                <div>
                  <p className="ms-2 mt-2" style={{fontSize: "1.5rem", letterSpacing: "1px"}}> 
                    <strong>Cadastre-se no site</strong>
                  </p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <div
                  className="bg-white rounded-circle text-primary text-center"
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                >
                  <p style={{ fontSize: "2rem" }}>2</p>
                </div>
                <div style={{ fontFamily: "Poppins, sans-serif" }}>
                  <p className="ms-2 mt-2" style={{fontSize: "1.5rem", letterSpacing: "1px"}}>
                    <strong>Faça sua simulação</strong>
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div
                  className="bg-white rounded-circle text-primary text-center"
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                >
                  <p style={{ fontSize: "2rem"}}>3</p>
                </div>
                <div>
                  <p className="ms-2 mt-2" style={{fontSize: "1.5rem", letterSpacing: "1px"}}>
                    <strong>Finalize e solicite sua apolice!</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 image-wrapper">
          <Lottie
            loop
            play
            animationData={lottieJson}
            style={{
              minWidth: 150,
              minHeight: 150,
              maxHeight: 500,
              maxWidth: 500,
            }}
          ></Lottie>
        </div>
      </div>
    </div>
  );
};

export default StepByStep;
