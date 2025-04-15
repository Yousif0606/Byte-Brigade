import { renatoSayHi } from '../helpers/renato';
import './App.css';
import {PricingSuggestionPage, renatoSayHi} from './components/PricingSuggestionPage'
import { useEffect } from 'react';

// This is original App component ~ Ryleigh
const App = () => {


  // useEffect(() => {
  //     renatoSayHi('yousif');
  // }, []); 



  return (
    <PricingSuggestionPage />
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
