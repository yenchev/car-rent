import Image from "next/image";
import React, { useState, CSSProperties } from "react";
import { calculateCarRent, generateCarImageUrl } from "../utils";
import ClipLoader from "react-spinners/ClipLoader";

const CarCard = ({ car }) => {
  let [imageLoaded, setImageLoaded] = useState(false);
  let [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="car__card w-[300px] h-[430px] sm:w-[280px] md:w-[300px] sm:h-[430px] mx-auto my-1 text-center px-5 py-5 bg-indigo-100 dark:bg-gray-800 dark:shadow-gray-800 rounded-3xl shadow-custom xl:hover:shadow-hover dark:hover:shadow-gray-700">
      <div className="h-[15%]">
        <p className="text-start  text-[22px] leading-7 font-bold capitalize">
          {car.make} {car.model}
        </p>
      </div>
      <div className="h-[85%]">
        <p className="text-start text-[25px] pb-3 pt-5 ">
          <span className="inline-block align-top text-[18px]">$</span>
          <span className="font-extrabold">
            {calculateCarRent(car.city_mpg, car.year)}
          </span>
          <span className="inline-block align-bottom text-[17px]">/day</span>
        </p>
        {!imageLoaded && (
          <div className="spinner w-[100%] h-[50%] pt-12">
            <ClipLoader
              color="#1e88e5"
              loading={loading}
              size={70}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}
        <Image
          src={generateCarImageUrl(car)}
          alt="car"
          width={700}
          height={1}
          className="py-5"
          onLoad={handleImageLoad}
        />
        <div className="flex-col columns-3 mt-2">
          <div>
            <img src="gas.svg" alt="gas" className="mx-auto w-4" />
            <p className="mt-1">{car.fuel_type}</p>
          </div>
          <div>
            <img
              src="steering-wheel.svg"
              alt="transmission"
              className="mx-auto w-4"
            />
            <p className="mt-1">
              {car.transmission === "a" ? "automatic" : "manual"}
            </p>
          </div>
          <div>
            <img src="tire.svg" alt="tire" className="mx-auto w-4" />
            <p className="mt-1">{car.drive ? car.drive : "!!!"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
