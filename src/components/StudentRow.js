import React, { Component, Fragment } from "react";
import ModifyStudentModal from "./ModifyStudentModal";
import { Modal } from "react-bootstrap";

class StudentRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      students: [],
      modal: "",
    };
  }

  //todo later move it to the StudentList component
  componentDidMount() {
    fetch("https://progmatic.hu/frontend/students")
      .then((resp) => resp.json())
      .then((result) => {
        this.setState({
          students: result.students,
        });
      });
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
        <tbody>
          {students.map((student) => {
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
                    <ModifyStudentModal students={student} />
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
        </tbody>
      </Fragment>
    );
  }
}

export default StudentRow;
