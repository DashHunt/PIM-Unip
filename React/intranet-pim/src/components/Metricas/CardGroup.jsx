import React from "react";
import CardGroup from "react-bootstrap/CardGroup";

const CardGroupComponent = (props) => {
  return <CardGroup>{props.children}</CardGroup>;
};

export default CardGroupComponent;
