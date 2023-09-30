import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./Logo";
import { headers } from "../next.config";

const NavBar = () => {
  return (
    <header className="w-full">
      <nav className="w-full">
        <div className="flex w-full px-5">
          <Logo />
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
