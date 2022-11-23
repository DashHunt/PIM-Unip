import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { routes } from "../../helpers/helpers";

import "./Topbar.css";

function OffcanvasExample(props) {
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
                    href="#scrollspyHeading2"
                  >
                    Como funciona
                  </Nav.Link>
                  <Nav.Link
                    className="nav-links mx-2"
                    href="#scrollspyHeading1"
                  >
                    Vantagens
                  </Nav.Link>
                  <Nav.Link
                    className="nav-links mx-2"
                    href="#scrollspyHeading3"
                  >
                    AS Seguradora
                  </Nav.Link>
                  {localStorage.getItem("user") ? (
                    <Nav.Link
                      className="nav-links mx-2"
                      href="#scrollspyHeading3"
                    >
                      Cadastre sua solicitacao
                    </Nav.Link>
                  ) : null}
                </Nav>
                <Nav className="justify-content-end mx-1">
                  <hr />
                  <Button href="#action1">Simule Agora</Button>
                  <Button
                    className="mx-1 border"
                    variant="light"
                    href={routes.login.path}
                  >
                    Login
                  </Button>
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
