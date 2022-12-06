import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";

import { useHistory, useLocation } from "react-router-dom";

import { routes } from "../../helpers/helpers";
import { FiLogOut } from "react-icons/fi";

import "./Topbar.css";

function OffcanvasExample(props) {
  const location = useLocation();

  function logOutApp() {
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    localStorage.removeItem("id");
    localStorage.removeItem("cpf");
    localStorage.removeItem("expiration");
    localStorage.removeItem("simulacao");
    window.location.reload();
  }

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          bg="white"
          expand={expand}
          className="shadow-lg"
          sticky="top"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <Container fluid>
            <Navbar.Brand
              href={routes.app.path}
              className="text-primary"
              style={{ fontWeight: "semibold" }}
            >
              AS Seguradora S.A
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Side menu
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 ">
                  <Nav.Link
                    className="nav-links mx-2"
                    href={
                      location.pathname !== "/AS"
                        ? routes.app.path
                        : "#scrollspyHeading2"
                    }
                  >
                    Como funciona
                  </Nav.Link>
                  <Nav.Link
                    className="nav-links mx-2"
                    href={
                      location.pathname !== "/AS"
                        ? routes.app.path
                        : "#scrollspyHeading1"
                    }
                  >
                    Vantagens
                  </Nav.Link>
                  <Nav.Link
                    className="nav-links mx-2"
                    href={
                      location.pathname !== "/AS"
                        ? routes.app.path
                        : "#scrollspyHeading3"
                    }
                  >
                    AS Seguradora
                  </Nav.Link>
                  {localStorage.getItem("user") ? (
                    <Nav.Link
                      className="nav-links mx-2"
                      href={routes.cadastro.path}
                    >
                      Cadastre sua solicitacao
                    </Nav.Link>
                  ) : null}
                </Nav>
                <Nav className="justify-content-end mx-1">
                  <hr />
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                      Proposta
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href={routes.simulacao.path}>
                        Simule Agora
                      </Dropdown.Item>
                      <Dropdown.Item href={routes.cadastro.path}>
                        Cadastre
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  {localStorage.getItem("user") === null ? (
                    <Button
                      className="mx-1 border"
                      variant="light"
                      href={routes.login.path}
                    >
                      Login
                    </Button>
                  ) : (
                    <Dropdown>
                      <Dropdown.Toggle
                        className="mx-2"
                        variant="light"
                        id="dropdown-basic"
                      >
                        Olá, {localStorage.getItem("user")}!
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href={routes.simulacao.path}>
                          Perfil
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-2"
                          onClick={() => logOutApp()}
                        >
                          Log out <FiLogOut></FiLogOut>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <div>{props.children}</div>
    </>
  );
}

export default OffcanvasExample;
