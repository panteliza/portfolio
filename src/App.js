
import './App.css';
import About from './components/About';
import Home from './components/Home';

import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Services from './components/Services';


function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Services/>
    </>
    
  );
}

export default App;
