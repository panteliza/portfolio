// import React from 'react';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import {AiOutlineDoubleRight} from 'react-icons/ai';
// import { Link } from 'react-router-dom';


// const Project = ({ title, description, imageUrl, demoUrl, codeUrl }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//       <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <h2 className="text-xl font-semibold mb-2">{title}</h2>
//         <p className="text-gray-700">{description}</p>
//         <div className="mt-4">
//           <a
//             href={demoUrl}
//             className="text-blue-500 hover:underline"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Demo
//           </a>
//           <span className="mx-2 text-gray-400">|</span>
//           <a
//             href={codeUrl}
//             className="text-blue-500 hover:underline"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Code
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Work = () => {
//   const projects = [
//     {
//       title: 'Seamless Shopping Redefined: Trendify - Where Every Click Unveils a New Trend',
//       description: 'Explore our dynamic React-based e-shopping platform powered by the cutting-edge Fakestore API.',
//       imageUrl: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       demoUrl: 'https://trendify-phi.vercel.app/',
//       codeUrl: 'https://github.com/panteliza/Trendify',
//     },
//     {
//       title: 'Chat App MERN',
//       description: 'user-friendly, versatile, and secure messaging application that allows individuals and groups to communicate effectively and efficiently. ',
//       imageUrl: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       demoUrl: 'https://chatapp-murex-gamma.vercel.app/',
//       codeUrl: 'https://github.com/panteliza/chatapp',
//     },
//     {
//       title: 'Elanta Health Care And Hygiene Products',
//       description: 'Built a data visualization dashboard using real-time data streams and interactive charts.',
//       imageUrl: 'https://www.elantahealthcareandhygiene.com.np/static/media/IMG-4762.84834cb671a4d94bff1b.jpg',
//       demoUrl: 'https://www.elantahealthcareandhygiene.com.np/',
//       codeUrl: 'https://github.com/panteliza/elanta',
//     },
//     // Add more projects
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 py-16">
//       <div className="max-w-5xl mx-auto px-4">
//         <div className="text-center">
//           <h1 className="xl:text-3xl md:text-[30px] sm:text-[25px] font-semibold mb-2 text-gray-600">Showcasing advanced projects and skills</h1>
         
//           <div className="mt-6 flex justify-center">
//             <a
//               href="https://github.com"
//               className="text-gray-600 hover:text-gray-800 mx-2"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaGithub size={24} />
//             </a>
//             <a
//               href="https://www.linkedin.com"
//               className="text-gray-600 hover:text-gray-800 mx-2"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaLinkedin size={24} />
//             </a>
//           </div>
//         </div>
//         <div className='flex flex-col gap-7  '>
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <Project
//               key={index}
//               title={project.title}
//               description={project.description}
//               imageUrl={project.imageUrl}
//               demoUrl={project.demoUrl}
//               codeUrl={project.codeUrl}
//             />
//           ))}
//         </div>
//         <Link to='/projects'>
//         <p
//           // Replace with the actual "View All" link
//           className="flex gap-2 text-gray-600 items-center"
//         >
//           View more
//           <AiOutlineDoubleRight/>
//         </p>
//         </Link>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Work;
import React from 'react'

const Work = () => {
  return (
    <div className='flex items-center justify-center bg-slate-500'>Page Under Construction!!!</div>
  )
}

export default Work