import React from 'react'
import elu from '../assets/IMG_6234.jpg'
import { HiOutlineBadgeCheck } from 'react-icons/hi';
import { BsHeadphones } from 'react-icons/bs';
import { BsBagCheck } from 'react-icons/bs';
const About = () => {
  return (
   <>
   <div id="about" className='pt-[70px] pb-[20px] xl:px-[40px] lg:px-[100px] px-[80px] '>
    
    <div className='flex flex-col justify-center items-center'>
      <div className='font-bold text-gray-700 md:text-[40px] text-[20px]'>About Me</div>
      <div className='text-gray-500'>My Introduction</div>
    </div>



<div className='lg:flex  mt-[30px] gap-10 '>
 


        <img src={elu} className='2xl:w-[1350px] 2xl:h-[700px]
                                   xl:w-[600px] xl:h-[459px]
                                   lg:w-[355px] lg:h-[355px]'
                                    />
     







 <div className='flex flex-col gap-7 '>
 <div className='lg:flex-row xl:gap-10 lg:gap-6  flex flex-col justify-center items-center '>
      <div className="xl:w-[200px] w-[120px] xl:h-[200px] h-[120px] xl:gap-[20px] gap-[12px] flex flex-col items-center  xl:px-[15px] px-[10px] xl:py-[15px] py-[10px] shadow-2xl ">
      <div className="xl:text-[30px] text-[20px] text-pink-500">
        <HiOutlineBadgeCheck />
      </div>
      <div className="text-bold text-black xl:text-[30px] text-[20px]">Experience</div>
      <div className="xl:text-[15px] text-[10px] font-semibold text-gray-700">2 years working</div>
    </div>

    <div className="xl:w-[200px] w-[120px] xl:h-[200px] h-[120px] xl:gap-[20px] gap-[12px] flex flex-col items-center xl:px-[15px] px-[10px] xl:py-[15px] py-[10px] shadow-2xl">
    <div className="xl:text-[30px] text-[20px] text-pink-500">
    <BsBagCheck />
    </div>
    <div className="text-bold text-black xl:text-[30px] text-[20px]">Completed</div>
    <div className="xl:text-[15px] text-[10px] font-semibold text-gray-700">20 + Projects</div>
    </div>

    <div className="xl:w-[200px] w-[120px] xl:h-[200px] h-[120px] xl:gap-[20px] gap-[12px] flex flex-col items-center xl:px-[15px] px-[10px] xl:py-[15px] py-[10px] shadow-2xl">
    <div className="xl:text-[30px] text-[20px] text-pink-500">
    <BsHeadphones />
    </div>
    <div className="text-bold text-black xl:text-[30px] text-[20px]">Support</div>
    <div className="xl:text-[15px] text-[10px] font-semibold text-gray-700">Online 24/7</div>
    </div>
 </div>
 <div className='text-justify lg:text-[16px] xl:text-[22px] 2xl:text-[31px] text-[15px] text-gray-700'> 
Hi there! I'm a passionate frontend developer with 2 years of experience in crafting beautiful and interactive web experiences. I have a strong background in HTML, CSS, and JavaScript, and I'm always eager to stay up-to-datewith the latest web technologies and design trends. My skill set extends beyond the basics. I am proficient in using popular frontend frameworks such as React and Angular, enabling me to build scalable anefficient
applications. I also have experience with version control systems like Git, which helps me maintain code quality and collaborate effectively with other developers.
</div>
</div>

</div>

    

   </div>
   </>
  )
}

export default About