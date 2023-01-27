import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../Style/SideBar.css";

const SideBar = () => {
  return (
    <div>
      <Navbar className="side-nav-cont" variant="dark" expand="lg">
        <Container className="side-cont">
          <Navbar.Brand>Admin</Navbar.Brand>
          <Nav.Link className="side-nav-link" as={NavLink} to="/Products">
            Products
          </Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default SideBar;
