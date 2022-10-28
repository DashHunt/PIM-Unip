import React from "react";

import { GrDislike, GrLike } from "react-icons/gr";

import FotoInicial from "../assets/urban-male-car-dealership-salesman-gives-car-keys-to-female-customer.png";
import SafeIcons from "../assets/icons8-safe-100.png";

import Button from "react-bootstrap/Button";

import Topbar from "./Topbar";
import CardGroupComponent from "./CardGroup";

const App = () => {
  return (
    <Topbar>
      <div style={{ height: "30px" }}></div>
      <div className="text-center" style={{ color: "#000b76" }}>
        <h1 className="ms-4">Olá, Arthur Coutinho!</h1>
        <h4 className="ms-4">Bem vindo ao intranet da AS Seguradora S.A.</h4>
        <div>
          <img
            src={SafeIcons}
            alt=""
            style={{ height: "100px", width: "100px" }}
          />
        </div>
        <div></div>
      </div>
      <hr />
      <h2 className="ms-4" style={{ color: "#000b76" }}>
        Menus mais utilizados
      </h2>
      <CardGroupComponent />
      <hr />
      <div className="text-center">
        <Button variant="outline-primary"> <GrLike/> <GrDislike/> Feedback</Button>{" "}
      </div>
      <div style={{ height: "30px" }}></div>
    </Topbar>
  );
};

export default App;
