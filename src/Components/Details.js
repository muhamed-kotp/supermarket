import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Store from "../Context/Store";
import "../Style/Details.css";

const Details = () => {
  const { ID } = useParams();
  const Context = useContext(Store);
  const [data, setdata] = useState({});

  // console.log(ID);

  const putdata = () => {
    let myData = [...Context.storeProducts];
    // console.log(myData);
    myData.map((e) => {
      if (e.id == ID) setdata(e);
    });

    // console.log(data);
    // setdata((e) => e.filter((myData) => myData.id === ID));

    // setdata(Context.storeProducts[ID - 1]);
  };
  useEffect(() => {
    putdata();
  }, []);

  return (
    <div className="edit-page-cont">
      <div className="detail-container">
        <h1> Id = {data.id}</h1>
        <h1> Name = {data.name}</h1>
        <h1> Price = {data.price}</h1>
        <h1> Items = {data.count}</h1>
      </div>
    </div>
  );
};

export default Details;
