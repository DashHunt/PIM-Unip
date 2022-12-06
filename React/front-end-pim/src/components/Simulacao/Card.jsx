import Card from 'react-bootstrap/Card';

const CardComponent = (props) => {
  return (
    <div className="mx-2 mb-2">
      <Card style={{ width: '18rem' }} className="shadow-sm " border="light">
      <Card.Body>
        <Card.Title className="text-primary" style={{fontWeight: 'bold'}}>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{fontSize: '0.75rem'}}>{props.subtitle}</Card.Subtitle>
        <Card.Text>
        {props.paragraph}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardComponent