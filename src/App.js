import logo from './logo.svg';
import './App.css';
import './HomePage.js';
import './AboutUs';
import HomePage from './HomePage.js';
import AboutUs from './AboutUs.js';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<HomePage />}/>
        <Route path='AboutUs sevil' element={<AboutUs />}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
