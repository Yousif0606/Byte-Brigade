"use client";
import React, { useContext } from "react";
import NavigationButtons from "../components/NavigationButtons";
import { ProductContext } from "../context/ProductContext"; // ✅ context must exist

const PricingBreakdown = () => {
  const { product } = useContext(ProductContext);

  const materialCost = product.materials?.reduce((sum, mat) => sum + parseFloat(mat.cost || 0), 0) || 0;
  const laborCost =
    (parseFloat(product.creativeHours || 0) + parseFloat(product.adminHours || 0)) *
      parseFloat(product.hourlyRate || 0) || 0;
  const total = (materialCost + laborCost).toFixed(2);

  return (
    <section className="flex flex-col w-full">
      <div className="ml-8 md:ml-32">
        <h1 className="header-text py-14 text-5xl font-semibold purple-text-main">Full Price Breakdown</h1>
      </div>

      <div className="w-full px-4 md:px-20">
        <div className="p-6 md:p-10 mx-auto w-full rounded-2xl shadow-md purple-bg-textbox">
          <h3 className="text-3xl font-bold mb-6">Breakdown:</h3>
          <ul className="text-xl purple-text-dark space-y-4">
            <li>Material Cost: ${materialCost.toFixed(2)}</li>
            <li>Labor Cost: ${laborCost.toFixed(2)}</li>
            <li className="font-bold text-black">Total Suggested Price: ${total}</li>
          </ul>
        </div>
        <div className="mt-8">
          <NavigationButtons nextRoute="/" />
        </div>
      </div>
    </section>
  );
};

export { PricingBreakdown };
