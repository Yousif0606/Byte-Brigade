import React from "react";
import { MaterialInputPage } from "../helpers/PriceSuggestion.js";
import {
  Button,
  Label,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import "../App.css";


export default function ProductEntryForm() {
  return (
        <div className="w-full px-4 md:px-20">
          <section className="p-6 md:p-10 mx-auto w-full rounded-2xl  shadow-[0_4px_6px_rgba(0,0,0,0.1)] purple-bg-textbox">
            <h4 className="body-text font-bold px-10 pb-2 mb-8 text-3xl text-black max-md:text-lg max-sm:text-base">
          Which materials go into making one instance of your product?
          </h4>

          <h5 className="body-text font-light px-10 pb-4 mb-8 text-xl purple-text-dark max-md:text-lg max-sm:text-base ">
          <span className="font-bold">Give a short title or description of your materials then input the cost (including taxes) in the appropriate fields below.</span> <br/>
          For example: "Forest Green yarn, 15ft bundle", $6.49.
          </h5>

            <form className="flex flex-col gap-5" >
              {/* Form content with two columns */}
              <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-3 ">
                {/* Material entries will go here */}
                <div className="col-span-2 ml-9 h-12 offwhite-bg align-middle rounded-lg">
                  <TextInput 
                    id="material-1" 
                    type="text" 
                    placeholder="Material description..." 
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
              <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-3 ">
                {/* Material entries will go here */}
                <div className="col-span-2 ml-9 h-12 offwhite-bg align-middle rounded-lg">
                  <TextInput 
                    id="material-1" 
                    type="text" 
                    placeholder="Material description..." 
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
              <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-3 ">
                {/* Material entries will go here */}
                <div className="col-span-2 ml-9 h-12 offwhite-bg align-middle rounded-lg">
                  <TextInput 
                    id="material-1" 
                    type="text" 
                    placeholder="Material description..." 
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

            </form>
          </section>
        </div>
  );
}