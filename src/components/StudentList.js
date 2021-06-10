import { Component } from "react";
import Header from './Header';
import StudentRow from './StudentRow';

class StudentList extends Component {
    render() {
        return (
            <div className='container'>
                <Header title='Hallgatói nyilvántartás' buttonTitle='Hozzáadás' buttonLink='/addStudent' />
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
                    <StudentRow />
                    {/* <tr app-student-row *ngFor="let s of students | filterStudents: filter" [student]="s"></tr> */}
                </table>
            </div>
        )
    }
}

export default StudentList;
