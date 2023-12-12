import React, { useState, useEffect } from "react";
import CarCard from "./CarCard";
import Filter from "./Filter";

const CarCatalogue = ({ cars }) => {
  const [visibleCars, setVisibleCars] = useState(12);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;

      if (totalHeight - scrolled <= 1 && visibleCars < 48) {
        setVisibleCars((prevVisibleCars) => prevVisibleCars + 12);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleCars]);
  return (
    <div className="car__catalog-wrapper pt-10">
      <div className="car__catalog-header max-width md:px-16 px-6">
        <h2 className="car__catalog-title text-[25px] sm:text-[40px] font-extrabold">
          Car Catalogue
        </h2>
        <h3 className="car__catalog-subtitle text-[15px] sm:text-[18px] pb-6">
          Explore our cars you might like
        </h3>
        <div className="car__catalog-filter max-width pb-10">
          <Filter />
        </div>
      </div>
      <div className="car__catalog-cards mx-auto 2xl:w-[1440px] xl:w-[1100px] lg:w-[1000px] md:w-[700px] sm:w-[600px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 sm:gap-4 lg:gap-4 gap-10 mb-[50px]">
        {cars.slice(0, visibleCars).map((car, index) => (
          <div className="mx-auto" key={index}>
            <CarCard car={car} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarCatalogue;

{
  /* {isLoading && visibleCars < 48 && (
  <span className="relative flex mx-auto mb-10 h-10 w-10">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-10 w-10 bg-sky-500"></span>
  </span>
)} */
}
