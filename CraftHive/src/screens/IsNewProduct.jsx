"use client";
import React from "react";
import YesButton from "../components/YesButton";
import NoButton from "../components/NoButton";

const IsNewProduct = () => {
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
            Before we begin...
          </h4>
          <h5 className="body-text font-light px-10 pb-4 mb-8 text-xl purple-text-dark">
            <span className="font-bold">
              Is this a new product you would like a price suggestion for?
            </span>
          </h5>
          <div className="flex flex-row">
            <YesButton nextRoute="/pricing/product_entry" />
            <NoButton nextRoute="/pricing/existing_product" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsNewProduct;
