import React from "react";
import Card from "react-bootstrap/Card";

const CardComponent = (props) => {
  return (
    <div className="mx-2 mb-2">
      <Card style={{ width: '18rem' }} className="shadow-sm " border="light">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
        <Card.Text className="">
        {props.paragraph}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
};

export default CardComponent;
