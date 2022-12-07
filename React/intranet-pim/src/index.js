import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { routes } from "./helpers/helpers";
import "./assets/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import SolicitacaoPage from "./components/Solicitacoes/SolicitacaoPage";
import TableSolicitacoes from "./components/Solicitacoes/TableSolicitacoes";
import ClientesTable from "./components/Clientes/ClientesTable";
import ClientesPage from "./components/Clientes/ClientePage";
import MetricasPage from "./components/Metricas/MetricasPage";
import NotFoundPae from "./components/NotFoundPae";

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
          path={routes.solicitacao.path}
          exact={true}
          element={
            <ProtectedRoute path={routes.login.path}>
              <SolicitacaoPage />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path={routes.solicitacaoId.path}
          exact={true}
          element={
            <ProtectedRoute path={routes.login.path}>
              <SolicitacaoPage />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path={routes.solicitacaoAll.path}
          exact={true}
          element={
            <ProtectedRoute path={routes.login.path}>
              <TableSolicitacoes />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path={routes.clienteAll.path}
          exact={true}
          element={
            <ProtectedRoute path={routes.login.path}>
              <ClientesTable />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path={routes.cliente.path}
          exact={true}
          element={
            <ProtectedRoute path={routes.login.path}>
              <ClientesPage />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path={routes.clienteId.path}
          exact={true}
          element={
            <ProtectedRoute path={routes.login.path}>
              <ClientesPage />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path={routes.metricas.path}
          exact={true}
          element={
            <ProtectedRoute path={routes.login.path}>
              <MetricasPage />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="*"
          exact={true}
          element={
            
              <NotFoundPae />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
