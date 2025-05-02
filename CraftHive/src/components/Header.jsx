import React from "react";
import {CircleHelp, Menu} from 'lucide-react';
// This is how we should import images below, store the recursive filepath as a string, took me a while to figure out -Nate
import Logo from '../assets/logotype_white.svg';
import '../App.css';

export default function Header() {
  return (
    <header className="flex justify-between p-5 rounded-bl-3xl rounded-br-3xl w-full top-navbar max-sm:p-2.5 sticky">
      <div className="flex justify-center ps-3 items-center max-sm:w-10 max-sm:h-10">
        <Menu color="white" size={70} />
      </div>
      <div className="flex justify-center items-center max-sm:w-10 max-sm:h-10">
        <img src={Logo} alt="Company Logo" width={140} height={140} className="logo-class" />
      </div>
      <div className="flex justify-center pe-3 items-center max-sm:w-10 max-sm:h-10">
        <CircleHelp color="white" size={70} />
      </div>
    </header>
  );
}