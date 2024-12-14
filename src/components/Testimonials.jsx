import React from 'react';
import { StarIcon } from '@heroicons/react/20/solid';

const TestimonialCard = ({ name, text }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex justify-center mb-4">
      <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
    </div>
    <div className="flex justify-center mb-2">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
      ))}
    </div>
    <p className="text-gray-600 text-center">{text}</p>
    <p className="text-center font-semibold mt-4">{name}</p>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ben Turner",
      text: "Excellent car repair shop! The service was great and the staff was super friendly. Highly recommend them!"
    },
    {
      name: "Mike Nathan",
      text: "Best car repair service in town! Fast and efficient work at reasonable prices. Professional and honest staff."
    },
    {
      name: "Tony Becker",
      text: "The team at Wheel Be Okay really knows their stuff. Quick service and fair pricing. Will be coming back!"
    }
  ];

  return (
    <section className="bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-white text-center mb-4">TRUSTED BY OUR CUSTOMERS</h2>
        <div className="flex justify-center mb-12">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="h-8 w-8 text-yellow-400" />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;