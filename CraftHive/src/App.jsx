import './App.css';
import Header from "./components/Header";
import {PricingSuggestionPage, renatoSayHi} from './components/PricingSuggestionPage'
import { useEffect } from 'react';
import Router from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router";
import { PricingGetStarted } from './components/PricingGetStarted';

// This is original App component ~ Ryleigh
const App = () => {
  return <>
    <main>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.cdnfonts.com/css/open-sauce-one" rel="stylesheet"></link>
                
      <Header />

      <Routes>
        <Route path="/" element={<PricingSuggestionPage />} />
        <Route path="/pricing/landing" element={<PricingSuggestionPage />} />
        <Route path="/pricing/material-input" element={<PricingGetStarted />} />
      </Routes>

      {/*<Footer />*/}
    </main>
  </>  
};


// This is the modified App component based on 
// https://medium.com/@mechiranthan.y/a-step-by-step-guide-to-building-your-first-web-app-with-react-js-ad7bd6fe6e1b
//  ~ Ryleigh 
/*const App = () => {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}*/

export default App;
