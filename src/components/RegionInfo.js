import React from "react";

const RegionInfo = ({
  title,
  imageSections,
  description,
  destinations,
  travelTips,
}) => {
  return (
    <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-[Prata]">
            <span className="">{title}</span>
        </h2>
        <span className="w-full h-[2px] bg-black inline-block"></span>
      
      <div className="grid grid-cols-5 gap-4 mb-8">
        {imageSections.map((section, index) => (
          <div 
            key={index} 
            className="bg-yellow-200 h-40 flex items-center justify-center cursor-pointer hover:bg-yellow-300 transition-colors"
          >
            <h2 className="text-lg font-semibold">{section}</h2>
          </div>
        ))}
      </div>
      
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Explore the Majesty</h2>
        <p className="text-gray-700 mb-6">{description}</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Popular Destinations</h3>
            <ul className="space-y-2">
              {destinations.map((destination, index) => (
                <li key={index} className="text-gray-700">
                  <strong className="text-gray-900">{destination.name}:</strong> {destination.details}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Best Time to Visit</h3>
            <ul className="space-y-2">
              {travelTips.map((tip, index) => (
                <li key={index} className="text-gray-700">
                  <strong className="text-gray-900">{tip.season}:</strong> {tip.details}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionInfo;