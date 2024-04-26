"use client";
import React, { useEffect, useState } from "react";
import CarCatalogue from "../components/CarCatalogue";
import Hero from "../components/Hero";
import { fetchCars } from "../utils";
import LoadingMessage from "../components/LoadingMessage";

export default function Home() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCars() {
      try {
        const fetchedCars = await fetchCars();
        setLoading(false);
        setCars(fetchedCars);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    getCars();
  }, []);

  const updateCars = async (make, model, transmission, fuelType) => {
    try {
      const fetchedCars = await fetchCars(make, model, transmission, fuelType);
      setLoading(false);
      setCars(fetchedCars);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <main className="overflow-hidden">
      <Hero />
      {loading && <LoadingMessage />}
      {!loading && (
        <CarCatalogue
          cars={cars.map((car, index) => ({ ...car, key: index }))}
          updateCars={updateCars}
        />
      )}
    </main>
  );
}
