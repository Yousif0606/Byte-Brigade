"use client";
import React, { useState, useEffect } from "react";
import { TextInput } from "flowbite-react";
import NavigationButtons from "../components/NavigationButtons";

const MaterialInventoryEntry = () => {
  const [inventory, setInventory] = useState([]);
  const [item, setItem] = useState({ name: "", quantity: "", cost: "" });

  useEffect(() => {
    const saved = localStorage.getItem("inventory");
    if (saved) {
      setInventory(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const addItem = () => {
    if (!item.name || !item.quantity || !item.cost) return;
    const updated = [...inventory, item];
    setInventory(updated);
    localStorage.setItem("inventory", JSON.stringify(updated));
    setItem({ name: "", quantity: "", cost: "" });
  };

  return (
    <section className="flex flex-col w-full px-8 md:px-20">
      <div className="ml-4 py-8 md:ml-16 mt-10">
        <h1 className="header-text text-5xl font-semibold purple-text-main">Material Inventory</h1>
      </div>

      <div className="mt-8 p-6 rounded-xl purple-bg-textbox shadow-md">
      <h4 className="body-text font-bold px-10 pt-6 pb-2 mb-8 text-3xl text-black max-md:text-lg max-sm:text-base">
          What materials would you like to keep track of?
          </h4>

          <h5 className="body-text font-light px-10 pb-4 mb-8 text-xl purple-text-dark max-md:text-lg max-sm:text-base ">
          <span className="font-bold">Provide a title or description for each of your raw materials.</span> <br/>
          Then input the quantity of each type of material and the cost for one purcahsed bunch of the material.
          </h5>
          
        <div className="px-10 grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <TextInput
            name="name"
            className="rounded-lg offwhite-bg border-none focus:ring-purple-400 align-middle px-3 py-4"
            placeholder="Material name"
            value={item.name}
            onChange={handleChange}
          />
          <TextInput
            name="quantity"
            className="rounded-lg offwhite-bg border-none focus:ring-purple-400 align-middle px-3 py-4"
            type="number"
            placeholder="Quantity"
            value={item.quantity}
            onChange={handleChange}
          />
          <TextInput
            name="cost"
            className="rounded-lg offwhite-bg border-none focus:ring-purple-400 align-middle px-3 py-4"
            type="number"
            placeholder="Cost"
            value={item.cost}
            onChange={handleChange}
          />
        </div>

        <div className="px-10 mb-6">
        <button
          onClick={addItem}
          className="body-text font-semibold button-colour text-white px-10 py-3 rounded-lg"
        >
          + Add Material
        </button>
        </div>
      </div>

      <div className="mt-10 py-6 purple-bg-textbox body-text purple-text-dark rounded-xl shadow-md">
        <div className="px-16 mb-4">
          <h2 className="text-2xl font-bold mb-4">Inventory List</h2>
          {inventory.length === 0 ? (
            <p>No materials added yet.</p>
          ) : (
            <ul className="list-disc list-inside">
              {inventory.map((mat, index) => (
                <li key={index}>
                  {mat.name} — {mat.quantity} units @ ${mat.cost}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mt-10 mb-5">
        <NavigationButtons nextRoute="/" />
      </div>
    </section>
  );
};

export { MaterialInventoryEntry };
