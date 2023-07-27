import React from 'react'
import {BsInstagram} from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai';
import {FiGithub} from 'react-icons/fi';

import {CiPaperplane} from 'react-icons/ci';
import eliza from '../assets/IMG_6234.jpg'



export default function Home() {
  return (
    <>
   

    <div id='home'  > 
   
   <div className=' flex justify-evenly px-[100px]  pt-[150px]  ' >
      <div className=" flex flex-col justify-center gap-[20px] text-[25px] text-pink-500 ">
      <div className="insta"> <a href="https://instagram.com"><BsInstagram/></a></div>
      <div className="l"><a href="https://www.linkedin.com/in/eliza-pant-98969b23a/"><AiFillLinkedin/></a></div>
      <div className="g"><a href="https://github.com"><FiGithub/></a></div>
      </div>

      
      <div className="flex flex-col  items-start gap-[15px]  pt-[10px] h-[400px]">
      <div className="text-[70px] font-semibold flex flex-col items-start">
      <div className='text-[#212B36]'>Eliza</div> 
      <div className='flex gap-[3px]  items-center '>
      <div className='text-[#212B36]'>Pant</div> 
          
      </div>
      </div>



      
      
      <div className="flex gap-5 items-center ">
      <div className="h-[2px] w-[80px] bg-pink-500"></div>
      <div className="pt-30px">Frontend Developer</div>
      </div>

      <div className="pt-60px flex flex-col items-start">
      <div>I'm a creative programmer and I'm very passionate and </div>
      <div>dedicated to my work.</div>
        </div>

        <a href="#contact">
      <div className=" pt-50px rounded-md py-[9px] px-[15px] bg-gray-700 text-white hover:bg-pink-500">
        <button className='flex items-center gap-1'>
         <div className='font-semibold'>Say Hello</div> 
         <div className='text-50px'><CiPaperplane/></div> 
          </button>
          </div>
          </a>

          </div>
         
     
    
      
      <div className="pic"><img src={eliza} className='w-[400px] h[100px] rounded-full '/>
      </div>
      

    
      </div>
      </div>
      </>
  )
}
 