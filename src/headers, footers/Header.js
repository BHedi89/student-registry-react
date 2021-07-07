import { Component } from "react";
// import AddStudent from './AddStudent';
import { Link } from "react-router-dom";


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
                    <button type="button" className="btn btn-success my-2 my-sm-0">
                        {this.props.buttonTitle}
                    </button>
                </Link>
                </div>
                </div>
            </div>
        )
    }
}

export default Header;
