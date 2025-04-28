
//original code

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './Navbar';
import FeatureCard from './HomePage/FeatureCard';
import FeatureGrid from './HomePage/FeatureGrid';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < App/>
  </React.StrictMode>,
);


// Brett changed the code to this
 
/*import React from 'react';
import Router from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <router>
      <Aboutpage path="/about" />
      <Homepage path="/" />
    </router>
    <App />
  </React.StrictMode>,
);*/
