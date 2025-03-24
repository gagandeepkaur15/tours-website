import React from "react";

const services = [
  { title: "Airport & Railway Station Pickup", image: "/images/luggage.png", description: "Hassle-free transfers from airports & railway stations to your destination. Comfortable rides with professional drivers." },
  { title: "Local Sight Seeing", image: "/images/local.png", description: "Explore top attractions with our guided tours. Discover heritage sites, cultural hotspots, and hidden gems at your own pace." },
  { title: "Taxi Services", image: "/images/public_trans.png", description: "Choose from A/C, non-A/C cars, mini-buses, and luxury vehicles. Reliable and affordable travel options for every journey." },
  { title: "Hotel Booking", image: "/images/bed.png", description: "Stay in the best 3-star, 4-star, and 5-star hotels. Comfort, convenience, and exclusive deals for a perfect stay." },
  { title: "Flight, Train & Bus Ticket Booking", image: "/images/airplane.png", description: "Book your travel tickets with ease. Get the best prices and hassle-free reservations for flights, trains, and buses." },
  { title: "Customised Travel Plans", image: "/images/todo.png", description: "Tailor-made itineraries to suit your preferences. Whether it's adventure, leisure, or culture, we design the perfect trip for you." }
];

const Services = () => {
  return (
    <div className="flex flex-col items-center">
      
      <div className="text-center mb-8">
        <h2 className="text-2xl font-[Prata] flex items-center">
          <span className="w-32 h-[2px] bg-black inline-block mr-4"></span>
          Our Services
          <span className="w-32 h-[2px] bg-black inline-block ml-4"></span>
        </h2>
      </div>

      <section className="bg-[#0D2857] text-white py-20 flex flex-col items-center w-full mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 max-w-4xl w-full">
          {services.map((service, index) => (
            <div key={index} className="flex items-start">
              <img 
                src={service.image}
                alt="" 
                className="w-[65px] h-auto mr-4 filter invert"   
              />
              <div className="p-4 rounded-lg">
                <h3 className="font-bold">{service.title}</h3>
                <p className="text-xs">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Services;
