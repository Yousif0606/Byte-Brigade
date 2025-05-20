"use client";
import React from "react";
import NavigationButtons from "../components/NavigationButtons";
import { TextInput } from "flowbite-react";
import { useProduct } from "../context/ProductContext";

const PricingMaterialAmount = () => {
  const { productData, setProductData } = useProduct();

  const handleQtyChange = (index, value) => {
    const updatedMaterials = [...productData.materials];
    updatedMaterials[index].quantity = value;
    setProductData({ ...productData, materials: updatedMaterials });
  };

  return (
    <section className="flex flex-col w-full">
      <div className="ml-8 md:ml-32">
        <h1 className="header-text py-14 text-5xl font-semibold purple-text-main">
          Suggest product pricing
        </h1>
      </div>

      <div className="flex-grow flex flex-col">
        <div className="w-full px-4 md:px-20">
          <div className="p-6 md:p-10 mx-auto w-full rounded-xl purple-bg-textbox">
            <h4 className="body-text font-bold px-10 pb-2 mb-8 text-3xl text-black">
              How much of each material do you use per product?
            </h4>

            <form className="flex flex-col gap-5">
              {productData.materials.map((material, index) => (
                <div key={index} className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 ml-9">
                    <TextInput
                      value={material.name}
                      disabled
                      className="rounded-lg offwhite-bg px-3 py-4 text-gray-600"
                    />
                  </div>
                  <div className="col-span-1">
                    <TextInput
                      type="number"
                      placeholder="Qty used"
                      value={material.quantity || ""}
                      onChange={(e) =>
                        handleQtyChange(index, e.target.value)
                      }
                      className="rounded-lg offwhite-bg px-3 py-4"
                    />
                  </div>
                </div>
              ))}
            </form>
          </div>
        </div>

        <div className="mt-auto w-full">
          <NavigationButtons nextRoute="/pricing/suggested_price" />
        </div>
      </div>
    </section>
  );
};

export default PricingMaterialAmount;
