import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Store from "../Context/Store";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Edit = () => {
  const navigate = useNavigate();
  const Context = useContext(Store);
  const [data, setdata] = useState({});
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [count, setcount] = useState("");
  const [img, setimg] = useState("");

  const { ID } = useParams();
  // console.log(ID);
  // console.log(Context.storeProducts[ID-1]);

  const putdata = () => {
    setdata(Context.storeProducts[ID - 1]);
  };
  useEffect(() => {
    putdata();
  }, []);

  // console.log(Context.storeProducts[ID-1].price);
  const formhandle = (e) => {
    e.preventDefault();
    navigate("/ProductsEdit", { state: { name, price, count, id: ID } });
  };
  return (
    <Form className="form-container" onSubmit={formhandle}>
      <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>Product name</Form.Label>
        <Form.Control
          type="search"
          placeholder={Context.storeProducts[ID - 1].name}
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail2">
        <Form.Label>Product Price</Form.Label>
        <Form.Control
          type="number"
          placeholder={Context.storeProducts[ID - 1].price}
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail3">
        <Form.Label>Product items</Form.Label>
        <Form.Control
          type="number"
          placeholder={Context.storeProducts[ID - 1].count}
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

export default Edit;
