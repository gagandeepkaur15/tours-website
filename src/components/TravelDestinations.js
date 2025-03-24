import React from 'react';

const TravelDestinations = () => {
  const categories = [
    { image: "/images/ayodhaya.png", title: "Ayodhaya" },
    { image: "/images/amritsar.png", title: "Amritsar" },
    { image: "/images/delhi.png", title: "Delhi" },
    { image: "/images/jaipur.png", title: "Jaipur" },
    { image: "/images/taj_mahal.png", title: "Agra" },
    { image: "/images/uttarakhand.png", title: "Uttarakhand" },
    { image: "/images/manali.png", title: "Manali" },
    { image: "/images/shimla.png", title: "Shimla" },
    { image: "/images/ladakh.png", title: "Ladakh" },
    { image: "/images/marine_drive.png", title: "Mumbai" },
    { image: "/images/goa.png", title: "Goa" },
    { image: "/images/kerala.png", title: "Kerala" },
  ];
  return (
    <div className="bg-white pt-20 pb-28">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-2xl font-[Prata] flex items-center">
            <span className="w-24 h-[2px] bg-black inline-block"></span>
            <span className="mx-4">Popular Travel Destinations</span>
            <span className="w-24 h-[2px] bg-black inline-block"></span>
          </h2>
        </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="rounded-xl shadow-lg cursor-pointer overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#0D2857] text-white p-3 text-center transition-colors duration-300 hover:bg-blue-800">
                  <h3 className="text-l font-semibold">{category.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelDestinations;