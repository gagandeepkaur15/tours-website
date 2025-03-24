import React from 'react';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const scrollToSection = (id) => {
        if (window.location.pathname !== "/") {
          // Navigate to home first, then scroll after the page loads
          navigate("/", { replace: true });
      
          // Wait for React Router to load the home page, then scroll
          setTimeout(() => {
            const section = document.getElementById(id);
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }, 100); // Small delay to ensure navigation completes
        } else {
          // If already on Home, just scroll
          const section = document.getElementById(id);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }
      };

  return (
    <div className="w-full bg-white border-b border-gray-300">
      <div className="container mb-0 px-4 py-2 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
            <img 
              src="/images/logo.png"
              alt="Akash Tours & Travels Logo" 
              className="w-[80px] h-auto mr-4"   
            /> 
          <div className="flex flex-col justify-center">
            <h1 className="text-xl font-bold tracking-wide leading-tight">AKASH TOURS & TRAVELS</h1>
            <p className="text-sm leading-tight">Complete Travel Solutions</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-end gap-2 mt-0">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-sm">+91-9891746635</span>
          </div>
          <div className="flex items-center ml-0 md:ml-4">
            <img 
              src="/images/whatsapp.png"
              alt=''
              className="w-[15px] h-auto mr-1" 
            /> 
            <span className="text-sm">+91-8920459747</span>
          </div>
          <div className="flex items-center ml-0 md:ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm">akashtour25@gmail.com</span>
          </div>
        </div>
      </div>
      
      <nav style={{ backgroundColor: '#0D2857' }} className="text-white w-full">
        <div className="container mx-auto px-0">
            <ul className="flex flex-wrap md:flex-nowrap">
            <li 
                className="px-6 py-3 font-medium hover:bg-blue-800 cursor-pointer transition duration-150"
                onClick={() => navigate("/")}
            >
                HOME
            </li>
            <li 
                className="px-6 py-3 font-medium hover:bg-blue-800 cursor-pointer transition duration-150"
                onClick={() => scrollToSection("travel-destinations")}
            >
                TRAVEL DESTINATIONS
            </li>
            <li 
                className="px-6 py-3 font-medium hover:bg-blue-800 cursor-pointer transition duration-150"
                onClick={() => scrollToSection("services")}
            >
                SERVICES
            </li>
            <li
                className="px-6 py-3 font-medium hover:bg-blue-800 cursor-pointer transition duration-150"
                onClick={() => navigate("/contact-us")}
            >
                CONTACT US
            </li>
            </ul>
        </div>
    </nav>

    </div>
  );
};

export default Header;