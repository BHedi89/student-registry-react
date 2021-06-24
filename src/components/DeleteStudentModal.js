import { Modal, Button } from "react-bootstrap";
import { Component } from "react";

class DeleteStudentModal extends Component {
  constructor(props) {
    super(props);
  }

  closeModal = () => {
    console.log(this.props.students.id)
    this.props.closeModal();
  }

  deleteStudent = () => {
    const studentId = this.props.students.id;
    console.log(studentId);
    const FIREBASE_DOMAIN =
      "https://students-administration-67d7b-default-rtdb.europe-west1.firebasedatabase.app";
      fetch(`${FIREBASE_DOMAIN}/students/${studentId}.json`, {
          method: "DELETE"
      })
      .then(resp => resp.json());
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
            <Button className="btn btn-danger" onClick={this.deleteStudent}>Törlés</Button>
        </Modal.Footer>
      </>
    );
  }
}

export default DeleteStudentModal;
