import { Modal } from "react-bootstrap";
import { deleteStudent } from "../http/studentService";
import ButtonComponent from "../UI/ButtonComponent";

const DeleteStudentModal = props => {
  const handleSubmit = () => {
    deleteStudent(props.students.id).then(() =>
      props.onUpdateAfterDelete(props.students.id)
    );
    props.closeModal();
  };

  return (
    <>
      <Modal.Header>
        <Modal.Title>Törlés</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Biztosan végleg törölni akarja a tanuló adatait?
      </Modal.Body>
      <Modal.Footer>
        <ButtonComponent buttonText="Mégsem" onClick={props.closeModal} />
        <ButtonComponent buttonText="Törlés" onClick={handleSubmit} />
      </Modal.Footer>
    </>
  );
}

export default DeleteStudentModal;
