"use client";

import React from "react";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-[100dvh] bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: "url('/images/og-default.png')" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center space-y-8 px-4">
        <h1 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-md">
          Yellow Chilli
        </h1>
        <div className="flex gap-4 justify-center">
          <Link
            href="/menu"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium px-6 py-3 rounded-md"
          >
            Menu
          </Link>
          <Link
            href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-md"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
