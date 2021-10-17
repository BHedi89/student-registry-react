import React from "react";
import { Form } from "react-bootstrap";
import { modifyStudent, Student } from "../http/studentService";
import ButtonComponent from "../UI/ButtonComponent";
import { useState } from "react";

const ModifyStudentModal = props => {
  const [isValidate, setValidate] = useState(false);
  const [name, setName] = useState(props.students.name);
  const [email, setEmail] = useState(props.students.email);
  const [age, setAge] = useState(props.students.age);
  const [gender, setGender] = useState(props.students.gender);
  const [changeStudentDataObject, setChangeStudentDataObject] = useState(); //?????

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      setValidate(true);
      modifyStudent(
        props.students.id,
        new Student(
          setName(name),
          setEmail(email),
          setAge(age),
          setGender(gender)
        )
      ).then((updatedStudent) =>
        props.onStudentUpdate(props.students.id, updatedStudent)
      );
      props.closeModal();
    }
  };

  const inputChangeHandler = (changeStudentDataObject) => {//?????
    setChangeStudentDataObject(changeStudentDataObject);
  }
  
  return (
    <>
      <Form noValidate validated={isValidate}>
        <Form.Group controlId="validationName">
          <Form.Label>Név</Form.Label>
          <Form.Control
            type="text"
            placeholder="Név"
            required
            onChange={(e) => {
              inputChangeHandler({ name: e.target.value });
            }}
            defaultValue={props.students.name}
          />
          <Form.Control.Feedback type="invalid">
            Név megadása kötelező
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationEmail">
          <Form.Label>E-mail cím</Form.Label>
          <Form.Control
            type="email"
            placeholder="E-mail cím"
            required
            onChange={(e) => {
              inputChangeHandler({ email: e.target.value });
            }}
            defaultValue={props.students.email}
          />
          <Form.Control.Feedback type="invalid">
            E-mail cím megadása kötelező
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationAge">
          <Form.Label>Életkor</Form.Label>
          <Form.Control
            type="number"
            placeholder="Életkor"
            required
            onChange={(e) => {
              inputChangeHandler({ age: e.target.value });
            }}
            defaultValue={props.students.age}
          />
          <Form.Control.Feedback type="invalid">
            Életkor megadása kötelező
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationGender">
          <Form.Label className="mr-2">Nem</Form.Label>
          <Form.Control
            required
            as="select"
            className="custom-select my-1 mr-sm-2"
            onChange={(e) => {
              inputChangeHandler({ gender: e.target.value });
            }}
            defaultValue={props.students.gender}
          >
            <option value="">Válassz...</option>
            <option value="FEMALE">Nő</option>
            <option value="MALE">Férfi</option>
            <option value="Egyéb">Egyéb</option>
            <option value="Nem szeretném megadni">
              Nem szeretném megadni
            </option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Nem megadása kötelező
          </Form.Control.Feedback>
        </Form.Group>
      </Form>
      <ButtonComponent
        buttonText="Mentés"
        onClick={handleSubmit}
      />
    </>
  );
}

export default ModifyStudentModal;
