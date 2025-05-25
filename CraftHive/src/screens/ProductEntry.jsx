"use client";
import React, { useState, useContext } from "react";
import { HelperText, TextInput } from "flowbite-react";
import NavigationButtons from "../components/NavigationButtons";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const ProductEntry = () => {
  const navigate = useNavigate();
  const { setProduct } = useContext(ProductContext);

  const [data, setData] = useState({
    name: "",
    description: "",
    creativeHours: "",
    adminHours: "",
    hourlyRate: "",
    materials: []
  });

  const handleChange = (field, value) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    setProduct(data);
    navigate("/pricing/suggested_price");
  };

  return (
    <section className="flex flex-col w-full">
      <div className="ml-8 md:ml-32">
        <h1 className="header-text py-14 text-5xl font-semibold purple-text-main">
          Suggest product pricing
        </h1>
      </div>

      <div className="w-full px-4 md:px-20">
        <div className="p-6 md:p-10 mx-auto w-full rounded-2xl purple-bg-textbox">
          <h4 className="body-text font-bold px-10 pb-2 mb-8 text-3xl text-black">
            What new product are you creating?
          </h4>

          <div className="max-w-6xl flex-grow flex flex-col body-text pb-20">
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-3 gap-4">
                <TextInput placeholder="Product Name..." onChange={e => handleChange("name", e.target.value)} />
                <TextInput placeholder="Short description..." onChange={e => handleChange("description", e.target.value)} />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <TextInput placeholder="Creative hours..." type="number" onChange={e => handleChange("creativeHours", e.target.value)} />
                <TextInput placeholder="Admin hours..." type="number" onChange={e => handleChange("adminHours", e.target.value)} />
                <TextInput placeholder="Hourly wage..." type="number" onChange={e => handleChange("hourlyRate", e.target.value)} />
              </div>
            </form>
            <button onClick={handleSubmit} className="mt-6 btn-primary">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProductEntry };
