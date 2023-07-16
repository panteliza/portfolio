import React from 'react';
import { BiHome } from 'react-icons/bi';
import { GoPerson } from 'react-icons/go';

import { MdHomeRepairService } from 'react-icons/md';
import { MdOutlinePhotoFilter } from 'react-icons/md';
import { CiPaperplane } from 'react-icons/ci';


export default function Navbar() {
  return (
   
    <div className="navbar sticky top-0 w-full  ">
      <div className="flex justify-between px-[100px] py-[30px] bg-[#212B36]">
        <div className="font-semibold text-white flex text-[30px]">
          <div className='text-pink-500 '>E</div>
          <div>liza</div>
        </div>
        <div className="flex justify-end gap-[40px]">
        <a href="#home">
          <div className="flex flex-col items-center text-white hover:text-pink-500">
          
            <div className=""><BiHome /></div>
            <div>Home</div>
          </div>
            </a>

            <a href="#about">
          <div className="flex flex-col items-center text-white hover:text-pink-500">
         <div className=""><GoPerson /></div>
            <div>About</div>
          </div>
            </a>

            <a href="#resume">
          <div className="flex flex-col items-center text-white hover:text-pink-500">
            <div className=""><MdOutlinePhotoFilter /></div>
            <div>Resume</div>
          </div>
          </a>
         
          <a href="#projects">
          <div className="flex flex-col items-center text-white hover:text-pink-500">
         
            <div className=""><MdHomeRepairService /></div>
            <div>Projects</div>
          </div>
            </a>
         
            <a href="#contact">
          <div className="flex flex-col items-center text-white hover:text-pink-500">
            <div className=""><CiPaperplane /></div>
            <div>Contact</div>
          </div>
          </a>
        </div>
      </div>
    </div>
  );
}