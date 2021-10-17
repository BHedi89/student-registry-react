import { Link } from "react-router-dom";
import classes from "./LinkComponent.module.css";

const LinkComponent = props => {
  return (
    <Link
      className={classes.link}
      to={props.to}
      target={props.target}
    >
      {props.linkText}  
    </Link>
  );
}

export default LinkComponent;
