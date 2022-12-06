import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import React, { useState, useEffect } from "react";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-primary" style={{fontFamily: 'Poppins, sans-serif', fontWeight: "bolder", letterSpacing: 2}}>
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center align-items-center"> 
          {props.icon}
          <span className="ms-3" style={{fontFamily: 'Poppins, sans-serif', fontWeight: "lighter", fontSize: "1.2rem" }}>{props.message}</span>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function FetchModal(props) {
  const [modalShow, setModalShow] = useState(props.show);

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        message={props.message}
        title={props.title}
        icon={props.icon}
      />
    </>
  );
}

export default FetchModal;
