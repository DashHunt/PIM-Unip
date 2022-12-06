import React from "react";
import Button from "react-bootstrap/Button";

import {strings} from '../helpers/helpers'

import { GrDislike, GrLike } from "react-icons/gr";
import SafeIcons from "../assets/icons8-safe-100.png";

import Topbar from "./Topbar";
import CardGroupComponent from "./CardGroup";

const Home = () => {
  return (
    <Topbar>
      <div style={{ height: "30px" }}></div>
      <div className="text-center" style={{ color: "#000b76" }}>
        <h1 className="ms-4">{strings.mensagemDeEntrada + localStorage.getItem('username')}</h1>
        <h4 className="ms-4">{strings.bemVindo}</h4>
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
        {strings.menusMaisUtilizados}
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

export default Home;
