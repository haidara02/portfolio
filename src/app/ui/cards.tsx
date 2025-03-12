"use client";
import React from "react";
import Image from "next/image";
import "../styles/cards.css";

const Cards = () => {
  return (
    <div className="cards relative flex justify-center items-center mt-4 lg:mt-0 px-6 py-10 lg:px-10 min-h-[400px] min-w-[600px]">
      <div className="card">
        <Image
          src="/images/slide5.jpg"
          alt="hero image"
          className="absolute object-cover w-full h-full"
          width={300}
          height={300}
        />
      </div>
      <div className="card">
        <Image
          src="/images/slide4.jpg"
          alt="hero image"
          className="absolute object-cover w-full h-full"
          width={300}
          height={300}
        />
      </div>
      <div className="card">
        <Image
          src="/images/slide3.jpg"
          alt="hero image"
          className="absolute object-cover w-full h-full"
          width={300}
          height={300}
        />
      </div>
      <div className="card">
        <Image
          src="/images/slide2.jpg"
          alt="hero image"
          className="absolute object-cover w-full h-full"
          width={300}
          height={300}
        />
      </div>
      <div className="card">
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
