import { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";

class Filter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form.Group as={Row}>
        <Form.Label column sm={1}>
          Keresés:
        </Form.Label>
        <Col sm={4}>
          <Form.Control
            type="text"
            id="filter"
            placeholder="Keresés"
            onChange={this.props.handleChange}
          />
        </Col>
      </Form.Group>
    );
  }
}

export default Filter;
