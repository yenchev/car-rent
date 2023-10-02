import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./Logo";
import { headers } from "../next.config";

const NavBar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-width mx-auto justify-between items-center sm:px-16 px-6 py-4">
        <div className="columns-2 px-1 ">
          <Logo />
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
//
