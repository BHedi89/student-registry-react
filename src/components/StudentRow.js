import React, { Component, Fragment } from "react";
import ModifyStudentModal from "./ModifyStudentModal";
import { Modal } from "react-bootstrap";

class StudentRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      modal: "",
    };
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow(id) {
    this.setState({
      show: true,
      modal: id,
    });
  }

  render() {
    const { students } = this.state;
    return (
      <Fragment>
        {this.props.students.map((student) => {
          return (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>
              <td>{student.gender === "FEMALE" ? "nő" : "férfi"}</td>
              <td>
                <Modal
                  animation={false}
                  show={this.state.show && this.state.modal === student.id}
                  onHide={this.handleClose}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Adatok módosítása</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <ModifyStudentModal
                      students={student}
                      closeModal={this.handleClose}
                    />
                  </Modal.Body>
                </Modal>
                <button
                  type="button"
                  className="btn btn-warning btn-sm mr-2"
                  onClick={() => this.handleShow(student.id)}
                >
                  Módosítás
                </button>
                <button type="button" className="btn btn-danger btn-sm">
                  Törlés
                </button>
              </td>
            </tr>
          );
        })}
      </Fragment>
    );
  }
}

export default StudentRow;
