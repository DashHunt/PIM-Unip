import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { routes } from "./helpers/helpers";
import "./assets/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import SolicitacoesComponent from "./components/Solicitacoes/Solicitacoes";
import SolicitacaoComponent from "./components/Solicitacoes/Solicitacao";
import ClientesComponent from "./components/Clientes/Clientes";
import ClienteComponent from "./components/Clientes/Cliente";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path={routes.login.path}
          exact={true}
          element={<Login></Login>}
        ></Route>
        <Route
          path={routes.app.path}
          exact={true}
          element={
            <ProtectedRoute path={routes.login.path}>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path={routes.solicitacoes.path}
          exact={true}
          element={
            <ProtectedRoute path={routes.login.path}>
              <SolicitacoesComponent />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path={routes.solicitacao.path}
          exact={true}
          element={
            <ProtectedRoute path={routes.login.path}>
              <SolicitacaoComponent />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path={routes.clientes.path}
          exact={true}
          element={
            <ProtectedRoute path={routes.login.path}>
              <ClientesComponent />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path={routes.cliente.path}
          exact={true}
          element={
            <ProtectedRoute path={routes.login.path}>
              <ClienteComponent />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
