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
      <div className='flex min-h-screen'>
        <Sidebar />

        <div className='w-3/4 p-4 flex flex-col flex-grow relative'>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/work' element={<Work />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/blog' element={<Blog />} />
          </Routes>
          <div className='bg-gray-200 flex justify-center items-center absolute bottom-0 left-0 right-0 h-6 text-gray-500'>
          <p>&copy; 2023 Eliza Pant. All Rights Reserved</p>

          </div>
        </div>
      </div>
    </Router>
  );
};

export default Introduction;
