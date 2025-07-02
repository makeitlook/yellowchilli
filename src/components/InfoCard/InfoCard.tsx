"use client";
import React from "react";
import { motion } from "framer-motion";

const InfoCard = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
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

  return (
    <motion.section
      id="about"
      className="relative z-20 overflow-hidden bg-card-background/80 backdrop-blur-md text-text-primary md:flex md:justify-between md:gap-16 max-w-7xl mx-auto rounded-3xl shadow-2xl border border-border-dimmed/30  md:p-10 mt-12 sm:mt-0"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.2)_1px,_transparent_0)] bg-[length:24px_24px]" />
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-elements-primary-main/10 via-transparent to-elements-primary-shadow/10 rounded-3xl" />

      {/* Left Section: Our Story */}
      <motion.div
        className="relative md:w-2/3 px-6 py-8 mb-6 md:mb-0 overflow-hidden"
        variants={itemVariants}
      >
        {/* Decorative Chilli Background */}
        <div className="absolute inset-0  pointer-events-none">
          <svg
            className="absolute right-16 -bottom-5 w-12 h-44 scale-150 text-text-primary/10 transform rotate-45 drop-shadow-md"
            viewBox="0 0 232.26 693.11"
            fill="currentColor"
          >
            <path d="M174.71,164.15c6.4,7.86,17.56,9.07,29.35,26.87,43.43,65.59,26.58,137.03,11.23,209.48-19.86,93.73-73.73,258.21-177.72,287.9-79.03,22.57-8.93-52.23,2.91-72.33,66.14-112.25,29.91-234.48,26.71-348.86-2.53-90.48,82.32-95.47,67.26-201.82C127.47,16.13,103.63,28.41,74.89,1.18c117.27-11.65,72.14,129.01,99.82,162.97Z" />
          </svg>
        </div>
        <div className="relative z-10">
          {/* Elegant Title with Decorative Line */}
          <div className="mb-4">
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-elements-primary-main/60" />
              <h2 className="text-elements-primary-main text-3xl lg:text-4xl font-light uppercase tracking-[0.2em]">
                About
              </h2>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-elements-primary-shadow/60" />
            </div>
          </div>

          {/* Refined Content */}
          <div className="mb-8 space-y-4">
            <div className="text-text-primary leading-relaxed space-y-4 text-sm lg:text-base font-light">
              <p>
                Nestled in the vibrant heart of Southall, Yellow Chilli is more
                than just a restaurant—it's a celebration of India's rich
                culinary heritage blended with the bold flavours of Afghanistan.
              </p>
              <p className="text-text-primary text-sm lg:text-base">
                Our kitchen tells stories through spices, where every dish is
                crafted with passion and authenticity. From the sizzle of our
                tandoor grills to the aromatic symphony of our signature
                curries, we bring you flavours that dance on your palate and
                warm your soul.
              </p>
              <p className="text-text-primary text-sm lg:text-base">
                Our flagship venue offers an elegant and versatile space with a
                capacity of up to 140 guests, perfect for hosting weddings,
                birthdays, graduations, and all types of special events.
                Combined with our exceptional catering service, we ensure every
                occasion is seamless, stylish, and truly memorable.
              </p>
            </div>
          </div>

          {/* Elegant Feature Highlights */}
          {/* <div className="flex items-center gap-6 text-text-tertiary">
            {[
              { text: "Authentic Flavors", color: "bg-helpers-success-main" },
              { text: "Family Owned", color: "bg-elements-primary-main" },
              { text: "Event Catering", color: "bg-helpers-error-main" },
            ].map((feature, index) => (
              <div key={feature.text} className="flex items-center gap-2 group">
                <div
                  className={`w-1 h-1 ${feature.color} rounded-full group-hover:scale-125 transition-transform duration-300`}
                />
                <span className="text-xs font-light tracking-wide uppercase group-hover:text-text-secondary transition-colors duration-300">
                  {feature.text}
                </span>
              </div>
            ))}
          </div> */}
        </div>
      </motion.div>

      {/* Right Section: Info Blocks */}
      <div className="relative md:w-1/3 bg-gradient-to-br from-card-background/70 to-card-background/50 backdrop-blur-lg px-6 py-8 rounded-3xl border border-border-dimmed/40 shadow-xl">
        <div className="space-y-6">
          {/* Opening Times */}
          <div className="group">
            <h4 className="text-elements-primary-main font-medium text-lg mb-4 flex items-center gap-2">
              <span className="w-5 h-5 text-text-primary hover:rotate-12 transition-transform duration-200">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="drop-shadow-sm"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Opening Times
            </h4>
            <div className="bg-neutral-dimmed/60 backdrop-blur-sm rounded-xl p-4 space-y-3 border border-border-dimmed/30 hover:border-border-dimmed/50 transition-colors duration-300">
              <div className="flex justify-between items-center">
                <span className="font-medium text-text-secondary text-sm">
                  Sun – Tues:
                </span>
                <span className="text-text-secondary font-light text-sm">
                  11am – 9pm
                </span>
              </div>
              <div className="w-full h-px bg-border-dimmed/30" />
              <div className="flex justify-between items-center">
                <span className="font-medium text-text-secondary text-sm">
                  Wed – Sat:
                </span>
                <span className="text-text-secondary font-light text-sm">
                  11am – 10pm
                </span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="group">
            <h4 className="text-elements-primary-main font-medium text-lg mb-4 flex items-center gap-2">
              <span className="w-5 h-5 text-text-primary hover:scale-110 transition-transform duration-200">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="drop-shadow-sm"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Location
            </h4>
            <div className="bg-neutral-dimmed/60 backdrop-blur-sm rounded-xl p-4 border border-border-dimmed/30 hover:border-border-dimmed/50 transition-colors duration-300">
              <p className="font-medium text-text-primary text-base mb-1">
                Yellow Chilli
              </p>
              <p className="text-text-primary font-light text-sm">
                123 Southall Road
              </p>
              <p className="text-text-primary font-light text-sm mb-3">
                London, UB1 1AA
              </p>
              <a
                href="https://goo.gl/maps/yourlink"
                className="inline-flex items-center gap-2 text-text-secondary font-medium hover:text-text-primary/90 transition-all duration-300 group hover:translate-x-1 text-sm"
              >
                <span>View on Map</span>
                <svg
                  className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300 text-text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="group">
            <h4 className="text-elements-primary-main font-medium text-lg mb-4 flex items-center gap-2">
              <span className="w-5 h-5 text-text-primary hover:rotate-12 transition-transform duration-200">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="drop-shadow-sm"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
              Contact
            </h4>
            <div className="bg-neutral-dimmed/60 backdrop-blur-sm rounded-xl p-4 border border-border-dimmed/30 hover:border-border-dimmed/50 transition-colors duration-300">
              <a
                href="tel:02041234567"
                className="text-text-primary font-medium text-md hover:text-elements-primary-main transition-colors duration-300 hover:scale-105 inline-block"
              >
                0204 123 4567
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </motion.section>
  );
};

export default InfoCard;
