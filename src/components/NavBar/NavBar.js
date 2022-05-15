import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      bg="dark"
      id="navbar"
      className="header"
      variant="dark"
    >
      <Container className="mobile-header">
        <Navbar.Brand className="header-item" as={Link} to={"/"}>
          USER MANAGEMENT SYSTEM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Button as={Link} to={"/AddNewUser"} variant="success">
              {" "}
              Add new user
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
