import './App.css';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Home from './PortfolioContainer/Home/Home';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';
import { createRef } from 'react';

function App() {
  const contactRef= createRef()

  return (
    <div className="App">
      <Home
        cRef={contactRef}
      />
      <AboutMe/>
      <ContactMe
      setRef={contactRef}
      />
    </div>
  );
}

export default App;
