import React from 'react'
import eliza from '../assets/IMG_6234.jpg'
import {HiOutlineBadgeCheck} from 'react-icons/hi';
import {BsHeadphones} from 'react-icons/bs';
import {BsBagCheck} from 'react-icons/bs';
import {HiOutlineDocumentText} from 'react-icons/hi';

export default function About() {
  return (
    <div>
      <div className="flex flex-col text-center mt-7">
        <div className="font-bold text-gray-800 text-[40px]">About Me</div>
        <div className="text-gray-500">My introduction</div>
      </div>
      <div className="flex  mt-7 px-[100px] py-[30px] rounded-md justify-between">
        <div className="h-[100px] w-[350px]"><img src={eliza}/></div>
        <div className="flex flex-col  h-[400px] w-[600px] justify-between">
          <div className="flex gap-2 justify-between ">
            <div className=' w-[200px] h-[200px] gap-[20px] flex flex-col items-center px-[15px] py-[15px] shadow-2xl'>
              <div className="text-[30px]"><HiOutlineBadgeCheck/></div>
              <div className="text-bold text-black text-[30px]">Experience</div>
              <div className="text-[15px] font-semibold text-gray-700">5 years working</div>
            </div>
            <div className=' w-[200px] h-[200px] gap-[20px] flex flex-col items-center px-[15px] py-[15px] shadow-2xl'>
              <div className="text-[30px]"><BsBagCheck/></div>
              <div className="text-bold text-black text-[30px]">Completed</div>
              <div className="text-[15px] font-semibold text-gray-700">15 + Projects</div>
            </div>
            <div className=' w-[200px] h-[200px] gap-[20px] flex flex-col items-center px-[15px] py-[15px] shadow-2xl'>
              <div className="text-[30px]"><BsHeadphones/></div>
              <div className="text-bold text-black text-[30px]">Support</div>
              <div className="text-[15px] font-semibold text-gray-700">Online 24/7</div>
            </div>
          </div>
          <div className="w-[400px]">Frontend developer.I create web pages with best user interfaces. I have years of experience and many client are happy with the project carried out.</div>
          <div className="   "><button className='bg-slate-800 text-white
           px-[9px] py-[3px] flex gap-[3px] items-center rounded-md'>
          <div>
            Download cv
            </div>
            <div><HiOutlineDocumentText/></div>
            </button>
            </div>
        </div>
      </div>
    </div>
  )
}
