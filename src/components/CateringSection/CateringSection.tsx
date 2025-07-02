"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BookNowCTA } from "../Button/BookNowCTA";

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const services = [
    {
      title: "Weddings & Celebrations",
      description:
        "Create magical moments with our exquisite wedding menus featuring traditional and contemporary dishes that honour your special day.",
    },
    {
      title: "Corporate Events",
      description:
        "Professional catering for meetings, conferences, and corporate celebrations with authentic flavours that impress clients and colleagues.",
    },
    {
      title: "Private Gatherings",
      description:
        "Intimate family celebrations and special occasions with personalised menus tailored to your preferences and dietary requirements.",
    },
  ];

  const features = [
    "Fresh ingredients sourced daily from trusted local suppliers",
    "Customisable menus designed to meet your specific requirements",
    "Professional presentation with elegant setup and attentive service",
    "Flexible packages to accommodate events of any size",
  ];

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/food/catering-bg.jpg"
          alt="Catering background"
          fill
          priority
          className="object-cover object-top sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral/90 via-neutral/10 to-neutral/20" />
        {/* Glass blur overlay */}
        <div className="absolute inset-0 bg-neutral/60 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Decorative background pattern */}
              <div className="absolute -inset-4 bg-white/5 rounded-3xl transform rotate-3"></div>
              <div className="absolute -inset-2 bg-white/10 rounded-3xl transform -rotate-1"></div>

              {/* Main image container */}
              <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/food/catering-hero.jpg"
                  alt="Yellow Chilli Catering Experience"
                  fill
                  className="object-cover"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Header */}
            <motion.div variants={itemVariants}>
              <div className="mb-6">
                <span className="text-white/70 text-sm font-medium tracking-wider uppercase">
                  Catering Services
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Enjoy An Exceptional
                <span className="block">Journey of Taste</span>
              </h2>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                Our catering service specialises in creating unforgettable
                culinary experiences for weddings, birthdays, graduations, and
                all types of events. With exceptional attention to detail and a
                passion for flavour, we turn every celebration into a lasting
                memory.
              </p>
            </motion.div>

            {/* Two Column Services */}
            <motion.div variants={itemVariants}>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="flex items-center mb-4">
                    <svg
                      className="w-6 h-6 text-white mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      Specialist
                    </h3>
                  </div>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                    Expert culinary team with years of experience in traditional
                    Indian and Afghan cuisine, bringing authentic flavours to
                    your celebration.
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <svg
                      className="w-6 h-6 text-white mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      Restaurant
                    </h3>
                  </div>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                    Bringing the same quality and taste from our renowned Yellow
                    Chilli restaurant directly to your venue with professional
                    service.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Features List */}
            <motion.div variants={itemVariants}>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <svg
                      className="w-5 h-5 text-white mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white/80 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div
          className="mt-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Perfect for Every Occasion
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we bring
              excellence to every event
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/15 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <h4 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h4>
                <p className="text-white/70 text-md leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Plan Your Event?
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Contact our catering team today to discuss your requirements and
            receive a customised quote
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookNowCTA
              variant="outline"
              size="small"
              shape="pill"
              text="Get In Touch"
              useGradient={false}
              gradientFrom="from-elements-primary-main"
              gradientTo="to-elements-primary-shadow"
              textColor="text-white"
              shadowColor="shadow-black"
              phoneNumber="+1 (555) 123-4567"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CateringSection;
