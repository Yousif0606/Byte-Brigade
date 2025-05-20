"use client";
import React from "react";
import RequirementsList from "../components/RequirementsList";
import NavigationButtons from "../components/NavigationButtons";

const PricingGetStarted = () => {
  return (
    <section className="flex flex-col w-full">
      <div className="ml-8 md:ml-32">
        <h1 className="header-text pt-8 mt-12 text-5xl font-semibold purple-text-main">
          Suggest product pricing
        </h1>
        <h2 className="header-text pb-8 mx-0 my-5 text-8xl font-bold text-black">
          Let's get started!
        </h2>
      </div>

      <div className="flex-grow flex flex-col">
        <RequirementsList />
        <div className="mt-auto w-full">
          <NavigationButtons nextRoute="/pricing/new_product" />
        </div>
      </div>
    </section>
  );
};

export default PricingGetStarted;
