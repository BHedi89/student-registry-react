import { Component } from "react";
import Header from "./Header";
import NewBookForm from "./NewBookForm";
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
    console.log(this.props.location)
    console.log(this.props.location.state.books)
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
        {this.state.showForm ? <NewBookForm studentId={this.props.location.state.id}/> : null}

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Szerző</th>
              <th>Cím</th>
              <th>Alcím</th>
              <th>Weboldal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td><Link>xy</Link></td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default StudentBooks;
