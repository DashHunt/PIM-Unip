import React from "react";

import Topbar from "../Topbar/Topbar";
import Simulacao from "./Simulacao";

import BackToTop from "../BackToTop"

const SimulacaoPage = () => {
  return (
    <Topbar>
      <div
        className="mt-5 container bg-light rounded shadow mb-5"
        style={{ height: "100%", fontFamily: "Poppins, sans-serif" }}
      >
        <Simulacao></Simulacao>
      </div>
      <BackToTop></BackToTop>
    </Topbar>
  );
};

export default SimulacaoPage;
