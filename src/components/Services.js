import React from 'react'
import { BsBoxSeam } from 'react-icons/bs';
import {BsCodeSlash } from 'react-icons/bs';


export default function Services() {
  return (
    <div className='mt-[50px]' >
       <div className="flex flex-col text-center mt-7 ">
        <div className="font-bold text-gray-800 text-[40px]">Services</div>
        <div className="text-gray-500">What I Offer</div>
      </div>
      <div className="flex  gap-[50px] justify-between px-[80px] mt-[30px] ">
        <div className="flex flex-col w-[150px] bg-pink-500 gap-[20px] shadow-2xl">
          <div className="icon"><BsBoxSeam/></div>
          <div className="title">Product Design</div>
          <div className="text-gray-700">View More</div>
        </div>
        <div className="flex flex-col">
          <div className="icon"><BsCodeSlash/></div>
          <div className="title">Product Design</div>
          <div className="text-gray-700">View More</div>
          </div>
          <div className="flex flex-col">
          <div className="icon"><BsBoxSeam/></div>
          <div className="title">Product Design</div>
          <div className="text-gray-700">View More</div>
          </div>
      </div>

      </div>
  )
}
