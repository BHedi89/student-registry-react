import { Component } from "react";
import { Form, Col } from "react-bootstrap";

class NewBookForm extends Component {
  render() {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Isbn szám</Form.Label>
            <Form.Control type="text" placeholder="Isbn szám" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Szerző</Form.Label>
            <Form.Control type="text" placeholder="Szerző" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Cím</Form.Label>
            <Form.Control type="text" placeholder="Cím" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Alcím</Form.Label>
            <Form.Control type="text" placeholder="Alcím" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Kiadás dátuma</Form.Label>
            <Form.Control type="text" placeholder="Kiadás dátuma" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Kiadó</Form.Label>
            <Form.Control type="text" placeholder="Kiadó" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Oldalak száma</Form.Label>
            <Form.Control type="number" placeholder="Oldalak száma" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Leírás</Form.Label>
            <Form.Control type="text" placeholder="Leírás" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Weboldal</Form.Label>
            <Form.Control type="text" placeholder="Weboldal" />
          </Form.Group>
        </Form.Row>
        <button className="btn btn-primary">Mentés</button>
      </Form>
    );
  }
}

export default NewBookForm;
