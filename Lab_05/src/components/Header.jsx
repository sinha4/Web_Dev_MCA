import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title, subtitle, buttonText }) => {
  return (
    <header className="bg-[url('/hospital.jpg')] bg-cover bg-center text-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">{title}</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">{subtitle}</p>
        {buttonText && (
          <Link to="/appointment">
            <button className="mt-8 px-6 py-3 bg-white text-teal-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
              {buttonText}
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
