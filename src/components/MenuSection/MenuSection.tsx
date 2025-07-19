"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BookNowCTA } from "../Button/BookNowCTA";

const MenuSection = () => {
  const handleDownloadMenu = () => {
    const menuUrl = "/documents/yellow-chilli-menu.pdf";
    const link = document.createElement("a");
    link.href = menuUrl;
    link.download = "Yellow-Chilli-Menu.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-32 relative overflow-hidden bg-neutral/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-center text-center mb-12">
          <motion.div className="flex items-center gap-6 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-elements-primary-main/60" />
            <h2 className="text-elements-primary-main text-3xl lg:text-4xl font-light uppercase tracking-[0.2em]">
              our menu
            </h2>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-elements-primary-shadow/60" />
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Image */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-md shadow-elements-primary-dimmed/20">
              <Image
                src="/images/food/menu1.jpg"
                alt="Traditional dish"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </motion.div>

          {/* Center Content */}
          <motion.div
            className="lg:col-span-4 text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-3xl lg:text-4xl font-light text-text-primary tracking-[0.15em] mb-6">
                TRADITIONAL
                <span className="block">& MODERN</span>
              </h3>
              <p className="text-text-secondary text-sm lg:text-base leading-relaxed max-w-sm mx-auto">
                Our menu blends time-honoured recipes with bold, contemporary
                twists — crafted with care, spiced with passion.
              </p>
            </div>

            <BookNowCTA
              variant="outline"
              size="small"
              shape="pill"
              text="View Menu"
              useGradient={false}
              gradientFrom="from-elements-primary-main"
              gradientTo="to-elements-primary-shadow"
              textColor="text-text-primary"
              shadowColor="shadow-black"
              onClick={() => window.open("/menu.pdf", "_blank")}
            />
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-md shadow-elements-primary-dimmed/20">
              <Image
                src="/images/food/menu2.jpg"
                alt="Modern dish"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
