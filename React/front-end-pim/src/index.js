import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import {routes} from './helpers/helpers'

import './assets/index.css';
import App from './components/App'
import Welcome from './components/Welcome'
import Login from './components/Login/LoginPage'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={routes.app.path} exact={true} element={<App />}></Route>
        <Route path={routes.welcome.path} exact={true} element={<Welcome />}></Route>
        <Route path={routes.login.path} exact={true} element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

