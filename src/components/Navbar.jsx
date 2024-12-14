import React from 'react';
import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex space-x-6">
          <a href="/" className="hover:text-gray-300">HOME</a>
          <a href="/about" className="hover:text-gray-300">ABOUT US</a>
          <a href="/services" className="hover:text-gray-300">SERVICES</a>
        </div>
        
        <img src={Logo} alt="Wheel Be Ok Logo" className="h-16" />
        
        <div className="flex space-x-6">
          <a href="/appointment" className="hover:text-gray-300">APPOINTMENT</a>
          <a href="/contact" className="hover:text-gray-300">CONTACT US</a>
          <a href="/login" className="text-gray-400 hover:text-gray-300">LOG IN/ REGISTER</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;