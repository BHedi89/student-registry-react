import { Form, Alert } from "react-bootstrap";
import Header from "../layout/Header";
import classes from "./FormValidation.module.css";
import { FormErrors } from "../error/FormErrors";
import { addNewStudent, Student } from "../http/studentService";
import ButtonComponent from "../UI/ButtonComponent";
import { useState } from "react";

const AddStudentForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [formErrors, setFormErrors] = useState({
    formErrors: {
      name: "",
      email: "",
      age: "",
      gender: "",
    }
  });
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [ageValid, setAgeValid] = useState(false);
  const [genderValid, setGenderValid] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const handleNameChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    validateField(fieldName, value);
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    validateField(fieldName, value);
    setEmail(e.target.value);
  }

  const handleAgeChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    validateField(fieldName, value);
    setAge(e.target.value);
  }

  const handleGenderChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    validateField(fieldName, value);
    setGender(e.target.value);
  }

  const validateField = (fieldName, value) => {
    let fieldValidationErrors = formErrors;
    let validName = nameValid;
    let validEmail = emailValid;
    let validAge = ageValid;
    let validGender = genderValid;

    switch (fieldName) {
      case "name":
        validName = value !== "";
        fieldValidationErrors.name = validName ? "" : "N??v megad??sa k??telez??!";
        break;
      case "email":
        validEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = validEmail
          ? ""
          : "Email form??tuma nem megfelel??!";
        break;
      case "age":
        validAge = value >= 18;
        fieldValidationErrors.age = validAge
          ? ""
          : "Az ??letkor nem lehet kisebb, mint 18!";
        break;
      case "gender":
        validGender = value !== "";
        fieldValidationErrors.gender = validGender
          ? ""
          : "Nem megad??sa k??telez??!";
        break;
      default:
        break;
    }

    setFormErrors(fieldValidationErrors);
    setNameValid(validName);
    setEmailValid(validEmail);
    setAgeValid(validAge);
    setGenderValid(validGender);
    
    if(validName && validEmail && validAge && validGender) {
      setFormValid(true);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setName("");
      setEmail("");
      setAge("");
      setGender("");
      setFormValid(false);
    }, 2000);
    addNewStudent(
      new Student(
        name,
        age,
        email,
        gender
      )
    );
  };

  return (
    <div className="container">
      <Header
        buttonTitle="Vissza"
        buttonLink="/studentList"
        title="??j tanul?? hozz??ad??sa"
      />
      <Alert show={showAlert} variant="success">
        {name} tanul?? sikeresen l??trehozva
      </Alert>
      <Form onSubmit={handleSubmit} noValidate>
        <FormErrors formErrors={formErrors} />
        <Form.Group
          className={`${classes["form-control"]} ${
            formErrors.name && classes.invalid
          }`}
        >
          <Form.Label htmlFor="name">N??v</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="N??v"
            value={name}
            required
            onChange={handleNameChange}
          />
        </Form.Group>
        <Form.Group
          className={`${classes["form-control"]} ${
            formErrors.email && classes.invalid
          }`}
        >
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            required
            onChange={handleEmailChange}
          />
        </Form.Group>
        <Form.Group
          className={`${classes["form-control"]} ${
            formErrors.age && classes.invalid
          }`}
        >
          <Form.Label htmlFor="age">??letkor</Form.Label>
          <Form.Control
            type="number"
            name="age"
            placeholder="??letkor"
            value={age}
            required
            onChange={handleAgeChange}
          />
        </Form.Group>
        <Form.Group
          className={`${classes["form-control"]} ${
            formErrors.gender && classes.invalid
          }`}
        >
          <Form.Label htmlFor="gender">Nem</Form.Label>
          <Form.Control
            as="select"
            name="gender"
            value={gender}
            required
            onChange={handleGenderChange}
          >
            <option value="">V??lassz...</option>
            <option value="FEMALE">N??</option>
            <option value="MALE">F??rfi</option>
            <option value="Egy??b">Egy??b</option>
            <option value="Nem szeretn??m megadni">
              Nem szeretn??m megadni
            </option>
          </Form.Control>
        </Form.Group>
        <div>
          <ButtonComponent
            buttonText="Ment??s"
            disabled={!formValid}
            type="submit"
          /> 
        </div>
      </Form>
    </div>
  );
}

export default AddStudentForm;
