import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import ConsultarCliente from "../assets/icons8-database-daily-import-100.png";
import CadastrarCliente from "../assets/icons8-adicionar-grupo-de-usuários-mulher-homem-100.png";
import CadastrarProposta from "../assets/icons8-adicionar-propriedade-100.png";

function CardGroupComponent(props) {
  return (
    <div>
      <CardGroup>
        <Card className="m-3 rounded border border-light hover" style={{ cursor: "pointer" }}>
          <Card.Img
            variant="top"
            src={ConsultarCliente}
            style={{
              height: "100px",
              width: "100px",
              margin: "auto",
              marginTop: "20px",
            }}
          />
          <Card.Body style={{ margin: "auto" }}>
            <Card.Title>Consultar cliente</Card.Title>
          </Card.Body>
          <Card.Footer className="bg-warning"></Card.Footer>
        </Card>
        <Card className="m-3 rounded border border-light" style={{ cursor: "pointer" }}>
          <Card.Img
            variant="top"
            src={CadastrarCliente}
            style={{
              height: "100px",
              width: "100px",
              margin: "auto",
              marginTop: "20px",
            }}
          />
          <Card.Body style={{ margin: "auto" }}>
            <Card.Title>Adicionar cliente</Card.Title>
          </Card.Body>
          <Card.Footer className="bg-warning"></Card.Footer>
        </Card>
        <Card className="m-3 rounded border border-light" style={{ cursor: "pointer" }}>
          <Card.Img
            variant="top"
            src={CadastrarProposta}
            style={{
              height: "100px",
              width: "100px",
              margin: "auto",
              marginTop: "20px",
            }}
          />
          <Card.Body style={{ margin: "auto" }}>
            <Card.Title>Adicionar solicitacao</Card.Title>
          </Card.Body>
          <Card.Footer className="bg-warning"></Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default CardGroupComponent;
