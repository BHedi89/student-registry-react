import { Component } from "react";
import { Form, Col, Button, Alert } from "react-bootstrap";
import { FormErrors } from "../error/FormErrors";
import classes from "./NewBookForm.module.css";

class NewBookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      isbn: "",
      title: "",
      subtitle: "",
      author: "",
      published: "",
      publisher: "",
      pages: "",
      description: "",
      website: "",
      formErrors: {
        isbn: "",
        title: "",
        subtitle: "",
        author: "",
        published: "",
        publisher: "",
        pages: "",
        description: "",
        website: "",
      },
      isbnValid: false,
      titleValid: false,
      subtitleValid: false,
      authorValid: false,
      publishedValid: false,
      publisherValid: false,
      pagesValid: false,
      descriptionValid: false,
      websiteValid: false,
      formValid: false,
    };
  }

  addNewBook = () => {
    const studentId = this.props.studentId;
    const FIREBASE_DOMAIN =
      "https://students-administration-67d7b-default-rtdb.europe-west1.firebasedatabase.app";
    fetch(`${FIREBASE_DOMAIN}/students/${studentId}/books.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isbn: this.state.isbn,
        title: this.state.title,
        subtitle: this.state.subtitle,
        author: this.state.author,
        published: this.state.published,
        publisher: this.state.publisher,
        pages: parseFloat(this.state.pages),
        description: this.state.description,
        website: this.state.website
      }),
    });
  };

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
    let isbnValid = this.state.isbnValid;
    let titleValid = this.state.titleValid;
    let subtitleValid = this.state.subtitleValid;
    let authorValid = this.state.authorValid;
    let publishedValid = this.state.publishedValid;
    let publisherValid = this.state.publisherValid;
    let pagesValid = this.state.pagesValid;
    let descriptionValid = this.state.descriptionValid;
    let websiteValid = this.state.websiteValid;

    switch (fieldName) {
      case "isbn":
        isbnValid = value !== "";
        fieldValidationErrors.isbn = isbnValid
          ? ""
          : "Isbn szám megadása kötelező!";
        break;
      case "title":
        titleValid = value !== "";
        fieldValidationErrors.title = titleValid
          ? ""
          : "Cím megadása kötelező!";
        break;
      case "subtitle":
        subtitleValid = value !== "";
        fieldValidationErrors.subtitle = subtitleValid
          ? ""
          : "Alcím megadása kötelező!";
        break;
      case "author":
        authorValid = value !== "";
        fieldValidationErrors.author = authorValid
          ? ""
          : "Szerző megadása kötelező!";
        break;
      case "published":
        publishedValid = value !== "";
        fieldValidationErrors.published = publishedValid
          ? ""
          : "Kiadás dátumának megadása kötelező!";
        break;
      case "publisher":
        publisherValid = value !== "";
        fieldValidationErrors.publisher = publisherValid
          ? ""
          : "Kiadó megadása kötelező!";
        break;
      case "pages":
        pagesValid = value !== "";
        fieldValidationErrors.pages = pagesValid
          ? ""
          : "Lapok számának megadása kötelező!";
        break;
      case "description":
        descriptionValid = value !== "";
        fieldValidationErrors.description = descriptionValid
          ? ""
          : "Leírás megadása kötelező!";
        break;
      case "website":
        websiteValid = value !== "";
        fieldValidationErrors.website = websiteValid
          ? ""
          : "Weboldal megadása kötelező!";
        break;
      default:
        break;
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        isbnValid: isbnValid,
        titleValid: titleValid,
        subtitleValid: subtitleValid,
        authorValid: authorValid,
        publishedValid: publishedValid,
        publisherValid: publisherValid,
        pagesValid: pagesValid,
        descriptionValid: descriptionValid,
        websiteValid: websiteValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.isbnValid &&
        this.state.titleValid &&
        this.state.subtitleValid &&
        this.state.authorValid &&
        this.state.publishedValid &&
        this.state.publisherValid &&
        this.state.pagesValid &&
        this.state.descriptionValid &&
        this.state.websiteValid,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ showAlert: true });
    setTimeout(() => {
      this.setState({ 
        showAlert: false,
        isbn: "",
        title: "",
        subtitle: "",
        author: "",
        published: "",
        publisher: "",
        pages: "",
        description: "",
        website: "",
        formValid: false
      })
    }, 2000);
    this.addNewBook();
  };

  render() {
    return (
      <>
        <Alert show={this.state.showAlert} variant="success">
          {this.state.title} című könyv sikeresen létrehozva
        </Alert>
        <Form onSubmit={this.handleSubmit} noValidate>
          <FormErrors formErrors={this.state.formErrors} />
          <Form.Row>
            <Form.Group
              as={Col}
              className={`${classes["form-control"]} ${
                this.state.formErrors.name && classes.invalid
              }`}
            >
              <Form.Label>Isbn szám</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Isbn szám"
                name="isbn"
                value={this.state.isbn}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group
              as={Col}
              className={`${classes["form-control"]} ${
                this.state.formErrors.name && classes.invalid
              }`}
            >
              <Form.Label>Szerző</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Szerző"
                name="author"
                value={this.state.author}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group
              as={Col}
              className={`${classes["form-control"]} ${
                this.state.formErrors.name && classes.invalid
              }`}
            >
              <Form.Label>Cím</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Cím"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group
              as={Col}
              className={`${classes["form-control"]} ${
                this.state.formErrors.name && classes.invalid
              }`}
            >
              <Form.Label>Alcím</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Alcím"
                name="subtitle"
                value={this.state.subtitle}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group
              as={Col}
              className={`${classes["form-control"]} ${
                this.state.formErrors.name && classes.invalid
              }`}
            >
              <Form.Label>Kiadás dátuma</Form.Label>
              <Form.Control
                required
                type="date"
                placeholder="Kiadás dátuma"
                name="published"
                value={this.state.published}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group
              as={Col}
              className={`${classes["form-control"]} ${
                this.state.formErrors.name && classes.invalid
              }`}
            >
              <Form.Label>Kiadó</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Kiadó"
                name="publisher"
                value={this.state.publisher}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group
              as={Col}
              className={`${classes["form-control"]} ${
                this.state.formErrors.name && classes.invalid
              }`}
            >
              <Form.Label>Oldalak száma</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Oldalak száma"
                name="pages"
                value={this.state.pages}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group
              as={Col}
              className={`${classes["form-control"]} ${
                this.state.formErrors.name && classes.invalid
              }`}
            >
              <Form.Label>Leírás</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Leírás"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group
              as={Col}
              className={`${classes["form-control"]} ${
                this.state.formErrors.name && classes.invalid
              }`}
            >
              <Form.Label>Weboldal</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Weboldal"
                name="website"
                value={this.state.website}
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Button
            className="btn btn-primary mb-5"
            type="submit"
            disabled={!this.state.formValid}
          >
            Mentés
          </Button>
        </Form>
      </>
    );
  }
}

export default NewBookForm;
