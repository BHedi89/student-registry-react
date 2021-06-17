import { Component } from "react";
import Header from './Header'

class AddStudent extends Component {
    render() {
        return (
            <div className='container'>
                <Header title='Új hallgató hozzáadása' buttonTitle='Vissza' buttonLink='/studentList' />
                <div className="form-group">
                    <label htmlFor="inputName">Név</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Név"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail">E-mail cím</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="E-mail cím"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAge">Életkor</label>
                    <input type="number" className="form-control" id="inputAge" placeholder="Életkor"/>
                </div>
                <div className="form-group">
                    <label className="mr-2" htmlFor="inputGender">Nem</label>
                    <select className="custom-select my-1 mr-sm-2" id="inputGender">
                        <option value="FEMALE">Nő</option>
                        <option value="MALE">Férfi</option>
                        <option value="2">Egyéb</option>
                        <option value="3">Nem szeretném megadni</option>
                    </select>
                </div>
                <button className="btn btn-primary">Mentés</button>
            </div>
        )
    }
}

export default AddStudent;
