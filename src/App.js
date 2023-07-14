
import './App.css';
import About from './components/About';
import Home from './components/Home';

import Contact from './components/Contact';

import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Resume from './components/Resume';


function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Resume/>
    <Skills/>
    <Services/>
    </>
    
  );
}

export default App;
