import { Modal } from "react-bootstrap";
import { Component } from "react";
import { deleteStudent } from "../http/studentService";
import ButtonComponent from "../UI/ButtonComponent";

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
          <ButtonComponent buttonText="Mégsem" onClick={this.props.closeModal} />
          <ButtonComponent buttonText="Törlés" onClick={this.handleSubmit} />
        </Modal.Footer>
      </>
    );
  }
}

export default DeleteStudentModal;
