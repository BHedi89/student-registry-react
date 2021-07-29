import { Button } from "react-bootstrap";
import { Component } from "react";
import classes from "./ButtonComponent.module.css";

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.buttonText = "";
  }

  render() {
    return (
      <Button
        variant="none"
        className={`${classes.button} mb-3`}
        onClick={this.props.onClick}
        disabled={this.props.disabled}
      >
        {this.props.buttonText}
      </Button>
    );
  }
}

export default ButtonComponent;
