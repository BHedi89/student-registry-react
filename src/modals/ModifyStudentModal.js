import React from "react";
import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class ModifyStudentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      name: this.props.students.name,
      email: this.props.students.email,
      age: this.props.students.age,
      gender: this.props.students.gender
    };
  }

  update() {
    const studentId = this.props.students.id;
    const FIREBASE_DOMAIN = 'https://students-administration-67d7b-default-rtdb.europe-west1.firebasedatabase.app';
    fetch(`${FIREBASE_DOMAIN}/students/${studentId}.json`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        age: this.state.age,
        gender: this.state.gender
      })
    })
    .then(resp => resp.json())
    .then(s => this.props.onStudentUpdate(studentId, s));
  }

  handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      this.setState({
        validated: true,
      });
      this.update();
      this.props.closeModal();
    }
  };

  inputChangeHandler(changeObject) {
    this.setState(changeObject);
  };

  render() {
    return (
      <>
      <Form
        noValidate
        validated={this.state.validated}
      >
        <Form.Group controlId="validationName">
          <Form.Label>Név</Form.Label>
          <Form.Control
            type="text"
            placeholder="Név"
            required
            onChange={(e) => {this.inputChangeHandler({name: e.target.value})}}
            defaultValue={this.props.students.name}
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
            onChange={(e) => {this.inputChangeHandler({email: e.target.value})}}
            defaultValue={this.props.students.email}
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
            onChange={(e) => {this.inputChangeHandler({age: e.target.value})}}
            defaultValue={this.props.students.age}
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
            onChange={(e) => {this.inputChangeHandler({gender: e.target.value})}}
            defaultValue={this.props.students.gender}
          >
            <option value="">Válassz...</option>
            <option value="FEMALE">Nő</option>
            <option value="MALE">Férfi</option>
            <option value="Egyéb">Egyéb</option>
            <option value="Nem szeretném megadni">Nem szeretném megadni</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Nem megadása kötelező
          </Form.Control.Feedback>
        </Form.Group>
      </Form>
      <Button className="btn btn-primary" onClick={this.handleSubmit} type="button" block>
        Mentés
      </Button>
    </>
    );
  }
}

export default ModifyStudentModal;