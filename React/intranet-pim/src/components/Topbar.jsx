// eslint-disable-next-line
import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { routes, strings } from "../helpers/helpers";

import { FcAssistant, FcElectronics } from "react-icons/fc";
import { GrLanguage } from "react-icons/gr";
import { Button } from "react-bootstrap";

function Topbar(props) {
  function setLanguage(language) {
    localStorage.setItem("language", language);
    window.location.reload();
  }

  function Logout() {
    localStorage.removeItem("acessToken");
    localStorage.removeItem("expiration");
    localStorage.removeItem("user");
    window.location.reload();
  }

  return (
    <>
      <Navbar
        className="shadow-sm rounded-bottom"
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="white"
      >
        <Container>
          <Navbar.Brand href={routes.app.path}>
            {" "}
            <FcAssistant /> A.S Seguradora
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={routes.clientes.path}>
                {strings.topBarClientes}
              </Nav.Link>
              <Nav.Link href={routes.solicitacoes.path}>
                {strings.topBarSolicitacoes}
              </Nav.Link>
              <Nav.Link href="#pricing">{strings.topBarMetricas}</Nav.Link>
              <NavDropdown
                title={strings.topBarAtalhos}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Inserir solicitacao
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Inserir cliente
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                <FcElectronics /> Intranet
              </Nav.Link>
              <NavDropdown
                title={<GrLanguage></GrLanguage>}
                id="collasible-nav-dropdown"
                onSelect={(eventKey) => setLanguage(eventKey)}
              >
                <NavDropdown.Item eventKey={"br"}>Portugues</NavDropdown.Item>
                <NavDropdown.Item eventKey={"us"}>Ingles</NavDropdown.Item>
              </NavDropdown>
              <Button onClick={() => Logout()}>Log out</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container fluid shadow-sm h-100 bg-light rounded">
        {props.children}
      </div>
    </>
  );
}

export default Topbar;
