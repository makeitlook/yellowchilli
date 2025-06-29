"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ComingSoon(): JSX.Element {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

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
          src="https://videos.pexels.com/video-files/2620043/2620043-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Glass Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black/10 backdrop-blur-md" />

      {/* Subtle Bokeh Lights */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/8 rounded-full blur-sm"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              width: `${60 + Math.random() * 40}px`,
              height: `${60 + Math.random() * 40}px`,
            }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Gradient Glow Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-2xl"
        animate={{
          opacity: [0.05, 0.15, 0.05],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl"
        animate={{
          opacity: [0.03, 0.12, 0.03],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 text-center space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer"
        >
          <Image
            src="/images/logo.svg"
            alt="Yellow Chilli logo"
            width={240}
            height={80}
            className="mx-auto filter drop-shadow-lg"
          />
        </motion.div>

        {/* Message + Date */}
        <div className="space-y-8">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-light text-white tracking-wide"
          >
            Opening Soon
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-8"
          >
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-3xl md:text-4xl text-white glow"
            >
              July
            </motion.span>
            <motion.div
              className="w-px bg-white/30"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 48, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="text-3xl md:text-4xl text-white glow"
            >
              2025
            </motion.span>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-md md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed"
          >
            A bold new flavour is coming to Southall. <br />
            Yellow Chilli is almost ready to serve you unforgettable Indian and
            Afghan cuisine — infused with tradition, crafted with heart.
          </motion.p>
        </div>

        {/* Contact */}
        <motion.div variants={itemVariants} className="space-y-4 text-white/70">
          <motion.div
            className="bg-white/30 mx-auto"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 64, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            style={{ height: "1px" }}
          />
          <motion.p
            className="text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            72-76 Western Rd, Southall, UB2 5DZ
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Custom styles for glow effect */}
      <style jsx>{`
        .glow {
          text-shadow: 0 0 6px rgba(255, 255, 255, 0.4),
            0 0 12px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </main>
  );
}
