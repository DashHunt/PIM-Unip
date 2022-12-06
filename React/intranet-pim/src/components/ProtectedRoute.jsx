import React from "react";
import { Navigate } from "react-router-dom";
import { routes } from "../helpers/helpers";

const ProtectedRoute = (props) => {
  function isInThePast(date) {
    const today = new Date();
    return Date.parse(date) < Date.parse(today)
  }

  function NavigateToPath(path){
    return <Navigate to={path} replace />
  }

  if (localStorage.getItem("acessToken") === null || isInThePast(localStorage.getItem("expiration"))) 
  {
    localStorage.removeItem("acessToken");
    localStorage.removeItem("expiration");
    localStorage.removeItem("user");
    return <Navigate to={props.path} replace />
  }

  return props.children;
};

export default ProtectedRoute;
