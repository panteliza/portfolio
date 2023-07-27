import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className=" bg-[#212B36] w-full bottom-0 mt-[150px] flex flex-col justify-center items-center py-[40px] gap-5">
        <div className='text-white'>&copy; {new Date().getFullYear()} Eliza Pant. All rights reserved.</div>
        <ul className="text-pink-500 flex gap-5">
          <li className='rounded-full text-[30px] bg-white h-[40px] w-[40px] flex justify-center items-center'>
            <a href="https://www.facebook.com"> {/* Updated link */}
              <FaFacebookF/>
            </a>
          </li>
          <li className='rounded-full text-[30px] bg-white h-[40px] w-[40px] flex justify-center items-center'>
            <a href="https://www.instagram.com"> {/* Updated link */}
              <FaInstagram/>
            </a>
          </li>
          <li className='rounded-full text-[30px] bg-white h-[40px] w-[40px] flex justify-center items-center'>
            <a href="https://www.linkedin.com"> {/* Updated link */}
              <FaLinkedinIn/>
            </a>
          </li>
          <li className='rounded-full text-[30px] bg-white h-[40px] w-[40px] flex justify-center items-center'>
            <a href="https://github.com"> {/* Updated link */}
              <FaGithub/>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
