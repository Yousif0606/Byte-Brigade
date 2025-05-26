"use client";
import React, { useContext } from "react";
import NavigationButtons from "../components/NavigationButtons";
import PriceBreakdownButton from "../components/PriceBreakdownButton";
import { ProductContext } from "../context/ProductContext";

const PricingSuggestion = () => {
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
  const total = (materialCost + laborCost).toFixed(2);

  return (
    <section className="flex flex-col w-full">
      <div className="ml-8 md:ml-32">
        <h1 className="header-text pt-8 pb-18 mt-12 text-5xl font-semibold purple-text-main max-md:text-5xl max-sm:text-4xl">
          Suggest product pricing
        </h1>
      </div>

      <div className="flex-grow flex flex-col">
        <div className="w-full px-20">
          <section className="p-10 mx-auto w-full rounded-xl purple-bg-textbox shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <h4 className="body-text font-bold px-10 pb-2 mb-8 text-2xl text-black max-md:text-lg max-sm:text-base">
              Based on the information you’ve given me, I recommend you sell your product at:
            </h4>

            <h1 className="body-text font-bold px-10 text-9xl purple-text-main">
              ${total}
            </h1>

            <h4 className="body-text purple-text-main pt-20 pb-8 px-10 text-md max-md:text-lg max-sm:text-base">
              This number is based on your provided material costs, quantity used, total time spent, and your hourly wage.
            </h4>

            <h4 className="body-text font-bold px-10 py-3-2 mb-8 text-2xl purple-text-main max-md:text-lg max-sm:text-base">
              If you'd like to see a full breakdown, click “View full breakdown” below.
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

export { PricingSuggestion };
