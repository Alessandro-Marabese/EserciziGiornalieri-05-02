import { Col, Card, Badge } from "react-bootstrap";

import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    let cardStyle = {
      border: "1px solid grey",
    };
    if (this.state.selected === true) {
      cardStyle.border = "3px solid red";
    }
    return (
      <Col md={3}>
        <Card className="mb-3" style={cardStyle}>
          <Card.Img
            className="img-fluid"
            src={this.props.img}
            onClick={() => {
              this.setState({ selected: true });
            }}
          />
          <Card.Body>
            <Card.Title className="fs-6">{this.props.title}</Card.Title>
            <Card.Text>
              <Badge bg="dark">{this.props.price}€</Badge>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default SingleBook;
