import React, { useState } from 'react';
import './NewCustomerPage.css';

const NewCustomerPage = () => {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save customer details
    console.log('Customer Created:', { customerName, phoneNumber, email, address });
  };

  return (
    <div className="new-customer-page">
      <div className="form-container">
        <h2 className="form-title">New Customer</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="customerName">Customer Name</label>
            <input
              type="text"
              id="customerName"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <a href="/measurements-form" className="link-to-measurements">Add Measurements</a>
          </div>

          <button type="submit" className="submit-btn">Save Customer</button>
        </form>
      </div>
    </div>
  );
};

export default NewCustomerPage;
