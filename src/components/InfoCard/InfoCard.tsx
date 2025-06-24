import React from "react";

const RestaurantInfo = () => {
  return (
    <section className="bg-neutral text-black  md:flex md:justify-between md:gap-12 max-w-7xl mx-auto rounded-lg">
      {/* Left Section: Our Story */}

      <div className=" md:w-2/3 px-4 py-10 mb-8 md:mb-0 ">
        <h2 className="text-yellow-600 text-2xl font-semibold mb-2">
          Yellow Chilli
        </h2>
        <h3 className="text-red-600 text-lg font-semibold mb-4">Southall</h3>
        <p className="text-base leading-relaxed">
          Nestled in the heart of Southall, Yellow Chilli brings you the best of
          Indian and Afghan cuisine. From sizzling grills to rich curries, our
          food is full of bold, authentic flavour. We welcome families, friends
          and food lovers of all kinds for a warm, hearty meal.
        </p>
      </div>

      {/* Right Section: Info Blocks */}
      <div className="md:w-1/3 bg-neutral-dimmed px-4 py-10 rounded-lg">
        <div className="space-y-6 text-sm">
          <div>
            <h4 className="text-yellow-600 font-semibold">Opening Times</h4>
            <p>
              <span className="font-medium">Sun – Tues:</span> 11am – 9pm
            </p>
            <p>
              <span className="font-medium">Wed – Sat:</span> 11am – 10pm
            </p>
          </div>

          <div>
            <h4 className="text-yellow-600 font-semibold">Location</h4>
            <p>Yellow Chilli</p>
            <p>123 Southall Road</p>
            <p>London, UB1 1AA</p>
            <a
              href="https://goo.gl/maps/yourlink"
              className="text-red-600 font-medium underline mt-1 inline-block"
            >
              View on Map
            </a>
          </div>

          <div>
            <h4 className="text-yellow-600 font-semibold">Contact</h4>
            <p>0204 123 4567</p>
          </div>

          <div className="flex gap-2 flex-wrap">
            <button className="bg-black text-white px-4 py-2 rounded text-xs">
              🅿 Parking
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantInfo;
