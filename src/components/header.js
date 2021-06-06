import { Component } from "react";
// import { Link, Router, Route } from "react-router-dom";
// import AddStudent from './AddStudent';

class Header extends Component {

    constructor(props) {
        super();
        this.title = '';
        this.buttonTitle = '';
        this.buttonLink = '';
    }

    render() {
        return (
            <div className="row mt-5 mb-2 ml-1">
                <h1>{this.props.buttonTitle}</h1>
                <div className="col">
                <div className="float-right">
                    {/* <Router>
                        <Route path='/add-student' component={AddStudent}></Route>
                        <Link to={'/AddStudent'}>
                        </Link>   
                    </Router>     */}
                    <button type="button" className="btn btn-success my-2 my-sm-0">
                        {this.props.buttonTitle}
                    </button> 
                </div>
                </div>
            </div>
        )
    }
}

export default Header;