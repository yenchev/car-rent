import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./Logo";
import { headers } from "../next.config";

const NavBar = () => {
  return (
    <header className="w-full h-10">
      <nav className="w-full">
        <div className="w-full columns-2 px-1 max-sm:px-3 sm:px-5 md:px-8 ">
          <Logo />
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
