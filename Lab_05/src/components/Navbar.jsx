import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
     <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
  <Link to="/" className="mb-2 md:mb-0 flex items-center space-x-3">
    <img 
      src="/healthgate.png" 
      alt="HealthGate Logo" 
      className="h-10 w-auto" 
    />
    <span className="text-2xl font-bold text-teal-600">HealthGate</span>
  </Link>
        <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6">
          <li><Link to="/" className="text-teal-600 hover:text-teal-300 transition-colors duration-300 font-medium">Home</Link></li>
          <li><Link to="/services" className="text-teal-600 hover:text-teal-300 transition-colors duration-300 font-medium">Services</Link></li>
          <li><Link to="/appointment" className="text-teal-600 hover:text-teal-300 transition-colors duration-300 font-medium">Book Appointment</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
