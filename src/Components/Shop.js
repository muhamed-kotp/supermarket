import React from "react";
import shop1 from "../Photos/Shop1.jpg";
import Card from "react-bootstrap/Card";
import "../Style/shop.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";

import { Badge } from "react-bootstrap";
const Shop = (props) => {
  const myProducts = props.myProducts;

  return (
    <div className="fullBage">
      <Card.Img className="shop-img1" src={shop1} />

      <div className="card-barent container ">
        {myProducts.map((e) => (
          <div key={e.id}>
            <Card className="card-contaner">
              <Card.Img className="shop-card-img" variant="top" src={e.img} />
              <Card.Body className="shop-card-Body">
                <div className="shop-card-text-Container">
                  <Card.Text className="SC-dollar">
                    <Badge bg="danger" className="SC-dollar">
                      ${e.price}
                    </Badge>
                  </Card.Text>
                  <Card.Text className="SC-Name">{e.name}</Card.Text>
                  <Card.Text className="SC-count">
                    Available : {e.count}
                  </Card.Text>
                  <Card.Text className="ds-none">
                    count : {e.pusrches}
                  </Card.Text>
                </div>

                <div className="btns-container">
                  <div className="shop-card-text-Container2">
                    <button
                      onClick={() => props.buy(e)}
                      className="shop-shopCart-link"
                    >
                      <HiOutlineShoppingCart className="shop-shopCart-logo" />
                    </button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div className=" goto-home-body container">
        <Button variant="outline-success" className="goto-home">
          <Link className="goto-home-link1 " to="/">
            Go to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Shop;
