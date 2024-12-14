import React from 'react';
import Logo from '../assets/logo.png';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <img src={Logo} alt="Wheel Be Ok Logo" className="h-20 mx-auto mb-6" />
        <p className="mb-4">Serving Every Wheel Position One at a Time</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-gray-400"><FaFacebook size={24} /></a>
          <a href="#" className="hover:text-gray-400"><FaInstagram size={24} /></a>
          <a href="#" className="hover:text-gray-400"><FaTwitter size={24} /></a>
        </div>
        <p className="text-sm text-gray-400">
          © 2024 Wheel Be Okay. Keeping You Rolling.
        </p>
      </div>
    </footer>
  );
};

export default Footer;