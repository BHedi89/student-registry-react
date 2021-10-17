import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StudentList from "./pages/StudentList";
import { Route, Redirect, Switch } from "react-router-dom";
import AddStudentForm from "./forms/AddStudentForm";
import StudentBooks from "./pages/StudentBooks";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="studentList" />
        </Route>
        <Route path="/studentList" exact>
          <StudentList />
        </Route>
        <Route path="/addStudent" exact>
          <AddStudentForm />
        </Route>
        <Route
          path="/studentBooks/:studentId"
          component={StudentBooks}
          exact
        />
      </Switch>
    </MainLayout>
  );
}

export default App;
