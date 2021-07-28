import { Component } from "react";
import classes from "./Button.module.css";

class ButtonStyle extends Component {
  constructor(props) {
    super(props);
    this.buttonText = "";
    this.disabled = ""
  }

  render() {
    return (
      <button
        className={`${classes.button} mb-3 btn`}
        onClick={this.props.onClick}
        disabled={this.props.disabled}
      >
        {this.props.buttonText}
      </button>
    );
  }
}

export default ButtonStyle;
