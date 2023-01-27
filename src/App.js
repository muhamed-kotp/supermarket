import React, { useState, useEffect } from "react";
import SideBar from "./Components/SideBar";
import Home from "./Components/Home";
import Navs from "./Components/Navs";
import { Routes, Route } from "react-router-dom";
import "./Style/App.css";
import Products from "./Components/Products";
import Details from "./Components/Details";
import Newproducts from "./Components/Newproducts";
import Edit from "./Components/Edit";
import Store from "./Context/Store";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const App = () => {
  const [products, setProducts] = useState([]);
  const [maxprice, setmaxprice] = useState(0);
  const [minprice, setminprice] = useState(0);
  const [fewestItem, setfewestItem] = useState(0);
  const [fewestID, setfewestID] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // console.log(products[0].id);
  useEffect(() => {
    PutMyProduct();
  }, []);

  const PutMyProduct = () => {
    setProducts([
      {
        name: "Chepsy",
        price: 1000,
        count: 400,
        id: 1,
      },
      {
        name: "Pepsi",
        price: 50,
        count: 500,
        id: 2,
      },
      {
        name: "Cake",
        price: 800,
        count: 50,
        id: 3,
      },
      {
        name: "Juise",
        price: 200,
        count: 80,
        id: 4,
      },
    ]);
    // let max = products[0].price;
    // let min = products[0].price;
    // let minItem = products[0].count;
    // let minId = products[0].id;

    // products.map((obj) => {
    //   if (obj.price >= max) {
    //     max = obj.price;
    //     setmaxprice(max);
    //   }
    //   if (obj.price <= min) {
    //     min = obj.price;
    //     setminprice(min);
    //   }
    //   if (obj.count <= minItem) {
    //     minItem = obj.count;
    //     minId = obj.id;
    //     setfewestItem(minItem);
    //     setfewestID(minId);
    //   }
    //   return products;
    // });
  };

  const addnew = () => {
    if (location.pathname === "/NewProducts") {
      let newObj = location.state;
      let allProducts = products;
      allProducts.push(newObj);
      setProducts(allProducts);
      return products;
    }
  };

  useEffect(() => {
    addnew();
  }, [location]);

  const edit = () => {
    if (location.pathname === "/ProductsEdit") {
      let choosenObj = location.state;
      let allProducts = [...products];
      console.log(choosenObj.id);

      allProducts = allProducts.map((obj) => {
        if (obj.id == choosenObj.id) {
          obj.name = choosenObj.name;
          obj.price = choosenObj.price;
          obj.count = choosenObj.count;
          setProducts(allProducts);
        }

        console.log(allProducts);
        return allProducts;
      });
    }
  };

  useEffect(() => {
    edit();
  }, [location]);

  const dec = (obj) => {
    let hanledata = [...products];
    hanledata = hanledata.map((e) => {
      if (e.id === obj.id) {
        if (e.pusrches >= 2) {
          e.pusrches = e.pusrches - 1;
          e.count = e.count + 1;
        }
      }
      return e;
    });
    setProducts(hanledata);
  };

  const add = (obj) => {
    let hanledata = [...products];
    hanledata = hanledata.map((e) => {
      if (e.id === obj.id) {
        if (e.count >= 1) {
          e.pusrches = e.pusrches + 1;
          e.count = e.count - 1;
        }
      }
      return e;
    });
    setProducts(hanledata);
  };

  const remove = (obj) => {
    setProducts((e) => e.filter((products) => products.name !== obj.name));
    // sorting();
  };
  const sorting = () => {
    let ID = 1;
    let myData = [...products];

    myData[0].id = ID;

    myData = myData.map((e) => {
      if (e.id !== ID) {
        ID++;
        e.id = ID;
      }
      return myData;
    });

    console.log(myData[0].id);

    // myData.sort((a, b) => a.id - b.id);
    // setProducts(myData);
    // console.log(products[1].id);
  };
  // useEffect(() => {
  //   sorting();
  // }, []);

  return (
    <Store.Provider
      value={{
        storeProducts: products,
        storeMaxprice: maxprice,
        storeMinprice: minprice,
        storefewestItem: fewestItem,
        storefewestID: fewestID,

        StoreAddnew: addnew,
        StoreEdit: edit,
        StoreAdd: add,
        StoreDec: dec,
        StoreRemove: remove,
        storePutMyProduct: PutMyProduct,
      }}
    >
      <div>
        <Navs />

        <SideBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/ProductsEdit" element={<Products />} />
          <Route path="/NewProducts" element={<Products />} />
          <Route path="/Newproducs" element={<Newproducts />} />
          <Route path="/Edit/:ID" element={<Edit />} />
          <Route path="/Products/:ID" element={<Details />} />
        </Routes>
      </div>
    </Store.Provider>
  );
};
export default App;
