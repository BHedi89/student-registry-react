import { Modal, Button } from "react-bootstrap";
import { Component } from "react";

class DeleteStudentModal extends Component {
  constructor(props) {
    super(props);
  }

  closeModal = () => {
    this.props.closeModal();
  }

  render() {
    return (
      <>
        <Modal.Header>
          <Modal.Title>Törlés</Modal.Title>
        </Modal.Header>
        <Modal.Body>Biztosan végleg törölni akarja a tanuló adatait?</Modal.Body>
        <Modal.Footer>
            <Button className="btn btn-secondary" onClick={this.closeModal}>Mégsem</Button>
            <Button className="btn btn-danger">Törlés</Button>
        </Modal.Footer>
      </>
    );
  }
}

export default DeleteStudentModal;
