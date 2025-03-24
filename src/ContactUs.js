import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <div className="w-full">
        <div className="relative w-full h-64 flex items-center justify-center bg-cover bg-center" 
          style={{ backgroundImage: "url('/images/contact_bg.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h2 className="text-2xl font-bold text-white z-10">Get in Touch with Us</h2>
      </div>

      <div className="bg-gray-100 w-full py-8">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 px-4">
          
          {/* Address Card */}
          <div className="bg-white rounded-lg shadow-md p-6 w-64 flex flex-col">
            <div className="flex flex-col items-center mb-4">
              <div className="mb-2 p-2 bg-blue-900 text-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-bold text-lg">Address</span>
            </div>
            <div className="text-sm text-center">
              <p>Shop No. 11, Ground Floor, 15A/36, W.E.A, Karol Bagh, New Delhi-110005</p>
            </div>
          </div>
          
          {/* Phone Card */}
          <div className="bg-white rounded-lg shadow-md p-6 w-64 flex flex-col">
            <div className="flex flex-col items-center mb-4">
              <div className="mb-2 p-2 bg-blue-900 text-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="font-bold text-lg">Phone</span>
            </div>
            <div className="text-sm text-center">
              <p className="mb-2">Phone: +91-9891746635</p>
              <p>Whatsapp: +91-8920459747</p>
            </div>
          </div>
          
          {/* Email Card */}
          <div className="bg-white rounded-lg shadow-md p-6 w-64 flex flex-col">
            <div className="flex flex-col items-center mb-4">
              <div className="mb-2 p-2 bg-blue-900 text-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-bold text-lg">Email</span>
            </div>
            <div className="text-sm text-center">
              <p>akashtour25@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
