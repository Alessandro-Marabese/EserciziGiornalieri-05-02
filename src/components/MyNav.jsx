import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = () => {
  return (
    <Navbar expand="lg" className="bg-black">
      <Container>
        <Navbar.Brand href="#" className="text-white">
          EPIBOOKS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              About
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              Browse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNav;
