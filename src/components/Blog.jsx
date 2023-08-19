import React from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';

const Blog = ({ title, content }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="sm:p-6 px-2 flex flex-col justify-between h-full ">
        <div>
          <h2 className="sm:text-xl text-[15px]  font-semibold mb-2">{title}</h2>
          <p className="text-gray-700 sm:text-[17px] text-[12px]">{content}</p>
        </div>
        <a
          href="https://www.example.com/single-blog" // Replace with the actual blog link
          className="mt-4 bg-gray-700 text-white px-4 py-2
          justify-center flex items-center rounded-md hover:bg-gray-500"
        >
          View More
        </a>
      </div>
    </div>
  );
};

const App = () => {
  const blogs = [
    {
      title: 'Mastering Responsive Design',
      content: 'Discover the essential techniques for creating responsive web designs that work seamlessly across all devices.',
    },
    {
      title: 'The Art of CSS Animations',
      content: 'Explore the world of CSS animations and learn how to captivate users with delightful and engaging motion effects.',
    },
    {
      title: 'Optimizing Frontend Performance',
      content: 'Unlock the secrets to enhancing frontend performance, from efficient rendering to minimizing network requests.',
    },
    {
      title: 'Creating Accessible Web Experiences',
      content: 'Learn the principles and practices of web accessibility to make your websites inclusive and usable for all.',
    },
  ];

  return (
    <div className="flex flex-col gap-2 justify-center items-center min-h-screen bg-gray-200">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto md:px-8 px-24  ">
        {blogs.map((blog, index) => (
          <Blog key={index} title={blog.title} content={blog.content} />
        ))}
      </div>
      <div className='flex gap-2 text-gray-600 items-center  mb-12'>
        <a
          href="https://www.example.com/all-blogs" // Replace with the actual "View All" link
          className="flex gap-2 text-gray-600 items-center"
        >
          View all
          <AiOutlineDoubleRight/>
        </a>
      </div>
    </div>
  );
};

export default App;
