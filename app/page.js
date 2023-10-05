"use client";
import React, { useEffect, useState } from "react";
import CarCatalogue from "../components/CarCatalogue";
import Hero from "../components/Hero";
import { fetchCars } from "../utils";

export default function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getCars = async () => {
      try {
        const fetchedCars = await fetchCars();
        setCars(fetchedCars);
      } catch (error) {
        console.error(error);
      }
    };

    getCars();
  }, []);

  return (
    <main className="overflow-hidden">
      <Hero />
      <CarCatalogue cars={cars} />
    </main>
  );
}
