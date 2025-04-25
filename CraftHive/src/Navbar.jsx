import React from "react";
import Nav from "react-bootstrap/Nav";

const Navbar = () => {
    return (
        <Nav style={{backgroundColor: theme.colors.primary}} className="w-full p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-4">
                <div className="cursor-pointer">☰</div>
                <div className="text-xl font-bold">CraftHive</div>
            </div>
            <div className="flex items-center gap-4">
                <div className="cursor-pointer">🔍</div>
                <div className="cursor-pointer">❓</div>
            </div>
        </Nav>
    );
};

  export default Navbar;