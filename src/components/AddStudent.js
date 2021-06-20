import { Component } from "react";
import Header from "./Header";
import { Form, Button } from "react-bootstrap";

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
    };
  }

  addNewStudent = () => {
      
  }

  handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === true) {
      this.setState({
        validated: true,
      });
    }
  };

  inputChangeHandler(changeObject) {
    this.setState(changeObject);
  }

  render() {
    return (
      <div className="container">
        <Header
          title="Új hallgató hozzáadása"
          buttonTitle="Vissza"
          buttonLink="/studentList"
        />
        <Form noValidate validated={this.state.validated}>
          <Form.Group controlId="validationName">
            <Form.Label>Név</Form.Label>
            <Form.Control
              type="text"
              placeholder="Név"
              required
              onChange={(e) => {
                this.inputChangeHandler({ name: e.target.value });
              }}
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
                this.inputChangeHandler({ email: e.target.value });
              }}
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
                this.inputChangeHandler({ age: e.target.value });
              }}
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
                this.inputChangeHandler({ gender: e.target.value });
              }}
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
        </Form>
        <Button
          className="btn btn-primary"
          onClick={this.handleSubmit}
          type="button"
        >
          Mentés
        </Button>
      </div>
    );
  }
}

export default AddStudent;
