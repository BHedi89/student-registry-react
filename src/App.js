import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StudentList from "./pages/StudentList";
import { Route, Redirect, Switch } from "react-router-dom";
import AddStudentForm from "./forms/AddStudentForm";
import { Component } from "react";
import StudentBooks from "./pages/StudentBooks";
import MainLayout from "./layout/MainLayout";

class App extends Component {
  render() {
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
}

export default App;
