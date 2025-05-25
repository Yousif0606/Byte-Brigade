import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext'; // <- MUST exist

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider> {/* <- wrap your app here */}
        <App />
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);
