import React from "react";
import {CircleHelp, Menu} from 'lucide-react';
import '../App.css';

export default function Header() {
  return (
    <header className="flex justify-between p-5 rounded-bl-2xl rounded-br-2xl w-full top-navbar max-sm:p-2.5">
      <div className="flex justify-center ps-3 items-center max-sm:w-10 max-sm:h-10">
        <Menu color="white" size={50} />
      </div>
      <div className="flex justify-center items-center max-sm:w-10 max-sm:h-10">
        
      </div>
      <div className="flex justify-center pe-3 items-center max-sm:w-10 max-sm:h-10">
        <CircleHelp color="white" size={50} />
      </div>
    </header>
  );
}
