import React from "react";

const FeatureCard = ({ icon, title, subtitle }) => {
  return (
    <article className="flex flex-col justify-center items-center p-5 text-center bg-amber-300 h-[380px] rounded-[30px] w-[380px] max-md:h-[300px] max-md:w-[300px] max-sm:mb-5 max-sm:w-full max-sm:h-[250px]">
      <div className="mb-8 text-8xl text-[white]">
        <i className={`ti ti-${icon}`} />
      </div>
      <div className="text-3xl font-semibold">
        <h3 className="mb-2.5">{title}</h3>
        <p>{subtitle}</p>
      </div>
    </article>
  );
};
export default FeatureCard;