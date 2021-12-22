import Header from "../layout/Header";
import StudentRow from "./StudentRow";
import Filter from "../filter/Filter";
import { getAllStudent, controller } from "../http/studentService";
import TableComponent from "../UI/TableComponent";
import { useState, useEffect } from "react";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    let isApiSubscribed = true;
    const studentsList = [];
    getAllStudent().then((students) => {
      if(isApiSubscribed) {
        for (const key in students) {
          const studentObj = {
            id: key,
            ...students[key],
          };
          studentsList.push(studentObj);
        }
        setStudents(studentsList);
      }
    });
    return () => {
      // cleanup
      isApiSubscribed = false;
    }
  }, [])

  const updateStudent = (id, student) => {
    let modifiedStudents = [...students];
    let idx = modifiedStudents.findIndex((student) => student.id === id);
    student.id = id;
    modifiedStudents[idx] = student;
    setStudents(modifiedStudents);
  };

  const updateAfterDelete = (deletedStudent) => {
    setStudents(students.filter(
      (student) => student.id !== deletedStudent
    ));
  };

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <Header
        title="Hallgatói nyilvántartás"
        buttonTitle="Hozzáadás"
        buttonLink="/addStudent"
      />
      <Filter handleChange={handleChange} />
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
          {students.length !== 0 ? (
            <StudentRow
              students={students.filter((filteredStudent) => {
                if (filter === "") {
                  return filteredStudent;
                } else if (
                  filteredStudent.name
                    .toLowerCase()
                    .includes(filter.toLowerCase())
                ) {
                  return filteredStudent;
                } else {
                  return "";
                }
              })}
              onStudentUpdate={updateStudent}
              onUpdateAfterDelete={updateAfterDelete}
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

export default StudentList;
