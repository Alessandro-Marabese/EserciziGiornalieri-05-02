import { Row, Container, Form, Button } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    selected: false,
    search: "",
  };

  updateSearch = (key, value) => {
    this.setState({
      ...this.state,
      [key]: value,
    });
  };

  buttonSearch = (event) => {
    event.preventDefault();
    //let searchResult = this.state.search;
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
              onChange={(e) => this.updateSearch("search", e.target.value)}
            />
            <Button type="submit" variant="outline-success">
              Search
            </Button>
          </Form.Group>
        </Form>
        <Row>
          {this.props.category.fantasy.map((book) => {
            return <SingleBook key={`book-${book.asin}`} img={book.img} title={book.title} price={book.price} />;
          })}
        </Row>
      </Container>
    );
  }
}
export default BookList;
