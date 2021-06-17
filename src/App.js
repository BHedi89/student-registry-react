import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import StudentList from './components/StudentList';
import { Route, Redirect, Switch } from "react-router-dom";
import AddStudent from "./components/AddStudent";

function App() {
  return (
      <Switch>
        <Route path='/' exact>
          <Redirect to='studentList' />
        </Route>
        <Route path='/studentList' exact>
          <StudentList/>
        </Route>
        <Route path='/addStudent' exact>
          <AddStudent/>
        </Route>
      </Switch>

  );
}

export default App;