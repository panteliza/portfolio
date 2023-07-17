import React from 'react'
import eliza from '../assets/IMG_6234.jpg'
import {HiOutlineBadgeCheck} from 'react-icons/hi';
import {BsHeadphones} from 'react-icons/bs';
import {BsBagCheck} from 'react-icons/bs';
import {HiOutlineDocumentText} from 'react-icons/hi';


export default function About() {
  return (
   
    <div id="about" className='pt-[70px]'>
      <div className="flex flex-col text-center  ">
        <div className="font-bold text-gray-800 text-[40px]">About Me</div>
        <div className="text-gray-500">My introduction</div>
      </div>
      <div className="flex  mt-7 px-[100px] py-[30px] rounded-md justify-between">
        <div className="h-[100px] w-[350px]"><img src={eliza}/></div>
        <div className="flex flex-col  h-[400px] w-[600px] justify-between">
          <div className="flex gap-2 justify-between ">
            <div className=' w-[200px] h-[200px] gap-[20px] flex flex-col items-center px-[15px] py-[15px] shadow-2xl'>
              <div className="text-[30px] text-pink-500"><HiOutlineBadgeCheck/></div>
              <div className="text-bold text-black text-[30px]">Experience</div>
              <div className="text-[15px] font-semibold text-gray-700">2 years working</div>
            </div>
            <div className=' w-[200px] h-[200px] gap-[20px] flex flex-col items-center px-[15px] py-[15px] shadow-2xl'>
              <div className="text-[30px] text-pink-500"><BsBagCheck/></div>
              <div className="text-bold text-black text-[30px]">Completed</div>
              <div className="text-[15px] font-semibold text-gray-700">20 + Projects</div>
            </div>
            <div className=' w-[200px] h-[200px] gap-[20px] flex flex-col items-center px-[15px] py-[15px] shadow-2xl'>
              <div className="text-[30px] text-pink-500"><BsHeadphones/></div>
              <div className="text-bold text-black text-[30px]">Support</div>
              <div className="text-[15px] font-semibold text-gray-700">Online 24/7</div>
            </div>
          </div>
          <div className="w-[600px] mt-[20px]">Hi there  ! I'm a passionate frontend developer with 2 years of experience in crafting beautiful and interactive web experiences.  I have a strong background in HTML, CSS, and JavaScript, and I'm always eager to stay up-to-date with the latest web technologies and design trends.My skill set extends beyond the basics. I am proficient in using popular frontend frameworks such as React and Angular, enabling me to build scalable and efficient applications. I also have experience with version control systems like Git, which helps me maintain code quality and collaborate effectively with other developers.</div>
          <div className=" mt-[3px]  "><button className='bg-slate-800 text-white
           px-[9px] py-[3px] flex gap-[3px] items-center rounded-md'>
          <div >
            Download CV
            </div>
            <div><HiOutlineDocumentText/></div>
            </button>
            </div>
        </div>
      </div>
    </div>
    
  )
}
