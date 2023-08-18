import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineDoubleRight } from 'react-icons/ai';
import { MdWorkOutline } from 'react-icons/md';
import { BsCodeSquare, BsLinkedin } from 'react-icons/bs';
import { ImBlogger } from 'react-icons/im';
import { CgFileDocument } from 'react-icons/cg';
import { BsInstagram, BsGithub } from 'react-icons/bs';
import pp from '../assets/IMG_7147.jpg'

const Sidebar = () => {
  return (
    <div className='w-1/4 h-screen border-r-2 border-gray-200 pt-[40px] flex flex-col gap-16'>
      {/* Profile and other sidebar content */}
      <div className='flex justify-center items-center lg:gap-5 md:gap-2 '>
        <div className=''>
          {/* Your profile image */}
          <img
            src={pp} // Your profile image source
            className='lg:w-[80px] lg:h-[80px] 2xl:w-[100px] 2xl:h-[100px] md:w-[60px] md:h-[60px] rounded-full '
            alt='Profile'
          />
        </div>
        <div className='flex flex-col '>
          <div className='font-semibold md:text-[15px] lg:text-[20px] 2xl:text-[40px] text-gray-700'>
            Eliza Pant
          </div>
          <div className='lg:text-[15px] md:text-[10px] 2xl:text-[20px]'>Frontend Developer</div>
        </div>
      </div>
      
      {/* Sidebar links */}
      <div className='flex flex-col gap-3 md:pl-[40px] xl:pl-[60px] text-gray-600 md:text-[15px] lg:text-[18px] 2xl:text-[30px] 2xl:pl-[70px] '>
        <Link to='/'>
          <div className='flex items-center gap-3'>
            <AiOutlineHome />
            Home
          </div>
        </Link>
        <Link to='/work'>
          <div className='flex items-center gap-3'>
            <MdWorkOutline />
            Work
          </div>
        </Link>
        <Link to='/portfolio'>
          <div className='flex items-center gap-3'>
            <BsCodeSquare />
            Portfolio
          </div>
        </Link>
        <Link to='/blog'>
          <div className='flex items-center gap-3'>
            <ImBlogger />
            Blog
          </div>
        </Link>
      </div>
      
      {/* Socials section */}
      <div className='flex flex-col gap-2'>
        <div className='font-semibold text-gray-500 md:text-[15px] lg:text-[18px] md:pl-[40px] xl:pl-[60px] 2xl:text-[30px] 2xl:pl-[70px] '>SOCIALS</div>
        <div className='flex flex-col gap-3 md:pl-[40px] xl:pl-[60px] text-gray-600 md:text-[15px] lg:text-[18px] 2xl:text-[30px] 2xl:pl-[70px]'>
        <div className="flex flex-col gap-3">
      <a href="https://www.instagram.com/" className="flex items-center gap-3">
        <BsInstagram />
        Instagram
      </a>
      <a href="https://www.example.com/cv.pdf" className="flex items-center gap-3">
        <CgFileDocument />
        Read CV
      </a>
      <a href="https://github.com/" className="flex items-center gap-3">
        <BsGithub />
        Github
      </a>
      <a href="https://www.linkedin.com/" className="flex items-center gap-3">
        <BsLinkedin />
        LinkedIn
      </a>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
