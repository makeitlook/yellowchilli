"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OurStory = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Restaurant history data
  const historyImages = [
    {
      id: 1,
      title: "Family Grill - Hayes",
      date: "2013 - 2017",
      description: "Where it all began",
      image: "images/hayes.png", // Replace with your actual Family Grill image
      alt: "Family Grill restaurant in Hayes, our humble beginning",
    },
    {
      id: 2,
      title: "Yellow Chilli - Hounslow",
      date: "2017 - 2022",
      description: "Our evolution continues",
      image: "images/hounslow.png", // Replace with your actual Hounslow location image
      alt: "Yellow Chilli restaurant in Hounslow, our growth phase",
    },
    {
      id: 3,
      title: "Yellow Chilli - Southall",
      date: "2022 - Present",
      description: "Our vibrant new home",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop", // Replace with your actual Southall location image
      alt: "Yellow Chilli restaurant in Southall, our current location",
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === historyImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? historyImages.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="relative z-20 overflow-hidden text-text-primary"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-elements-primary-main/3 via-transparent to-elements-primary-shadow/3 rounded-3xl" />

      <div className="relative grid lg:grid-cols-2 gap-16 p-2 lg:p-20 items-center">
        {/* Left Side - Clean Text Content */}
        <motion.div className="space-y-10" variants={itemVariants}>
          {/* Title Section */}
          <motion.div variants={itemVariants}>
            <motion.div className="flex items-center gap-6 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-elements-primary-main/60" />
              <h2 className="text-elements-primary-main text-3xl lg:text-4xl font-light uppercase tracking-[0.2em] text-center">
                our story
              </h2>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-elements-primary-shadow/60" />
            </motion.div>
            <motion.p
              className="text-text-secondary text-lg leading-relaxed font-light"
              variants={itemVariants}
            >
              From humble beginnings to culinary excellence, discover the story
              behind our passion for authentic flavours.
            </motion.p>
          </motion.div>

          {/* Story Timeline */}
          <motion.div className="space-y-10">
            {/* Family Grill Era */}
            <motion.div
              className="relative pl-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="absolute left-0 top-2 w-3 h-3 bg-elements-primary-main rounded-full"></div>
              <div className="absolute left-1.5 top-5 w-px h-14 bg-elements-primary-main/30"></div>

              <motion.h3
                className="text-text-primary text-2xl font-medium mb-2"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Family Grill - Hayes
              </motion.h3>
              <motion.p
                className="text-elements-primary-main font-medium mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                2013 - 2017
              </motion.p>
              <motion.p
                className="text-text-secondary leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                Our journey began in a cozy pub in Hayes, where we first
                introduced our authentic recipes to the local community. Family
                Grill became a beloved neighborhood spot, laying the foundation
                for everything that followed.
              </motion.p>
            </motion.div>

            {/* Yellow Chilli Hounslow Era */}
            <motion.div
              className="relative pl-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="absolute left-0 top-2 w-3 h-3 bg-helpers-warning-main rounded-full"></div>
              <div className="absolute left-1.5 top-5 w-px h-14 bg-helpers-warning-main/30"></div>

              <motion.h3
                className="text-text-primary text-2xl font-medium mb-2"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                Yellow Chilli - Hounslow
              </motion.h3>
              <motion.p
                className="text-helpers-warning-main font-medium mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                2017 - 2022
              </motion.p>
              <motion.p
                className="text-text-secondary leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                We evolved and rebranded as Yellow Chilli, moving to Hounslow
                where we refined our menu and expanded our vision. This period
                marked our growth into a destination for exceptional Indian and
                Afghan cuisine.
              </motion.p>
            </motion.div>

            {/* Current Era */}
            <motion.div
              className="relative pl-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 2.1 }}
            >
              <div className="absolute left-0 top-2 w-3 h-3 bg-helpers-success-main rounded-full"></div>
              <div className="absolute left-1.5 top-5 w-px h-14 bg-helpers-success-main/30"></div>

              <motion.h3
                className="text-text-primary text-2xl font-medium mb-2"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 2.3 }}
              >
                Yellow Chilli - Southall
              </motion.h3>
              <motion.p
                className="text-helpers-success-main font-medium mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 2.5 }}
              >
                2022 - Present
              </motion.p>
              <motion.p
                className="text-text-secondary leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 2.7 }}
              >
                Today, we've found our home in the heart of Southall, surrounded
                by the vibrant culture that inspires our cuisine. Here, we
                continue to honour our heritage while creating new memories for
                families and friends.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="pt-6 border-t border-border-dimmed/30"
            variants={itemVariants}
          >
            <p className="text-text-tertiary text-sm italic">
              Each location has shaped who we are today, and every dish tells
              the story of our journey through tradition, passion, and the
              pursuit of culinary excellence.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side - Image Carousel */}
        <motion.div className="relative" variants={itemVariants}>
          {/* Main Image Container */}
          <div className="relative h-[400px] sm:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-neutral-dimmed">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={historyImages[currentImageIndex].image}
                  alt={historyImages[currentImageIndex].alt}
                  className="w-full h-full object-cover"
                />
                {/* Elegant Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Image Info */}
                <div className="absolute bottom-8 left-8 right-8 text-text-primary">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <h3 className="text-xl lg:text-2xl font-light mb-2 tracking-wide">
                      {historyImages[currentImageIndex].title}
                    </h3>
                    <p className="text-text-primary/90 text-base font-medium mb-1">
                      {historyImages[currentImageIndex].date}
                    </p>
                    <p className="text-text-primary/80 text-sm font-light">
                      {historyImages[currentImageIndex].description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <motion.button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/15 backdrop-blur-md border border-white/25 rounded-full flex items-center justify-center text-text-primary hover:bg-white/25 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            <motion.button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/15 backdrop-blur-md border border-white/25 rounded-full flex items-center justify-center text-text-primary hover:bg-white/25 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>

          {/* Current Image Indicator */}
          <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-text-primary text-xs font-medium">
            {currentImageIndex + 1} / {historyImages.length}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurStory;
