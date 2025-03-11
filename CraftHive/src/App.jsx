import './App.css';
import Navbar from './Navbar';

// This is original App component ~ Ryleigh
/*const App = () => {
  return (
    <div className="content">
      <h1>This is the start</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};*/


// This is the modified App component based on 
// https://medium.com/@mechiranthan.y/a-step-by-step-guide-to-building-your-first-web-app-with-react-js-ad7bd6fe6e1b
//  ~ Ryleigh 
function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
