import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Sainspedia
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="sainspedia-navbar" />
        <Navbar.Collapse id="sainspedia-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Beranda
            </Nav.Link>
            <Nav.Link as={Link} to="/materi">
              Materi
            </Nav.Link>
            <Nav.Link as={Link} to="/kuis">
              Kuis
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;