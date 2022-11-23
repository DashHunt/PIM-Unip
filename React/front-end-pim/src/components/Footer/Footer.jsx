import React from "react";

const Footer = () => (
  <footer className="page-footer font-small mt-3">
    <div className="container-fluid text-md-left">
      <div className="row justify-content-between">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase"><strong>AS Seguradora</strong></h5>
          <p className="mt-3">Empresa no ramo dos seguros com mais de 20 anos de experiencia em atender bem!</p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-1 mb-3">
          <h5 className="text-uppercase "><strong>Links</strong> </h5>
          <ul className="list-unstyled mt-3">
            <li>
              <a className="text-decoration-none text-dark" href="#scrollspyHeading1">
                Vantagens
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-dark" href="#scrollspyHeading2">
                Como funciona
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-dark" href="#!">
                Simule agora
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center mt-5">
      Developed by: 
      <a><strong> Arthur Coutinho</strong></a>
    </div>
    <div className="footer-copyright text-center py-3">
      © 2020 Copyright:
      <a> UNIP Alunos</a>
    </div>
  </footer>
);

export default Footer;
