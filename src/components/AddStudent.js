import { Component } from "react";
import Header from "./Header";
import { Form, Button, Alert } from "react-bootstrap";

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      name: "",
      email: "",
      age: "",
      gender: "",
      showAlert: false,
    };
  }

  addNewStudent = () => {
    const FIREBASE_DOMAIN =
      "https://students-administration-67d7b-default-rtdb.europe-west1.firebasedatabase.app";
    fetch(`${FIREBASE_DOMAIN}/students.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        age: parseInt(this.state.age),
        gender: this.state.gender,
      }),
    }).then((resp) => resp.json());
  };
 
  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      this.setState({validated: true})
    } else {
        this.setState({ 
          validated: true
        });

        setTimeout(() => {
          this.handleAlert();
        }, 5000)
        console.log("valid");
    }

    console.log("1." + this.state.validated); //false
  };

  handleAlert = () => {
    console.log("2." + this.state.validated) //true
    if (this.state.validated === true) {
      this.setState({
        showAlert: true,
      },
      () => {
        window.setTimeout(() => {
          this.setState({
            validated: false,
            showAlert: false,
            name: "",
            email: "",
            age: "",
            gender: "",
          });
          console.log("3." + this.state.validated); //false
        }, 2000);
        console.log("4." + this.state.validated); //true
        this.addNewStudent();
      })
      
    }
  }

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
        <Alert show={this.state.showAlert} variant="success">
          {this.state.name} tanuló sikeresen létrehozva
        </Alert>
        <Form
          noValidate
          validated={this.state.validated}
          onSubmit={this.handleSubmit}
        >
          <Form.Group controlId="validationName">
            <Form.Label>Név</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Név"
              value={this.state.name}
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
              required
              type="email"
              placeholder="E-mail cím"
              value={this.state.email}
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
              required
              type="number"
              placeholder="Életkor"
              value={this.state.age}
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
              value={this.state.gender}
              onChange={(e) => {
                this.inputChangeHandler({ gender: e.target.value });
              }}
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
          <Button
            className="btn btn-primary"
            type="submit"
          >
            Mentés
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddStudent;
