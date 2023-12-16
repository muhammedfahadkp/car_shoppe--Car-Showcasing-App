"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/hero_1.png", "/hero_2.png", "/hero_3.png"]; // Update with your image paths

  const handleScroll = () => {
    // Handle scroll logic
  };


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book, and Start a Journey. Is it that easy{" "}
          <span style={{ color: "#4B72FF" }}>!</span>
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Find Yours"
          containerStyle="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src={images[currentImageIndex]}
            alt={`hero-${currentImageIndex + 1}`}
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
