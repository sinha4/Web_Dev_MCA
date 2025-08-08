import React, { useState } from 'react';

const STORAGE_KEY = 'appointments';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', date: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [latestAppointment, setLatestAppointment] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingAppointments = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    const newAppointment = { ...formData };
    existingAppointments.push(newAppointment);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existingAppointments));

    setLatestAppointment(newAppointment);
    setIsSubmitted(true);

    setFormData({ name: '', email: '', date: '' });
  };

  if (isSubmitted && latestAppointment) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-6">Thank you for your appointment!</h2>
        <p className="mt-4 text-gray-700 mb-10">We will contact you shortly to confirm the details.</p>
        
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md text-left">
          <h3 className="text-xl font-semibold mb-4 text-teal-600">Booking Details</h3>
          <p><strong>Name:</strong> {latestAppointment.name}</p>
          <p><strong>Email:</strong> {latestAppointment.email}</p>
          <p><strong>Scheduled Date:</strong> {latestAppointment.date}</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-6 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">Book an Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-teal-700 font-semibold mb-2">Full Name</label>
            <input 
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-teal-700 font-semibold mb-2">Email</label>
            <input 
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-teal-700 font-semibold mb-2">Schedule Date</label>
            <input 
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-500 transition-colors duration-300"
          >
            Submit Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
