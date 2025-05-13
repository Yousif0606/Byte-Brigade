import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "../App.css";

function HomeScreen() {
  const navigate = useNavigate();
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <h2>Welcome to <span className="highlight">CraftHive</span>!</h2>
        <h3>What can I do for you?</h3>
        <div className="card-grid">
          <div className="card" onClick={() => navigate("/pricing/start")}>🏷️ Suggest Product Pricing</div>
          <div className="card" onClick={() => navigate("/inventory")}>📦 Manage Inventory</div>
        </div>
      </div>
    </div>
  );
}

function PricingStart() {
  const navigate = useNavigate();
  const [isNew, setIsNew] = useState(true);
  return (
    <div className="container">
      <h2>Is this a new product?</h2>
      <button onClick={() => { setIsNew(true); navigate("/pricing/create") }}>Yes</button>
      <button onClick={() => { setIsNew(false); navigate("/pricing/select") }}>No</button>
    </div>
  );
}

function ProductCreate({ data, setData }) {
  const navigate = useNavigate();
  const addMaterial = () => setData({ ...data, materials: [...data.materials, { name: "", cost: "" }] });
  const handleChange = (field, value) => setData({ ...data, [field]: value });
  const handleMatChange = (i, f, v) => {
    const m = [...data.materials]; m[i][f] = v;
    setData({ ...data, materials: m });
  };

  return (
    <div className="container">
      <h2>Create New Product</h2>
      <input placeholder="Product Name" value={data.name} onChange={e => handleChange("name", e.target.value)} />
      <input placeholder="Description" value={data.description} onChange={e => handleChange("description", e.target.value)} />
      <input placeholder="Creative Hours" type="number" value={data.creativeHours} onChange={e => handleChange("creativeHours", e.target.value)} />
      <input placeholder="Admin Hours" type="number" value={data.adminHours} onChange={e => handleChange("adminHours", e.target.value)} />
      <input placeholder="Hourly Rate" type="number" value={data.hourlyRate} onChange={e => handleChange("hourlyRate", e.target.value)} />

      <h3>Materials</h3>
      {data.materials.map((mat, i) => (
        <div key={i} className="material-row">
          <input placeholder="Material" value={mat.name} onChange={e => handleMatChange(i, "name", e.target.value)} />
          <input placeholder="Cost" type="number" value={mat.cost} onChange={e => handleMatChange(i, "cost", e.target.value)} />
        </div>
      ))}
      <button onClick={addMaterial}>+ Add Material</button>
      <button onClick={() => navigate("/pricing/result")}>View Suggested Price</button>
    </div>
  );
}

function ProductSelect() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2>Select an Existing Product</h2>
      <p>(This can be connected to saved product list later)</p>
      <button onClick={() => navigate("/pricing/result")}>Use Selected Product</button>
    </div>
  );
}

function PricingResult({ data }) {
  const navigate = useNavigate();
  const matCost = data.materials.reduce((acc, m) => acc + parseFloat(m.cost || 0), 0);
  const labor = (parseFloat(data.creativeHours || 0) + parseFloat(data.adminHours || 0)) * parseFloat(data.hourlyRate || 0);
  const total = (matCost + labor).toFixed(2);

  return (
    <div className="container">
      <h2>Suggested Price</h2>
      <p>${total}</p>
      <button onClick={() => navigate("/pricing/breakdown")}>View Breakdown</button>
      <button onClick={() => navigate("/")}>Finish</button>
    </div>
  );
}

function PriceBreakdown({ data }) {
  const matCost = data.materials.reduce((acc, m) => acc + parseFloat(m.cost || 0), 0);
  const labor = (parseFloat(data.creativeHours || 0) + parseFloat(data.adminHours || 0)) * parseFloat(data.hourlyRate || 0);
  const total = (matCost + labor).toFixed(2);
  return (
    <div className="container">
      <h2>Full Price Breakdown</h2>
      <ul>
        <li>Material Cost: ${matCost.toFixed(2)}</li>
        <li>Labor Cost: ${labor.toFixed(2)}</li>
        <li>Total: ${total}</li>
      </ul>
    </div>
  );
}

function Inventory() {
  const [inventory, setInventory] = useState(() => {
    const saved = localStorage.getItem("inventory");
    return saved ? JSON.parse(saved) : [];
  });

  const [item, setItem] = useState({ name: "", quantity: "", cost: "" });
  const handleChange = (e) => setItem({ ...item, [e.target.name]: e.target.value });

  const addItem = () => {
    if (!item.name) return;
    const updated = [...inventory, item];
    setInventory(updated);
    localStorage.setItem("inventory", JSON.stringify(updated));
    setItem({ name: "", quantity: "", cost: "" });
  };

  return (
    <div className="container">
      <h2>Inventory</h2>
      <input name="name" placeholder="Name" value={item.name} onChange={handleChange} />
      <input name="quantity" type="number" placeholder="Qty" value={item.quantity} onChange={handleChange} />
      <input name="cost" type="number" placeholder="Cost" value={item.cost} onChange={handleChange} />
      <button onClick={addItem}>Add</button>
      <h3>Items</h3>
      <ul>
        {inventory.map((it, i) => (
          <li key={i}>{it.name} — {it.quantity} units @ ${it.cost}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [data, setData] = useState({
    name: "",
    description: "",
    creativeHours: "",
    adminHours: "",
    hourlyRate: "",
    materials: []
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/pricing/start" element={<PricingStart />} />
        <Route path="/pricing/create" element={<ProductCreate data={data} setData={setData} />} />
        <Route path="/pricing/select" element={<ProductSelect />} />
        <Route path="/pricing/result" element={<PricingResult data={data} />} />
        <Route path="/pricing/breakdown" element={<PriceBreakdown data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
