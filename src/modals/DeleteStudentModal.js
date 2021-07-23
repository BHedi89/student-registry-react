import { Modal, Button } from "react-bootstrap";
import { Component } from "react";
import { deleteStudent } from "../http/studentService";

class DeleteStudentModal extends Component {
  handleSubmit = () => {
    deleteStudent(this.props.students.id).then(() =>
      this.props.onUpdateAfterDelete(this.props.students.id)
    );
    this.props.closeModal();
  };

  render() {
    return (
      <>
        <Modal.Header>
          <Modal.Title>Törlés</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Biztosan végleg törölni akarja a tanuló adatait?
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-secondary" onClick={this.props.closeModal}>
            Mégsem
          </Button>
          <Button className="btn btn-danger" onClick={this.handleSubmit}>
            Törlés
          </Button>
        </Modal.Footer>
      </>
    );
  }
}

export default DeleteStudentModal;
