import React, { Component, Fragment } from "react";
import ModifyStudentModal from "./ModifyStudentModal";
import { Modal } from "react-bootstrap";
import DeleteStudentModal from "./DeleteStudentModal";
import { Link } from "react-router-dom";

class StudentRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModify: false,
      showDelete: false,
      modifyModal: "",
      deleteModal: "",
    };
  }

  handleCloseModify = () => {
    this.setState({
      showModify: false,
    });
  };

  handleShowModify(id) {
    this.setState({
      showModify: true,
      modifyModal: id,
    });
  }

  handleCloseDelete = () => {
    this.setState({
      showDelete: false,
    });
  };

  handleShowDelete(id) {
    this.setState({
      showDelete: true,
      deleteModal: id,
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
                    this.state.showModify &&
                    this.state.modifyModal === student.id
                  }
                  onHide={this.handleCloseModify}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Adatok módosítása</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <ModifyStudentModal
                      students={student}
                      closeModal={this.handleCloseModify}
                      onStudentUpdate={this.props.onStudentUpdate}
                    />
                  </Modal.Body>
                </Modal>
                <button
                  type="button"
                  className="btn btn-warning btn-sm mr-2"
                  onClick={() => this.handleShowModify(student.id)}
                >
                  Módosítás
                </button>
                <Modal
                  animation={false}
                  show={
                    this.state.showDelete &&
                    this.state.deleteModal === student.id
                  }
                >
                  <DeleteStudentModal
                    students={student}
                    closeModal={this.handleCloseDelete}
                    onUpdateAfterDelete={this.props.onUpdateAfterDelete}
                  />
                </Modal>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => this.handleShowDelete(student.id)}
                >
                  Törlés
                </button>
              </td>
              {/* <td>
                <Link
                  to={{
                    pathname: `/studentBooks/${student.id}`,
                    state: student,
                  }}
                >
                  <button className="btn btn-info btn-sm">
                    Új könyv hozzáadása
                  </button>
                </Link>
              </td> */}
            </tr>
          );
        })}
      </Fragment>
    );
  }
}

export default StudentRow;
