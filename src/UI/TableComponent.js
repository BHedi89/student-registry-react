import { Table } from "react-bootstrap";
import classes from "./TableComponent.module.css";

const TableComponent = props => {
    return (
        <Table className={`${classes.table}`} striped bordered hover>
            {props.children}
        </Table>
    )
}

export default TableComponent;