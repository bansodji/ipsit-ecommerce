import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/productcontext';
import { AllProductProvider } from './context/allproductContext';
import { CategoryProvider } from './context/categoryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CategoryProvider>
      <AllProductProvider>
        <AppProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AppProvider>
      </AllProductProvider>
    </CategoryProvider>
  </React.StrictMode>
);

reportWebVitals();
