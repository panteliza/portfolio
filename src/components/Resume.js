import React,{useState} from 'react'
import {FaGraduationCap  } from 'react-icons/fa';
import {BiBriefcaseAlt2  } from 'react-icons/bi';
import {FaReact  } from 'react-icons/fa';
import {SiTailwindcss  } from 'react-icons/si';
import {FiCode  } from 'react-icons/fi';
import {SiFramer  } from 'react-icons/si';
import {IoLogoNodejs  } from 'react-icons/io';
import {SiMongodb  } from 'react-icons/si';

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
    justify-center mt-[150px]'>
     <div className="font-bold text-gray-800 text-[40px]  ">Qualification</div>
     <div className="text-gray-500">My personal journey</div>

     <div className='flex gap-10 mt-[30px]'>
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
     
      


     {/* for experience */}
     {isEducationClicked && (
     <div className='flex gap-[20px] relative'>
      
        <img src={abc} className='w-[120px] h-[500px] mt-[40px]'/>
        <div className='text-white text-[30px] absolute top-[88px] left-[45px]'><FaReact/></div>
        <div className='text-white text-[30px] absolute top-[280px] left-[45px]'><SiTailwindcss/></div>
        <div className='text-white text-[30px] absolute top-[470px] left-[45px]'><FiCode/></div>
      <div className='flex flex-col gap-1 absolute bottom-[350px] w-[390px] right-[120px]'> 
        <div className='text-pink-500 font-semibold text-[20px]'>2018-present</div>
        <div className="font-bold">Bachelor of Science in Computer Science and Information Technology</div>
        <div className=''>Tribhuvan University, Institute of Science and Technology</div>
      </div>
      <div className='flex flex-col gap-1 absolute bottom-[200px] w-[390px] left-[180px]'> 
        <div className='text-pink-500 font-semibold text-[20px]'>2015-2017</div>
        <div className="font-bold">High School Science Stream</div>
        <div className=''>SOS Hermann Gmeiner School Bharatpur</div>
      </div>
      <div className='flex flex-col gap-1 absolute bottom-[-1px]  w-[390px] right-[120px]'> 
        <div className='text-pink-500 font-semibold text-[20px]'>2007-2015</div>
        <div className="font-bold">Schooling</div>
        <div className=''>Little Flower School, Chitwan</div>
      </div>
     
     </div>
   ) }



{isExperienceClicked && (
     <div className='flex gap-[20px] relative'>
      
        <img src={abc} className='w-[120px] h-[500px] mt-[40px]'/>
        <div className='text-white text-[30px] absolute top-[88px] left-[45px]'><SiFramer/></div>
        <div className='text-white text-[30px] absolute top-[280px] left-[45px]'><IoLogoNodejs/></div>
        <div className='text-white text-[30px] absolute top-[470px] left-[45px]'><SiMongodb/></div>
      <div className='flex flex-col gap-1 absolute bottom-[400px] w-[390px] left-[180px]'> 
        <div className='text-pink-500 font-semibold text-[20px]'>2023-Present
        </div>
        <div className="font-bold">Frontend Developer</div>
        <div className=''>Intelzy </div>
      </div>
      <div className='flex flex-col gap-1 absolute bottom-[200px] w-[390px] right-[-50px]'> 
        <div className='text-pink-500 font-semibold text-[20px]'>2023-Present</div>
        <div className="font-bold">Frontend Developer</div>
        <div className=''>Intelzy</div>
      </div>
      <div className='flex flex-col gap-1 absolute bottom-[10px]  w-[390px] left-[180px]'> 
        <div className='text-pink-500 font-semibold text-[20px]'>2023-present</div>
        <div className="font-bold">Frontend Developer</div>
        <div className=''>Intelzy</div>
      </div>
     
     </div>
   ) }
    </div>
  )
}

export default Resume