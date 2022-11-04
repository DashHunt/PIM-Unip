import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {routes} from './helpers/helpers'
import './assets/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import App from './components/App'
import Welcome from './components/Welcome'
import SolicitacoesComponent from './components/Solicitacoes'
import SolicitacaoComponent from './components/Solicitacao'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={routes.app.path} exact={true} element={<App />}></Route>
        <Route path={routes.welcome.path} exact={true} element={<Welcome />}></Route>
        <Route path={routes.solicitacoes.path} exact={true} element={<SolicitacoesComponent />}></Route>
        <Route path={routes.solicitacao.path} exact={true} element={<SolicitacaoComponent />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

