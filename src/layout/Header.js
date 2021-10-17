import { Link } from "react-router-dom";
import ButtonComponent from "../UI/ButtonComponent";

const Header = props => {
    return (
        <div className="row mt-5 mb-2 ml-1">
            <h1>{props.title}</h1>
            <div className="col">
            <div className="float-right">
            <Link to={props.buttonLink}>
                <ButtonComponent buttonText={props.buttonTitle} />
            </Link>
            </div>
            </div>
        </div>
    )
    
}

export default Header;
