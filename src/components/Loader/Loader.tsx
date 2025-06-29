// components/Loader.tsx
"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Logo from "@/components/Logo/Logo";

const Loader: React.FC = () => (
  <div className="flex flex-col justify-center items-center w-full h-screen bg-black space-y-8">
    <div className="scale-90">
      <Logo />
    </div>
    <div className="w-40 h-40">
      <DotLottieReact
        src="https://lottie.host/8e97fa0c-a61d-4ec5-a996-558f90df92f6/m0cPgKymqz.lottie"
        loop
        autoplay
        style={{
          width: "100%",
          height: "100%",
          filter: "brightness(1.2)",
        }}
      />
    </div>
  </div>
);

export default Loader;
