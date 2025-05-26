"use client";
import React, { useState, useContext } from "react";
import { TextInput } from "flowbite-react";
import { ProductContext } from "../context/ProductContext";

const MaterialsDescriptionForm = () => {
  const { productData, setProductData } = useContext(ProductContext);

  const [material, setMaterial] = useState({ name: "", cost: "" });
  const [materialsList, setMaterialsList] = useState(productData.materials || []);

  const handleChange = (e) => {
    setMaterial({ ...material, [e.target.name]: e.target.value });
  };

  const addMaterial = () => {
    if (!material.name || !material.cost) return;
    const updated = [...materialsList, material];
    setMaterialsList(updated);
    setMaterial({ name: "", cost: "" });
    setProductData({ ...productData, materials: updated });
  };

  return (
    <div className="w-full px-4 md:px-20">
      <section className="p-6 md:p-10 mx-auto w-full rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] purple-bg-textbox">
        <h4 className="body-text font-bold px-10 pb-2 mb-8 text-3xl text-black">
          Which materials go into making one instance of your product?
        </h4>
        <h5 className="body-text font-light px-10 pb-4 mb-8 text-xl purple-text-dark">
          Add the material and total cost (with tax) — like: <br />
          <strong>"Forest green yarn (15ft bundle)" — $6.49</strong>
        </h5>

        <div className="grid grid-cols-3 gap-4 px-10">
          <TextInput
            name="name"
            placeholder="Material description..."
            value={material.name}
            onChange={handleChange}
          />
          <TextInput
            name="cost"
            placeholder="Cost"
            type="number"
            value={material.cost}
            onChange={handleChange}
          />
          <button
            onClick={addMaterial}
            className="body-text font-semibold button-colour text-white px-6 py-2 rounded-lg"
          >
            + Add Material
          </button>
        </div>

        {materialsList.length > 0 && (
          <div className="px-10 pt-6">
            <ul className="list-disc list-inside">
              {materialsList.map((mat, index) => (
                <li key={index}>
                  {mat.name} — ${mat.cost}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};

export default MaterialsDescriptionForm;
