"use client";
import React from "react";
import RequirementsList from "../components/RequirementsList";
import NavigationButtons from "../components/NavigationButtons";
import {BadgeDollarSign} from 'lucide-react';

const Logo = () => {
  return (
    <BadgeDollarSign color="purple" size={700} />
  )
}

const PricingGetStarted = () => {
  return (
      <section className="flex flex-col items-center">
        {/*<Logo className="background-icon" />*/}
        <h1 className="header-text mt-12 text-6xl font-semibold purple-text-dark max-md:text-5xl max-sm:text-4xl">
          Suggest product pricing
        </h1>
        <h2 className="header-text mx-0 my-5 text-9xl font-bold text-black max-md:text-8xl max-sm:text-7xl">
          Let's get started!
        </h2>
        <RequirementsList />
        <NavigationButtons showBackButton={false} nextRoute="/pricing/materialinput" />
      </section>
  );
}

export {PricingGetStarted};