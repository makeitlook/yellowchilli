import React from "react";

const InfoCard = () => {
  return (
    <section className="relative z-20 mt-12 overflow-hidden bg-card-background text-text-primary md:flex md:justify-between md:gap-12 max-w-7xl mx-auto rounded-2xl shadow-2xl">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 text-elements-primary-shadow">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M50 20 C35 20 25 35 25 50 C25 65 35 80 50 80 C55 75 60 70 65 65 C70 60 75 55 75 50 C75 35 65 20 50 20 Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="absolute top-40 right-20 w-16 h-16 text-elements-primary-main rotate-45">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M50 20 C35 20 25 35 25 50 C25 65 35 80 50 80 C55 75 60 70 65 65 C70 60 75 55 75 50 C75 35 65 20 50 20 Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 text-elements-primary-light -rotate-12">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M50 20 C35 20 25 35 25 50 C25 65 35 80 50 80 C55 75 60 70 65 65 C70 60 75 55 75 50 C75 35 65 20 50 20 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* Left Section: Our Story */}
      <div className="relative md:w-2/3 px-8 py-12 mb-8 md:mb-0">
        {/* Decorative Chili Icon */}
        <div className="absolute top-6 right-6 w-16 h-16 text-elements-primary-shadow opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M50 15 C35 15 20 25 20 40 C20 55 30 70 45 85 C47 87 50 90 50 90 C50 90 53 87 55 85 C70 70 80 55 80 40 C80 25 65 15 50 15 Z M50 25 C60 25 70 30 70 40 C70 50 60 60 50 70 C40 60 30 50 30 40 C30 30 40 25 50 25 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 text-elements-primary-shadow">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M50 20 C35 20 25 35 25 50 C25 65 35 80 50 80 C55 75 60 70 65 65 C70 60 75 55 75 50 C75 35 65 20 50 20 Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-elements-primary-main text-3xl font-bold">
              Yellow Chilli
            </h2>
          </div>

          <div className="mb-6">
            <h3 className="text-elements-primary-shadow text-xl font-semibold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-elements-primary-shadow rounded-full"></span>
              Southall
            </h3>
          </div>

          <div className="mb-8">
            <h4 className="text-2xl font-bold text-text-primary mb-4 relative">
              Our Story
              <div className="absolute -bottom-1 left-0 w-16 h-1 bg-gradient-to-r from-elements-primary-main to-elements-primary-shadow rounded-full"></div>
            </h4>
            <div className="text-text-secondary leading-relaxed space-y-4">
              <p className="text-lg">
                Nestled in the vibrant heart of Southall, Yellow Chilli is more
                than just a restaurant—it's a celebration of India's rich
                culinary heritage blended with the bold flavors of Afghanistan.
              </p>
              <p>
                Our kitchen tells stories through spices, where every dish is
                crafted with passion and authenticity. From the sizzle of our
                tandoor grills to the aromatic symphony of our signature
                curries, we bring you flavors that dance on your palate and warm
                your soul.
              </p>
              <p>
                Whether you're gathering with family, celebrating with friends,
                or discovering new tastes, Yellow Chilli welcomes you to
                experience the true essence of South Asian hospitality—where
                every meal is a journey and every guest becomes family.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-text-tertiary">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-helpers-success-main rounded-full animate-pulse"></span>
              Authentic Flavors
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-elements-primary-main rounded-full animate-pulse"></span>
              Family Owned
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-helpers-error-main rounded-full animate-pulse"></span>
              Fresh Daily
            </span>
          </div>
        </div>
      </div>

      {/* Right Section: Info Blocks */}
      <div className="relative md:w-1/3 bg-card-background/80 backdrop-blur-sm px-6 py-10 rounded-2xl border border-border-dimmed shadow-xl">
        <div className="space-y-8 text-sm">
          <div className="group">
            <h4 className="text-elements-primary-main font-bold text-lg mb-3 flex items-center gap-2">
              <span className="w-5 h-5 text-elements-primary-main">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Opening Times
            </h4>
            <div className="bg-neutral-dimmed rounded-lg p-4 space-y-2">
              <p className="flex justify-between">
                <span className="font-medium text-text-secondary">Sun – Tues:</span>
                <span className="text-text-tertiary">11am – 9pm</span>
              </p>
              <p className="flex justify-between">
                <span className="font-medium text-text-secondary">Wed – Sat:</span>
                <span className="text-text-tertiary">11am – 10pm</span>
              </p>
            </div>
          </div>

          <div className="group">
            <h4 className="text-elements-primary-main font-bold text-lg mb-3 flex items-center gap-2">
              <span className="w-5 h-5 text-elements-primary-shadow">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Location
            </h4>
            <div className="bg-neutral-dimmed rounded-lg p-4">
              <p className="font-medium text-text-primary">Yellow Chilli</p>
              <p className="text-text-tertiary">123 Southall Road</p>
              <p className="text-text-tertiary mb-3">London, UB1 1AA</p>
              <a
                href="https://goo.gl/maps/yourlink"
                className="inline-flex items-center gap-2 text-elements-primary-shadow font-medium hover:text-elements-primary-main transition-colors group"
              >
                <span>View on Map</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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

          <div className="group">
            <h4 className="text-elements-primary-main font-bold text-lg mb-3 flex items-center gap-2">
              <span className="w-5 h-5 text-helpers-success-main">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
              Contact
            </h4>
            <div className="bg-neutral-dimmed rounded-lg p-4">
              <p className="text-text-primary font-medium text-lg">0204 123 4567</p>
            </div>
          </div>

          <div className="pt-4 border-t border-border-main">
            <div className="flex gap-3 flex-wrap">
              <span className="bg-gradient-to-r from-neutral-shadow to-neutral-shadow-heavy text-white px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2 shadow-lg">
                🅿 Free Parking
              </span>
              <span className="bg-gradient-to-r from-helpers-success-main to-helpers-success-button text-white px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2 shadow-lg">
                🌱 Vegan Options
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCard;
