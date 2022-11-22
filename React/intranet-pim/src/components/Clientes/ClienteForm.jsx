import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../helpers/helpers";

import { IoMdArrowRoundBack } from "react-icons/io";

import Cliente from "./Cliente";

const ClienteForm = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <h2>
        <IoMdArrowRoundBack
          onClick={() => navigate(routes.clienteAll.path)}
          style={{ cursor: "pointer" }}
        />
        {" "} Cliente
      </h2>

    <Cliente edit={props.edit} id={props.id}/>

    </>
  );
};

export default ClienteForm;
