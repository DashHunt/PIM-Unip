import React, {useState, useEffect} from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { FcAssistant, FcElectronics } from "react-icons/fc";

function Topbar(props) {

  return (
    <>
        <Navbar className="shadow-sm rounded-bottom" collapseOnSelect expand="lg" bg="white" variant="white">
        <Container>
            <Navbar.Brand href="#home"> <FcAssistant/> A.S Seguradora</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#features">Clientes</Nav.Link>
                <Nav.Link href="#pricing">Solicitacoes</Nav.Link>
                <Nav.Link href="#pricing">Métricas</Nav.Link>
                <NavDropdown title="Atalhos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Inserir solicitacao</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Inserir cliente
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <Nav.Link eventKey={2} href="#memes">
                <FcElectronics/> Intranet
                </Nav.Link>
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