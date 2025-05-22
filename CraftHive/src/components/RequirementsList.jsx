import React from "react";

export default function RequirementsList() {
  const requirements = [
    "Description and quantity of materials to add to your production inventory.",
    "Quantity of materials needed to make one instance of your product.",
    "Work hours required to make one instance of your product.",
    "Administrative hours spent per week on managing your business.",
    "Fair hourly wage for yourself as you work with your business.",
  ];

  return (
    <div className="w-full px-20">
      <section className="p-10 mx-auto w-full rounded-xl purple-bg-textbox shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
        <h4 className="body-text font-bold px-10 pb-2 mb-8 text-3xl text-black max-md:text-lg max-sm:text-base">
          Here's what I'll need to suggest a product price:
        </h4>
        {requirements.map((requirement, index) => (
          <li
            key={index}
            className="body-text list-item list-disc list-inside font-medium px-14 mb-4 ml-8 text-xl purple-text-dark max-md:text-lg max-sm:text-base"
          >
            {requirement}
          </li>
        ))}
        <h4 className="body-text font-bold pt-8 px-10 text-xl text-black max-md:text-lg max-sm:text-base">
          Once you have all of the above ready or memorized, click "Next" to begin!
        </h4>
      </section>
    </div>
  );
}

export function InventoryRequirementsList() {
  const requirements = [
    "Name of the raw materials you would like to keep track of. This could be anything from wood to paint. Make it descriptive!",
    "Quantity of each material you have on hand. This is the amount you currently have in stock.",
    "Total cost of one batch of each material. This is the cost you paid for the entire bulk of that material.",
  ];

  return (
    <div className="w-full px-20">
      <section className="p-10 mx-auto w-full rounded-xl purple-bg-textbox shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
        <h4 className="body-text font-bold px-10 pb-2 mb-8 text-3xl text-black max-md:text-lg max-sm:text-base">
          Here's what I'll need to help you keep track of your material inventory:
        </h4>
        {requirements.map((requirement, index) => (
          <li
            key={index}
            className="body-text list-item list-disc list-inside font-medium px-14 mb-4 ml-8 text-xl purple-text-dark max-md:text-lg max-sm:text-base"
          >
            {requirement}
          </li>
        ))}
        <h4 className="body-text font-bold pt-8 px-10 text-xl text-black max-md:text-lg max-sm:text-base">
          Once you have all of the above ready or memorized, click "Next" to begin!
        </h4>
      </section>
    </div>
  );
}