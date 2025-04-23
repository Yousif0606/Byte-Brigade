import { renatoSayHi } from '../helpers/renato';
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
    <main className="flex flex-col justify-center items-center mx-auto w-full max-w-none h-screen bg-violet-50 max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <Header />

      <Routes>
        <Route path="/" element={<PricingSuggestionPage />} />
        <Route path="/pricing/landing" element={<PricingGetStarted />} />
      </Routes>

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
