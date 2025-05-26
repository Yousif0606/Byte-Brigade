import React, { createContext, useState } from "react";

export const ProductContext = createContext();

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
