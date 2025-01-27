import React, { useState } from "react";

const Header = ({ onLogout }) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <button
        onClick={() => setShowLogoutModal(true)}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>

      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <p className="mb-4">Are you sure you want to log out?</p>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-red-600 text-white px-4 py-2 rounded"
                onClick={onLogout}
              >
                Yes
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => setShowLogoutModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
