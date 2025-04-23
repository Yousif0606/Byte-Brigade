"use client";
import React from "react";
import RequirementsList from "./RequirementsList";
import NavigationButtons from "./NavigationButtons";

const PricingGetStarted = () => {
  return (
      <section className="flex flex-col items-center">
        <h1 className="mt-12 text-6xl font-medium text-purple-900 max-md:text-5xl max-sm:text-4xl">
          PRICING GET STAARTED
        </h1>
        <h2 className="mx-0 my-5 text-9xl font-bold text-black max-md:text-8xl max-sm:text-7xl">
          Let's get started!!!!!!!
        </h2>
        <RequirementsList />
        <NavigationButtons nextRoute="/pricing/somewhere-else" />
      </section>
  );
}

export {PricingGetStarted};
