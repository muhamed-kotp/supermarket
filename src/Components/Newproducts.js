import React, { useEffect, useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Store from "../Context/Store";
import "../Style/Newproduct.css";

const Newproducts = () => {
  const navigate = useNavigate();
  const Context = useContext(Store);
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [count, setcount] = useState("");
  const [id, setid] = useState(0);
  const [newobj, setnewobj] = useState({});

  const getID = () => {
    let Length = Context.storeProducts.length - 1;
    let ID = Context.storeProducts[Length].id + 1;
    setid(ID);

    return id;
  };

  // const addobj = () => {
  //   let obbj = {}
  //   obbj.name = name;
  //   obbj.price = price;
  //   obbj.count = count;
  //   obbj.id = id;
  //   setnewobj (obbj)
  //   console.log(newobj);
  // }
  // useEffect(() => {
  //   addobj();

  // }, []);

  useEffect(() => {
    getID();
  }, []);
  const formhandle = (e) => {
    e.preventDefault();
    navigate("/NewProducts", { state: { name, price, count, id } });
  };
  return (
    <Form className="form-container" onSubmit={formhandle}>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>Product name</Form.Label>
        <Form.Control
          type="search"
          placeholder="Product name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail2">
        <Form.Label>Product Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail3">
        <Form.Label>Product items</Form.Label>
        <Form.Control
          type="number"
          placeholder="Product items"
          value={count}
          onChange={(e) => setcount(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Newproducts;
