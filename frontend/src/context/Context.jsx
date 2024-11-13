/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const appContext = createContext();
const getAllProductsURL = "http://localhost:4001/api/get-all-products";
const getAllSuppliersURL = "http://localhost:4001/api/get-all-suppliers";

const getProducts = async (setProducts) => {
  try {
    const response = await axios.get(getAllProductsURL);
    setProducts(response.data.data);
  } catch (error) {
    console.log("Error in fetching Data", error);
  }
};

const getSuppliers = async (setSuppliers) => {
  try {
    const response = await axios.get(getAllSuppliersURL);
    setSuppliers(response.data.data);
  } catch (error) {
    console.log("Error in fetching Data", error);
  }
};

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
    getSuppliers(setSuppliers);
  }, []);

  return (
    <appContext.Provider
      value={{ products, setProducts, suppliers, setSuppliers }}
    >
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(appContext);
};
