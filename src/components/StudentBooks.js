import { Component } from "react";
import Header from "./Header";
import NewBookForm from "./NewBookForm";

class StudentBooks extends Component {
    constructor(props){
        super(props);
        this.state = {
            showForm: false
        }
    }

    toggleForm(){
        this.setState({
            showForm: !this.state.showForm
        })
        console.log(this.state);
    }

    render() {
        return(
            <div className="container">
                <Header 
                    buttonLink="/studentList"
                    buttonTitle="Vissza"
                    title={`${this.props.location.state.name} könyvei`}
                />
                <button className="btn btn-primary mb-3" onClick={() => this.toggleForm()}>Új könyv hozzáadása</button>
                {this.state.showForm ? <NewBookForm /> : null}
            </div>
        )
    }
}

export default StudentBooks;