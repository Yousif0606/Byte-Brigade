import './App.css';


const App = () => {
  return (
    <div className="content">
      <h1>This is the start</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

const Navbar = () => (
  <nav style={{backgroundColor: theme.colors.primary}} className="w-full p-4 text-white flex justify-between items-center">
    <div className="flex items-center gap-4">
        <div className="cursor-pointer">☰</div>
        <div className="text-xl font-bold">CraftHive</div>
    </div>
    <div className="flex items-center gap-4">
        <div className="cursor-pointer">🔍</div>
        <div className="cursor-pointer">❓</div>
    </div>
  </nav>
)

export default App;
