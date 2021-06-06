import { Component } from "react";

class StudentRow extends Component {


    render() {
        return (
            <tbody>
                <tr>
                    <td>Gipsz Jakab</td>
                    <td>gipszjakab@gmail.com</td>
                    <td>25</td>
                    <td>Férfi</td>
                    <td>
                        <button type="button" className="btn btn-warning btn-sm mr-2">Módosítás</button>
                        <button type="button" className="btn btn-danger btn-sm">Törlés</button>
                    </td>
                </tr>
                <tr>
                    <td>Külö Nóra</td>
                    <td>kulonora@gmail.com</td>
                    <td>24</td>
                    <td>Nő</td>
                    <td>
                        <button type="button" className="btn btn-warning btn-sm mr-2">Módosítás</button>
                        <button type="button" className="btn btn-danger btn-sm">Törlés</button>
                    </td>
                </tr>
            </tbody>
        )
    }
}

export default StudentRow;