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
import { FilterProvider } from './context/filterContext';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-wt4xy70jwuy6p1zy.us.auth0.com"
    clientId="GemJjDOOzgbZu4WFkBnBTJrsdLmfiAUb"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <FilterProvider>
      <CategoryProvider>
        <AllProductProvider>
          <AppProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </AppProvider>
        </AllProductProvider>
      </CategoryProvider>
    </FilterProvider>
  </Auth0Provider>
);

reportWebVitals();
