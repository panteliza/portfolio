import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

const App = () => {
  return (
    // will update tomorrow
   <>
   <Home/>
   <About/>
   <Resume/>
   <Projects/>
   <Contact/>
   </>
  );
};

export default App;
