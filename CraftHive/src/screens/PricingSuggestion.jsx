"use client";
import React from "react";
import NavigationButtons from "../components/NavigationButtons";
import PriceBreakdownButton from "../components/PriceBreakdownButton";
import { useProduct } from "../context/ProductContext";

const PricingSuggestion = () => {
  const { productData } = useProduct();

  const matCost = productData.materials.reduce(
    (acc, m) => acc + parseFloat(m.cost || 0),
    0
  );
  const labor =
    (parseFloat(productData.creativeHours || 0) +
      parseFloat(productData.adminHours || 0)) *
    parseFloat(productData.hourlyRate || 0);

  const total = (matCost + labor).toFixed(2);

  return (
    <section className="flex flex-col w-full">
      <div className="ml-8 md:ml-32">
        <h1 className="header-text pt-8 mt-12 text-5xl font-semibold purple-text-main">
          Suggest product pricing
        </h1>
      </div>

      <div className="flex-grow flex flex-col">
        <div className="w-full px-20">
          <section className="p-10 mx-auto w-full rounded-xl purple-bg-textbox shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <h4 className="body-text font-bold px-10 pb-2 mb-8 text-2xl text-black">
              Based on the information you’ve given me, I recommend you sell
              your product at...
            </h4>

            <h1 className="body-text font-bold px-10 text-9xl purple-text-main">
              ${total}
            </h1>

            <h4 className="body-text purple-text-main pt-20 pb-8 px-10 text-md">
              This number is based on your given materials, total cost per
              materials used and quantity of how much was used, total production
              and administration time, along with your theoretical hourly wage.
            </h4>

            <h4 className="body-text font-bold px-10 py-3-2 mb-8 text-2xl purple-text-main">
              If you would like to see a full breakdown of the numbers, click
              “View full breakdown” below.
            </h4>
          </section>
        </div>

        <div className="pt-8 ml-10 mr-5 w-full">
          <PriceBreakdownButton nextRoute="/pricing/breakdown" />
          <NavigationButtons nextRoute="/" />
        </div>
      </div>
    </section>
  );
};

export default PricingSuggestion;
