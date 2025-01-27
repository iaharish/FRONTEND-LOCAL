
// // // import React from 'react';
// // // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // // import LoginPage from './components/LoginPage';
// // // import AdminDashboard from './components/Admin/AdminDashboard';
// // // import TailorDashboard from './components/Tailor/TailorDashboard';
// // // import CustomerSelectionPage from './components/Customers/CustomerSelectionPage'; // Import CustomerSelectionPage
// // // import ExistingCustomerPage from './components/Customers/ExistingCustomerPage';
// // // import NewCustomerPage from './components/Customers/NewCustomerPage';
// // // import Measurementsform from "./components/Measurements/Measurements-form";
// // // import './index.css';

// // // const App = () => {
// // //   return (
// // //     <Router>
// // //       <div>
// // //         <Routes>
// // //           {/* Default route to show login page */}
// // //           <Route path="/" element={<LoginPage />} />

// // //           {/* Routes after login */}
// // //           <Route path="/admin-dashboard" element={<AdminDashboard />} />
// // //           <Route path="/tailor-dashboard" element={<TailorDashboard />} />

// // //           {/* Customer-related routes */}
// // //           <Route path="/customer-selection" element={<CustomerSelectionPage />} /> {/* Route for CustomerSelectionPage */}
// // //           <Route path="/existing-customer" element={<ExistingCustomerPage />} />
// // //           <Route path="/new-customer" element={<NewCustomerPage />} />
// // //         </Routes>
// // //       </div>
// // //     </Router>
// // //   );
// // // };

// // // export default App;
// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import LoginPage from './components/LoginPage';
// // import AdminDashboard from './components/Admin/AdminDashboard';
// // import TailorDashboard from './components/Tailor/TailorDashboard';
// // import CustomerSelectionPage from './components/Customers/CustomerSelectionPage'; // Import CustomerSelectionPage
// // import ExistingCustomerPage from './components/Customers/ExistingCustomerPage';
// // import NewCustomerPage from './components/Customers/NewCustomerPage';
// // import MeasurementForm from './components/Measurements/MeasurementsForm'; // Adjust path if necessary
// // import './index.css';

// // const App = () => {
// //   return (
// //     <Router>
// //       <div>
// //         <Routes>
// //           {/* Default route to show login page */}
// //           <Route path="/" element={<LoginPage />} />

// //           {/* Routes after login */}
// //           <Route path="/admin-dashboard" element={<AdminDashboard />} />
// //           <Route path="/tailor-dashboard" element={<TailorDashboard />} />

// //           {/* Customer-related routes */}
// //           <Route path="/customer-selection" element={<CustomerSelectionPage />} /> {/* Route for CustomerSelectionPage */}
// //           <Route path="/existing-customer" element={<ExistingCustomerPage />} />
// //           <Route path="/new-customer" element={<NewCustomerPage />} />

// //           {/* Measurements route */}
// //           <Route path="/Measurements" element={<MeasurementForm />} /> {/* Route for MeasurementsForm */}
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginPage from './components/LoginPage';
// import AdminDashboard from './components/Admin/AdminDashboard';
// import TailorDashboard from './components/Tailor/TailorDashboard';
// import CustomerSelectionPage from './components/Customers/CustomerSelectionPage';
// import ExistingCustomerPage from './components/Customers/ExistingCustomerPage';
// import NewCustomerPage from './components/Customers/NewCustomerPage';
// // App.jsx
// import MeasurementForm from './components/Measurement/MeasurementForm'; // Correct path to the MeasurementForm component
// import PlaceOrder from './components/Order/PlaceOrder'; // Assuming you have this component

// import './index.css';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           {/* Default route to show login page */}
//           <Route path="/" element={<LoginPage />} />

//           {/* Routes after login */}
//           <Route path="/admin-dashboard" element={<AdminDashboard />} />
//           <Route path="/tailor-dashboard" element={<TailorDashboard />} />
//           <Route path="/customer-selection" element={<CustomerSelectionPage />} />
//           <Route path="/existing-customer" element={<ExistingCustomerPage />} />
//           <Route path="/new-customer" element={<NewCustomerPage />} />
//           // App.jsx
// <Route path="/measurements-form" element={<MeasurementForm />} />

//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import AdminDashboard from './components/Admin/AdminDashboard';
import TailorDashboard from './components/Tailor/TailorDashboard';
import CustomerSelectionPage from './components/Customers/CustomerSelectionPage';
import ExistingCustomerPage from './components/Customers/ExistingCustomerPage';
import NewCustomerPage from './components/Customers/NewCustomerPage';
import MeasurementForm from './components/Measurement/MeasurementForm'; // Correct path to the MeasurementForm component
import PlaceOrder from './components/Order/PlaceOrder'; // Assuming you have this component

import './index.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Default route to show login page */}
          <Route path="/" element={<LoginPage />} />

          {/* Routes after login */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/tailor-dashboard" element={<TailorDashboard />} />
          <Route path="/customer-selection" element={<CustomerSelectionPage />} />
          <Route path="/existing-customer" element={<ExistingCustomerPage />} />
          <Route path="/new-customer" element={<NewCustomerPage />} />
          
          {/* Route for Measurement Form */}
          <Route path="/measurements-form" element={<MeasurementForm />} />

          {/* Route for Place Order page */}
          <Route path="/place-order" element={<PlaceOrder />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
