import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import About from './About';
import Work from './Work';
import Portfolio from './Portfolio';
import Blog from './Blog';

const Introduction = () => {
  return (
    <Router>
      <div className='md:flex-row md:min-h-screen sm:flex sm:flex-col'>
        <Sidebar />

        <div className='md:w-3/4 p-4 flex flex-col flex-grow relative'>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/work' element={<Work />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/blog' element={<Blog />} />
          </Routes>
         
        
          <footer className='text-center py-3 absolute bottom-0   w-full'>
              <p>&copy; {new Date().getFullYear()} Eliza Pant. All Rights Reserved.</p>
            </footer>
       
        </div>
      </div>
    </Router>
  );
};

export default Introduction;
