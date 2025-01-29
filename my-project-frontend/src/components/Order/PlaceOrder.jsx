
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import './PlaceOrder.css'; // Add this line at the top of your PlaceOrder.jsx file


// const PlaceOrder = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     customerId: "",
//     orderDate: "",
//     deliveryDate: "",
//     items: [], // Array to hold order items
//     totalPrice: 0, // Total price for the order
//   });

//   const [catalogueItems, setCatalogueItems] = useState([]); // List of catalogue items
//   const navigate = useNavigate(); // For page redirection

//   // Simulate fetching catalogue items (you can replace this with an API call)
//   useEffect(() => {
//     const fetchedCatalogueItems = [
//       { id: 1, name: "Shirt", price: 30 },
//       { id: 2, name: "Pants", price: 40 },
//       { id: 3, name: "Suit", price: 150 },
//       { id: 4, name: "Tuxedo", price: 200 },
//     ];
//     setCatalogueItems(fetchedCatalogueItems);
//   }, []);

//   const handleItemChange = (e, index) => {
//     const updatedItems = [...formData.items];
//     updatedItems[index] = {
//       ...updatedItems[index],
//       quantity: e.target.value,
//     };
//     const updatedPrice = calculateTotalPrice(updatedItems);
//     const updatedDate = calculateDeliveryDate(updatedItems);
//     setFormData({ ...formData, items: updatedItems, totalPrice: updatedPrice, deliveryDate: updatedDate });
//   };

//   const handleAddItem = (itemId) => {
//     const item = catalogueItems.find((item) => item.id === itemId);
//     const newItem = {
//       itemId: item.id,
//       name: item.name,
//       price: item.price,
//       quantity: 1, // Default quantity
//     };
//     const updatedItems = [...formData.items, newItem];
//     const updatedPrice = calculateTotalPrice(updatedItems);
//     const updatedDate = calculateDeliveryDate(updatedItems);
//     setFormData({
//       ...formData,
//       items: updatedItems,
//       totalPrice: updatedPrice,
//       deliveryDate: updatedDate,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Prepare the order data, including items and calculated delivery date
//     const orderData = {
//       ...formData,
//       orderDate: new Date(formData.orderDate),
//       deliveryDate: new Date(formData.deliveryDate),
//     };

//     onSubmit(orderData);
//     navigate("/admin-dashboard"); // Navigate after submitting
//   };

//   // Function to calculate the total price of the order
//   const calculateTotalPrice = (items) => {
//     return items.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   // Function to calculate the delivery date (add days based on item quantity)
//   const calculateDeliveryDate = (items) => {
//     const baseDeliveryDays = 5; // Default delivery days
//     const extraDaysPerItem = 2; // Add extra days per item (adjust as needed)
//     const totalItems = items.reduce((total, item) => total + item.quantity, 0);
//     const totalDays = baseDeliveryDays + extraDaysPerItem * totalItems;
//     const deliveryDate = new Date();
//     deliveryDate.setDate(deliveryDate.getDate() + totalDays);
//     return deliveryDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD
//   };

//   return (
//     <form onSubmit={handleSubmit} className="order-form">
//       {/* Left Column (Item Selection) */}
//       <div className="left-column">
//         {/* Customer and Order Information */}
//         <div className="form-group">
//           <label htmlFor="customerId">Customer ID</label>
//           <input
//             type="text"
//             id="customerId"
//             name="customerId"
//             value={formData.customerId}
//             onChange={(e) => setFormData({ ...formData, customerId: e.target.value })}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="orderDate">Order Date</label>
//           <input
//             type="date"
//             id="orderDate"
//             name="orderDate"
//             value={formData.orderDate}
//             onChange={(e) => setFormData({ ...formData, orderDate: e.target.value })}
//             required
//           />
//         </div>

//         {/* Catalogue Item Selection */}
//         <div className="form-group">
//           <label>Select Items</label>
//           <div className="catalogue-items">
//             {catalogueItems.map((item) => (
//               <button
//                 key={item.id}
//                 type="button"
//                 onClick={() => handleAddItem(item.id)}
//                 className="catalogue-item"
//               >
//                 {item.name} - ${item.price}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* List of Order Items */}
//         {formData.items.length > 0 && (
//           <div className="order-items">
//             <label>Order Items</label>
//             {formData.items.map((item, index) => (
//               <div key={index} className="order-item">
//                 <span>{item.name}</span>
//                 <input
//                   type="number"
//                   value={item.quantity}
//                   onChange={(e) => handleItemChange(e, index)}
//                   min="1"
//                 />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Right Column (Summary: Price and Due Date) */}
//       <div className="right-column">
//         <div className="form-group">
//           <label>Due Date</label>
//           <input
//             type="date"
//             id="deliveryDate"
//             name="deliveryDate"
//             value={formData.deliveryDate}
//             readOnly
//           />
//         </div>

//         {/* Display Total Price */}
//         <div className="price-summary">
//           <span>Total Price:</span>
//           <span>${formData.totalPrice}</span>
//         </div>

//         {/* Submit Button */}
//         <button type="submit" className="submit-button">
//           Save Order
//         </button>
//       </div>
//     </form>
//   );
// };

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlaceOrder.css';

const PlaceOrder = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    customerId: "",
    orderDate: "",
    deliveryDate: "",
    items: [],
    totalPrice: 0,
  });

  const [catalogueItems, setCatalogueItems] = useState([]);
  const navigate = useNavigate();

  // Simulate fetching catalogue items (you can replace this with an API call)
  useEffect(() => {
    const fetchedCatalogueItems = [
      { id: 1, name: "Shirt", price: 30 },
      { id: 2, name: "Pants", price: 40 },
      { id: 3, name: "Suit", price: 150 },
      { id: 4, name: "Tuxedo", price: 200 },
    ];
    setCatalogueItems(fetchedCatalogueItems);
  }, []);

  const handleItemChange = (e, index) => {
    const updatedItems = [...formData.items];
    updatedItems[index] = {
      ...updatedItems[index],
      quantity: e.target.value,
    };
    const updatedPrice = calculateTotalPrice(updatedItems);
    const updatedDate = calculateDeliveryDate(updatedItems);
    setFormData({ ...formData, items: updatedItems, totalPrice: updatedPrice, deliveryDate: updatedDate });
  };

  const handleAddItem = (itemId) => {
    const item = catalogueItems.find((item) => item.id === itemId);
    const newItem = {
      itemId: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    };
    const updatedItems = [...formData.items, newItem];
    const updatedPrice = calculateTotalPrice(updatedItems);
    const updatedDate = calculateDeliveryDate(updatedItems);
    setFormData({
      ...formData,
      items: updatedItems,
      totalPrice: updatedPrice,
      deliveryDate: updatedDate,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      ...formData,
      orderDate: new Date(formData.orderDate),
      deliveryDate: new Date(formData.deliveryDate),
    };
    onSubmit(orderData);
    navigate("/admin-dashboard");
  };

  const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateDeliveryDate = (items) => {
    const baseDeliveryDays = 5;
    const extraDaysPerItem = 2;
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);
    const totalDays = baseDeliveryDays + extraDaysPerItem * totalItems;
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + totalDays);
    return deliveryDate.toISOString().split("T")[0];
  };

  return (
    <form onSubmit={handleSubmit} className="container-fluid">
      <div className="row">
        {/* Left Column */}
        <div className="col-md-6 mb-4 left-column">
          <div className="p-4 border rounded shadow-sm">
            <h5>Customer and Order Information</h5>
            <div className="mb-3">
              <label htmlFor="customerId" className="form-label">Customer ID</label>
              <input
                type="text"
                id="customerId"
                name="customerId"
                value={formData.customerId}
                onChange={(e) => setFormData({ ...formData, customerId: e.target.value })}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="orderDate" className="form-label">Order Date</label>
              <input
                type="date"
                id="orderDate"
                name="orderDate"
                value={formData.orderDate}
                onChange={(e) => setFormData({ ...formData, orderDate: e.target.value })}
                className="form-control"
                required
              />
            </div>

            {/* List of Order Items */}
            {formData.items.length > 0 && (
              <div className="mb-3">
                <label className="form-label">Selected Items</label>
                {formData.items.map((item, index) => (
                  <div key={index} className="mb-2">
                    <span className="me-2">{item.name}</span>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleItemChange(e, index)}
                      min="1"
                      className="form-control w-25"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6 mb-4 right-column">
          <div className="p-4 border rounded shadow-sm">
            <h5>Select Items & Payment Details</h5>
            {/* Item Selection */}
            <div className="mb-3">
              <label className="form-label">Select Items</label>
              <div className="d-flex flex-wrap">
                {catalogueItems.map((item) => (
                  <div key={item.id} className="p-2">
                    <button
                      type="button"
                      onClick={() => handleAddItem(item.id)}
                      className="btn btn-outline-primary"
                    >
                      {item.name} - ${item.price}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment and Due Date */}
            <div className="mb-3">
              <label htmlFor="deliveryDate" className="form-label">Due Date</label>
              <input
                type="date"
                id="deliveryDate"
                name="deliveryDate"
                value={formData.deliveryDate}
                readOnly
                className="form-control"
              />
            </div>

            {/* Display Total Price */}
            <div className="d-flex justify-content-between mb-3">
              <span>Total Price:</span>
              <span>${formData.totalPrice}</span>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-success w-100">
              Save Order
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
