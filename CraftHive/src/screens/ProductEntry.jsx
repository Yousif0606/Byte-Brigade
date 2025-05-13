"use client";
import React, { useState } from "react";
import {
  Button,
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
  // const labor = (parseFloat(data.creativeHours || 0) + parseFloat(data.adminHours || 0)) * parseFloat(data.hourlyRate || 0);
  // const total = (matCost + labor).toFixed(2);

  // navigate('route', {price: 100})
}



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
                    id="product-name"
                    type="text" 
                    placeholder="Product Name" 
                    className="rounded-lg offwhite-bg border-none focus:ring-purple-400 align-middle px-3 py-4"
                    onChange={e => handleChange("name", e.target.value)}
        
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
        {/* <NavigationButtons nextRoute="/pricing/material_cost_input" /> */}

        <button onClick={suggestPrice} className="body-text text-4xl font-semibold button-colour rounded-3xl cursor-pointer h-[79px] text-white w-[185px] max-md:w-40 max-md:text-3xl max-md:h-[70px] max-sm:text-2xl max-sm:h-[60px] max-sm:w-[140px]">
          Next
        </button>
      {/*Put in tag above for toggleable visibility}*/}
      {/*showBackButton={false}*/}
      </div>
    </div>
  </section>
  );
}

export {ProductEntry};