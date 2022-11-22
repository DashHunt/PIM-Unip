import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../helpers/helpers";

import { IoMdArrowRoundBack } from "react-icons/io";

import Solicitacao from "./Solicitacao";

const SolicitacaoForm = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <h2>
        <IoMdArrowRoundBack
          onClick={() => navigate(routes.solicitacaoAll.path)}
          style={{ cursor: "pointer" }}
        />
        {" "} Solicitacoes
      </h2>

    <Solicitacao edit={props.edit} id={props.id}/>

    </>
  );
};

export default SolicitacaoForm;
