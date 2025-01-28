import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import AdminDashboard from './components/Admin/AdminDashboard';
import TailorDashboard from './components/Tailor/TailorDashboard';
import CustomerSelectionPage from './components/Customers/CustomerSelectionPage';
import ExistingCustomerPage from './components/Customers/ExistingCustomerPage';
import NewCustomerPage from './components/Customers/NewCustomerPage';
import MeasurementForm from './components/Measurement/MeasurementForm';
import PlaceOrder from './components/Order/PlaceOrder';
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route to show login page */}
        <Route path="/" element={<LoginPage />} />

        {/* Routes after login */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/tailor-dashboard" element={<TailorDashboard />} />

        {/* Customer-related routes */}
        <Route path="/customer-selection" element={<CustomerSelectionPage />} />
        <Route path="/existing-customer" element={<ExistingCustomerPage />} />
        <Route path="/new-customer" element={<NewCustomerPage />} />

        {/* Other routes */}
        <Route path="/measurements-form" element={<MeasurementForm />} />
        <Route path="/place-order" element={<PlaceOrder />} />
      </Routes>
    </Router>
  );
};

export default App;
