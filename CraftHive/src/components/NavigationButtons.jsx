import React from "react";

export default function NavigationButtons() {
  return (
    <nav className="flex justify-between mt-8 w-4/5 max-w-[800px]">
      <button className="text-4xl font-semibold bg-amber-300 rounded-3xl cursor-pointer h-[79px] text-white w-[185px] max-md:w-40 max-md:text-3xl max-md:h-[70px] max-sm:text-2xl max-sm:h-[60px] max-sm:w-[140px]">
        Back
      </button>
      <button className="text-4xl font-semibold bg-amber-300 rounded-3xl cursor-pointer h-[79px] text-white w-[185px] max-md:w-40 max-md:text-3xl max-md:h-[70px] max-sm:text-2xl max-sm:h-[60px] max-sm:w-[140px]">
        Next
      </button>
    </nav>
  );
}
