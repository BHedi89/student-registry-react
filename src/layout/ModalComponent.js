import { Modal } from "react-bootstrap";
import ButtonComponent from "../UI/ButtonComponent";

const ModalComponent = props => {
  return (
    <Modal
      animation={props.animation}
      show={props.show}
      onHide={props.onHide}
    >
      <Modal.Header>
        <Modal.Title>{props.modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <ButtonComponent buttonText="Mégsem" onClick={props.onClick} />
        <ButtonComponent buttonText="Törlés" onClick={props.onClick} />
        <ButtonComponent buttonText="Mentés" onClick={props.onClick} />
      </Modal.Footer>
    </Modal>
  );
  
}

export default ModalComponent;
