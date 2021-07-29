import { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./LinkComponent.module.css";

class LinkComponent extends Component {
  render() {
    return (
      <Link
        className={classes.link}
        to={this.props.to}
        target={this.props.target}
      >
        {this.props.linkText}  
      </Link>
    );
  }
}

export default LinkComponent;
