import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../Style/Navs.css";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Button } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";

const Navs = (props) => {
  const Products = props.data;
  return (
    <div>
      <Navbar className="Nav-fother">
        <Container className="first-container">
          <div>
            <h1 className="Lusion">Lusion</h1>
          </div>
        </Container>

        <Container className="sec-container">
          <Link to={"/"}>
            <Navbar.Brand>Home</Navbar.Brand>
          </Link>
          <Link to={"/Shop"}>
            <Navbar.Brand>Shop</Navbar.Brand>
          </Link>

          <Link to={"/ShoppingCarD"}>
            <Button className="ShoppingCarD-Btn">
              <HiOutlineShoppingCart className="shopCart-logo" />
              <Badge
                bg={Products.length === 0 ? "success" : "danger"}
              >{`${Products.length}`}</Badge>
            </Button>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navs;
