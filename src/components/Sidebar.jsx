import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineDoubleRight } from 'react-icons/ai';
import { MdWorkOutline } from 'react-icons/md';
import { BsCodeSquare, BsLinkedin, BsGrid } from 'react-icons/bs';
import { ImBlogger } from 'react-icons/im';
import { CgFileDocument } from 'react-icons/cg';
import { IoIosCloseCircle } from 'react-icons/io';
import { BsInstagram, BsGithub } from 'react-icons/bs';
import pp from '../assets/IMG_7147.jpg';

const Sidebar = () => {
  const [show, setShow] = useState(false);

  function showIt() {
    setShow(!show);
  }

  return (
    <>
      <div className='hidden md:w-1/4 md:h-screen border-r-2 border-gray-200 md:pt-[40px] md:flex md:flex-col gap-16'>
        <div className='flex justify-center items-center lg:gap-5 md:gap-2 '>
          <div className=''>
            <img
              src={pp}
              className='lg:w-[80px] lg:h-[80px] 2xl:w-[100px] 2xl:h-[100px] md:w-[60px] md:h-[60px] rounded-full'
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
        <div className='flex flex-col gap-2'>
          <div className='font-semibold text-gray-500 md:text-[15px] lg:text-[18px] md:pl-[40px] xl:pl-[60px] 2xl:text-[30px] 2xl:pl-[70px] '>
            SOCIALS
          </div>
          <div className='flex flex-col gap-3 md:pl-[40px] xl:pl-[60px] text-gray-600 md:text-[15px] lg:text-[18px] 2xl:text-[30px] 2xl:pl-[70px]'>
            <div className='flex flex-col gap-3'>
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

      {!show && (
        <div className="md:hidden h-[50px] bg-gray-200 flex sm:px-[30px] px-[15px] justify-between">
          <div className='flex gap-2 items-center '>
            <img
              src={pp}
              className='sm:h-[50px] sm:w-[50px] h-[30px] w-[30px] rounded-full'
              alt='Profile'
            />
            <div className='flex flex-col '>
              <div className='font-semibold sm:text-[15px] text-[12px] text-gray-700'>
                Eliza Pant
              </div>
              <div className='sm:text-[12px] text-[9px]'>Frontend Developer</div>
            </div>
          </div>
          <div className='sm:text-[25px] text-[20px] text-gray-500  flex items-center'>
            <BsGrid onClick={showIt} />
          </div>
        </div>
      )}

      {show && (
        <div className="md:hidden h-[80px]  flex sm:px-[30px] pl-[15px] pr-[10px] justify-between">
          <div className='flex gap-2 items-center h-[50px] '>
            <img
              src={pp}
              className='sm:h-[50px] sm:w-[50px] h-[30px] w-[30px] rounded-full'
              alt='Profile'
            />
            <div className='flex flex-col '>
              <div className='font-semibold sm:text-[15px] text-[12px] text-gray-700'>
                Eliza Pant
              </div>
              <div className='sm:text-[12px] text-[9px]'>Frontend Developer</div>
            </div>
          </div>






          <div className='sm:flex-row flex flex-col  sm:text-[18px] text-[12px] sm:gap-[30px] gap-[10px] bg-pink-500 pt-3'>
            <div className='flex text-gray-600 sm:gap-[30px] gap-[40px] bg-red-600'>
              <Link to='/'>
                <div className='flex flex-col items-center sm:gap-1'>
                  <AiOutlineHome />
                  Home
                </div>
              </Link>
              <Link to='/work'>
                <div className='flex flex-col items-center sm:gap-1'>
                  <MdWorkOutline />
                  Work
                </div>
              </Link>
              
              <div className='sm:hidden  font-bold text-gray-500   flex items-center '>
                <IoIosCloseCircle className='sm:text-[20px]' onClick={showIt} />
              </div>
            </div>
            <div className='flex text-gray-600 sm:gap-[30px] gap-[40px] bg-purple-600 '>
            <Link to='/portfolio'>
            <div className='flex flex-col items-center  sm:gap-1'>
              <BsCodeSquare />
              Portfolio
            </div>
          </Link>
          <Link to='/blog'>
            <div className='flex flex-col items-center  sm:gap-1'>
              <ImBlogger />
              Blog
            </div>
          </Link>
            </div>
            <div className='hidden sm:block font-bold text-gray-500 sm:flex items-center'>
                <IoIosCloseCircle className='sm:text-[20px]' onClick={showIt} />
              </div>
          </div>





        </div>
      )}
    </>
  );
};

export default Sidebar;
