import React from "react";
import Image from "next/image";

export default function ComingSoon(): JSX.Element {
  return (
    <main className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source
          src="https://www.w3schools.com/howto/rain.mp4"
          type="video/mp4"
        />
      </video>

      {/* Simple Glass Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black/40 backdrop-blur-md" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 text-center space-y-12">
        {/* Logo */}
        <div className="transform hover:scale-105 transition-transform duration-500">
          <Image
            src="/images/logo.svg"
            alt="Yellow Chilli logo"
            width={240}
            height={80}
            className="mx-auto filter drop-shadow-lg"
          />
        </div>

        {/* Main Message */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-wide">
            Opening Soon
          </h1>

          {/* Date */}
          <div className="flex items-center justify-center space-x-8">
            <span className="text-3xl md:text-4xl text-white">July</span>
            <div className="w-px h-12 bg-white/30"></div>
            <span className="text-3xl md:text-4xl text-white">2025</span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            A bold new flavour is coming to Southall. <br />
            Yellow Chilli is almost ready to serve you unforgettable Indian and
            Afghan cuisine — infused with tradition, crafted with heart.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-4 text-white/70">
          <div className="w-16 h-px bg-white/30 mx-auto"></div>
          <p className="text-sm">72-76 Western Rd, Southall, UB2 5DZ</p>
        </div>
      </div>
    </main>
  );
}
