import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Services from './components/Services';
import AppointmentForm from './components/AppointmentForm';
import BookAppointment from './components/BookAppointment'; // Import new component
import { services } from './data/services'; // Your services data

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services services={services} />} />
          <Route path="appointment" element={<AppointmentForm />} />
          <Route path="book-appointment" element={<BookAppointment />} /> {/* New Route */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
