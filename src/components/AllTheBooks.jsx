import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";

import fantasy from "../data/fantasy.json";
import { Component } from "react";

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <Row>
          {fantasy.map((book) => {
            return (
              <Col md={3} key={`book-${book.asin}`}>
                <Card className="mb-3">
                  <Card.Img className="img-fluid" src={book.img} />
                  <Card.Body>
                    <Card.Title className="fs-6">{book.title}</Card.Title>
                    <Card.Text>
                      <p className="fs-6">{book.category}</p>
                      <Badge bg="dark">{book.price}€</Badge>
                    </Card.Text>
                    <Button variant="success">Buy Now!</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default AllTheBooks;
