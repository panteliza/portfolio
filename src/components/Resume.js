import React from 'react'
import {FaGraduationCap  } from 'react-icons/fa';
import {BiBriefcaseAlt2  } from 'react-icons/bi';
const Resume = () => {
  return (
    <div className='flex flex-col items-center
    justify-center m-[50px]'>
     <div className="font-bold text-gray-800 text-[40px]  ">Qualification</div>
     <div className="text-gray-500">My personal journey</div>

     <div className='flex gap-10 mt-[60px]'>
      <div className='flex gap-2  justify-center items-center '>
        <FaGraduationCap className='text-[25px]'/>
        <div className='text-[20px] font-semibold'>Education</div>
      </div>
      <div className='flex gap-2  justify-center items-center '>
        <BiBriefcaseAlt2 className='text-[25px]'/>
        <div className='text-[20px] font-semibold'>Experience</div>
      </div>
     </div>
     
      {/* For education */}
     <div className='flex gap-[20px]'>
      <div></div>
      <div></div>
      <div></div>
     </div>

    </div>
  )
}

export default Resume