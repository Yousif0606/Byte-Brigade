import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    creativeHours: "",
    adminHours: "",
    hourlyRate: "",
    materials: [],
  });

  return (
    <ProductContext.Provider value={{ productData, setProductData }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
