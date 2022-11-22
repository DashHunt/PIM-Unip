import React from "react";
import { useParams } from "react-router-dom";

import Topbar from "../Topbar";
import ClienteForm from "./ClienteForm";

const ClientePage = () => {
  const params = useParams();

  return (
    <>
      <Topbar>
        <div>
          {Object.keys(params).length === 0 ? (
            <ClienteForm />
          ) : (
            <ClienteForm edit={true} id={params.id}></ClienteForm>
          )}
        </div>
      </Topbar>
    </>
  );
};

export default ClientePage;
