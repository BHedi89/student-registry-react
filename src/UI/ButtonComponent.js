import { Button } from "react-bootstrap";
import classes from "./ButtonComponent.module.css";

const ButtonComponent = props => {
  return (
    <Button
      variant="none"
      className={`${classes.button} mb-3`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.buttonText}
    </Button>
  );
}

export default ButtonComponent;
