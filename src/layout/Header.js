import { Component } from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../UI/ButtonComponent";


class Header extends Component {
    constructor() {
        super();
        this.title = '';
        this.buttonTitle = '';
        this.buttonLink = '';
    }

    render() {
        return (
            <div className="row mt-5 mb-2 ml-1">
                <h1>{this.props.title}</h1>
                <div className="col">
                <div className="float-right">
                <Link to={this.props.buttonLink}>
                    <ButtonComponent buttonText={this.props.buttonTitle} />
                </Link>
                </div>
                </div>
            </div>
        )
    }
}

export default Header;
