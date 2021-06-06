import { Component } from "react";
import Header from "./Header";

class StudentData extends Component {


    render() {
        return (
            <div className='container'>
                <Header title='Hallgató neve' buttonTitle='Vissza' buttonLink=''></Header>
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Szerző</th>
                            <th scope="col">Cím</th>
                            <th scope="col">Alcím</th>
                            <th scope="col">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <td>{{student.books.title}}</td> */}
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StudentData;