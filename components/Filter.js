import React, { useState } from "react";
import { carMakes, carModels } from "../constants/index";

const Filter = ({ onFilterSubmit }) => {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    fuelType: "",
    transmission: "",
  });

  const { make, model, fuelType, transmission } = formData;

  const handleFilterSubmit = () => {
    console.log(formData);
    onFilterSubmit(make, model, transmission, fuelType);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container w-full mx-auto justify-around p-2 md:p-0">
      <div className="mx-auto w-full 2xl:w-[100%] xl:w-[1100px] lg:w-[880px]  lg:bg-blue-400 lg:dark:bg-gray-800 lg:dark:shadow-gray-800 lg:shadow-custom p-4 sm:p-2 xl:p-2 grid grid-cols-1 gap-6 rounded-xl">
        <div className="flex justify-around flex-col lg:flex-row mx-auto w-full ">
          <div className="md:pt-0 mx-auto w-full text-center">
            <select
              name="make"
              value={make}
              onChange={handleInputChange}
              className="2xl:w-[250px] xl:w-[220px] lg:w-[170px] md:w-[90%] py-1 lg:py-2 px-4 rounded-full bg-blue-400 lg:bg-blue-100 dark:bg-blue-900 dark:text-gray-200 w-full mx-auto outline-none"
            >
              <option value="">Make...</option>
              {carMakes.map((carMake, index) => (
                <option key={index} value={carMake}>
                  {carMake}
                </option>
              ))}
            </select>
          </div>
          <div className="pt-3 lg:pt-0 mx-auto w-full text-center">
            <select
              name="model"
              value={model}
              onChange={handleInputChange}
              className="2xl:w-[250px] xl:w-[220px] lg:w-[170px] md:w-[90%] py-1 lg:py-2 px-4 rounded-full bg-blue-400 lg:bg-blue-100 dark:bg-blue-900 dark:text-gray-200 w-full mx-auto outline-none"
            >
              <option value="">Model...</option>
              {carModels[make]?.map((carModel, index) => (
                <option key={index} value={carModel}>
                  {carModel}
                </option>
              ))}
            </select>
          </div>
          <div className="pt-3 lg:pt-0  mx-auto w-full text-center">
            <select
              name="fuelType"
              value={fuelType}
              onChange={handleInputChange}
              className="2xl:w-[250px] xl:w-[220px] lg:w-[170px] md:w-[90%] py-1 lg:py-2 px-4 rounded-full bg-blue-400 lg:bg-blue-100 dark:bg-blue-900 dark:text-gray-200 w-full mx-auto outline-none"
            >
              <option value="diesel">Diesel</option>
              <option value="gas">Gas</option>
              <option value="electricity">Electricity</option>
            </select>
          </div>
          <div className="pt-3 lg:pt-0 mx-auto w-full text-center">
            <select
              name="transmission"
              value={transmission}
              onChange={handleInputChange}
              className="2xl:w-[250px] xl:w-[220px] lg:w-[170px] md:w-[90%] py-1 lg:py-2 px-4 rounded-full bg-blue-400 lg:bg-blue-100 dark:bg-blue-900 dark:text-gray-200 w-full mx-auto outline-none"
            >
              <option value="m">Manual</option>
              <option value="a">Automatic</option>
            </select>
          </div>
          <div className="flex justify-center pt-3 lg:pt-0 mx-auto">
            <button
              onClick={handleFilterSubmit}
              className="lg:w-10 lg:h-10 lg:p-2 w-10 h-10 px-2 rounded-full bg-blue-400 lg:bg-blue-100 dark:bg-blue-700 lg:hover:bg-blue-200 dark:hover:bg-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#616161"
                  d="M34.6 28.1H38.6V45.1H34.6z"
                  transform="rotate(-45.001 36.586 36.587)"
                ></path>
                <path
                  fill="#616161"
                  d="M20 4A16 16 0 1 0 20 36A16 16 0 1 0 20 4Z"
                ></path>
                <path
                  fill="#37474F"
                  d="M36.2 32.1H40.2V44.400000000000006H36.2z"
                  transform="rotate(-45.001 38.24 38.24)"
                ></path>
                <path
                  fill="#64B5F6"
                  d="M20 7A13 13 0 1 0 20 33A13 13 0 1 0 20 7Z"
                ></path>
                <path
                  fill="#BBDEFB"
                  d="M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
