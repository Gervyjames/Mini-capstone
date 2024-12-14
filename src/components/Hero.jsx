import React from 'react';
import HeroImage from '../assets/hero-garage.jpg';

const Hero = () => {
  return (
    <div className="relative h-[600px]">
      <div className="absolute inset-0">
        <img 
          src={HeroImage} 
          alt="Auto Repair Shop" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-transparent">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">Auto Repair</h1>
            <h2 className="text-4xl mb-6">Maintenance Services & Repair</h2>
            <p className="text-xl mb-8">"We can handle any Car Problem"</p>
            <div className="flex gap-4">
              <button className="bg-red-600 px-6 py-3 rounded-md hover:bg-red-700">
                SCHEDULE NOW
              </button>
              <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black">
                VIEW MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;