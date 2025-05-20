import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";

// ✅ These are default exports — no curly braces
import PricingGetStarted from "./screens/PricingGetStarted";
import IsNewProduct from "./screens/IsNewProduct";
import ProductEntry from "./screens/ProductEntry";
import ExistingProductList from "./screens/ExistingProductList";
import PricingMaterialCost from "./screens/PricingMaterialCost";
import PricingMaterialAmount from "./screens/PricingMaterialAmount";
import PricingSuggestion from "./screens/PricingSuggestion";
import PricingBreakdown from "./screens/PricingBreakdown";
import Header from "./components/Header";

const App = () => {
  return (
    <ProductProvider>
      <BrowserRouter>
        <main className="purple-bg-lighter h-full max-h-full min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<PricingGetStarted />} />
            <Route path="/pricing/new_product" element={<IsNewProduct />} />
            <Route path="/pricing/product_entry" element={<ProductEntry />} />
            <Route path="/pricing/existing_product" element={<ExistingProductList />} />
            <Route path="/pricing/material_input" element={<PricingMaterialCost />} />
            <Route path="/pricing/materialamount" element={<PricingMaterialAmount />} />
            <Route path="/pricing/suggested_price" element={<PricingSuggestion />} />
            <Route path="/pricing/breakdown" element={<PricingBreakdown />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ProductProvider>
  );
};

export default App;
