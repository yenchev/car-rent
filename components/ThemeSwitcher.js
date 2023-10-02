"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    if (theme === "dark") {
      setTheme("light");
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.classList.toggle("dark");
    } else {
      setTheme("light");
      document.body.classList.remove("dark");
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full h-10 flex justify-end items-center">
      <button
        className={`relative w-[30px] md:w-[37.5px] h-[16px] md:h-[20.3px] bg-[#f76464] cursor-pointer rounded-[15px]  ${theme}`}
        onClick={toggleTheme}
      >
        <span className="absolute md:top-[1.3px] top-[0.9px] md:left-[3.4px] left-[2.45px] md:w-[19px] w-[14px] md:h-[18px] h-[14px] rounded-[50%] bg-[#e0fd04] transition transform dark:translate-x-[11px] dark:bg-[#260156]"></span>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
