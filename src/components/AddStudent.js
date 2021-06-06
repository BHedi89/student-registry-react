import { Component } from "react";
import Header from './Header'

class AddStudent extends Component {
    render() {
        return (
            <div className='container'>
                <Header title='Hallgató hozzáadása' buttonTitle='Vissza' buttonLink=''></Header>
                <div class="form-group">
                    <label for="inputName">Név</label>
                    <input type="text" class="form-control" id="inputName" placeholder="Név"/>
                </div>
                <div class="form-group">
                    <label for="inputEmail">E-mail cím</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="E-mail cím"/>
                </div>
                <div class="form-group">
                    <label for="inputAge">Életkor</label>
                    <input type="number" class="form-control" id="inputAge" placeholder="Életkor"/>
                </div>
                <div class="form-group">
                    <label class="mr-2" for="inputGender">Nem</label>
                    <select class="custom-select my-1 mr-sm-2" id="inputGender">
                        <option value="FEMALE">Nő</option>
                        <option value="MALE">Férfi</option>
                        <option value="2">Egyéb</option>
                        <option value="3">Nem szeretném megadni</option>
                    </select>
                </div>
                <button class="btn btn-primary">Mentés</button>  
            </div>
        )
    }
}

export default AddStudent;