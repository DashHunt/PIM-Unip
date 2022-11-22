import React from "react";
import { useParams } from "react-router-dom";

import Topbar from "../Topbar";
import SolicitacaoForm from "./SolicitacaoForm";

const SolicitacaoPage = () => {
  const params = useParams();

  return (
    <>
      <Topbar>
        <div>
          {Object.keys(params).length === 0 ? (
            <SolicitacaoForm />
          ) : (
            <SolicitacaoForm edit={true} id={params.id}></SolicitacaoForm>
          )}
        </div>
      </Topbar>
    </>
  );
};

export default SolicitacaoPage;
