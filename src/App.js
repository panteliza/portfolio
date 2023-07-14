import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Resume from './components/Resume';
import Contact from './components/Contact';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/services" component={Services} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
