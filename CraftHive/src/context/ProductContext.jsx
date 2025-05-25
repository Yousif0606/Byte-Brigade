import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    creativeHours: 0,
    adminHours: 0,
    hourlyRate: 0,
    materials: []
  });

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
