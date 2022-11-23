import Card from 'react-bootstrap/Card';

function CardComponent(props) {
  return (
    <>
      <Card className="ms-3 shadow-sm border border mb-2" style={{minWidth: '30rem'}}>
        {props.icon}
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardComponent;