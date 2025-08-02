import React from 'react';
import Header from './Header'; // Import the Header component

const Home = () => {
  return (
    <>
      <Header
        title="Your Health, Our Priority"
        subtitle="We are dedicated to providing the best healthcare services to you and your family."
        buttonText="Book an Appointment Today"
      />
      
      {/* You can add more content here, like a services section or a carousel */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-teal-600">Why Choose Us?</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-teal-500">Experienced Doctors</h3>
              <p className="mt-2 text-gray-600">Our team consists of highly qualified and compassionate medical professionals.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-teal-500">Modern Facilities</h3>
              <p className="mt-2 text-gray-600">We use state-of-the-art technology to ensure accurate diagnosis and treatment.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-teal-500">24/7 Support</h3>
              <p className="mt-2 text-gray-600">Our support team is always available to assist you with any health-related queries.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;