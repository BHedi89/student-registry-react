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
    };
  }

  toggleForm() {
    this.setState({
      showForm: !this.state.showForm,
    });
  }

  render() {
    const books = [];
    for (const key in this.props.location.state.books) {
      books.push(
        <tr>
          <td>{this.props.location.state.books[key].author}</td>
          <td>{this.props.location.state.books[key].title}</td>
          <td>{this.props.location.state.books[key].subtitle}</td>
          <td>
            <Link
              to={{
                pathname: this.props.location.state.books[key].website,
              }}
              target="_blank"
            >
              {this.props.location.state.books[key].website}
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
          title={`${this.props.location.state.name} könyvei`}
        />
        <button
          className="btn btn-primary mb-3"
          onClick={() => this.toggleForm()}
        >
          Új könyv hozzáadása
        </button>
        {this.state.showForm ? (
          <NewBookForm studentId={this.props.location.state.id} />
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
