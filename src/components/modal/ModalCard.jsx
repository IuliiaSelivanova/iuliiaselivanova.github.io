import React from "react";
import { Modal, ModalTitle } from "react-bootstrap";

const ModalCard = ({ project, show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <ModalTitle>{project.title}</ModalTitle>
      </Modal.Header>
      <Modal.Body
        style={{ overflowY: "auto", maxHeight: "70vh" }}
      >
        <img
          className="modal__img"
          src={project.backgroundImage}
          alt={project.title}
        />
        <div>
          <div className="modal_desc">
            {project.description.info}
          </div>
          <ul>
            <b>Возможности пользователей:</b>
            {project.description.opportunities.map(
              (opportunity, index) => (
                <li key={index}>{opportunity}</li>
              ),
            )}
          </ul>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalCard;
