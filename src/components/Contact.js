import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., sending data to the server)

    // After successful form submission, clear the form fields
    setName('');
    setEmail('');
    setMessage('');

    console.log('Form submitted');
  };

  return (
    <div className="container mx-auto pt-[70px]  flex flex-col  justify-center items-center" id='contact'>
      <h2 className="font-bold text-gray-800 text-[40px]">Get in Touch</h2>
      <div className='text-gray-500'> Contact me</div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="text-lg font-medium mb-2 text-pink-500">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 rounded-lg py-2 px-3 w-[550px]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="text-lg font-medium mb-2 text-pink-500">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded-lg py-2 px-3 w-[550px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="message" className="text-lg font-medium mb-2 text-pink-500">
            Message
          </label>
          <textarea
            id="message"
            className="border border-gray-300 rounded-lg py-2 px-3 h-32 w-[550px]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
