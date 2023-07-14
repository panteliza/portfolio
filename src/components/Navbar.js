import React from 'react';
import { BiHome } from 'react-icons/bi';
import { GoPerson } from 'react-icons/go';
import { HiDocument } from 'react-icons/hi';
import { MdHomeRepairService } from 'react-icons/md';
import { MdOutlinePhotoFilter } from 'react-icons/md';
import { CiPaperplane } from 'react-icons/ci';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar sticky top-0 w-full">
      <div className="flex justify-between px-[100px] py-[30px] bg-[#212B36]">
        <div className="font-semibold text-white flex text-[30px]">
          <div className='text-pink-500'>E</div>
          <div>liza</div>
        </div>
        <div className="flex justify-end gap-[40px]">
          <Link to="/" className="flex flex-col items-center text-white hover:text-pink-500">
            <div className=""><BiHome /></div>
            <div>Home</div>
          </Link>
          <Link to="/about" className="flex flex-col items-center text-white hover:text-pink-500">
            <div className=""><GoPerson /></div>
            <div>About</div>
          </Link>
          <Link to="/skills" className="flex flex-col items-center text-white hover:text-pink-500">
            <div className=""><HiDocument /></div>
            <div>Skills</div>
          </Link>
          <Link to="/services" className="flex flex-col items-center text-white hover:text-pink-500">
            <div className=""><MdHomeRepairService /></div>
            <div>Services</div>
          </Link>
          <Link to="/resume" className="flex flex-col items-center text-white hover:text-pink-500">
            <div className=""><MdOutlinePhotoFilter /></div>
            <div>Resume</div>
          </Link>
          <Link to="/contact" className="flex flex-col items-center text-white hover:text-pink-500">
            <div className=""><CiPaperplane /></div>
            <div>Contact</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
