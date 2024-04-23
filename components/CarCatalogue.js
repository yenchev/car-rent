import React, { useState } from "react";
import CarCard from "./CarCard";
import Filter from "./Filter";
import CustomButton from "./CustomButton";

const CarCatalogue = ({ cars, updateCars }) => {
  const [visibleCars, setVisibleCars] = useState(12);

  const loadMore = () => {
    setVisibleCars(visibleCars + 12);
  };

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
          <Filter onFilterSubmit={updateCars} />
        </div>
      </div>
      {cars.length <= 0 ? (
        <p className="text-center text-gray-600 text-4xl">No results found.</p>
      ) : (
        <div className="car__catalog-cards mx-auto 2xl:w-[1440px] xl:w-[1100px] lg:w-[1000px] md:w-[700px] sm:w-[600px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 sm:gap-4 lg:gap-4 gap-10 mb-[50px] ">
          {cars.slice(0, visibleCars).map((car, index) => (
            <div className="mx-auto" key={index}>
              <CarCard car={car} />
            </div>
          ))}
        </div>
      )}
      {visibleCars < cars.length && (
        <div className="loadmore-button mx-auto max-width mb-5">
          <CustomButton
            title="Load More"
            containerStyles="rounded-full mt-10 mx-auto"
            handleClick={loadMore}
          />
        </div>
      )}
    </div>
  );
};

export default CarCatalogue;
