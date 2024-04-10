import axios from "axios";
import Filter from "../components/Filter";

export const fetchCars = async (
  make,
  model,
  transmission,
  fuelType,
  limit = 48
) => {
  const options = {
    method: "GET",
    url: `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars`,
    params: {
      make: make || "audi",
      model: model || "",
      fuel_type: fuelType || "gas",
      transmission: transmission || "a",
      limit: limit,
    },
    headers: {
      "X-RapidAPI-Key": "385891811bmshb7b541a5ab12492p13999cjsneb475bab7416",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const calculateCarRent = (city_mpg, year) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  return rentalRatePerDay.toFixed(0);
};
