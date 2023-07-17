import React from 'react';


import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
   <>
   <Navbar/>
   <Home/>
   <About/>
   <Resume/>
   <Projects/>
   <Contact/>
   <Footer/>
   </>
  );
};

export default App;
