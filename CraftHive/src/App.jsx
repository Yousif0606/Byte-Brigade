import './App.css';
import Header from "./components/Header";
import { React, useEffect } from 'react';
import { Routes, Route } from "react-router";
import { Homepage } from './screens/Homepage';
import { PricingMaterialCost } from './screens/PricingMaterialCost';
import { IsNewProduct } from './screens/IsNewProduct';
import { PricingGetStarted } from './screens/PricingGetStarted';
import { ProductEntry } from './screens/ProductEntry';
import { ExistingProductList } from './screens/ExistingProductList';
import { PricingSuggestion } from './screens/PricingSuggestion';
import { InventoryGetStarted } from './screens/InventoryGetStarted';
import { MaterialInventoryEntry } from './screens/MaterialInventoryEntry';
import { PricingBreakdown } from './screens/PricingBreakdown'; // ✅ New import

const App = () => {
  return (
    <>
      <main className="purple-bg-lighter h-full max-h-full min-h-screen">
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.cdnfonts.com/css/open-sauce-one" rel="stylesheet"></link>

        <Header />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pricing/landing" element={<PricingGetStarted />} />
          <Route path="/pricing/new_product" element={<IsNewProduct />} />
          <Route path="/pricing/existing_product" element={<ExistingProductList />} />
          <Route path="/pricing/product_entry" element={<ProductEntry />} />
          <Route path="/pricing/material_input" element={<PricingMaterialCost />} />
          <Route path="/pricing/suggested_price" element={<PricingSuggestion />} />
          <Route path="/pricing/breakdown" element={<PricingBreakdown />} /> {/* ✅ New route */}
          <Route path="/inventory/landing" element={<InventoryGetStarted />} />
          <Route path="/inventory/list" element={<MaterialInventoryEntry />} />
        </Routes>

        {/*<Footer />*/}
      </main>
    </>
  );
};

export default App;
