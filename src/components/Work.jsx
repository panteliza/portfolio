import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {AiOutlineDoubleRight} from 'react-icons/ai';

const Project = ({ title, description, imageUrl, demoUrl, codeUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <div className="mt-4">
          <a
            href={demoUrl}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
          <span className="mx-2 text-gray-400">|</span>
          <a
            href={codeUrl}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  const projects = [
    {
      title: 'Machine Learning Model for Image Recognition',
      description: 'Implemented a convolutional neural network for image classification with state-of-the-art accuracy.',
      imageUrl: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      demoUrl: 'https://example.com/ml-demo',
      codeUrl: 'https://github.com/user/ml-project',
    },
    {
      title: 'Decentralized Application with Smart Contracts',
      description: 'Developed a decentralized app using blockchain technology and smart contracts for secure transactions.',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1682310068925-2135e638d58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=912&q=80',
      demoUrl: 'https://example.com/blockchain-demo',
      codeUrl: 'https://github.com/user/blockchain-project',
    },
    {
      title: 'Real-time Data Analytics Dashboard',
      description: 'Built a data visualization dashboard using real-time data streams and interactive charts.',
      imageUrl: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      demoUrl: 'https://example.com/dashboard-demo',
      codeUrl: 'https://github.com/user/dashboard-project',
    },
    // Add more projects
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-2 text-gray-600">Showcasing advanced projects and skills</h1>
         
          <div className="mt-6 flex justify-center">
            <a
              href="https://github.com"
              className="text-gray-600 hover:text-gray-800 mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-gray-600 hover:text-gray-800 mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-7 '>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              demoUrl={project.demoUrl}
              codeUrl={project.codeUrl}
            />
          ))}
        </div>
        <a
          href="https://www.example.com/projects" // Replace with the actual "View All" link
          className="flex gap-2 text-gray-600 items-center"
        >
          View more
          <AiOutlineDoubleRight/>
        </a>
      </div>
      </div>
    </div>
  );
};

export default Work;
