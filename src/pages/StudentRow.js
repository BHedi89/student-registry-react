import React, { Fragment } from "react";
import ModifyStudentModal from "../modals/ModifyStudentModal";
import { Modal } from "react-bootstrap";
import DeleteStudentModal from "../modals/DeleteStudentModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import LinkComponent from "../UI/LinkComponent";
import { useState } from 'react';

const StudentRow = props => {
  const [show, setShow] = useState(false);
  const [studentId, setStudentId] = useState(null);

  const handleCloseModal = (id) => {
    setShow(id);
  };

  function handleShowModal(studentId, modalId) {
    setStudentId(studentId);
    setShow(modalId);
  }

  return (
    <Fragment>
      {props.students.map((student) => {
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
                <LinkComponent
                  to={{
                    pathname: `/studentBooks/${student.id}`,
                    state: student,
                  }}
                  linkText="Nincs"
                />
              ) : (
                <LinkComponent
                  to={{
                    pathname: `/studentBooks/${student.id}`,
                    state: student,
                  }}
                  linkText={booksNum}
                />
              )}
            </td>
            <td>
              <Modal
                animation={false}
                show={
                  show === "modal1" &&
                  studentId === student.id
                }
                onHide={handleCloseModal}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Adatok módosítása</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ModifyStudentModal
                    students={student}
                    closeModal={handleCloseModal}
                    onStudentUpdate={props.onStudentUpdate}
                  />
                </Modal.Body>
              </Modal>
              <FontAwesomeIcon
                className="mr-4"
                icon={faPen}
                type="button"
                onClick={() => handleShowModal(student.id, "modal1")}
              />
              <Modal
                animation={false}
                show={
                  show === "modal2" &&
                  studentId === student.id
                }
              >
                <DeleteStudentModal
                  students={student}
                  closeModal={handleCloseModal}
                  onUpdateAfterDelete={props.onUpdateAfterDelete}
                />
              </Modal>
              <FontAwesomeIcon
                icon={faTrash}
                type="button"
                onClick={() => handleShowModal(student.id, "modal2")}
              />
            </td>
          </tr>
        );
      })}
    </Fragment>
  );
}
export default StudentRow;
