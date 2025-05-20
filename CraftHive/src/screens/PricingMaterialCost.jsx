"use client";
import React from "react";
import MaterialsDescriptionForm from "../components/MaterialsDescriptionForm";
import NavigationButtons from "../components/NavigationButtons";

const PricingMaterialCost = () => {
  return (
    <section className="flex flex-col w-full">
      <div className="ml-8 md:ml-32">
        <h1 className="header-text py-14 text-5xl font-semibold purple-text-main">
          Suggest product pricing
        </h1>
      </div>

      <div className="flex-grow flex flex-col">
        <MaterialsDescriptionForm />
        <div className="mt-auto w-full">
          <NavigationButtons nextRoute="/pricing/materialamount" />
        </div>
      </div>
    </section>
  );
};

export default PricingMaterialCost;
