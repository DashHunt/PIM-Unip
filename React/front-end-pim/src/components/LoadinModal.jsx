import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { usePromiseTracker } from "react-promise-tracker";


function LoadingModal(props) {
  const { promiseInProgress } = usePromiseTracker();
  const [show, setShow] = useState(props.show);

  const handleClose = () => setShow(false);

  return (
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
          <div className="d-flex justify-content-center">
            {props.icon}
            <div className="ms-2">{props.text}</div>
          </div>
        </Modal.Body>
      </Modal>
  );
}

export default LoadingModal;
