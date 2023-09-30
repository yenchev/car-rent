import React from "react";

const Logo = () => {
  return (
    <div className="w-full flex">
      <img className="w-9 md:w-12" src={"logo.svg"} alt="logo" />
      <span className="w-full text-start my-1 mx-1 text-[20px] md:text-[25px] font-extrabold">
        CarHub
      </span>
    </div>
  );
};

export default Logo;
