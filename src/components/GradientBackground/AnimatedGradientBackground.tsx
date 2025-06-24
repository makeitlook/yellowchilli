"use client";
import React from "react";

interface GradientBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

const AnimatedGradientBackground: React.FC<GradientBackgroundProps> = ({
  className = "",
  children,
}) => {
  return (
    <div
      className={`gradient-background ${className}`}
      style={{
        position: "relative",
        background: `conic-gradient(from 0deg at 50% 50%, 
          #8B4513 0deg, #CD853F 72deg, #D2691E 144deg, 
          #FF6347 216deg, #DC143C 288deg, #8B4513 360deg)`,
        backgroundSize: "400% 400%",
        animation: "gradientRotate 20s ease infinite",
      }}
    >
      <style jsx>{`
        @keyframes gradientRotate {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 50% 100%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .gradient-background::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
              ellipse at 20% 70%,
              rgba(255, 215, 0, 0.3) 0%,
              transparent 40%
            ),
            radial-gradient(
              ellipse at 80% 30%,
              rgba(255, 69, 0, 0.2) 0%,
              transparent 40%
            ),
            linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(139, 69, 19, 0.1));
          backdrop-filter: blur(1px);
          pointer-events: none;
        }
      `}</style>
      {children}
    </div>
  );
};

export default AnimatedGradientBackground;
