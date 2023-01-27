import { createContext } from "react";

const Store = createContext({
  storeProducts: [],

  storeMaxprice: 0,
  storeMinprice: 0,
  storefewestItem: 0,
  storefewestID: 0,

  
  StoreAddnew: () => {},
  StoreEdit: () => {},
  StoreAdd: () => {},
  StoreDec: () => {},
  StoreRemove: () => {},
  storePutMyProduct: () => {},
  StoreHandelForm: () => {},
});

export default Store;
