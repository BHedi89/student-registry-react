import React from "react";
import { Component } from "react";
import { Modal, Form, Button } from "react-bootstrap";

class ModifyStudentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      validated: false
    };
  }

  handleClose = () => {
    this.setState({
      show: false
    });
  };

  handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    this.setState({
      validated: true
    });
  };

  inputChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      this.setState({
        validated: true
      });
    }
  };

  render() {
    return (
      <>
        <Modal.Header closeButton>
          <Modal.Title>Adatok módosítása</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            noValidate
            validated={this.state.validated}
            onSubmit={this.handleSubmit}
          >
            <Form.Group controlId="validationName">
              <Form.Label>Név</Form.Label>
              <Form.Control
                type="text"
                placeholder="Név"
                required
                onChange={this.inputChangeHandler}
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
                onChange={this.inputChangeHandler}
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
                onChange={this.inputChangeHandler}
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
                onChange={this.inputChangeHandler}
              >
                <option value="">Válassz...</option>
                <option value="FEMALE">Nő</option>
                <option value="MALE">Férfi</option>
                <option value="2">Egyéb</option>
                <option value="3">Nem szeretném megadni</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Nem megadása kötelező
              </Form.Control.Feedback>
            </Form.Group>
            <Button className="btn btn-primary" type="submit">
              Mentés
            </Button>
          </Form>
        </Modal.Body>
      </>
    );
  }
}

export default ModifyStudentModal;
