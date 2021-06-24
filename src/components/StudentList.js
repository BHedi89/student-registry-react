import { Component } from "react";
import Header from "./Header";
import StudentRow from "./StudentRow";

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      modal: "",
    };
  }

  componentDidMount() {
    const studentsList = [];
    const FIREBASE_DOMAIN =
      "https://students-administration-67d7b-default-rtdb.europe-west1.firebasedatabase.app";
    fetch(`${FIREBASE_DOMAIN}/students.json`)
      .then((resp) => resp.json())
      .then((s) => {
        for (const key in s) {
          const studentObj = {
            id: key,
            ...s[key],
          };
          studentsList.push(studentObj);
        }
        this.setState({
          students: studentsList,
        });
      });
  }

  updateStudent = (id, student) => {
    let modifiedStudents = [...this.state.students];
    let idx = modifiedStudents.findIndex((s) => s.id === id);
    student.id = id;
    modifiedStudents[idx] = student;
    this.setState({
      students: modifiedStudents,
    });
  };

  render() {
    return (
      <div className="container">
        <Header
          title="Hallgatói nyilvántartás"
          buttonTitle="Hozzáadás"
          buttonLink="/addStudent"
        />
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">Név</th>
              <th scope="col">E-mail cím</th>
              <th scope="col">Életkor</th>
              <th scope="col">Nem</th>
              {/* <th scope="col">Könyvek száma</th> */}
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            <StudentRow
              students={this.state.students}
              onStudentUpdate={this.updateStudent}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;
