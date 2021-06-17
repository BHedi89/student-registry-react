import React, { Component, Fragment } from "react";
import ModifyStudentModal from "./ModifyStudentModal";
import { Modal } from "react-bootstrap";

class StudentRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      students: [],
    };
  }

  componentDidMount() {
    fetch("https://progmatic.hu/frontend/students")
      .then((resp) => resp.json())
      .then((result) => {
        this.setState({
          students: result.students,
        });
      });
  }

  modalOpen = () => {
    this.setState({ modal: true });
  };

  render() {
    const { students } = this.state;
    return (
      <Fragment>
        <Modal show={this.state.modal}>
          <ModifyStudentModal />
        </Modal>
        <tbody>
          {students.map(student => {
            return (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>{student.gender === "FEMALE" ? "nő" : "férfi"}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning btn-sm mr-2"
                    onClick={this.modalOpen}
                  >
                    Módosítás
                  </button>
                  <button type="button" className="btn btn-danger btn-sm">
                    Törlés
                  </button>
                </td>
              </tr>
            )
            })}
        </tbody>
      </Fragment>
    );
  }
}

export default StudentRow;
