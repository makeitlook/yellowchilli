"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
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

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const pulseAnimation = {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.8, 0.3],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-neutral-shadow-heavy">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/images/food/header.png"
          alt="Yellow Chilli Restaurant Food"
          fill
          className="object-cover"
          priority
          quality={85}
        />
      </motion.div>

      {/* Enhanced Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gray/70 to-black/90" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Spice Particles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-3 h-3 bg-elements-primary-main/80 rounded-full shadow-lg"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-2.5 h-2.5 bg-elements-primary-light/90 rounded-full shadow-lg"
          animate={{
            y: [-8, 12, -8],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            },
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-elements-primary-shadow/80 rounded-full shadow-lg"
          animate={{
            y: [-6, 14, -6],
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            },
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-2 h-2 bg-helpers-warning-main/70 rounded-full shadow-lg"
          animate={{
            y: [-12, 8, -12],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            },
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <motion.div
          className="text-center space-y-12 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Subtitle */}
          <motion.div variants={itemVariants}>
            <p className="text-text-clear text-lg sm:text-xl font-medium tracking-wider uppercase mb-4 mt-10 sm:mt-0">
              Authentic Indian & Afghan Cuisine
            </p>
            <motion.div
              className="w-24 h-0.5 bg-gradient-to-r from-elements-primary-main to-elements-primary-shadow mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          {/* Main Title */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-text-clear mb-6">
              <motion.span
                className="inline-block"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src="/images/text.png"
                  alt="Yellow Chilli Text Logo"
                  width={400}
                  height={100}
                  className="w-full h-auto max-w-2xl"
                />
              </motion.span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants}>
            <p className="text-text-clear text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Experience the vibrant flavors of Southall where tradition meets
              taste. Every dish tells a story of heritage, spices, and passion.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/menu"
                className="group relative overflow-hidden bg-gradient-to-r from-elements-primary-main to-elements-primary-light hover:from-elements-primary-shadow hover:to-elements-primary-main text-elements-primary-contrastText font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-2xl min-w-[200px] block"
              >
                <span className="relative z-10">Explore Menu</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-elements-primary-shadow to-helpers-error-main"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="group relative overflow-hidden border-2 border-text-clear text-text-clear hover:text-elements-primary-main font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-2xl min-w-[200px] block"
              >
                <span className="relative z-10">Book Table</span>
                <motion.div
                  className="absolute inset-0 bg-text-clear"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Features */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 pt-8"
            variants={itemVariants}
          >
            {[
              { color: "bg-helpers-success-main", text: "Fresh Daily" },
              { color: "bg-elements-primary-main", text: "Family Recipes" },
              { color: "bg-helpers-error-main", text: "Authentic Spices" },
            ].map((feature, index) => (
              <motion.div
                key={feature.text}
                className="flex items-center gap-2 text-text-clear"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <motion.div
                  className={`w-2 h-2 ${feature.color} rounded-full`}
                  animate={{
                    scale: [1, 1.3, 1],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    },
                  }}
                />
                <span className="text-sm font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
