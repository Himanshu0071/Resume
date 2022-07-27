import './App.css';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Home from './PortfolioContainer/Home/Home';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';
import {Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Home

      />
      <AboutMe/>
      <ContactMe
      />
      <div >

      </div>
    </div>
  );
}

export default App;
