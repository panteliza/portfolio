import React, { useState, useEffect } from 'react';
import elu from '../assets/IMG_6234.jpg';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineDoubleRight } from 'react-icons/ai';

const About = () => {
  const [currentAction, setCurrentAction] = useState(0);
  const actions = ['design', 'develop','debug', 'deploy'];
  const gradients = [
    'from-indigo-500 via-purple-500 to-pink-500',
    'from-green-500 via-teal-500 to-cyan-500',
    'from-pink-400 via-pink-500 to-pink-600',
    'from-yellow-500 via-orange-500 to-red-500'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAction((prevAction) => (prevAction + 1) % actions.length);
    }, 1000); // Change this interval according to your preference
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='h-screen' id='about'>
      <div className='sm:flex-row flex flex-col sm:gap-10 gap-4 sm:px-[40px] px-[25px] md:py-[60px] sm:py-[30px] items-center justify-center '>
        <div className='hidden sm:flex flex-col gap-2 w-2/3 '>
          <div className='font-bold xl:text-[30px] 2xl:text-[40px] lg:text-[24px] md:text-[16px] text-gray-700'>Hi there, I am Eliza.</div>
          <div className='font-bold xl:text-[30px] 2xl:text-[40px] lg:text-[24px] md:text-[16px] text-gray-700'>
            I like to{' '}
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${gradients[currentAction]}`}>
              {actions[currentAction]}
            </span>{' '}
            webapps.
          </div>
          <div className="text-gray-700 lg:text-[16px] 2xl:text-[28px] xl:text-[20px] md:text-[12px] sm:text-[10px] text-justify">
            A dynamic software engineer by day, a visionary artist by night; my code doesn't just function, it dances – a testament to my unyielding passion, unwavering talent, and audacious spirit in shaping the digital world.
          </div>
          <Link to='/work'>
          <div className='text-gray-600 flex items-center gap-2 mt-3 lg:text-[18px] md:text-[10px]'>
            View Featured Projects <AiOutlineDoubleRight/>
          </div>
          </Link>
        </div>



        <div className='sm:w-1/3  w-[180px] p-3  '>
          <img src={elu} className='2xl:w-[350px] 2xl:h-[400px]
           rounded-full' alt='Elu' />
        </div>
        
       
        <div className='sm:hidden flex flex-col gap-1   justify-center '>
          <div className='font-bold  text-gray-700'>Hi there, I am Eliza.</div>
          <div className='font-bold ] text-gray-700'>
            I like to{' '}
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${gradients[currentAction]}`}>
              {actions[currentAction]}
            </span>{' '}
            websites.
          </div>
          <div className="text-gray-700 text-[11px]  ">
            A dynamic software engineer by day, a visionary artist by night; my code doesn't just function, it dances – a testament to my unyielding passion, unwavering talent, and audacious spirit in shaping the digital world.
          </div>
          <Link to='/work'>
          <div className='text-gray-600 flex items-center gap-2 mt-3 text-[12px]'>
            View Featured Projects <AiOutlineDoubleRight/>
          </div>
          </Link>
        </div>
       



      </div>
    </div>
  );
};

export default About;