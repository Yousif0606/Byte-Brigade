"use client";
import React, { useContext } from "react";
import NavigationButtons from "../components/NavigationButtons";
import PriceBreakdownButton from "../components/PriceBreakdownButton";
import { ProductContext } from "../context/ProductContext";

const PricingSuggestion = () => {
  const { product } = useContext(ProductContext);

  const matCost = product?.materials?.reduce(
    (acc, m) => acc + parseFloat(m.cost || 0), 0
  ) || 0;

  const labor =
    (parseFloat(product?.creativeHours || 0) +
      parseFloat(product?.adminHours || 0)) *
    parseFloat(product?.hourlyRate || 0);

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
          <section className="p-10 mx-auto w-full rounded-xl purple-bg-textbox">
            <h4 className="body-text font-bold px-10 text-2xl text-black">
              Based on your input, we suggest:
            </h4>
            <h1 className="body-text font-bold px-10 text-9xl purple-text-main">
              ${total}
            </h1>
            <h4 className="body-text purple-text-main px-10 mt-8 text-md">
              This price includes materials, time, and your desired wage.
            </h4>
            <h4 className="body-text font-bold px-10 mt-6 text-2xl purple-text-main">
              Want a full breakdown? Click below.
            </h4>
          </section>
        </div>

        <div className="pt-8 ml-10 mr-5 w-full">
          <PriceBreakdownButton className="items-start" nextRoute="/pricing/breakdown" />
          <NavigationButtons nextRoute="/" />
        </div>
      </div>
    </section>
  );
};

export { PricingSuggestion };
