import React, { useState, useEffect } from "react";
import CarCard from "./CarCard";
import CustomButton from "./CustomButton";

const CarCatalogue = ({ cars }) => {
  const [visibleCars, setVisibleCars] = useState(12);
  const [buttonScale, setButtonScale] = useState("scale-100");

  const handleShowMore = () => {
    if (visibleCars === 48) {
      setButtonScale("scale-110");
      setTimeout(() => {
        setButtonScale("scale-100");
      }, 120);
    }
    setVisibleCars((prevVisibleCars) =>
      prevVisibleCars < 48 ? prevVisibleCars + 12 : prevVisibleCars
    );
  };

  return (
    <div className="car__catalog-wrapper">
      <div className="car__catalog-header max-width">
        <h2 className="car__catalog-title text-[40px] font-extrabold">
          Car Catalogue
        </h2>
        <h3 className="car__catalog-subtitle text-[18px] mb-6">
          Explore out cars you might like
        </h3>
      </div>
      <div className="car__catalog-filter max-width mb-10">Filter</div>
      <div className="car__catalog-cards max-width grid grid-cols-4 gap-10 mb-[50px]">
        {cars.slice(0, visibleCars).map((car) => (
          <div key={Math.random()}>
            <CarCard car={car} />
          </div>
        ))}
      </div>
      <div className="car__catalog-button">
        <CustomButton
          title="Show More"
          containerStyles={`rounded-full my-10  mx-auto bg-blue-600 transition duration-75 ${buttonScale}`}
          handleClick={handleShowMore}
        />
      </div>
    </div>
  );
};

export default CarCatalogue;
