import React from "react";
import { HamburgerMenu } from "./HamburgerMenu";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-10 py-0 bg-purple-900 h-[93px] max-sm:px-5 max-sm:py-0 max-sm:h-[70px]">
      <HamburgerMenu />
      <nav className="flex gap-8 items-center">
        <button
          className="text-6xl rounded-full border-solid border-[7px] border-[white] h-[58px] text-[white] w-[58px] max-sm:w-10 max-sm:h-10 max-sm:text-4xl max-sm:border-4"
          aria-label="Help"
        >
          ?
        </button>
        <div className="h-[37px] w-[37px]">
          <svg width="37" height="37" viewBox="0 0 37 37" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.29 18.8571C9.29 8.6004 17.6 0.2857 27.86 0.2857C38.11 0.2857 46.43 8.6004 46.43 18.8571C46.43 29.1139 38.11 37.4286 27.86 37.4286C17.6 37.4286 9.29 29.1139 9.29 18.8571Z"
              fill="white"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
};
export default Header;