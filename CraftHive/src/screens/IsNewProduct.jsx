"use client";
import React, { useState } from "react";
import YesButton from "../components/YesButton";
import NoButton from "../components/NoButton";

const IsNewProduct = () => {
  return (
    
    <section className="flex flex-col  w-full">
    {/*<Logo className="background-icon" />*/}
    <div className="ml-8 md:ml-32">
      <h1 className="header-text py-14 text-5xl font-semibold purple-text-main max-md:text-5xl max-sm:text-4xl">
        Suggest product pricing
      </h1>
    </div>

    <div className="w-full px-4 md:px-20">
          <div className="p-6 md:p-10 mx-auto w-full rounded-2xl  shadow-[0_4px_6px_rgba(0,0,0,0.1)] purple-bg-textbox">
            <h4 className="body-text font-bold px-10 pb-2 mb-8 text-3xl text-black max-md:text-lg max-sm:text-base">
            Before we begin...
            </h4>

            <h5 className="body-text font-light px-10 pb-4 mb-8 text-xl purple-text-dark max-md:text-lg max-sm:text-base ">
              <span className="font-bold">Is this a new product you would like a price suggestion for?</span>
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

export {IsNewProduct};