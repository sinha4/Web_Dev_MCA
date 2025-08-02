import React, { useState } from 'react';

const Services = ({ services }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex justify-center items-center py-12 px-4">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl p-8 max-w-2xl w-full text-center">
        <h2 className="text-4xl font-bold text-teal-600 mb-4">Our Services</h2>
        <p className="text-lg text-teal-500 mb-6">
          We offer a wide range of medical services to meet your needs. Our team of experts is here to provide you with the highest quality care.
        </p>

        <img
          src={services[currentIndex].image}
          alt={services[currentIndex].name}
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
        <h3 className="text-2xl font-semibold text-gray-800">{services[currentIndex].name}</h3>
        <p className="mt-2 text-gray-600">{services[currentIndex].description}</p>

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={prevSlide}
            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
          >
            ← Prev
          </button>
          <button
            onClick={nextSlide}
            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
          >
            Next →
          </button>
        </div>

        <div className="mt-4 flex justify-center space-x-2">
          {services.map((_, idx) => (
            <span
              key={idx}
              className={`h-3 w-3 rounded-full transition ${
                idx === currentIndex ? 'bg-teal-600' : 'bg-teal-200'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
