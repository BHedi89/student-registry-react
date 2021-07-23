import React, { Component, Fragment } from "react";
import ModifyStudentModal from "../modals/ModifyStudentModal";
import { Modal } from "react-bootstrap";
import DeleteStudentModal from "../modals/DeleteStudentModal";
import { Link } from "react-router-dom";

class StudentRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      studentId: null
    };
  }

  handleCloseModal = (id) => {
    this.setState({
      show: id
    });
  };

  handleShowModal(studentId, modalId) {
    this.setState({
      studentId: studentId,
      show: modalId
    });
  }

  render() {
    return (
      <Fragment>
        {this.props.students.map((student) => {
          let booksNum = 0;
          for (const book in student.books) {
            booksNum += 1;
          }
          return (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>
              <td>{student.gender === "FEMALE" ? "nő" : "férfi"}</td>
              <td>
                {booksNum === 0 ? (
                  <Link
                  to={{
                    pathname: `/studentBooks/${student.id}`,
                    state: student,
                  }}
                >
                  Nincs
                </Link>
                ) : (
                  <Link
                    to={{
                      pathname: `/studentBooks/${student.id}`,
                      state: student,
                    }}
                  >
                    {booksNum}
                  </Link>
                )}
              </td>
              <td>
                <Modal
                  animation={false}
                  show={
                    this.state.show === "modal1" && this.state.studentId === student.id
                  }
                  onHide={this.handleCloseModal}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Adatok módosítása</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <ModifyStudentModal
                      students={student}
                      closeModal={this.handleCloseModal}
                      onStudentUpdate={this.props.onStudentUpdate}
                    />
                  </Modal.Body>
                </Modal>
                <button
                  type="button"
                  className="btn btn-warning btn-sm mr-2"
                  onClick={() => this.handleShowModal(student.id, "modal1")}
                >
                  Módosítás
                </button>
                <Modal
                  animation={false}
                  show={
                    this.state.show === "modal2" && this.state.studentId === student.id
                  }
                >
                  <DeleteStudentModal
                    students={student}
                    closeModal={this.handleCloseModal}
                    onUpdateAfterDelete={this.props.onUpdateAfterDelete}
                  />
                </Modal>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => this.handleShowModal(student.id, "modal2")}
                >
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
