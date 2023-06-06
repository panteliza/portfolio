import React from 'react'
import {BiHome } from 'react-icons/bi';
import {GoPerson} from 'react-icons/go';
import {GrDocumentText} from 'react-icons/gr';
import {MdHomeRepairService} from 'react-icons/md';
import {MdOutlinePhotoFilter} from 'react-icons/md';
import {CiPaperplane} from 'react-icons/ci';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <div className=" flex justify-between px-[100px] py-[30px]">
        <div className="text-[25px] font-semibold text-gray-700">Eliza</div>
        <div className="flex justify-end gap-[20px] ">
        <div className="flex flex-col items-center w-[70px] h-[70px]">
          <div className=""><BiHome/></div>
          <div>Home</div>
          </div>
          
          <div className=" flex flex-col items-center w-[70px] h-[70px]">
          <div className=""><GoPerson/></div>
          <div>About</div>
          </div>
          <div className=" flex flex-col items-center w-[70px] h-[70px]">
          <div className=""><GrDocumentText/></div>
          <div>Skills</div>
          </div>
          <div className=" flex flex-col items-center w-[70px] h-[70px]">
          <div className=""><MdHomeRepairService/></div>
          <div>Services</div>
          </div>
          <div className="flex flex-col items-center w-[70px] h-[70px]">
          <div className=""><MdOutlinePhotoFilter/></div>
          <div>Portfolio</div>
          </div>
          <div className=" flex flex-col items-center w-[70px] h-[70px]">
          <div className=""><CiPaperplane/></div>
          <div>Contact</div>
          </div>
          </div>
      </div>
    </div>
  )
}
