"use client";
import React from "react";
import RequirementsList from "../components/RequirementsList";
import NavigationButtons from "../components/NavigationButtons";
import {BadgeDollarSign} from 'lucide-react';

/*const Logo = () => {
  return (
    <BadgeDollarSign color="purple" size={700} />
  )
}*/

const PricingGetStarted = () => {
  return (
    <section className="flex flex-col w-full">
      {/*<Logo className="background-icon" />*/}
      <div className="ml-8 md:ml-32">
        <h1 className="header-text pt-8 mt-12 text-5xl font-semibold purple-text-main max-md:text-5xl max-sm:text-4xl">
          Suggest product pricing
        </h1>
        <h2 className="header-text pb-8 mx-0 my-5 text-8xl font-bold text-black max-md:text-8xl max-sm:text-7xl">
          Let's get started!
        </h2>
      </div>

      <div className="flex-grow flex flex-col">
        <RequirementsList />
        <div className="mt-auto w-full">
          <NavigationButtons nextRoute="/pricing/new_product" />
        {/*Put in tag above for toggleable visibility}*/}
        {/*showBackButton={false}*/}
        </div>
      </div>
    </section>
  );
}

export {PricingGetStarted};
