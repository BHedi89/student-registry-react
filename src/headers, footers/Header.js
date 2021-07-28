import { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import Button from "../UI/Button";


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
                    <Button buttonText={this.props.buttonTitle} />
                </Link>
                </div>
                </div>
            </div>
        )
    }
}

export default Header;
