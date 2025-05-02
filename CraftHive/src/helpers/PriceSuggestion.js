
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

// 🟢 Page 1: Material Input
export const MaterialInputPage = () => {
  const [materials, setMaterials] = useState([{ name: "", quantity: 1, cost: "" }]);
  const navigate = useNavigate();

  const addMaterial = () => setMaterials([...materials, { name: "", quantity: 1, cost: "" }]);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newMaterials = [...materials];
    newMaterials[index][name] = value;
    setMaterials(newMaterials);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("materials", JSON.stringify(materials));
    navigate("/loading");
  };

  return (
    <div className="container">
      <h2>Enter Materials & Costs</h2>
      <form onSubmit={handleSubmit}>
        {materials.map((material, index) => (
          <div key={index} className="material-row">
            <input type="text" name="name" placeholder="Material Name" value={material.name} onChange={(e) => handleChange(index, e)} required />
            <input type="number" name="quantity" placeholder="Quantity" value={material.quantity} onChange={(e) => handleChange(index, e)} required />
            <input type="number" name="cost" placeholder="Cost per Unit ($)" value={material.cost} onChange={(e) => handleChange(index, e)} required />
          </div>
        ))}
        <button type="button" onClick={addMaterial}>+ Add Another</button>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

// 🔵 Page 2: Loading
export const LoadingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/pricing");
    }, 2000);
  }, [navigate]);

  return (
    <div className="container">
      <h2>Calculating Price...</h2>
      <div className="spinner"></div>
    </div>
  );
};

// 🔴 Page 3: Pricing Page
export const PricingPage = () => {
  const [materials, setMaterials] = useState([]);
  const [laborHours, setLaborHours] = useState(0);
  const [skillLevel, setSkillLevel] = useState("Beginner");

  const skillRates = { Beginner: 15, Intermediate: 40, Expert: 100 };

  useEffect(() => {
    const storedMaterials = JSON.parse(localStorage.getItem("materials"));
    if (storedMaterials) setMaterials(storedMaterials);
  }, []);

  const materialCost = materials.reduce((acc, item) => acc + item.quantity * parseFloat(item.cost || 0), 0);
  const totalPrice = materialCost + laborHours * skillRates[skillLevel];

  return (
    <div className="container">
      <h2>Suggested Price</h2>
      <p><strong>Total Material Cost:</strong> ${materialCost.toFixed(2)}</p>
      <label>Skill Level:</label>
      <select value={skillLevel} onChange={(e) => setSkillLevel(e.target.value)}>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Expert</option>
      </select>
      <label>Labor Hours: {laborHours} hours</label>
      <input type="range" min="0" max="20" value={laborHours} onChange={(e) => setLaborHours(e.target.value)} />
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};