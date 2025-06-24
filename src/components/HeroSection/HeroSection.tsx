"use client";

import React from "react";
import Link from "next/link";
import InfoCard from "@/components/InfoCard/InfoCard";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center bg-center bg-cover px-4 py-20 sm:py-32 min-h-[90dvh] sm:min-h-screen"
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
      <div className="absolute bottom-0 left-1/2 w-full max-w-7xl -translate-x-1/2 translate-y-1/2 px-4">
        <InfoCard />
      </div>
    </section>
  );
};

export default HeroSection;
