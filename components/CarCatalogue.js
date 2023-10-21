import React, { useState, useEffect } from "react";
import CarCard from "./CarCard";

const CarCatalogue = ({ cars }) => {
  const [visibleCars, setVisibleCars] = useState(12);
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      setIsLoading(true);
      setTimeout(() => {
        setVisibleCars((prevVisibleCars) =>
          prevVisibleCars < 48 ? prevVisibleCars + 12 : prevVisibleCars
        );
        setIsLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="car__catalog-wrapper pt-10">
      <div className="car__catalog-header max-width md:px-16 px-6">
        <h2 className="car__catalog-title text-[25px] sm:text-[40px] font-extrabold">
          Car Catalogue
        </h2>
        <h3 className="car__catalog-subtitle text-[15px] sm:text-[18px] pb-6">
          Explore our cars you might like
        </h3>
        <div className="car__catalog-filter max-width pb-10">Filter</div>
      </div>
      <div className="car__catalog-cards mx-auto 2xl:w-[1440px] xl:w-[1100px] lg:w-[1000px] md:w-[700px] sm:w-[600px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 sm:gap-4 lg:gap-4 gap-10 mb-[50px]">
        {cars.slice(0, visibleCars).map((car, index) => (
          <div className="mx-auto" key={index}>
            <CarCard car={car} />
          </div>
        ))}
      </div>
      {isLoading && visibleCars < 48 && (
        <span class="relative flex mx-auto mb-10 h-10 w-10">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-10 w-10 bg-sky-500"></span>
        </span>
      )}
    </div>
  );
};

export default CarCatalogue;
