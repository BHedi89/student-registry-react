import { Component } from "react";
import Header from "../layout/Header";
import StudentRow from "./StudentRow";
import Filter from "../filter/Filter";
import { getAllStudent } from "../http/studentService";
import TableComponent from "../UI/TableComponent";

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      filter: "",
    };
  }

  componentDidMount() {
    const studentsList = [];
    getAllStudent().then((students) => {
      for (const key in students) {
        const studentObj = {
          id: key,
          ...students[key],
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
    let idx = modifiedStudents.findIndex((student) => student.id === id);
    student.id = id;
    modifiedStudents[idx] = student;
    this.setState({
      students: modifiedStudents,
    });
  };

  updateAfterDelete = (deletedStudent) => {
    this.setState({
      students: this.state.students.filter(
        (student) => student.id !== deletedStudent
      ),
    });
  };

  handleChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    return (
      <>
        <Header
          title="Hallgatói nyilvántartás"
          buttonTitle="Hozzáadás"
          buttonLink="/addStudent"
        />
        <Filter handleChange={this.handleChange} />
        <TableComponent>
          <thead>
            <tr>
              <th scope="col">Név</th>
              <th scope="col">E-mail cím</th>
              <th scope="col">Életkor</th>
              <th scope="col">Nem</th>
              <th scope="col">Könyvek száma</th>
              <th scope="col">Módosítás/Törlés</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.length !== 0 ? (
              <StudentRow
                students={this.state.students.filter((filteredStudent) => {
                  if (this.state.filter === "") {
                    return filteredStudent;
                  } else if (
                    filteredStudent.name
                      .toLowerCase()
                      .includes(this.state.filter.toLowerCase())
                  ) {
                    return filteredStudent;
                  } else {
                    return "";
                  }
                })}
                onStudentUpdate={this.updateStudent}
                onUpdateAfterDelete={this.updateAfterDelete}
              />
            ) : (
              <tr>
                <td>Nincs hallgató az adatbázisban!</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
          </tbody>
        </TableComponent>
      </>
    );
  }
}

export default StudentList;
