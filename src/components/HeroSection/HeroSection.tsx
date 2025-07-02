"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookNowCTA } from "../Button/BookNowCTA";

const HeroSection: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.25, 0, 1],
        delay: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.25, 0, 1],
        delay: 0.8,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-neutral-shadow-heavy"
    >
      {/* Background Video */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source
            src="https://videos.pexels.com/video-files/2620043/2620043-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Glass Overlay */}
      <div className="absolute inset-0 w-full h-full bg-neutral/5 backdrop-blur-md" />

      {/* Elegant Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.3)_1px,_transparent_0)] bg-[length:32px_32px]" />
      </div>

      {/* Subtle Gradient Borders */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <motion.div
          className="text-center space-y-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Elegant Subtitle with refined typography */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 mt-6 sm:mt-0"
          >
            <motion.div className="inline-flex items-center gap-4">
              <motion.div
                className="w-12 h-px bg-gradient-to-r from-transparent to-elements-primary-main/40"
                variants={lineVariants}
                style={{ originX: 0 }}
              />
              <h2 className="text-text-primary/90 text-sm sm:text-base font-light tracking-[0.2em] uppercase">
                Authentic Indian & Afghan Cuisine
              </h2>
              <motion.div
                className="w-12 h-px bg-gradient-to-l from-transparent to-elements-primary-main/40"
                variants={lineVariants}
                style={{ originX: 1 }}
              />
            </motion.div>
          </motion.div>
          {/* Logo with sophisticated presentation */}
          <motion.div variants={logoVariants} className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 rounded-3xl blur-xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="relative z-10"
            >
              <Image
                src="/images/text.png"
                alt="Yellow Chilli"
                width={300}
                height={120}
                className="w-full h-auto max-w-xl mx-auto filter drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
          {/* Refined Description */}
          <motion.div variants={itemVariants}>
            <p className="text-text-primary text-lg sm:text-2xl lg:text-lg max-w-4xl mx-auto leading-relaxed font-light">
              Where every dish tells a story of tradition, flavour, and passion.
            </p>
          </motion.div>
          {/* Sophisticated CTA Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <BookNowCTA
                variant="ghost"
                size="medium"
                shape="pill"
                text="View Menu"
                useGradient={false}
                gradientFrom="from-elements-primary-main"
                gradientTo="to-elements-primary-shadow"
                textColor="text-text-primary"
                shadowColor="shadow-black"
                onClick={() => window.open("/menu.pdf", "_blank")}
              />
              <BookNowCTA
                variant="outline"
                size="medium"
                shape="pill"
                text="Get In Touch"
                useGradient={false}
                gradientFrom="from-elements-primary-main"
                gradientTo="to-elements-primary-shadow"
                textColor="text-text-primary"
                shadowColor="shadow-black"
                phoneNumber="02035185930"
              />
            </div>

            {/* Elegant Contact Info 
            <motion.div
              className="text-center space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <p className="text-text-primary/40 text-sm">
                Or call us directly
              </p>
              <motion.a
                href="tel:02035185930"
                className="inline-flex items-center gap-2 text-text-primary/80 hover:text-text-primary text-lg font-medium transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-2xl font-light tracking-wider">
                  0203 518 5930
                </span>
              </motion.a>
            </motion.div>
            */}
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-8 pt-8"
            variants={itemVariants}
          >
            {[
              { text: "Unique Taste", delay: 0 },
              { text: "Family Recipes", delay: 0.1 },
              { text: "Premium Ingredients", delay: 0.2 },
            ].map((feature, index) => (
              <motion.div
                key={feature.text}
                className="group text-text-primary/60 hover:text-text-primary/90 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + feature.delay, duration: 0.6 }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-1 h-1 bg-white/50 rounded-full group-hover:bg-white/80 transition-colors duration-300"
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut",
                    }}
                  />
                  <span className="text-sm font-light tracking-wide uppercase">
                    {feature.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
