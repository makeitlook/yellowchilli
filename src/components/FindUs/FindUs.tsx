"use client";

import React from "react";
import { motion } from "framer-motion";

const FindUsSection = () => {
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

  const openingHours = [
    { day: "Monday", hours: "3:00 PM - 11:30 PM" },
    { day: "Tuesday", hours: "3:00 PM - 11:30 PM" },
    { day: "Wednesday", hours: "3:00 PM - 11:30 PM" },
    { day: "Thursday", hours: "3:00 PM - 11:30 PM" },
    { day: "Friday", hours: "3:00 PM - 11:30 PM" },
    { day: "Saturday", hours: "3:00 PM - 11:30 PM" },
    { day: "Sunday", hours: "3:00 PM - 11:30 PM" },
  ];

  // Determine current day for highlighting
  const today = new Date().getDay(); // 0 = Sunday

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-card-background to-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <div className="flex text-center justify-center sm:justify-start sm:items-start">
              <motion.div className="flex items-center gap-6 mb-8">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-elements-primary-main/60" />
                <h2 className="text-elements-primary-main text-3xl lg:text-4xl font-light uppercase tracking-[0.2em]">
                  Find us
                </h2>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-elements-primary-shadow/60" />
              </motion.div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Visit us in the heart of Southall for an authentic dining
              experience. We&apos;re easily accessible and ready to welcome you.
            </p>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Map and Walking Directions */}
          <div className="space-y-6">
            <motion.div
              className="relative"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                {/* Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.6927332019873!2d-0.3903088233803581!3d51.50050587181178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487672b09aa15ce7%3A0x36fc1cedca910c95!2s72-76%20Western%20Rd%2C%20Southall%20UB2%205DZ!5e0!3m2!1sen!2suk!4v1751478253448!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>

                {/* Map overlay for styling */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </div>

              {/* Map Info Badge */}
              <div className="absolute top-6 left-6 bg-neutral/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2 text-gray-800">
                  <svg
                    className="w-5 h-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">Yellow Chilli</span>
                </div>
              </div>
            </motion.div>

            {/* Walking Directions from Car Park */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-card-background border border-elements-primary-dimmed/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-elements-primary-dimmed rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-text-primary">
                    Walking from Car Park
                  </h4>
                </div>

                {/* Visual Walking Path */}
                <div className="space-y-4">
                  {/* Step 1 */}
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 bg-elements-primary-dimmed rounded-full flex items-center justify-center text-text-primary text-xs font-bold">
                        1
                      </div>
                      <div className="w-0.5 h-8 bg-gradient-to-b from-elements-primary-dimmed to-elements-primary-main mt-1"></div>
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-sm text-text-primary font-medium">
                        Exit Featherstone High School car park
                      </p>
                      <p className="text-xs text-text-secondary mt-1">
                        Underground parking entrance
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 bg-elements-primary-dimmed rounded-full flex items-center justify-center text-text-primary text-xs font-bold">
                        2
                      </div>
                      <div className="w-0.5 h-8 bg-gradient-to-b from-elements-primary-dimmed to-elements-primary-main mt-1"></div>
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-sm text-text-primary font-medium">
                        Head towards Western Road
                      </p>
                      <p className="text-xs text-text-secondary mt-1">
                        Turn right from school grounds
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 bg-elements-primary-dimmed rounded-full flex items-center justify-center text-text-primary text-xs font-bold">
                        3
                      </div>
                      <div className="w-0.5 h-8 bg-gradient-to-b from-elements-primary-dimmed to-elements-primary-main mt-1"></div>
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-sm text-text-primary font-medium">
                        Walk along Western Road
                      </p>
                      <p className="text-xs text-text-secondary mt-1">
                        Continue for about 200 metres
                      </p>
                    </div>
                  </div>

                  {/* Step 4 - Destination */}
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 bg-elements-primary-dimmed rounded-full flex items-center justify-center text-text-primary text-xs font-bold">
                        4
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-sm text-text-primary font-medium">
                        Arrive at Yellow Chilli
                      </p>
                      <p className="text-xs text-text-secondary mt-1">
                        72-76 Western Road - Look for our signage!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Walking Time Badge */}
                <div className="mt-6 bg-gradient-to-r from-elements-primary-main/10 to-elements-primary-shadow/10 rounded-lg p-3">
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4 text-elements-primary-main"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm font-medium text-elements-primary-main">
                      Approximately 3-minute walk
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Information */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Address Section */}
            <motion.div
              variants={itemVariants}
              className="border-l border-border-white pl-4 sm:pl-6 mb-12"
            >
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="text-2xl font-medium text-text-primary mb-3">
                    Our Location
                  </h3>
                  <p className="text-text-primary leading-relaxed mb-4">
                    72-76 Western Rd
                    <br />
                    Southall
                    <br />
                    UB2 5DZ, United Kingdom
                  </p>
                  <motion.a
                    href="https://maps.app.goo.gl/j64qU9Xd7gp54nq98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-elements-primary-dimmed hover:text-elements-primary-shadow font-medium flex items-center gap-2 transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    Get Directions
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Parking Section */}
            <motion.div
              variants={itemVariants}
              className="border-l border-border-white pl-4 sm:pl-6 mb-12"
            >
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="text-2xl font-medium text-text-primary mb-3">
                    Parking Available
                  </h3>
                  <p className="text-text-primary leading-relaxed mb-4">
                    50 car park spaces available in the underground parking of
                    Featherstone High School
                  </p>
                  <div className="flex items-center gap-2 text-elements-primary-main">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm font-medium">
                      Underground Parking
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Opening Hours Section */}
            <motion.div
              variants={itemVariants}
              className="border-l border-border-white pl-4 sm:pl-6 mb-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">
                    Opening Hours
                  </h3>
                  <p className="text-elements-primary-main font-medium">
                    Open until 11:30 PM today
                  </p>
                </div>
              </div>

              <div className="space-y-">
                {openingHours.map((schedule, index) => {
                  const isToday =
                    (today === 0 && schedule.day === "Sunday") ||
                    (today === 1 && schedule.day === "Monday") ||
                    (today === 2 && schedule.day === "Tuesday") ||
                    (today === 3 && schedule.day === "Wednesday") ||
                    (today === 4 && schedule.day === "Thursday") ||
                    (today === 5 && schedule.day === "Friday") ||
                    (today === 6 && schedule.day === "Saturday");

                  return (
                    <motion.div
                      key={schedule.day}
                      className={`flex justify-between items-center py-3 transition-colors ${
                        isToday
                          ? "text-elements-primary-main font-semibold"
                          : "text-text-secondary"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      <span className="font-medium">
                        {schedule.day}
                        {isToday && (
                          <span className="ml-2 text-sm text-orange-500">
                            (Today)
                          </span>
                        )}
                      </span>
                      <span className="text-sm">{schedule.hours}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
              className="border-l border-border-white pl-4 sm:pl-6"
            >
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">
                    Contact
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-700">
                      <span>Phone:</span>
                      <a
                        href="tel:02035185930"
                        className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        0203 518 5930
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="rounded-2xl p-8 border border-elements-primary-dimmed/50">
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Easy to Find, Hard to Forget
            </h3>
            <p className="text-text-primary max-w-3xl mx-auto">
              Located in the bustling heart of Southall, we&apos;re just a short
              walk from Guru Nanak Darbar on King Street. Convenient underground
              parking available at Featherstone High School with 50 spaces, and
              we&apos;re easily accessible by public transport.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FindUsSection;
