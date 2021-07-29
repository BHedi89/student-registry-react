import { Component } from "react";
import Header from "../layout/Header";
import NewBookForm from "../forms/NewBookForm";
import { getSingleStudent } from "../http/studentService";
import Button from "../UI/Button";
import LinkComponent from "../UI/LinkComponent";
import TableComponent from "../UI/TableComponent";

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
    getSingleStudent(studentId).then((studentData) => {
      this.setState({
        student: studentData,
      });
    });
  }

  updateStudentBooks = (updatedStudentData) => {
    let modifiedStudentBook = { ...this.state.student };
    modifiedStudentBook = updatedStudentData;
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
            <LinkComponent
              to={{
                pathname: this.state.student.books[key].website,
              }}
              target="_blank"
              linkText={this.state.student.books[key].website}
            />
          </td>
        </tr>
      );
    }
    return (
      <>
        <Header
          buttonLink="/studentList"
          buttonTitle="Vissza"
          title={`${this.state.student.name} könyvei`}
        />
        <Button
          buttonText="Új könyv hozzáadása"
          onClick={() => this.toggleForm()}
        />
        {this.state.showForm ? (
          <NewBookForm
            studentId={this.props.location.state.id}
            studentData={this.state.student}
            onUpdateStudentsBook={this.updateStudentBooks}
          />
        ) : null}
        <TableComponent>
          <thead>
            <tr>
              <th>Szerző</th>
              <th>Cím</th>
              <th>Alcím</th>
              <th>Weboldal</th>
            </tr>
          </thead>
          <tbody>{books}</tbody>
        </TableComponent>
      </>
    );
  }
}

export default StudentBooks;
