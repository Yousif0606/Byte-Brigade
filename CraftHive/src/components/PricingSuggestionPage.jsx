"use client";
import React from "react";
import RequirementsList from "./RequirementsList";
import NavigationButtons from "./NavigationButtons";

/* Below is an example of calling a function from a JS helper file, and passing an argument to it from this file -Nate
const renatoSayHi = () => alert('hi renato');*/

const PricingSuggestionPage = () => {
  return (
      <section className="flex flex-col items-center">
        <h1 className="header-text mt-12 text-6xl font-medium text-purple-900 max-md:text-5xl max-sm:text-4xl">
          Suggest product pricing
        </h1>
        <h2 className="header-text mx-0 my-5 text-9xl font-bold text-black max-md:text-8xl max-sm:text-7xl">
          Let's get started!!!!!!!
        </h2>
        <RequirementsList />
        <NavigationButtons showBackButton={false} nextRoute="/pricing/landing" />
      </section>
  );
}

//We need to include the lines below to export the React component if we declare it as a const function above -Nate
export {PricingSuggestionPage, renatoSayHi};
