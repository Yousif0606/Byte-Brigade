"use client";
import React from "react";
import {
  Button,
  Label,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import NavigationButtons from "../components/NavigationButtons";

const ProductEntry = () => {
  return (
    <section className="flex flex-col w-full">
    {/*<Logo className="background-icon" />*/}
    <div className="ml-8 md:ml-32">
      <h1 className="header-text py-14 text-5xl font-semibold purple-text-main max-md:text-5xl max-sm:text-4xl">
        Suggest product pricing
      </h1>
    </div>

    <div className="flex-grow flex flex-col">

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


      <div className="mt-auto w-full">
        <NavigationButtons nextRoute="/pricing/material_cost_input" />
      {/*Put in tag above for toggleable visibility}*/}
      {/*showBackButton={false}*/}
      </div>
    </div>
  </section>
  );
}

export {ProductEntry};