import React from "react";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <div className="cursor-pointer">☰</div>
        <div className="text-xl font-bold">CraftHive</div>
      </div>
      <div>
        <div className="cursor-pointer">🔍</div>
        <div className="cursor-pointer">❓</div>
      </div>
    </nav>
  );
}

export default Navbar;
