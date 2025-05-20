"use client";
import React from "react";
import NavigationButtons from "../components/NavigationButtons";
import { useProduct } from "../context/ProductContext";

const PricingBreakdown = () => {
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
          Full Price Breakdown
        </h1>
      </div>

      <div className="flex-grow flex flex-col px-20">
        <section className="p-10 mt-10 mx-auto w-full rounded-xl purple-bg-textbox shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
          <ul className="body-text text-xl">
            <li className="mb-3">Material Cost: ${matCost.toFixed(2)}</li>
            <li className="mb-3">Labor Cost: ${labor.toFixed(2)}</li>
            <li className="mb-3 font-bold">Total: ${total}</li>
          </ul>
        </section>

        <div className="mt-auto w-full">
          <NavigationButtons nextRoute="/" />
        </div>
      </div>
    </section>
  );
};

export default PricingBreakdown;
