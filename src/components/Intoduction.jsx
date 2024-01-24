import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import About from './About';
import Work from './Work';
import Portfolio from './Portfolio';

const Introduction = () => {
  return (
    <Router>
      <div className='md:flex-row md:min-h-screen sm:flex sm:flex-col overflow-hidden'>
        <Sidebar />

        <div className='md:w-3/4 p-4 flex flex-col flex-grow relative overflow-hidden'>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/work' element={<Work />} />
            <Route path='/portfolio' element={<Portfolio />} />
          </Routes>
          
          <footer className=' py-3  bottom-0 w-full text-start text-gray-500'>
            <p>&copy; {new Date().getFullYear()} Eliza Pant. All Rights Reserved.</p>
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default Introduction;
