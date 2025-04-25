import React from "react";
import {Menu, CircleHelp} from 'lucide-React';
import '../App.css';

const Navbar = () => {
    return (
        <nav className="top-navbar">
            <div className="flex items-start gap-4">
                <Menu color="white" />
            </div>
            <div className="flex items-end gap-4">
                <CircleHelp color="white"/>
            </div>
        </nav>
    );
};

  export default Navbar;