import React from "react";
import MenuIcon from "./MenuIcon";
import HelpIcon from "./HelpIcon";

export default function Header() {
  return (
    <header className="flex justify-between p-5 w-full bg-purple-900 max-sm:p-2.5">
      <div className="flex justify-center items-center h-[50px] w-[50px] max-sm:w-10 max-sm:h-10">
        <MenuIcon />
      </div>
      <div className="flex justify-center items-center h-[50px] w-[50px] max-sm:w-10 max-sm:h-10">
        <HelpIcon />
      </div>
    </header>
  );
}
