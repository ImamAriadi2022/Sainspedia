import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Sainspedia
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;