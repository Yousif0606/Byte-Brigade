import React from "react";
import { Label, TextInput } from "flowbite-react";
import { MaterialInputPage } from "../helpers/PriceSuggestion.js";


export default function MaterialsDescriptionForm() {
  return (
    <div className="w-full px-20">
      <section className="p-10 mx-auto w-full rounded-xl purple-bg-textbox shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
        <h4 className="body-text font-bold px-10 pb-2 mb-8 text-3xl text-black max-md:text-lg max-sm:text-base">
        How much of your materials goes into making one instance of 
your product?
        </h4>

        <h5 className="body-text font-light px-10 pb-4 mb-8 text-xl purple-text-dark max-md:text-lg max-sm:text-base">
        <span className="font-bold">This does not have to be an accurate measurement.</span> <br/> For example, if you were making a sculpture out of clay, 
how much clay would you use for one sculpture? <br/>
If you outsource your production or this does not apply to your product, you may leave the fields below blank.
        </h5>

        <div className="w-full px-4 md:px-20">
  <section className="p-6 md:p-10 mx-auto w-full rounded-xl purple-bg-textbox shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
    {/* Title and description here */}
    
    <form className="flex flex-col gap-6">
      {/* Form content with two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Material entries will go here */}
      </div>
      
      {/* Add button will go here */}
    </form>
  </section>
</div>

      </section>
    </div>
  );
}