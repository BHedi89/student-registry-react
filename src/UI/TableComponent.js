import { Component } from "react";
import { Table } from "react-bootstrap";
import classes from "./TableComponent.module.css";

class TableComponent extends Component {
    render() {
        return (
            <Table className={`${classes.table}`} striped bordered hover>
                {this.props.children}
            </Table>
        )
    }
}

export default TableComponent;