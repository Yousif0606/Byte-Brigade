"use client";
import React from "react";
import MaterialsDescriptionForm from "../components/MaterialsDescriptionForm";
import NavigationButtons from "../components/NavigationButtons";

/* Below is an example of calling a function from a JS helper file, and passing an argument to it from this file -Nate
const renatoSayHi = () => alert('hi renato');*/

const PricingMaterialInput = () => {
  return (
    <section className="flex flex-col w-full">
    {/*<Logo className="background-icon" />*/}
    <div className="ml-8 md:ml-32">
      <h1 className="header-text py-14 text-5xl font-semibold purple-text-main max-md:text-5xl max-sm:text-4xl">
        Suggest product pricing
      </h1>
    </div>

    <div className="flex-grow flex flex-col">
      <MaterialsDescriptionForm />
      <div className="mt-auto w-full">
        <NavigationButtons nextRoute="/pricing/materialamount" />
      {/*Put in tag above for toggleable visibility}*/}
      {/*showBackButton={false}*/}
      </div>
    </div>
  </section>
  );
}

//We need to include the lines below to export the React component if we declare it as a const function above -Nate
export {PricingMaterialInput};