import React from "react";
import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <div className="logo">
      <Link href="/" className="flex justify-center items-center">
        <div className="logo__img w-full h-10 flex">
          <Image
            className="w-9 md:w-12"
            width={1}
            height={1}
            src={"logo.svg"}
            alt="logo"
          />
          <span className="logo__text w-full text-start my-1 mx-1 text-[20px] md:text-[25px] font-extrabold">
            CarHub
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
