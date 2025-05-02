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
    <section className="p-8 w-4/5 rounded-xl bg-white max-w-[800px] shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
      {requirements.map((requirement, index) => (
        <p
          key={index}
          className="mb-4 text-xl text-purple-900 max-md:text-lg max-sm:text-base"
        >
          {requirement}
        </p>
      ))}
    </section>
  );
}