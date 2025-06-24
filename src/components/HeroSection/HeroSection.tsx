"use client";

import React from "react";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center bg-center bg-cover px-4 py-20 sm:py-32 min-h-screen overflow-hidden"
      style={{ backgroundImage: "url('/images/food/header.png')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative text-center space-y-8 px-4">
        <h1 className="text-4xl sm:text-6xl font-bold text-text-clear drop-shadow-md">
          Yellow Chilli
        </h1>
        <div className="flex gap-4 justify-center">
          <Link
            href="/menu"
            className="bg-elements-primary-main hover:bg-elements-primary-shadow text-elements-primary-contrastText font-medium px-6 py-3 rounded-md"
          >
            Menu
          </Link>
          <Link
            href="/contact"
            className="bg-helpers-error-button hover:bg-helpers-error-button-hover text-elements-primary-contrastText font-medium px-6 py-3 rounded-md"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
