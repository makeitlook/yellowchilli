"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const FindUsSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
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
    <section className="py-20 bg-gradient-to-b from-card-background to-neutral">
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

        {/* Main Content - New 3-Column Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1 - Map */}
          <motion.div
            className="xl:col-span-1"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative h-[400px] xl:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
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
            </div>
          </motion.div>

          {/* Column 2 - Information Cards */}
          <motion.div
            className="xl:col-span-1 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Address Card */}
            <motion.div
              variants={itemVariants}
              className="bg-card-background border border-elements-primary-dimmed/30 rounded-xl p-6 h-fit"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-elements-primary-dimmed rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary">
                  Our Location
                </h3>
              </div>
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
            </motion.div>

            {/* Parking Card with Video */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-elements-primary-main/5 to-elements-primary-shadow/5 border border-elements-primary-dimmed/30 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] h-fit"
              onClick={openVideo}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-elements-primary-main rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary">
                  Parking Available
                </h3>
              </div>
              <p className="text-text-primary leading-relaxed mb-4">
                50 car park spaces available in the underground parking of
                Featherstone High School
              </p>
              <div className="flex items-center gap-2 text-elements-primary-main">
                {/* <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-7 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                  />
                </svg> */}
                <span className="text-sm font-medium">
                  Click to watch parking tour
                </span>
                <div className="ml-auto bg-elements-primary-main/10 rounded-full p-2">
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              variants={itemVariants}
              className="bg-card-background border border-elements-primary-dimmed/30 rounded-xl p-6 h-fit"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-elements-primary-dimmed rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary">
                  Contact
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex flex-col space-y-2">
                  <span className="text-sm text-text-secondary">
                    Restaurant
                  </span>
                  <a
                    href="tel:02035185930"
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-lg"
                  >
                    0203 518 5930
                  </a>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="text-sm text-text-secondary">
                    Aman (Director)
                  </span>
                  <a
                    href="tel:07842905555"
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    078 429 05555
                  </a>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="text-sm text-text-secondary">
                    Kulwant (Director)
                  </span>
                  <a
                    href="tel:07913135555"
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    079 131 35555
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Column 3 - Walking Directions & Opening Hours */}
          <motion.div
            className="xl:col-span-1 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Walking Directions */}
            <motion.div
              variants={itemVariants}
              className="bg-card-background border border-elements-primary-dimmed/30 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-elements-primary-dimmed rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-text-primary"
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
                <h4 className="text-lg font-semibold text-text-primary">
                  Walking from Car Park
                </h4>
              </div>

              {/* Visual Walking Path */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 bg-elements-primary-main rounded-full flex items-center justify-center text-text-primary text-xs font-bold">
                      1
                    </div>
                    <div className="w-0.5 h-6 bg-gradient-to-b from-elements-primary-main to-elements-primary-dimmed mt-1"></div>
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

                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 bg-elements-primary-main rounded-full flex items-center justify-center text-text-primary text-xs font-bold">
                      2
                    </div>
                    <div className="w-0.5 h-6 bg-gradient-to-b from-elements-primary-main to-elements-primary-dimmed mt-1"></div>
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-sm text-text-primary font-medium">
                      Head towards Western Road
                    </p>
                    <p className="text-xs text-text-secondary mt-1">
                      Turn left from school grounds
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 bg-elements-primary-main rounded-full flex items-center justify-center text-text-primary text-xs font-bold">
                      3
                    </div>
                    <div className="w-0.5 h-6 bg-gradient-to-b from-elements-primary-main to-elements-primary-dimmed mt-1"></div>
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

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-elements-primary-main rounded-full flex items-center justify-center text-text-primary text-xs font-bold">
                    4
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
            </motion.div>

            {/* Opening Hours */}
            <motion.div
              variants={itemVariants}
              className="bg-card-background border border-elements-primary-dimmed/30 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-elements-primary-dimmed rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-text-primary"
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
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    Opening Hours
                  </h3>
                  <p className="text-elements-primary-main font-medium text-sm">
                    Open until 11:30 PM today
                  </p>
                </div>
              </div>

              <div className="space-y-2">
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
                      className={`flex justify-between items-center py-2 px-3 rounded-lg transition-colors ${
                        isToday
                          ? "bg-elements-primary-main/10 text-elements-primary-main font-semibold"
                          : "text-text-secondary hover:bg-gray-50"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      <span className="font-medium">
                        {schedule.day}
                        {isToday && (
                          <span className="ml-2 text-xs text-orange-500">
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

      {/* Video Popup Modal - Optimized for Portrait Video */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-neutral bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative bg-neutral rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden">
            {/* Close button */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 text-text-primary rounded-full p-2 hover:bg-opacity-40 transition-all duration-200 backdrop-blur-sm"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Portrait Video container */}
            <div className="aspect-[9/16] max-h-[80vh]">
              <video
                controls
                autoPlay
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => console.log("Video failed to load:", e)}
              >
                <source src="/images/carpark.mp4" type="video/mp4" />
                <source src="/parking-video.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video title overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-text-primary">
              <h3 className="text-lg font-semibold mb-1">
                Underground Parking Tour
              </h3>
              <p className="text-sm text-gray-200">
                Virtual tour of Featherstone High School parking facilities
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FindUsSection;
