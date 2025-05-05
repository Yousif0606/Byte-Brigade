"use client";
import React from "react";
import MaterialsAmountForm from "../components/MaterialsAmountForm";
import NavigationButtons from "../components/NavigationButtons";

const PricingMaterialAmount = () => {
  return (
    <section className="flex flex-col w-full">
    {/*<Logo className="background-icon" />*/}
    <div className="ml-8 md:ml-32">
      <h1 className="header-text py-14 text-5xl font-semibold purple-text-main max-md:text-5xl max-sm:text-4xl">
        Suggest product pricing
      </h1>
    </div>

    <div className="flex-grow flex flex-col">
      <MaterialsAmountForm />
      <div className="mt-auto w-full">
        <NavigationButtons nextRoute="/pricing/materialamount" />
      {/*Put in tag above for toggleable visibility}*/}
      {/*showBackButton={false}*/}
      </div>
    </div>
  </section>
  );
}

export {PricingMaterialAmount};