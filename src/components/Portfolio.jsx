import React from 'react';
import { Link } from 'react-router-dom';

const EducationItem = ({ school, degree, year }) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-700">{school}</h3>
      <p className="text-gray-600">{degree}</p>
      <p className="text-gray-400">{year}</p>
    </div>
  );
};

const ExperienceItem = ({ company, role, year }) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold">{company}</h3>
      <p className="text-gray-600">{role}</p>
      <p className="text-gray-400">{year}</p>
    </div>
  );
};

const TechnologyItem = ({ technology }) => {
  return (
    <div className="mb-2">
      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">{technology}</span>
    </div>
  );
};

const Portfolio = () => {
  const education = [
    { school: 'Tribhuvan University', degree: 'Bachelor of  Science in Computer Science and Information Technology', year: '2018 - 2023' },
    { school: 'SOS Hermann Gmeiner School', degree: 'High School Science Stream', year: '2015-2017' },
    { school: 'Little Flower School', degree: 'Schooling', year: '2008-2015' },
  ];

  const experience = [
    { company: 'Intelzy.', role: 'Frontend Developer', year: '2023-present' },
    { company: 'Tech Solutions Inc.', role: 'Junior Frontend Developer', year: '2021 - 2022' },

  ];

  const technologies = ['HTML', 'CSS', 'JavaScript', 'ReactJS','NextJS','SQL', 'TailWind CSS','Responsive Design','MongoDB' ,'NodeJs','Git','Restful APIs','NodeJs','TypeScript'];

  return (
    <div className="bg-gray-100 py-16 ">
      <div className=" mx-auto px-4 ">
        <div className="mt-10 flex flex-col md:flex-row gap-10 ">
          <div className=''>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            {education.map((item, index) => (
              <EducationItem key={index} {...item} />
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            {experience.map((item, index) => (
              <ExperienceItem key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="mt-10 pr-[40px]">
          <h3 className="text-xl font-semibold mb-4">Technologies</h3>
          <div className="flex flex-wrap ">
            {technologies.map((technology, index) => (
              <TechnologyItem key={index} technology={technology} />
            ))}
          </div>
        </div>
        <div className="mt-10 pr-[40px]">
          <h3 className="text-xl font-semibold mb-4">Certifications</h3>
          <div className="flex flex-wrap ">
        <Link to={"https://www.udemy.com/certificate/UC-e4412945-81c0-48fa-b611-c7c35c363ad7/"}>The Complete 2024 Web Development BootCamp- UDEMY</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
