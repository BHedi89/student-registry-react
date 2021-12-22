import Header from "../layout/Header";
import NewBookForm from "../forms/NewBookForm";
import { getSingleStudent, controller } from "../http/studentService";
import ButtonComponent from "../UI/ButtonComponent";
import LinkComponent from "../UI/LinkComponent";
import TableComponent from "../UI/TableComponent";
import { useState, useEffect } from "react";

const StudentBooks = props => { 
  const [showForm, setShowForm] = useState(false);
  const [student, setStudent] = useState([]);

  useEffect(() => {
    let isApiSubscribed = true;
    const studentId = props.location.state.id;
    getSingleStudent(studentId).then((studentData) => {
      if(isApiSubscribed) {
        setStudent(studentData);
      }
    });
    return () => {
      // cleanup
      isApiSubscribed = false;
    }
  }, [])

  const updateStudentBooks = (updatedStudentData) => {
    let modifiedStudentBook = { ...student };
    modifiedStudentBook = updatedStudentData;
    setStudent(modifiedStudentBook);
  };

  function toggleForm() {
    setShowForm(!showForm);
  }
  
  const books = [];
  for (const key in student.books) {
    books.push(
      <tr key={student.books[key].isbn}>
        <td>{student.books[key].author}</td>
        <td>{student.books[key].title}</td>
        <td>{student.books[key].subtitle}</td>
        <td>
          <LinkComponent
            to={{
              pathname: student.books[key].website,
            }}
            target="_blank"
            linkText={student.books[key].website}
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
        title={`${student.name} könyvei`}
      />
      <ButtonComponent
        buttonText="Új könyv hozzáadása"
        onClick={() => toggleForm()}
      />
      {showForm ? (
        <NewBookForm
          studentId={props.location.state.id}
          studentData={student}
          onUpdateStudentsBook={updateStudentBooks}
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

export default StudentBooks;
