import React from 'react';
import WheelAlignment from '../assets/wheel-alignment.jpg';
import TireService from '../assets/tire-service.jpg';
import BrakeService from '../assets/brake-service.jpg';

const ServiceCard = ({ image, title, description }) => (
  <div className="bg-black p-6 rounded-lg text-center">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
    <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
  </div>
);

const Services = () => {
  const services = [
    {
      image: WheelAlignment,
      title: 'Wheel Alignment & Balancing',
    },
    {
      image: TireService,
      title: 'Tire Installation & Repairs',
    },
    {
      image: BrakeService,
      title: 'Brake Inspections & Repairs',
    },
  ];

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-white text-center mb-12">SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-gray-700">
            VIEW ALL SERVICES
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;