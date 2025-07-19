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
      date: "2025 - Present",
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

      <div className="relative p-2 lg:p-20">
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
                2025 - Present
              </motion.p>
              <motion.p
                className="text-text-secondary leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 2.7 }}
              >
                Today, we&apos;ve found our home in the heart of Southall,
                surrounded by the vibrant culture that inspires our cuisine.
                Here, we continue to honour our heritage while creating new
                memories for families and friends.
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
      </div>
    </motion.section>
  );
};

export default OurStory;
