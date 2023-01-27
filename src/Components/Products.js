import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "../Style/Prosucts.css";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Store from "../Context/Store";
const Products = () => {
  const Context = useContext(Store);

  const [Products, setProducts] = useState([]);

  const putdata = () => setProducts(Context.storeProducts);

  useEffect(() => {
    putdata();
  }, []);
  // const del = () => {};

  return (
    <div className="products-cont">
      <Nav.Link variant="dark" as={NavLink} to="/Newproducs">
        <Button className="add" variant="success">
          Add New Product
        </Button>
      </Nav.Link>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th className="head-id">id</th>
            <th className="head-title"> Product Name</th>
          </tr>
        </thead>
        <tbody>
          {Context.storeProducts.map((e) => (
            <tr key={e.id}>
              <td className="id-col">{e.id}</td>
              <td className=" items-table">
                <h3>{e.name}</h3>

                <div className="products-btn-cont">
                  <Button
                    variant="success"
                    onClick={() => Context.StoreRemove(e)}
                    className="Delete"
                  >
                    DeleTe
                  </Button>

                  <Nav.Link
                    variant="dark"
                    as={NavLink}
                    to={`/Products/${e.id}`}
                  >
                    <Button variant="success">View</Button>
                  </Nav.Link>
                  <Nav.Link variant="dark" as={NavLink} to={`/Edit/${e.id}`}>
                    <Button variant="success">Edit</Button>
                  </Nav.Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Products;
