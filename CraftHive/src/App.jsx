import './App.css';
import Navbar from './Navbar';

// This is original App component ~ Ryleigh
const App = () => {
  return (
    <div className="content">
      <h1>Welcome to CraftHive!</h1>
      <p>Created by ByteBrigade with rsbuild.</p>
      <div class="inline-block group p-6 border-2 cursor-pointer hover:bg-gray-50 hover:border-blue-100">
        <button type='button' className='class="shadow h-16 w-13 m-4 bg-teal-400 inline-flex"'>Click this button here</button> 
      </div>
      <br></br>
      <div>
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </div>
  );
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
