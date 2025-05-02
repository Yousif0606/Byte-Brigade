"use client";
import React from "react";

function InputDesign() {
  return (
    <div className="max-w-[820px]">
      <div className="w-full rounded-[30px] bg-[rgba(255,179,67,1)] px-20 py-9 md:px-20 md:py-9 max-md:px-5 max-md:py-9">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex w-[34%] flex-col items-stretch max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ea7e68ba173341b3a2a06f87ff9e1aed/a14e6a92e837b70ef645f16426fe7d83de3e14b2?placeholderIfAbsent=true"
              className="aspect-square w-[193px] flex-shrink-0 object-contain object-center max-w-full max-md:mt-10"
              alt="Product icon"
            />
          </div>
          <div className="flex w-[66%] flex-col items-stretch ml-5 max-md:w-full max-md:ml-0">
            <div className="text-black text-[30px] font-bold font-['Quicksand',_-apple-system,_Roboto,_Helvetica,_sans-serif] my-auto self-stretch max-md:mt-10">
              Suggest <br />
              product pricing
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputDesign;