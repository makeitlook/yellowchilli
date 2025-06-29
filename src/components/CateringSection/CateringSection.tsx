"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CateringSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const services = [
    {
      icon: "🎉",
      title: "Corporate Events",
      description:
        "Professional catering for meetings, conferences, and corporate celebrations with authentic flavors.",
    },
    {
      icon: "💒",
      title: "Weddings & Celebrations",
      description:
        "Make your special day unforgettable with our traditional Indian and Afghan wedding feast menus.",
    },
    {
      icon: "🏠",
      title: "Private Parties",
      description:
        "Intimate gatherings and family celebrations with personalized menus tailored to your preferences.",
    },
    {
      icon: "🎓",
      title: "Special Occasions",
      description:
        "From birthdays to graduations, we bring the authentic taste of Yellow Chilli to your celebration.",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-card-background via-neutral-main to-card-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 500 500">
          <defs>
            <pattern
              id="cateringPattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="2" fill="#fca311" />
              <circle cx="25" cy="25" r="1.5" fill="#ffcd73" />
              <circle cx="75" cy="75" r="1" fill="#c27400" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cateringPattern)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-elements-primary-main/10 text-elements-primary-main rounded-full text-sm font-medium mb-4">
              Catering Services
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6"
            variants={itemVariants}
          >
            Bring Yellow Chilli
            <span className="block text-elements-primary-main">
              to Your Event
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            From intimate gatherings to grand celebrations, we bring the
            authentic flavors of Southall directly to your venue. Let us make
            your event unforgettable with our traditional recipes and
            exceptional service.
          </motion.p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/catering-hero.jpg"
                alt="Yellow Chilli Catering Setup"
                fill
                className="object-cover"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <motion.div
              className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-2xl border border-border-main"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-elements-primary-main mb-1">
                  500+
                </div>
                <div className="text-sm text-text-secondary">
                  Events Catered
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Why Choose Yellow Chilli Catering?
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                With years of experience serving the Southall community, we
                understand the importance of authentic flavors and exceptional
                presentation. Our catering team ensures every dish maintains the
                same quality and taste you experience in our restaurant.
              </p>
            </motion.div>

            <motion.div className="grid gap-4" variants={itemVariants}>
              {[
                "Fresh ingredients sourced daily",
                "Customizable menu options",
                "Professional setup and service",
                "Dietary accommodations available",
                "Competitive pricing packages",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-elements-primary-main rounded-full" />
                  <span className="text-text-secondary">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                className="bg-gradient-to-r from-elements-primary-main to-elements-primary-light text-elements-primary-contrastText font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Catering Quote
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Services */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border-dimmed group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-text-primary mb-3">
                {service.title}
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16 bg-gradient-to-r from-elements-primary-main/10 to-elements-primary-light/10 rounded-2xl p-8 lg:p-12 border border-elements-primary-main/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-text-primary mb-4">
            Ready to Plan Your Event?
          </h3>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Contact our catering team today to discuss your requirements and
            receive a customized quote for your special occasion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="bg-elements-primary-main text-elements-primary-contrastText font-bold px-8 py-4 rounded-full text-lg hover:bg-elements-primary-shadow transition-colors duration-300 min-w-[200px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Now: 0204 123 4567
            </motion.button>
            <motion.button
              className="border-2 border-elements-primary-main text-elements-primary-main font-bold px-8 py-4 rounded-full text-lg hover:bg-elements-primary-main hover:text-elements-primary-contrastText transition-all duration-300 min-w-[200px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Email Inquiry
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CateringSection;
