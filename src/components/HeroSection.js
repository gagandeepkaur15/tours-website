import React from "react";

const HeroSection = () => {
  return (
    <section className="relative">
      <img src="/images/hero.png" alt="India" className="w-full h-[600px] object-cover" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50">
        <h2 className="text-white text-3xl font-bold">Discover the Beauty of India</h2>
        <button className="mt-4 px-6 py-2 bg-[#0D2857] hover:bg-blue-800 text-white rounded-lg">Explore</button>
      </div>
    </section>
  );
};

export default HeroSection;
