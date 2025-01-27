// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.min.css';

// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

import './index.css'; // Custom CSS (ensure the path is correct)
import App from './App.jsx'; // Main App component

// Create the root element and render the app
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}
