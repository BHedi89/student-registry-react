import { Component } from "react";
import Header from "./Header";

class StudentBooks extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="container">
                <Header 
                    buttonLink="/studentList"
                    buttonTitle="Vissza"
                    title={`${this.props.location.state.name} könyvei`}
                />
            </div>
        )
    }
}

export default StudentBooks;