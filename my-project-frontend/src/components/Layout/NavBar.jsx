import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Tailoring Dashboard</h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/customers"
              className="hover:text-gray-400"
            >
              Customers
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className="hover:text-gray-400"
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              to="/measurements"
              className="hover:text-gray-400"
            >
              Measurements
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
