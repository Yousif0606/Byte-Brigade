"use client";
import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import NavigationButtons from "../components/NavigationButtons";

const PricingBreakdown = () => {
  const { productData } = useContext(ProductContext);

  const materials = productData?.materials || [];
  const creativeHours = parseFloat(productData?.creativeHours || 0);
  const adminHours = parseFloat(productData?.adminHours || 0);
  const hourlyRate = parseFloat(productData?.hourlyRate || 0);

  const materialCost = materials.reduce(
    (sum, item) => sum + parseFloat(item.cost || 0),
    0
  );

  const laborCost = (creativeHours + adminHours) * hourlyRate;
  const total = materialCost + laborCost;

  return (
    <section className="flex flex-col items-center justify-center text-center py-12 px-4">
      <div className="rounded-xl purple-bg-textbox p-10 max-w-3xl w-full shadow-md">
        <h2 className="text-4xl font-bold mb-6 purple-text-main">
          Full Price Breakdown
        </h2>
        <ul className="text-left text-lg mb-8">
          <li className="mb-2">🧵 Material Cost: <strong>${materialCost.toFixed(2)}</strong></li>
          <li className="mb-2">🛠️ Labor Cost: <strong>${laborCost.toFixed(2)}</strong></li>
          <li className="mt-4 text-xl">💰 <strong>Total Suggested Price: ${total.toFixed(2)}</strong></li>
        </ul>
        <NavigationButtons nextRoute="/" />
      </div>
    </section>
  );
};

export { PricingBreakdown };
