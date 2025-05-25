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
      <div className="ml-4 md:ml-16 mt-10">
        <h1 className="header-text text-5xl font-semibold purple-text-main">Material Inventory</h1>
      </div>

      <div className="mt-8 p-6 rounded-xl purple-bg-textbox shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <TextInput
            name="name"
            placeholder="Material name"
            value={item.name}
            onChange={handleChange}
          />
          <TextInput
            name="quantity"
            type="number"
            placeholder="Quantity"
            value={item.quantity}
            onChange={handleChange}
          />
          <TextInput
            name="cost"
            type="number"
            placeholder="Cost"
            value={item.cost}
            onChange={handleChange}
          />
        </div>

        <button
          onClick={addItem}
          className="body-text font-semibold button-colour text-white px-6 py-3 rounded-lg"
        >
          + Add Material
        </button>
      </div>

      <div className="mt-10 p-6 bg-white rounded-xl shadow-md">
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

      <div className="mt-10 mb-5">
        <NavigationButtons nextRoute="/" />
      </div>
    </section>
  );
};

export { MaterialInventoryEntry };
