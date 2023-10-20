import React, { useState, useEffect } from "react";
import CarCard from "./CarCard";
import CustomButton from "./CustomButton";

const CarCatalogue = ({ cars }) => {
  const [visibleCars, setVisibleCars] = useState(12);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Показуємо кнопку після завантаження перших CarCard
    setShowButton(true);
  }, []);

  const handleShowMore = () => {
    setVisibleCars((prevVisibleCars) =>
      prevVisibleCars < 48 ? prevVisibleCars + 12 : prevVisibleCars
    );
  };

  return (
    <div className="car__catalog-wrapper">
      <div className="car__catalog-header max-width px-16">
        <h2 className="car__catalog-title text-[40px] font-extrabold">
          Car Catalogue
        </h2>
        <h3 className="car__catalog-subtitle text-[18px] pb-6">
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
      {showButton && visibleCars < 48 && (
        <div className="car__catalog-button">
          <CustomButton
            title="Show More"
            containerStyles="rounded-full my-10 mx-auto bg-blue-600 transition duration-75"
            handleClick={handleShowMore}
          />
        </div>
      )}
    </div>
  );
};

export default CarCatalogue;
