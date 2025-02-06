import { Row, Container, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    search: "",
  };

  updateSearch = (key, value) => {
    this.setState({
      ...this.state,
      [key]: value,
    });
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.buttonSearch}>
          <Form.Group className="mb-3">
            <Form.Control
              className="d-inline-block w-25"
              type="text"
              placeholder="Search"
              name="search"
              id="search"
              value={this.state.search}
              onChange={(e) => this.updateSearch("search", e.target.value)}
            />
          </Form.Group>
        </Form>
        <Row>
          {this.props.category.fantasy
            .filter((book) => book.title.toLowerCase().includes(this.state.search.toLowerCase()))
            .map((book) => {
              return <SingleBook key={`book-${book.asin}`} img={book.img} title={book.title} price={book.price} />;
            })}
        </Row>
      </Container>
    );
  }
}
export default BookList;
