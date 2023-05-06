import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../Style/Navs.css";

const Navs = () => {
  return (
    <div>
      <Navbar className="nav-cont" variant="dark" expand="lg">
        <Container>
          {/* <Navbar.Brand>SuperMarket</Navbar.Brand> */}
          <Nav.Link className="nav-home" as={NavLink} to="/">
            SuperMarket
          </Nav.Link>
          {/* <Navbar.Brand>Admin</Navbar.Brand> */}
          <Nav.Link className="side-nav-link" as={NavLink} to="/Products">
            Control Products
          </Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navs;
