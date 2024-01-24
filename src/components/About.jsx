import React, { useState, useEffect } from 'react';
import elu from '../assets/IMG_6234.jpg';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineDoubleRight } from 'react-icons/ai';

const About = () => {
  const [currentAction, setCurrentAction] = useState(0);
  const actions = ['Passionate Problem Solver', 'Continuous Learner and Innovator','Effective Collaborator and Communicator'];
  const gradients = [
    'from-indigo-500 via-purple-500 to-pink-500',
    'from-green-500 via-teal-500 to-cyan-500',
    'from-pink-400 via-pink-500 to-pink-600',
    'from-yellow-500 via-orange-500 to-red-500'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAction((prevAction) => (prevAction + 1) % actions.length);
    }, 2000); // Change this interval according to your preference
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='h-screen mb-5' id='about'>
      <div className='sm:flex-row flex flex-col sm:gap-10 gap-4 sm:px-[40px] px-[25px] md:py-[60px] sm:py-[30px] items-center   '>
        <div className='hidden sm:flex flex-col gap-2 '>
          <div className='font-bold xl:text-[30px] 2xl:text-[40px] lg:text-[24px] md:text-[16px] text-gray-700'>Hi there, I am Eliza.</div>
          <div className='font-bold xl:text-[30px] 2xl:text-[40px] lg:text-[24px] md:text-[16px] text-gray-700'>
            
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${gradients[currentAction]}`}>
              {actions[currentAction]}
            </span>{' '}
           
          </div>
          <div className="text-gray-700 lg:text-[10px] 2xl:text-[20px] xl:text-[15px] md:text-[15px] sm:text-[10px] text-justify max-w-[700px]">
          As a professional software engineer, I specialize in developing dynamic web applications. Beyond my technical expertise, I am also a visionary artist, with a passion for transforming ideas into robust and efficient solutions. Outside the world of coding, you'll find me continuously exploring new technologies, staying in step with emerging trends, and contributing to the ever-evolving landscape of software development. Let's collaborate to build the next generation of digital experiences.
          </div>
          <Link to='/work'>
          <div className='text-gray-600 flex items-center gap-2 mt-3 lg:text-[18px] md:text-[10px]'>
            View Featured Projects <AiOutlineDoubleRight/>
          </div>
          </Link>
        </div>



        <div className='sm:w-1/3  w-[180px] p-3   '>
          <img src={elu} className='2xl:w-[350px] 2xl:h-[400px]
           rounded-full' alt='Elu' />
        </div>
        
       
        <div className='sm:hidden flex flex-col gap-1   justify-center '>
          <div className='font-bold  text-gray-700'>Hi there, I am Eliza.</div>
          <div className='font-bold ] text-gray-700'>
      
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${gradients[currentAction]}`}>
              {actions[currentAction]}
            </span>{' '}
        
          </div>
          <div className="text-gray-700 text-[11px]  ">
          As a professional software engineer, I specialize in developing dynamic web applications. Beyond my technical expertise, I am also a visionary artist, with a passion for transforming ideas into robust and efficient solutions. Outside the world of coding, you'll find me continuously exploring new technologies, staying in step with emerging trends, and contributing to the ever-evolving landscape of software development. Let's collaborate to build the next generation of digital experiences.
          </div>
          <Link to='/work'>
          <div className='text-gray-600 flex items-center gap-2 mt-3 text-[12px]' >
            View Featured Projects <AiOutlineDoubleRight/>
          </div>
          </Link>
        </div>
       



      </div>
    </div>
  );
};

export default About;
