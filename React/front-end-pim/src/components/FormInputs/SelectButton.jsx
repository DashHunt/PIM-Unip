import React from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SelectButton = () => {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        type="select"
      />
      <Button variant="outline-secondary" id="button-addon2">
        Button
      </Button>
    </InputGroup>
  );
};

export default SelectButton;
