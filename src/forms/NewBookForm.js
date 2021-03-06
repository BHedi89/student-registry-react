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
          : "Isbn sz??m megad??sa k??telez??!";
        break;
      case "title":
        validTitle = value !== "";
        fieldValidationErrors.title = validTitle
          ? ""
          : "C??m megad??sa k??telez??!";
        break;
      case "subtitle":
        validSubtitle = value !== "";
        fieldValidationErrors.subtitle = validSubtitle
          ? ""
          : "Alc??m megad??sa k??telez??!";
        break;
      case "author":
        validAuthor = value !== "";
        fieldValidationErrors.author = validAuthor
          ? ""
          : "Szerz?? megad??sa k??telez??!";
        break;
      case "published":
        validPublished = value !== "";
        fieldValidationErrors.published = validPublished
          ? ""
          : "Kiad??s d??tum??nak megad??sa k??telez??!";
        break;
      case "publisher":
        validPublisher = value !== "";
        fieldValidationErrors.publisher = validPublisher
          ? ""
          : "Kiad?? megad??sa k??telez??!";
        break;
      case "pages":
        validPages = value !== "";
        fieldValidationErrors.pages = validPages
          ? ""
          : "Lapok sz??m??nak megad??sa k??telez??!";
        break;
      case "description":
        validDescription = value !== "";
        fieldValidationErrors.description = validDescription
          ? ""
          : "Le??r??s megad??sa k??telez??!";
        break;
      case "website":
        validWebsite = value !== "";
        fieldValidationErrors.website = validWebsite
          ? ""
          : "Weboldal megad??sa k??telez??!";
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
        {title} c??m?? k??nyv sikeresen l??trehozva
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
            <Form.Label>Isbn sz??m</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Isbn sz??m"
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
            <Form.Label>Szerz??</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Szerz??"
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
            <Form.Label>C??m</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="C??m"
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
            <Form.Label>Alc??m</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Alc??m"
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
            <Form.Label>Kiad??s d??tuma</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="Kiad??s d??tuma"
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
            <Form.Label>Kiad??</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Kiad??"
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
            <Form.Label>Oldalak sz??ma</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Oldalak sz??ma"
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
            <Form.Label>Le??r??s</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Le??r??s"
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
          buttonText="Ment??s"
          disabled={!formValid}
          type="submit"
        />
      </Form>
    </>
  );
}

export default NewBookForm;
