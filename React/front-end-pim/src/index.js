import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { routes } from "./helpers/helpers";

import "./assets/index.css";
import App from "./components/App";
import Welcome from "./components/Welcome";
import Login from "./components/Login/LoginPage";
import SimulacaoPage from "./components/Simulacao/SimulacaoPage";
import CadastroPage from "./components/Cadastro/CadastroPage";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFoundPae from "./components/NotFoundPae";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={routes.app.path} exact={true} element={<App />}></Route>
        <Route
          path={routes.welcome.path}
          exact={true}
          element={<Welcome />}
        ></Route>
        <Route
          path={routes.login.path}
          exact={true}
          element={<Login />}
        ></Route>
        <Route
          path={routes.simulacao.path}
          exact={true}
          element={<SimulacaoPage />}
        ></Route>
        <Route
          path={routes.cadastro.path}
          exact={true}
          element={
            <ProtectedRoute path={routes.login.path}>
              <CadastroPage />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="*" exact={true} element={<NotFoundPae />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
