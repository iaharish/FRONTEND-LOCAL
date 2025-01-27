import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-4 fixed top-0 left-0">
      <div className="space-y-6 mt-10">
        <Link to="/customers" className="block py-2 px-4 hover:bg-gray-700 rounded">
          Customers
        </Link>
        <Link to="/orders" className="block py-2 px-4 hover:bg-gray-700 rounded">
          Orders
        </Link>
        <Link to="/measurements" className="block py-2 px-4 hover:bg-gray-700 rounded">
          Measurements
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
