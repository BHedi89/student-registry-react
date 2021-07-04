import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StudentList from "./components/StudentList";
import { Route, Redirect, Switch } from "react-router-dom";
import AddStudent2 from "./components/AddStudent2";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact>
          <Redirect to="studentList" />
        </Route>
        <Route path="/studentList" exact>
          <StudentList />
        </Route>
        <Route path="/addStudent" exact>
          <AddStudent2 />
        </Route>
      </Switch>
    );
  }
}

export default App;
