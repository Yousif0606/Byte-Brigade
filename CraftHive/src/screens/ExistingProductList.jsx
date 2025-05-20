"use client";
import React from "react";
import UseProductButton from "../components/UseProductButton";

const ExistingProductList = () => {
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
            Select an existing product.
          </h4>
          <h5 className="body-text font-light px-10 pb-4 mb-8 text-xl purple-text-dark">
            (This can be connected to saved product list later)
          </h5>

          <div className="flex flex-row">
            <UseProductButton nextRoute="/pricing/suggested_price" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExistingProductList;
