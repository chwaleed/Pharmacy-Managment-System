/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const appContext = createContext();
const getAllProductsURL = "http://localhost:4001/api/get-all-products";
const getAllSuppliersURL = "http://localhost:4001/api/get-all-suppliers";
const getAllCustomersURL = "http://localhost:4001/api/get-all-customers";
const stockReport = "http://localhost:4001/api/stock-report";

const getProducts = async (setProducts) => {
  try {
    await axios
      .get(getAllProductsURL)
      .then((res) => setProducts(res.data.data));
  } catch (error) {
    console.log("Error in fetching Data", error);
  }
};

const getSuppliers = async (setSuppliers) => {
  try {
    await axios
      .get(getAllSuppliersURL)
      .then((response) => setSuppliers(response.data.data));
  } catch (error) {
    console.log("Error in fetching Data", error);
  }
};

const getCustomers = async (setCustomers) => {
  try {
    await axios
      .get(getAllCustomersURL)
      .then((response) => setCustomers(response.data.data));
  } catch (error) {
    console.log("Error in fetching Data", error);
  }
};

const serach = (text, data) => {
  return data.filter((item) =>
    item.name.toLowerCase().includes(text.toLowerCase())
  );
};

const getStockReport = async (setShortStock) => {
  try {
    await axios.get(stockReport).then((res) => setShortStock(res.data.data));
  } catch (error) {
    console.log("Error in fetching Data", error);
  }
};

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [shortStock, setShortStock] = useState(0);

  // console.log(`product are `, products);

  useEffect(() => {
    Promise.resolve([
      getProducts(setProducts),
      getSuppliers(setSuppliers),
      getCustomers(setCustomers),
    ]);
  }, []);

  useEffect(() => {
    console.log("here are the products: ", products.length);
    if (products.length > 0) {
      setTotalProducts(products?.length);
      getStockReport(setShortStock);
    }
  }, [products]);

  return (
    <appContext.Provider
      value={{
        products,
        setProducts,
        suppliers,
        setSuppliers,
        customers,
        setCustomers,
        serach,
        totalProducts,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(appContext);
};
