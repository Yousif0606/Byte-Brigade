"use client";
import React, { useState, useContext } from "react";
import { HelperText, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const ProductEntry = () => {
  const navigate = useNavigate();
  const { setProductData } = useContext(ProductContext);

  const [form, setForm] = useState({
    name: "",
    description: "",
    creativeHours: "",
    adminHours: "",
    hourlyRate: "",
    materials: [], // This gets updated on next screen
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleNext = () => {
    setProductData(form);
    navigate("/pricing/material_input");
  };

  return (
    <section className="flex flex-col w-full">
      <div className="ml-8 md:ml-32">
        <h1 className="header-text py-14 text-5xl font-semibold purple-text-main">
          Suggest product pricing
        </h1>
      </div>

      <div className="w-full px-4 md:px-20">
        <div className="p-6 md:p-10 mx-auto w-full rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] purple-bg-textbox">
          <h4 className="body-text font-bold px-10 pb-2 mb-8 text-3xl text-black">
            What new product are you creating?
          </h4>
          <h5 className="body-text font-light px-10 pb-4 mb-8 text-xl purple-text-dark">
            <span className="font-bold">Give a short title or description.</span><br />
            Then input the amount of time you spend creating one instance of this product, including a fair hourly wage based on your level of expertise with the medium of this in the appropriate fields below.
          </h5>

          <div className="max-w-6xl flex-grow flex flex-col body-text pb-20 px-10">
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-3 gap-4">
                <TextInput
                  id="product-name-1"
                  type="text"
                  placeholder="Product Name..."
                  className="rounded-lg offwhite-bg border-none focus:ring-purple-400 px-3 py-4"
                  onChange={e => handleChange("name", e.target.value)}
                />

                <TextInput
                  id="product-desc-1"
                  type="text"
                  placeholder="Short description..."
                  className="rounded-lg offwhite-bg border-none focus:ring-purple-400 px-3 py-4"
                  onChange={e => handleChange("description", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <TextInput
                    id="creative-hours-1"
                    type="number"
                    placeholder="Creative hours..."
                    className="rounded-lg offwhite-bg border-none focus:ring-purple-400 px-3 py-4"
                    onChange={e => handleChange("creativeHours", e.target.value)}
                  />
                  <HelperText className="purple-text-dark pt-2 opacity-70 leading-none">
                    <small>Creative hours that go into making one instance of the product.</small>
                  </HelperText>
                </div>

                <div>
                  <TextInput
                    id="admin-hours-1"
                    type="number"
                    placeholder="Admin hours..."
                    className="rounded-lg offwhite-bg border-none focus:ring-purple-400 px-3 py-4"
                    onChange={e => handleChange("adminHours", e.target.value)}
                  />
                  <HelperText className="purple-text-dark pt-2 opacity-70 leading-none">
                    <small>Weekly admin hours that go into research, distribution, and material gathering of one instance of the product.</small>
                  </HelperText>
                </div>

                <div>
                  <TextInput
                    id="hourly-wage-1"
                    type="number"
                    placeholder="Hourly wage..."
                    className="rounded-lg offwhite-bg border-none focus:ring-purple-400 px-3 py-4"
                    onChange={e => handleChange("hourlyRate", e.target.value)}
                  />
                  <HelperText className="purple-text-dark pt-2 opacity-70 leading-none">
                    <small>A fair hourly wage to give yourself based on your skill level creating this product.</small>
                  </HelperText>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="flex justify-end pr-20 pt-10 pb-15">
        <button
          onClick={handleNext}
          className="body-text text-4xl font-semibold button-colour rounded-3xl cursor-pointer h-[79px] text-white w-[185px]"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export { ProductEntry };
