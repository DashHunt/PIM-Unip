import React from "react";

import Lottie from "react-lottie-player";

import lottieJson from "../static/118091-shaking-head-when-driving-front-view.json";
import Button from "react-bootstrap/esm/Button";

const Simule = () => {
  return (
    <>
      <div className="container fluid">
        <div className="row justify-content-center">
          <div
            className="col-xs-12 col-sm-6 mt-5"
            style={{ paddingRight: "40px", paddingLeft: "40px" }}
          >
            <div className="text-wrapper">
              <p className="label-text">AS Seguradora</p>
              <h1 className="label-text">
                <strong>Simule seu seguro com o melhor preço do mercado.</strong>
              </h1>
              <p className="label-text">
                Cadastre-se no site e tenha acesso a simulações ilimitadas de
                seguros para você e para a familia
              </p>
              <div>
                <Button variant="outline-light"> Simule Online Grátis</Button>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 mt-3">
            <Lottie
                loop
                play
              animationData={lottieJson}
              style={{ minWidth: 200, minHeight: 200, maxHeight: 425, maxWidth: 450}}
            ></Lottie>
          </div>
        </div>
      </div>
    </>
  );
};

export default Simule;
