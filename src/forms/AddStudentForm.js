import { Component } from "react";
import { Form, Alert, Button } from "react-bootstrap";
import Header from "../headers, footers/Header";
import classes from "./AddStudentForm.module.css";
import { FormErrors } from "../error/FormErrors";
import { addNewStudent, Student } from "../http/studentService";

class AddStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      name: "",
      email: "",
      age: "",
      gender: "",
      formErrors: {
        name: "",
        email: "",
        age: "",
        gender: "",
      },
      nameValid: false,
      emailValid: false,
      ageValid: false,
      genderValid: false,
      formValid: false,
    };
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.validateField(name, value);
      }
    );
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let ageValid = this.state.ageValid;
    let genderValid = this.state.genderValid;

    switch (fieldName) {
      case "name":
        nameValid = value !== "";
        fieldValidationErrors.name = nameValid ? "" : "Név megadása kötelező!";
        break;
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid
          ? ""
          : "Email formátuma nem megfelelő!";
        break;
      case "age":
        ageValid = value >= 18;
        fieldValidationErrors.age = ageValid
          ? ""
          : "Az életkor nem lehet kisebb, mint 18!";
        break;
      case "gender":
        genderValid = value !== "";
        fieldValidationErrors.gender = genderValid
          ? ""
          : "Nem megadása kötelező!";
        break;
      default:
        break;
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        nameValid: nameValid,
        emailValid: emailValid,
        ageValid: ageValid,
        genderValid: genderValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.nameValid &&
        this.state.emailValid &&
        this.state.ageValid &&
        this.state.genderValid,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ showAlert: true });
    setTimeout(() => {
      this.setState({
        showAlert: false,
        name: "",
        email: "",
        age: "",
        gender: "",
        formValid: false,
      });
    }, 2000);
    addNewStudent(
      new Student(
        this.state.name,
        this.state.age,
        this.state.email,
        this.state.gender
      )
    );
  };

  render() {
    return (
      <div className="container">
        <Header
          buttonTitle="Vissza"
          buttonLink="/studentList"
          title="Új tanuló hozzáadása"
        />
        <Alert show={this.state.showAlert} variant="success">
          {this.state.name} tanuló sikeresen létrehozva
        </Alert>
        <Form onSubmit={this.handleSubmit} noValidate>
          <FormErrors formErrors={this.state.formErrors} />
          <Form.Group
            className={`${classes["form-control"]} ${
              this.state.formErrors.name && classes.invalid
            }`}
          >
            <Form.Label htmlFor="name">Név</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Név"
              value={this.state.name}
              required
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group
            className={`${classes["form-control"]} ${
              this.state.formErrors.email && classes.invalid
            }`}
          >
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              required
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group
            className={`${classes["form-control"]} ${
              this.state.formErrors.age && classes.invalid
            }`}
          >
            <Form.Label htmlFor="age">Életkor</Form.Label>
            <Form.Control
              type="number"
              name="age"
              placeholder="Életkor"
              required
              value={this.state.age}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group
            className={`${classes["form-control"]} ${
              this.state.formErrors.gender && classes.invalid
            }`}
          >
            <Form.Label htmlFor="gender">Nem</Form.Label>
            <Form.Control
              as="select"
              name="gender"
              required
              value={this.state.gender}
              onChange={this.handleChange}
            >
              <option value="">Válassz...</option>
              <option value="FEMALE">Nő</option>
              <option value="MALE">Férfi</option>
              <option value="Egyéb">Egyéb</option>
              <option value="Nem szeretném megadni">
                Nem szeretném megadni
              </option>
            </Form.Control>
          </Form.Group>
          <div>
            <Button
              className="btn btn-primary"
              type="submit"
              disabled={!this.state.formValid}
            >
              Mentés
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default AddStudentForm;
