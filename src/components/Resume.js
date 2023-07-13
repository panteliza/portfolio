import React,{useState} from 'react'
import {FaGraduationCap  } from 'react-icons/fa';
import {BiBriefcaseAlt2  } from 'react-icons/bi';
import {FaReact  } from 'react-icons/fa';
import {SiTailwindcss  } from 'react-icons/si';
import {FiCode  } from 'react-icons/fi';

import abc from '../assets/Asset 4.png'
const Resume = () => {
  const [isEducationClicked, setIsEducationClicked] = useState(true);
  const [isExperienceClicked, setIsExperienceClicked] = useState(false);

  const handleEducationClick = () => {
    setIsEducationClicked(true);
    setIsExperienceClicked(false)
  };
   const handleExperienceClick = () => {
    setIsEducationClicked(false)
      setIsExperienceClicked(true);
    };

  return (
    <div className='flex flex-col items-center
    justify-center m-[50px]'>
     <div className="font-bold text-gray-800 text-[40px]  ">Qualification</div>
     <div className="text-gray-500">My personal journey</div>

     <div className='flex gap-10 mt-[60px]'>
     <div className={`flex gap-2  justify-center items-center cursor-default ${isEducationClicked ? 'text-pink-500' : 'inherit'} `}   onClick={handleEducationClick}>
        <FaGraduationCap className='text-[25px]'/>
        <div className='text-[20px] font-semibold' 
      >Education</div>
      </div>
      <div className={`flex gap-2  justify-center items-center cursor-default ${isExperienceClicked ? 'text-pink-500' : 'inherit'} `}  onClick={handleExperienceClick}>
        <BiBriefcaseAlt2 className='text-[25px]'/>
        <div className='text-[20px] font-semibold '
       >Experience</div>
      </div>
      
     </div>
     
      {/* For education */}
     {/* <div className='flex gap-[20px]'>
      <div className='relative'>
        <img src={abc} className='w-[120px] h-[500px] mt-[40px]'/>
        <div className='text-white text-[30px] absolute top-[88px] left-[45px]'><FaReact/></div>
        <div className='text-white text-[30px] absolute top-[280px] left-[45px]'><SiTailwindcss/></div>
        <div className='text-white text-[30px] absolute top-[470px] left-[45px]'><FiCode/></div>
      </div>
     
     </div> */}


     {/* for experience */}
     {isEducationClicked && (
     <div className='flex gap-[20px]'>
      <div className='relative'>
        <img src={abc} className='w-[120px] h-[500px] mt-[40px]'/>
        <div className='text-white text-[30px] absolute top-[88px] left-[45px]'><FaReact/></div>
        <div className='text-white text-[30px] absolute top-[280px] left-[45px]'><SiTailwindcss/></div>
        <div className='text-white text-[30px] absolute top-[470px] left-[45px]'><FiCode/></div>
      </div>
     </div>
   ) }

    </div>
  )
}

export default Resume