"use client";
import React, { useState } from "react";
import { TextInput, HelperText } from "flowbite-react";
import NavigationButtons from "../components/NavigationButtons";
import { useProduct } from "../context/ProductContext";

const ProductEntry = () => {
  const { productData, setProductData } = useProduct();

  const handleChange = (field, value) => {
    setProductData({ ...productData, [field]: value });
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
          <h5 className="body-text font-light px-10 pb-4 mb-8 text-xl purple-text-dark">
            <span className="font-bold">Give a short title or description for your product.</span>
            <br />
            Then input the amount of time you spend creating one instance of this product,
            including a fair hourly wage based on your level of expertise with the medium of this.
          </h5>

          <div className="max-w-6xl flex-grow flex flex-col body-text pb-20">
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 ml-9">
                  <TextInput
                    id="product-name"
                    type="text"
                    placeholder="Product Name..."
                    value={productData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                  />
                </div>
                <div className="col-span-1">
                  <TextInput
                    id="product-desc"
                    type="text"
                    placeholder="Short description of product..."
                    value={productData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 ml-9">
                  <TextInput
                    id="creative-hours"
                    type="number"
                    placeholder="Creative hours..."
                    value={productData.creativeHours}
                    onChange={(e) => handleChange("creativeHours", e.target.value)}
                  />
                  <HelperText className="purple-text-dark pt-2.5 text-xs">
                    Creative hours for one instance of product
                  </HelperText>
                </div>

                <div className="col-span-1">
                  <TextInput
                    id="admin-hours"
                    type="number"
                    placeholder="Admin hours per week..."
                    value={productData.adminHours}
                    onChange={(e) => handleChange("adminHours", e.target.value)}
                  />
                  <HelperText className="purple-text-dark pt-2.5 text-xs">
                    Admin, research, distribution time
                  </HelperText>
                </div>

                <div className="col-span-1">
                  <TextInput
                    id="hourly-wage"
                    type="number"
                    placeholder="Fair hourly wage..."
                    value={productData.hourlyRate}
                    onChange={(e) => handleChange("hourlyRate", e.target.value)}
                  />
                  <HelperText className="purple-text-dark pt-2.5 text-xs">
                    How much should you earn per hour?
                  </HelperText>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div>
        <NavigationButtons nextRoute="/pricing/material_input" />
      </div>
    </section>
  );
};

export default ProductEntry;
