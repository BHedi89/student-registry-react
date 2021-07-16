import { Component } from "react";
import Header from "../headers, footers/Header";
import NewBookForm from "../forms/NewBookForm";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

class StudentBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      student: [],
    };
  }

  componentDidMount() {
    const studentId = this.props.location.state.id;
    const FIREBASE_DOMAIN =
      "https://students-administration-67d7b-default-rtdb.europe-west1.firebasedatabase.app";
    fetch(`${FIREBASE_DOMAIN}/students/${studentId}.json`)
      .then((resp) => resp.json())
      .then((s) => {
        this.setState({
          student: s,
        });
      });
  }

  updateStudentBooks = (student) => {
    let modifiedStudentBook = { ...this.state.student};
    modifiedStudentBook = student;
    this.setState({
      student: modifiedStudentBook,
    });
  };

  toggleForm() {
    this.setState({
      showForm: !this.state.showForm,
    });
  }

  render() {
    const books = [];
    for (const key in this.state.student.books) {
      books.push(
        <tr key={this.state.student.books[key].isbn}>
          <td>{this.state.student.books[key].author}</td>
          <td>{this.state.student.books[key].title}</td>
          <td>{this.state.student.books[key].subtitle}</td>
          <td>
            <Link
              to={{
                pathname: this.state.student.books[key].website,
              }}
              target="_blank"
            >
              {this.state.student.books[key].website}
            </Link>
          </td>
        </tr>
      );
    }
    return (
      <div className="container">
        <Header
          buttonLink="/studentList"
          buttonTitle="Vissza"
          title={`${this.state.student.name} könyvei`}
        />
        <button
          className="btn btn-primary mb-3"
          onClick={() => this.toggleForm()}
        >
          Új könyv hozzáadása
        </button>
        {this.state.showForm ? (
          <NewBookForm
            studentId={this.props.location.state.id}
            studentData={this.state.student}
            onUpdateStudentsBook={this.updateStudentBooks}
          />
        ) : null}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Szerző</th>
              <th>Cím</th>
              <th>Alcím</th>
              <th>Weboldal</th>
            </tr>
          </thead>
          <tbody>{books}</tbody>
        </Table>
      </div>
    );
  }
}

export default StudentBooks;
