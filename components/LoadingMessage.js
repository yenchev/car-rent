import React, { useEffect, useState } from "react";

const LoadingMessage = () => {
  const [loadingDots, setLoadingDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingDots((prevDots) => {
        if (prevDots.length === 4) {
          return ".";
        } else {
          return prevDots + ".";
        }
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center my-16 text-gray-600">
      <p className="text-4xl inline-block">Loading</p>
      <div className="w-16 inline-block">
        <p className="text-4xl">{loadingDots}</p>
      </div>
    </div>
  );
};

export default LoadingMessage;
