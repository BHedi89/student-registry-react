import { Form, Row, Col } from "react-bootstrap";

const Filter = props => {
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
          onChange={props.handleChange}
        />
      </Col>
    </Form.Group>
  );
}

export default Filter;
