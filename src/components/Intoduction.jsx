import React from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./Sidebar";
import About from "./About";


import CV from "./CV";

const Introduction = () => {
  return (
    <div className="md:flex md:flex-row flex flex-col min-h-screen overflow-hidden bg-[#070A12]">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="md:w-3/4 w-full p-4 flex flex-col flex-grow relative overflow-hidden">
        
        <Routes>
          <Route path="/" element={<About />} />
         
       
          <Route path="/cv" element={<CV />} />
        </Routes>

        {/* Footer */}
        <footer className="mt-auto py-4 text-start text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Eliza Pant. All Rights Reserved.
          </p>
        </footer>

      </div>
    </div>
  );
};

export default Introduction;