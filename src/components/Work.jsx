import React,{useState} from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import abc from '../assets/refine.png'
import ai from '../assets/ai-saas.png'
import health from '../assets/elanta.png'
import flair from '../assets/trendify.png'
import news from '../assets/technews.png'

import { Link } from 'react-router-dom';



const projects = [
  {
    title: 'React Admin Dashboard',
    description: 'Full authentication,  homepage displaying charts and activities, acomprehensive table for companies with CRUD and search, and a Kanban board with real-time synchronization using Refine Framework.',
    imageUrl: abc,
    codeLink: 'https://github.com/panteliza/sour-beds-visit',
    demoLink: 'https://sour-beds-visit.vercel.app/',
  },
  {
    title: 'AI-SaaS',
    description: ' SaaS application,a rich palette of web development technologies like React, Tailwind, Prisma, MySQL, Clerk, and more.',
    imageUrl: ai,
    codeLink: 'https://github.com/panteliza/ai-saas',
    demoLink: 'https://ai-saas-one-lac.vercel.app/',
  },
  {
    title: 'Elanta ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi expedita',
    imageUrl: health,
    codeLink: 'https://github.com/panteliza/elanta',
    demoLink: 'https://www.elantahealthcareandhygiene.com.np/',
  },
  {
    title: 'Trendify ',
    description: 'An Ecommerce Website With React JS, Tailwind CSS and Fake Store API',
    imageUrl: flair,
    codeLink: 'https://github.com/panteliza/elle-flair',
    demoLink: 'https://trendify-phi.vercel.app/',
  },
  {
    title: 'Tech-news ',
    description: 'A Full-Stack Website with Next.js 13, Typescript, Prisma, Cloudinary, Tailwind',
    imageUrl: news,
    codeLink: 'https://github.com/panteliza/technews',
    demoLink: '',
  },
  // {
  //   title: 'Netflix Clone ',
  //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi expedita',
  //   imageUrl: flair,
  //   codeLink: 'https://github.com/panteliza/Netflix-clone-',
  //   demoLink: 'https://panteliza.github.io/Netflix-clone-/',
  // },
];

const Project = ({ title, description, imageUrl, codeLink, demoLink }) => (
  <div className="gap-5 sm:flex">
    <img src={imageUrl} alt={title} className="w-[250px] object-cover" />
    <div className="flex flex-col gap-1 pt-3">
      <div className="text-lg font-semibold">{title}</div>
      <p className="max-w-[300px]">{description}</p>
      <div className="flex gap-2">
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border text-gray-600 border-gray-400 px-1 py-1 font-medium cursor-pointer"
          >
            View Code
          </a>
        )}
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border text-gray-600 border-gray-400 px-1 py-1 font-medium cursor-pointer"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  </div>
);




const Work = () => {

  const [show,setShow]=useState(false)
  const viewMore=()=>{
    setShow (true)
  }
  const viewLess=()=>{
    setShow (false)
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-[550px]">
        <div className="text-start">
          <h1 className="xl:text-3xl md:text-[30px] sm:text-[25px] font-semibold text-gray-600 mb-6">
            Featured Projects
          </h1>
        </div>
        <hr />
        <div className="flex flex-col gap-7 mt-10">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
          {!show && (
          <div  className="flex gap-2 text-gray-600 items-center cursor-pointer" value={show} onClick={viewMore}>
            View more <AiOutlineDoubleRight />
          </div>
          )}

         {show && (
          <div className=''>
            <ul>
               <Link to="https://github.com/panteliza/hotelya">
              <li className='text-gray-500 text-lg font-semibold py-2'>Hotelya</li>
              </Link>
              <hr/>
              <Link to="https://github.com/panteliza/Netflix-clone-">
              <li className='text-gray-500 text-lg font-semibold py-2'>Netflix Clone</li>
              </Link>
              <hr/>
              <Link to="https://github.com/panteliza/mern-auth-">
              <li className='text-gray-500 text-lg font-semibold py-2'>Mern Auth</li>
              </Link>
              <hr/>
              <Link to="https://github.com/TheOneAbove0/blogging">
              <li className='text-gray-500 text-lg font-semibold py-2'> Blogging</li>
              </Link>
              <hr/>
              <Link to="https://github.com/panteliza/chatapp">
              <li className='text-gray-500 text-lg font-semibold py-2'> Chat App</li>
              </Link>
              <Link to="https://panteliza.github.io/Foodista/">
              <li className='text-gray-500 text-lg font-semibold py-2'> Foodista</li>
              </Link>
              
              
             
              
             
              <div  className="flex gap-2 text-gray-600 items-center cursor-pointer mt-4" value={show} onClick={viewLess} >
            View less <AiOutlineDoubleRight />
          </div>

             
            </ul>
          </div>
         )
          }
        </div>
      </div>
    </div>
  );
};

export default Work;
