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
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

const ProductEntry = ({params}) => {
  let navigate = useNavigate();

  const [data, setData] = useState({});

  const handleChange = (field, value) => setData({ ...data, [field]: value });


const suggestPrice = () => {
  console.log(data);

  // const matCost = data.materials.reduce((acc, m) => acc + parseFloat(m.cost || 0), 0);
  const labor = (parseFloat(data.creativeHours || 0) + parseFloat(data.adminHours || 0)) * parseFloat(data.hourlyRate || 0);
  const total = (matCost + labor).toFixed(2);

  navigate('route', {price: 100})
}



  return (
    
    <section className="flex flex-col  w-full">
    {/*<Logo className="background-icon" />*/}
    <div className="ml-8 md:ml-32">
      <h1 className="header-text py-14 text-5xl font-semibold purple-text-main max-md:text-5xl max-sm:text-4xl">
        Suggest product pricing
      </h1>
    </div>

    <div className="w-full px-4 md:px-20">
          <div className="p-6 md:p-10 mx-auto w-full rounded-2xl  shadow-[0_4px_6px_rgba(0,0,0,0.1)] purple-bg-textbox">
            <h4 className="body-text font-bold px-10 pb-2 mb-8 text-3xl text-black max-md:text-lg max-sm:text-base">
          What new product are you creating?
          </h4>

          <h5 className="body-text font-light px-10 pb-4 mb-8 text-xl purple-text-dark max-md:text-lg max-sm:text-base ">
          <span className="font-bold">Give a short title or description for your product.</span> <br/>
          Then input the amount of time you spend creating one instance of this product, including a fair hourly wage based on your level of expertise with the medium of this in the appropriate fields below.
          </h5>

    <div className="max-w-6xl flex-grow flex flex-col body-text pb-20">
    <form className="flex flex-col gap-5" >
              {/* Product entry form content with two columns */}
              <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-3 ">
                {/* Product Name entry */}
                <div className="col-span-1 ml-9 h-12 offwhite-bg align-middle rounded-lg">
                  <TextInput 
                    /* UID for each list item should be structured like below (item-1, item-2, etc.) */
                    id="product-name-1"
                    type="text" 
                    placeholder="Product Name..." 
                    className="rounded-lg offwhite-bg border-none focus:ring-purple-400 align-middle px-3 py-4"
                    onChange={e => handleChange("name", e.target.value)}/>
                </div>

                {/* Product description entry */}
                <div className="col-span-1 h-12 offwhite-bg align-middle rounded-lg">
                  <TextInput 
                    id="product-desc-1" 
                    type="text" 
                    placeholder="Short description of product..." 
                    className="rounded-lg offwhite-bg border-none focus:ring-purple-400 align-middle px-3 py-4" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-3 ">
                {/* Hours entry form content with three columns */}
                <div className="col-span-1 ml-9 h-12 offwhite-bg align-middle rounded-lg">
                {/* Creative hours that go into making one instance of the product */}
                  <TextInput 
                    id="creative-hours-1" 
                    type="number" 
                    placeholder="Creative hours..." 
                    className="rounded-lg offwhite-bg border-none focus:ring-purple-400 align-middle px-3 py-4" 
                  />
                  <HelperText className="purple-text-dark pt-2.5 font-xs opacity-70 leading-none">
                    <small>Creative hours that go into making one instance of the product.</small>
                  </HelperText>
                </div>

                <div className="col-span-1 h-12 offwhite-bg align-middle rounded-lg">
                {/* Weekly admin hours that go into research, distribution, manufacturing, etc. of one product */}
                  <TextInput 
                    id="admin-hours-1" 
                    type="number" 
                    placeholder="Admin hours per week..." 
                    className="rounded-lg offwhite-bg border-none focus:ring-purple-400 align-middle px-3 py-4" 
                  />
                  <HelperText className="purple-text-dark pt-2.5 font-xs opacity-70 leading-none">
                    <small>Weekly admin hours that go into research, distribution, and material gathering of one instance of the product.</small>
                  </HelperText>
                </div>

                <div className="col-span-1 h-12 offwhite-bg align-middle rounded-lg">
                {/* A fair hourly wage to give yourself based on your skill level creating this product */}
                  <TextInput 
                    id="hourly-wage-1" 
                    type="number" 
                    placeholder="Fair hourly wage..." 
                    className="rounded-lg offwhite-bg border-none focus:ring-purple-400 align-middle px-3 py-4" 
                  />
                    <HelperText className="purple-text-dark pt-2.5 font-xs opacity-70 leading-none">
                    <small>A fair hourly wage to give yourself based on your skill level creating this product.</small>
                  </HelperText>
                </div>
              </div>
            </form>
            </div>
            </div>
            </div>
      <div>

        <NavigationButtons nextRoute="/pricing/material_input" />

      </div>

  </section>
  );
}

export {ProductEntry};