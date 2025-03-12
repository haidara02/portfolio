"use client";
import React from "react";
import Image from "next/image";
import "../styles/cards.css";

const Cards = () => {
  return (
    <div className="cards relative flex justify-center items-center min-h-[160px] min-w-[200px] sm:min-h-[266px] sm:min-w-[400px] md:min-h-[400px] md:min-w-[600px]">
      <div className="card h-[65%] w-[30%]">
        <Image
          src="/images/slide5.jpg"
          alt="hero image"
          className="absolute object-cover w-full h-full "
          width={300}
          height={300}
        />
      </div>
      <div className="card h-[65%] w-[30%]">
        <Image
          src="/images/slide4.jpg"
          alt="hero image"
          className="absolute object-cover w-full h-full"
          width={300}
          height={300}
        />
      </div>
      <div className="card h-[65%] w-[30%]">
        <Image
          src="/images/slide3.jpg"
          alt="hero image"
          className="absolute object-cover w-full h-full"
          width={300}
          height={300}
        />
      </div>
      <div className="card h-[65%] w-[30%]">
        <Image
          src="/images/slide2.jpg"
          alt="hero image"
          className="absolute object-cover w-full h-full"
          width={300}
          height={300}
        />
      </div>
      <div className="card h-[65%] w-[30%]">
        <Image
          src="/images/slide1.jpg"
          alt="graduation image"
          className="absolute object-cover w-full h-full"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Cards;
