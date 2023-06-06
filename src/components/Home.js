import React from 'react'
import {BsInstagram} from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai';
import {FiGithub} from 'react-icons/fi';
import {IoMdHand} from 'react-icons/io';
import {CiPaperplane} from 'react-icons/ci';
import eliza from '../assets/IMG_6234.jpg'


export default function Home() {
  return (
   <div className=' flex justify-between px-[100px] py-[60px]  '>
      <div className=" flex flex-col justify-center gap-[20px] text-[25px]">
        <div className="insta"><BsInstagram/></div>
       <div className="l"><AiFillLinkedin/></div>
       <div className="g"><FiGithub/></div>
      </div>

      
      <div className="flex flex-col  items-start gap-[15px]  pt-[10px] h-[400px]">
      <div className="text-[70px] font-semibold flex flex-col items-start">
        <div className='text-gray-800'>Eliza</div> 
        <div className='flex gap-[3px]  items-center '>
          <div className='text-gray-800'>Pant</div> 
          <div  className="text-yellow-400"><IoMdHand/></div>
      </div>
      </div>



      
      
      <div className="flex gap-5 items-center ">
        <div className="h-[2px] w-[80px] bg-black"></div>
      <div className="pt-30px">Software Engineer</div>
      </div>

      <div className="pt-60px flex flex-col items-start">
        <div>I'm a creative programmer and I'm very passionate and </div>
         <div>dedicated to my work.</div>
        </div>

      <div className=" pt-50px rounded-md py-[9px] px-[15px] bg-gray-700 text-white">
        <button className='flex items-center gap-1'>
         <div className='font-semibold'>Say Hello</div> 
         <div className='text-50px'><CiPaperplane/></div> 
          </button>
          </div>

          </div>
         
     
    
      
      <div className="pic"><img src={eliza} className='w-[350px] h[100px] rounded-full'/>
      </div>
      

    
      </div>
    
  )
}
