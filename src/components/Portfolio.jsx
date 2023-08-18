import React from 'react';

const EducationItem = ({ school, degree, year }) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold">{school}</h3>
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
    { company: 'Tech Solutions Inc.', role: 'Frontend Developer', year: '2019 - 2022' },
    { company: 'Digital Innovators', role: 'Junior Web Developer', year: '2017 - 2019' },
    // Add more experience items
  ];

  const technologies = ['HTML', 'CSS', 'JavaScript', 'ReactJS','NextJS','SQL', 'TailWind CSS','Responsive Design','MongoDB' ,'NodeJs','Git','Restful APIs','NodeJs','TypeScript'];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
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
      </div>
    </div>
  );
};

export default Portfolio;
