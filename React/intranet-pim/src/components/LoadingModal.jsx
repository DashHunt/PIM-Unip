import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";

function LoadingModal(props) {
  const [show, setShow] = useState(props.show);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {props.icon}
            <span className="ms-3">{props.body}</span>
             
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoadingModal;
