import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StudentList from "./components/StudentList";
import { Route, Redirect, Switch } from "react-router-dom";
import AddStudent2 from "./components/AddStudent";
import { Component } from "react";
import StudentBooks from "./components/StudentBooks";

class App extends Component {
  constructor(props) {
    super(props);
  }

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
        <Route
          path="/studentBooks/:studentId"
          component={StudentBooks}
          exact
        />
      </Switch>
    );
  }
}

export default App;
