"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  };

  return (
    <div className="hero w-full columns-2 mt-20">
      <h1 className="hero__tittle font-extrabold text-[60px] text-start">
        Find, book, rent a car—quick and super easy!
      </h1>
      <h2 className="hero__subtitle text-[26px] text-start">
        Streamline your car rental experience with our effortless booking
        process.
      </h2>
      <CustomButton
        title="Explore Cars"
        containerStyles="bg-blue-600 text-white rounded-full mt-10"
        handleClick={handleScroll}
      />

      <div className="hero__img-wrapper w-full">
        <Image
          className=""
          width={800}
          height={1}
          src={"hero.png"}
          alt="hero"
        />
        <div className="hero__image-overlay">
          <img
            src={"hero-bg.png"}
            alt="hero-bg"
            className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
