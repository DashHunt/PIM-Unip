import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {routes} from './helpers/helpers'

import './assets/index.css';
import App from './components/App'
import Welcome from './components/Welcome'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={routes.app.path} exact={true} element={<App />}></Route>
        <Route path={routes.welcome.path} exact={true} element={<Welcome />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

