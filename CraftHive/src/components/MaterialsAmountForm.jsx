import React from "react";
import { MaterialInputPage } from "../helpers/PriceSuggestion.js";
import {
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import "../App.css";


export default function MaterialsAmountForm() {
  return (
        <div className="w-full px-4 md:px-20">
          <section className="p-6 md:p-10 mx-auto w-full rounded-xl  shadow-[0_4px_6px_rgba(0,0,0,0.1)] purple-bg-textbox">
            <h4 className="body-text font-bold px-10 pb-2 mb-8 text-3xl text-black max-md:text-lg max-sm:text-base">
          Which materials and how many materials goes into making one instance of your product?
          </h4>

          <h5 className="body-text font-light px-10 pb-4 mb-8 text-xl purple-text-dark max-md:text-lg max-sm:text-base ">
          <span className="font-bold">This does not have to be an accurate measurement.</span> <br/> For example, if you were making a sculpture out of clay, 
  how much clay would you use for one sculpture? <br/> Additionally, when entering in the cost of a material, consider cost + added tax for the raw material.<br/>
  <small>If you outsource your production or this does not apply to your product, you may leave the fields below blank.</small>
          </h5>

            <form className="flex flex-col gap-5" >
              {/* Form content with two columns */}
              <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-3 ">
                {/* Material entries will go here */}
                <div className="col-span-2 ml-9 h-12 offwhite-bg align-middle rounded-lg">
                  <Select 
                    id="material-amount-1" 
                    className="rounded-lg offwhite-bg border-none focus:ring-purple-400 align-middle px-3 py-4" 
                  />
                </div>
                <div className="col-start-3 col-span-1 h-12 offwhite-bg align-middle rounded-lg">
                  <TextInput 
                    id="cost-1" 
                    type="price" 
                    placeholder="Total cost of this material..." 
                    className="rounded-lg offwhite-bg border-none focus:ring-purple-400 align-middle px-3 py-4" 
                  />
                </div>
              </div>
              
              {/* Add button will go here */}
            </form>
          </section>
        </div>
  );
}