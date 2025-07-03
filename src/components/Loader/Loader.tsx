// components/Loader.tsx
"use client";

import React from "react";
import Logo from "@/components/Logo/Logo";

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-black space-y-8">
      <div className="scale-90">
        <Logo />
      </div>

      <div className="w-40 h-40 relative flex items-center justify-center">
        {/* Knife and Fork Animation */}
        <div className="relative">
          {/* Knife and Fork crossing in center */}
          <div className="relative w-20 h-20 flex items-center justify-center">
            {/* Knife (diagonal) */}
            <div className="absolute transform rotate-45">
              <div className="relative">
                {/* Knife blade */}
                <div className="w-2 h-16 bg-gradient-to-b from-text-primary to-text-tertiary rounded-t-sm shadow-lg"></div>
                {/* Knife handle */}
                <div className="w-3 h-6 bg-gradient-to-b from-elements-primary-dimmed to-elements-primary-shadow rounded-b-sm -mt-1 -ml-0.5 shadow-md"></div>
              </div>
            </div>

            {/* Fork (diagonal opposite) */}
            <div className="absolute transform -rotate-45">
              <div className="relative">
                {/* Fork prongs */}
                <div className="flex justify-center space-x-1 mb-1">
                  <div className="w-1 h-14 bg-gradient-to-b from-text-primary to-text-tertiary rounded-t-full shadow-lg"></div>
                  <div className="w-1 h-14 bg-gradient-to-b from-text-primary to-text-tertiary rounded-t-full shadow-lg"></div>
                  <div className="w-1 h-14 bg-gradient-to-b from-text-primary to-text-tertiary rounded-t-full shadow-lg"></div>
                  <div className="w-1 h-14 bg-gradient-to-b from-text-primary to-text-tertiary rounded-t-full shadow-lg"></div>
                </div>
                {/* Fork handle */}
                <div className="w-4 h-6 bg-gradient-to-b from-elements-primary-dimmed to-elements-primary-shadow rounded-b-sm mx-auto shadow-md"></div>
              </div>
            </div>
          </div>

          {/* Sparkles around the cutlery */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 animate-ping animation-delay-0">
              <div className="w-2 h-2 bg-elements-primary-main rounded-full"></div>
            </div>
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 animate-ping animation-delay-300">
              <div className="w-2 h-2 bg-elements-primary-shadow rounded-full"></div>
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 animate-ping animation-delay-600">
              <div className="w-2 h-2 bg-elements-primary-dimmed rounded-full"></div>
            </div>
            <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 animate-ping animation-delay-900">
              <div className="w-2 h-2 bg-helpers-success-main rounded-full"></div>
            </div>
          </div>

          {/* Additional floating sparkles */}
          <div className="absolute inset-0">
            <div className="absolute -top-12 -left-6 animate-ping animation-delay-200">
              <div className="w-1 h-1 bg-elements-primary-main rounded-full"></div>
            </div>
            <div className="absolute -top-12 -right-6 animate-ping animation-delay-700">
              <div className="w-1 h-1 bg-text-primary rounded-full"></div>
            </div>
            <div className="absolute -bottom-12 -left-6 animate-ping animation-delay-1000">
              <div className="w-1 h-1 bg-elements-primary-shadow rounded-full"></div>
            </div>
            <div className="absolute -bottom-12 -right-6 animate-ping animation-delay-400">
              <div className="w-1 h-1 bg-elements-primary-dimmed rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant-themed loading text */}
      <div className="text-text-primary text-sm font-light tracking-wider opacity-75 text-center">
        <div className="flex items-center justify-center space-x-2">
          <span className="inline-block animate-pulse">
            Setting the table for you
          </span>
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-elements-primary-main rounded-full animate-bounce animation-delay-0"></div>
            <div className="w-1 h-1 bg-elements-primary-dimmed rounded-full animate-bounce animation-delay-100"></div>
            <div className="w-1 h-1 bg-elements-primary-shadow rounded-full animate-bounce animation-delay-200"></div>
          </div>
        </div>
        <div className="mt-2 text-xs opacity-60 animate-pulse">
          Your dining experience awaits...
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }

        .animation-delay-0 {
          animation-delay: 0s;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-900 {
          animation-delay: 0.9s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default Loader;
