"use client";
import React, { useState } from "react";
import {
  HelperText,
  Label,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import NavigationButtons from "../components/NavigationButtons";
import AddButton from "../components/AddButton";

const MaterialInventoryEntry = () => {

  return (
    
    <section className="flex flex-col  w-full">
    {/*<Logo className="background-icon" />*/}
    <div className="ml-8 md:ml-32">
      <h1 className="header-text py-14 text-5xl font-semibold purple-text-main max-md:text-5xl max-sm:text-4xl">
      Track materials inventory
      </h1>
    </div>

    <div className="w-full px-4 md:px-20">
          <div className="p-6 md:p-10 mx-auto w-full rounded-2xl  shadow-[0_4px_6px_rgba(0,0,0,0.1)] purple-bg-textbox">
            <h4 className="body-text font-bold px-10 pb-2 mb-8 text-3xl text-black max-md:text-lg max-sm:text-base">
          What materials would you like to keep track of?
          </h4>

          <h5 className="body-text font-light px-10 pb-4 mb-8 text-xl purple-text-dark max-md:text-lg max-sm:text-base ">
          <span className="font-bold">Provide a title or description for each of your raw materials.</span> <br/>
          Then input the quantity of each type of material and the cost for one purcahsed bunch of the material.
          </h5>

    <div className="max-w-6xl flex-grow flex flex-col body-text pb-20">
    <form className="flex flex-col gap-5" >
              {/* Material entry form content with four columns (one used for add button) */}
              <div className="grid grid-cols-4 md:grid-cols-4 gap-4 md:gap-3 ">
                {/* Material name entry */}
                <div className="col-span-1 ml-9 h-12 offwhite-bg align-middle rounded-lg">
                  <TextInput 
                    /* UID for each list item should be structured like below (item-1, item-2, etc.) */
                    id="material-name-1"
                    type="text" 
                    placeholder="Material name or description..." 
                    className="rounded-lg offwhite-bg border-none focus:ring-purple-400 align-middle px-3 py-4"/>
                </div>

                {/* Material quantity entry */}
                <div className="col-span-1 h-12 offwhite-bg align-middle rounded-lg">
                  <TextInput 
                    id="material-quantity-1" 
                    type="text" 
                    placeholder="Material quantity..." 
                    className="rounded-lg offwhite-bg border-none focus:ring-purple-400 align-middle px-3 py-4" 
                  />
                </div>

                {/* Material bulk cost entry */}
                <div className="col-span-1 h-12 offwhite-bg align-middle rounded-lg">
                  <TextInput 
                    id="material-cost-1" 
                    type="text" 
                    placeholder="Cost of one batch or material..." 
                    className="rounded-lg offwhite-bg border-none focus:ring-purple-400 align-middle px-3 py-4" 
                  />
                </div>

                {/* Add new entry button */}
                <div className="col-span-1 h-12 ">
                  <AddButton />
                </div>

              </div>
            </form>
          </div>

          <h5 className="body-text font-light px-10 pb-4 mb-8 text-xl purple-text-dark max-md:text-lg max-sm:text-base ">
          <span className="font-bold">Materials List</span>
          </h5>

        <div className="max-w-6xl flex-grow flex flex-col body-text pb-20">

        </div>


            </div>
            </div>
      <div>

        <NavigationButtons nextRoute="/pricing/material_input" />

      </div>

  </section>
  );
}

export {MaterialInventoryEntry};