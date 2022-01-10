import { Form, Col, Alert } from "react-bootstrap";
import { FormErrors } from "../error/FormErrors";
import classes from "./FormValidation.module.css";
import { addNewBook, Book } from "../http/bookService";
import { getSingleStudent } from "../http/studentService";
import ButtonComponent from "../UI/ButtonComponent";
import { useState } from "react";

const NewBookForm = props => {
  const [showAlert, setShowAlert] = useState(false);
  const [isbn, setIsbn] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [author, setAuthor] = useState("");
  const [published, setPublished] = useState("");
  const [publisher, setPublisher] = useState("");
  const [pages, setPages] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [formErrors, setFormErrors] = useState({
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
      }
  });
  const [isbnValid, setIsbnValid] = useState(false);
  const [titleValid, setTitleValid] = useState(false);
  const [subtitleValid, setSubtitleValid] = useState(false);
  const [authorValid, setAuthorValid] = useState(false);
  const [publishedValid, setPublishedValid] = useState(false);
  const [publisherValid, setPublisherValid] = useState(false);
  const [pagesValid, setPagesValid] = useState(false);
  const [descriptionValid, setDescriptionValid] = useState(false);
  const [websiteValid, setWebsiteValid] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const handleIsbnChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    validateField(fieldName, value);
    setIsbn(e.target.value);
  };

  const handleTitleChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    validateField(fieldName, value);
    setTitle(e.target.value);
  };

  const handleSubtitleChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    validateField(fieldName, value);
    setSubtitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    validateField(fieldName, value);
    setAuthor(e.target.value);
  };

  const handlePublishedChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    validateField(fieldName, value);
    setPublished(e.target.value);
  };

  const handlePublisherChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    validateField(fieldName, value);
    setPublisher(e.target.value);
  };

  const handlePagesChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    validateField(fieldName, value);
    setPages(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    validateField(fieldName, value);
    setDescription(e.target.value);
  };

  const handleWebsiteChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    validateField(fieldName, value);
    setWebsite(e.target.value);
  };

  const validateField = (fieldName, value) => {
    let fieldValidationErrors = formErrors;
    let validIsbn = isbnValid;
    let validTitle = titleValid;
    let validSubtitle = subtitleValid;
    let validAuthor = authorValid;
    let validPublished = publishedValid;
    let validPublisher = publisherValid;
    let validPages = pagesValid;
    let validDescription = descriptionValid;
    let validWebsite = websiteValid;

    switch (fieldName) {
      case "isbn":
        validIsbn = value !== "";
        fieldValidationErrors.isbn = validIsbn
          ? ""
          : "Isbn szám megadása kötelező!";
        break;
      case "title":
        validTitle = value !== "";
        fieldValidationErrors.title = validTitle
          ? ""
          : "Cím megadása kötelező!";
        break;
      case "subtitle":
        validSubtitle = value !== "";
        fieldValidationErrors.subtitle = validSubtitle
          ? ""
          : "Alcím megadása kötelező!";
        break;
      case "author":
        validAuthor = value !== "";
        fieldValidationErrors.author = validAuthor
          ? ""
          : "Szerző megadása kötelező!";
        break;
      case "published":
        validPublished = value !== "";
        fieldValidationErrors.published = validPublished
          ? ""
          : "Kiadás dátumának megadása kötelező!";
        break;
      case "publisher":
        validPublisher = value !== "";
        fieldValidationErrors.publisher = validPublisher
          ? ""
          : "Kiadó megadása kötelező!";
        break;
      case "pages":
        validPages = value !== "";
        fieldValidationErrors.pages = validPages
          ? ""
          : "Lapok számának megadása kötelező!";
        break;
      case "description":
        validDescription = value !== "";
        fieldValidationErrors.description = validDescription
          ? ""
          : "Leírás megadása kötelező!";
        break;
      case "website":
        validWebsite = value !== "";
        fieldValidationErrors.website = validWebsite
          ? ""
          : "Weboldal megadása kötelező!";
        break;
      default:
        break;
    }

    setFormErrors(fieldValidationErrors);
    setIsbnValid(validIsbn);
    setTitleValid(validTitle);
    setSubtitleValid(validSubtitle);
    setAuthorValid(validAuthor);
    setPublishedValid(validPublished);
    setPublisherValid(validPublisher);
    setPagesValid(validPages);
    setDescriptionValid(validDescription);
    setWebsiteValid(validWebsite);

    if(validIsbn && validTitle && validSubtitle && validAuthor 
      && validPublished && validPublisher && validPages
      && validDescription && validWebsite) {
        setFormValid(true);
      }
  }

  const handleSubmit = (event) => {
    console.log("submit working");
    event.preventDefault();
    setShowAlert(true);
    setTimeout(() => {
        setShowAlert(false);
        setIsbn("");
        setTitle("");
        setSubtitle("");
        setAuthor("");
        setPublished("");
        setPublisher("");
        setPages("");
        setDescription("");
        setWebsite("");
        setFormValid(false);
    }, 2000);
    addNewBook(
      props.studentId,
      new Book(
        isbn,
        title,
        subtitle,
        author,
        published,
        publisher,
        pages,
        description,
        website
      )
    ).then(() => {
      getSingleStudent(props.studentId).then((book) =>
        props.onUpdateStudentsBook(book)
      );
    });
  };

  
  return (
    <>
      <Alert show={showAlert} variant="success">
        {title} című könyv sikeresen létrehozva
      </Alert>
      <Form onSubmit={handleSubmit} noValidate>
        <FormErrors formErrors={formErrors} />
        <Form.Row>
          <Form.Group
            as={Col}
            className={`${classes["form-control"]} ${
              formErrors.name && classes.invalid
            }`}
          >
            <Form.Label>Isbn szám</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Isbn szám"
              name="isbn"
              value={isbn}
              onChange={handleIsbnChange}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            className={`${classes["form-control"]} ${
              formErrors.name && classes.invalid
            }`}
          >
            <Form.Label>Szerző</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Szerző"
              name="author"
              value={author}
              onChange={handleAuthorChange}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group
            as={Col}
            className={`${classes["form-control"]} ${
              formErrors.name && classes.invalid
            }`}
          >
            <Form.Label>Cím</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Cím"
              name="title"
              value={title}
              onChange={handleTitleChange}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            className={`${classes["form-control"]} ${
              formErrors.name && classes.invalid
            }`}
          >
            <Form.Label>Alcím</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Alcím"
              name="subtitle"
              value={subtitle}
              onChange={handleSubtitleChange}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group
            as={Col}
            className={`${classes["form-control"]} ${
              formErrors.name && classes.invalid
            }`}
          >
            <Form.Label>Kiadás dátuma</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="Kiadás dátuma"
              name="published"
              value={published}
              onChange={handlePublishedChange}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            className={`${classes["form-control"]} ${
              formErrors.name && classes.invalid
            }`}
          >
            <Form.Label>Kiadó</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Kiadó"
              name="publisher"
              value={publisher}
              onChange={handlePublisherChange}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            className={`${classes["form-control"]} ${
              formErrors.name && classes.invalid
            }`}
          >
            <Form.Label>Oldalak száma</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Oldalak száma"
              name="pages"
              value={pages}
              onChange={handlePagesChange}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group
            as={Col}
            className={`${classes["form-control"]} ${
              formErrors.name && classes.invalid
            }`}
          >
            <Form.Label>Leírás</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Leírás"
              name="description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            className={`${classes["form-control"]} ${
              formErrors.name && classes.invalid
            }`}
          >
            <Form.Label>Weboldal</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Weboldal"
              name="website"
              value={website}
              onChange={handleWebsiteChange}
            />
          </Form.Group>
        </Form.Row>
        <ButtonComponent
          buttonText="Mentés"
          disabled={!formValid}
          type="submit"
        />
      </Form>
    </>
  );
}

export default NewBookForm;
