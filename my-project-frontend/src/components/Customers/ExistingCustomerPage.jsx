import React, { useState } from 'react';
import './ExistingCustomerPage.css'; // Correct file path


const ExistingCustomerPage = () => {
  const [selectedCustomer, setSelectedCustomer] = useState('');

  const handleSelectCustomer = () => {
    // Logic to handle the selected customer for order placement
    console.log('Customer Selected:', selectedCustomer);
  };

  return (
    <div>
      <h2>Select Existing Customer</h2>
      <select
        value={selectedCustomer}
        onChange={(e) => setSelectedCustomer(e.target.value)}
        required
      >
        <option value="">Select Customer</option>
        {/* Map over the list of customers to populate the dropdown */}
        <option value="customer1">Customer 1</option>
        <option value="customer2">Customer 2</option>
        {/* Add more customers dynamically from data */}
      </select>
      <button onClick={handleSelectCustomer}>Proceed to Order</button>
    </div>
  );
};

export default ExistingCustomerPage;
