import React from "react";

const HamburgerMenu = () => {
  return (
    <button className="cursor-pointer" aria-label="Toggle menu">
      <span className="block mx-0 my-4 rounded h-[7px] w-[78px] bg-white max-sm:mx-0 max-sm:my-2.5 max-sm:h-[5px] max-sm:w-[50px]" />
      <span className="block mx-0 my-4 rounded h-[7px] w-[78px] bg-white max-sm:mx-0 max-sm:my-2.5 max-sm:h-[5px] max-sm:w-[50px]" />
      <span className="block mx-0 my-4 rounded h-[7px] w-[78px] bg-white max-sm:mx-0 max-sm:my-2.5 max-sm:h-[5px] max-sm:w-[50px]" />
    </button>
  );
};
export default HamburgerMenu;