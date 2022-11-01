import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import "../Style/ShoppingCarD.css";
import { AiFillWarning } from "react-icons/ai";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
import { ImBoxRemove } from "react-icons/im";

const ShoppingCarD = (props) => {
  const sale = props.data;

  const [total, settotal] = useState([]);

  const totalFunc = () => {
    const sum = sale.reduce((accumulator, sale) => {
      return accumulator + sale.price * sale.pusrches;
    }, 0);

    settotal(sum);
  };

  if (sale.length === 0) {
    return (
      <div className="full-empty-bage">
        <Container className="w-100 first-container">
          <div className="empty">
            <AiFillWarning className="warning" />
            Your CarD iS Empty .. !
          </div>
        </Container>

        {/* <Container className="w-100 first-container">
          <Badge bg='light' className="total-price-badge">
            <Button className="total-price-btn"> Get Total Price </Button>
            <h1>Total Price : 0</h1>
          </Badge>
        </Container> */}

        <div className=" Continuo-container container">
          <Button variant="outline-success" className="Continuo">
            <Link className="Continuo-link " to="/Shop">
              Continuo Shopping
            </Link>
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="full-bage">
        <Container className="w-100 total-container">
          <Button onClick={totalFunc} className="total-price-btn">
            Get Total Price
          </Button>
          <div className="total-div">
            Total Price :{" "}
            <Badge
              className="total-price-badge"
              bg="danger"
            >{`${total} $`}</Badge>
          </div>
        </Container>
        <div className="card-barent container ">
          {sale.map((e) => (
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
                    <Card.Text className="SC-pusrches">
                      No. of Items : {e.pusrches}
                    </Card.Text>
                    <Card.Text className="SC-count">
                      Available : {e.count}
                    </Card.Text>
                  </div>

                  <div className="btns-container">
                    <button
                      onClick={() => props.add(e)}
                      className="plus-logo-container"
                    >
                      <BiPlusMedical className="plus-logo" />
                    </button>
                    <button
                      onClick={() => props.dec(e)}
                      className="plus-logo-container"
                    >
                      <FaMinus className="plus-logo" />
                    </button>
                    <button
                      onClick={() => props.remove(e)}
                      className="plus-logo-container"
                    >
                      <ImBoxRemove className="plus-logo" />
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <div>
          <div className=" Continuo-container container">
            <Button variant="outline-success" className="Continuo">
              <Link className="Continuo-link " to="/Shop">
                Continuo Shopping
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
};

export default ShoppingCarD;
