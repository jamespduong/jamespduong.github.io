import React from "react";
import { FaGlasses } from "react-icons/fa";
import { DarkModeToggle } from "./dark-mode-toggle";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="flex flex-aic">
        <FaGlasses className="icon" />
        <span>jd.</span>
      </div>
      <DarkModeToggle />
    </nav>
  );
};
