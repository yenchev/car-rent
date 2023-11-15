import React, { useRef } from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  const heroRef = useRef(null);

  const handleScroll = () => {
    window.scrollTo({
      top: heroRef.current.offsetHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="hero" ref={heroRef}>
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, rent a car — quick and super easy!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src={"hero.png"} alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay">
          <Image
            src={"hero-bg.png"}
            alt="hero-bg"
            className="hero__image-overlay"
            width={1}
            height={1}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
