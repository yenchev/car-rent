"use client";
import React, { useEffect, useState } from "react";
import CarCatalogue from "../components/CarCatalogue";
import Hero from "../components/Hero";
import { fetchCars } from "../utils";
import LoadingNoResultsMessage from "../components/LoadingNoResultsMessage"; // Імпорт нового компонента

export default function Home() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    async function getCars() {
      try {
        const fetchedCars = await fetchCars();
        setLoading(false);
        if (fetchedCars.length === 0) {
          setNoResults(true);
        } else {
          setCars(fetchedCars);
          setNoResults(false);
        }
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
      if (fetchedCars.length === 0) {
        setNoResults(true);
      } else {
        setCars(fetchedCars);
        setNoResults(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <main className="overflow-hidden">
      <Hero />
      <LoadingNoResultsMessage loading={loading} noResults={noResults} />
      {!loading && !noResults && (
        <CarCatalogue
          cars={cars.map((car, index) => ({ ...car, key: index }))}
          updateCars={updateCars}
        />
      )}
    </main>
  );
}
