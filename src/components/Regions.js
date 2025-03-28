import { useNavigate } from "react-router-dom";

const Regions = () => {
  const navigate = useNavigate();
  
    const packages = [
      { image: "/images/north.png", title: "North",  path: "North"},
      { image: "/images/south.png", title: "South", path: "South"},
      { image: "/images/central.png", title: "Central", path: "Central"},
      { image: "/images/east.png", title: "East", path: "East"},
      { image: "/images/west.png", title: "West", path: "West"},
    ];

    
  
    return (
      <div className="bg-gray-100 py-10 mt-10">
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-2xl font-[Prata] flex items-center">
            <span className="w-24 h-[2px] bg-black inline-block"></span>
            <span className="mx-4">Explore Regions</span>
            <span className="w-24 h-[2px] bg-black inline-block"></span>
          </h2>
        </div>
  
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {packages.slice(0, 3).map((pkg, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden relative group" onClick={() => navigate(`/region/${pkg.path}`)}>
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover transition duration-300 ease-in-out group-hover:scale-105"
                />
                {/* Shadow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-red-500">{pkg.title}</h3>
                </div>
              </div>
            ))}
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-6 md:mx-auto md:w-2/3">
            {packages.slice(3).map((pkg, index) => (
              <div key={index + 3} className="bg-white rounded-xl shadow-lg overflow-hidden relative group" onClick={() => navigate(`/region/${pkg.path}`)}>
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover transition duration-300 ease-in-out group-hover:scale-105"
                />
                {/* Shadow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-red-500">{pkg.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Regions;
  