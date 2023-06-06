import React from 'react'
import {BiBadgeCheck} from 'react-icons/bi';


export default function Skills() {
  return (
    <div className='mt-[50px]' >
       <div className="flex flex-col text-center mt-7 ">
        <div className="font-bold text-gray-800 text-[40px]">Skills</div>
        <div className="text-gray-500">My technical level</div>
      </div>
      <div className="flex gap-[40px]  justify-center items-center">
        <div className="w-[350px] h-[250px] rounded-lg shadow-2xl
         flex flex-col py-[15px] px-[10px] ">
          <div className='text-center text-[20px]'>Frontend developer</div>
          <div className='flex gap-[15px] px-[60px] justify-between mt-[20px]'>
            <div className="flex flex-col gap-[15px] ">
             
              <div className='flex flex-col  '>
                <div className='flex items-center'>
                <div className="badge"><BiBadgeCheck/></div>
                <div className="text">HTML</div>
                </div>
                <div className="text-gray-600 text-[15px]">
                  Intermediate
                  </div>
                </div>
                <div className='flex flex-col  '>
                <div className='flex items-center'>
                <div className="badge"><BiBadgeCheck/></div>
                <div className="text">CSS</div>
                </div>
                <div className="text-gray-600 text-[15px]">
                  Advance
                  </div>
                </div>
                <div className='flex flex-col  '>
                <div className='flex items-center'>
                <div className="badge"><BiBadgeCheck/></div>
                <div className="text">JavaScript</div>
                </div>
                <div className="text-gray-600 text-[15px]">
                  Intermediate
                  </div>
                </div>

            </div>
            <div className="flex flex-col gap-[15px] ">
            <div className='flex flex-col  '>
                <div className='flex items-center'>
                <div className="badge"><BiBadgeCheck/></div>
                <div className="text">Sass</div>
                </div>
                <div className="text-gray-600 text-[15px]">
                  Intermediate
                  </div>
                </div>
                <div className='flex flex-col  '>
                <div className='flex items-center'>
                <div className="badge"><BiBadgeCheck/></div>
                <div className="text">Git</div>
                </div>
                <div className="text-gray-600 text-[15px]">
                  Intermediate
                  </div>
                </div>
                <div className='flex flex-col  '>
                <div className='flex items-center'>
                <div className="badge"><BiBadgeCheck/></div>
                <div className="text">React</div>
                </div>
                <div className="text-gray-600 text-[15px]">
                  Intermediate
                  </div>
                </div>
            </div>

          </div>
        </div>
        <div className="back">
        <div className="w-[350px] h-[250px]  rounded-lg shadow-2xl
         flex flex-col py-[15px] px-[10px] ">
          <div className='text-center text-[20px]'>Backend developer</div>
          <div className='flex gap-[15px] px-[60px] justify-between mt-[20px]'>
            <div className="flex flex-col gap-[15px] ">
              <div className='flex flex-col  '>
                <div className='flex items-center '>
                <div className="badge"><BiBadgeCheck/></div>
                <div className="text">Node JS</div>
                </div>
                <div className="text-gray-600 text-[15px]">
                  Basic
                  </div>
                </div>
                <div className='flex flex-col  '>
                <div className='flex items-center'>
                <div className="badge"><BiBadgeCheck/></div>
                <div className="text">Firebase</div>
                </div>
                <div className="text-gray-600 text-[15px]">
                  Intermediate
                  </div>
                </div>
                <div className='flex flex-col  '>
                <div className='flex items-center'>
                <div className="badge"><BiBadgeCheck/></div>
                <div className="text">Python</div>
                </div>
                <div className="text-gray-600 text-[15px]">
                  Basic
                  </div>
                </div>

            </div>
            <div className="flex flex-col gap-[15px] ">
            <div className='flex flex-col  '>
                <div className='flex items-center'>
                <div className="badge"><BiBadgeCheck/></div>
                <div className="text">Java</div>
                </div>
                <div className="text-gray-600 text-[15px]">
                  Basic
                  </div>
                </div>
                <div className='flex flex-col  '>
                <div className='flex items-center'>
                <div className="badge"><BiBadgeCheck/></div>
                <div className="text">MySQL</div>
                </div>
                <div className="text-gray-600 text-[15px]">
                  Basic
                  </div>
                </div>
                <div className='flex flex-col  '>
                <div className='flex items-center'>
                <div className="badge"><BiBadgeCheck/></div>
                <div className="text">PHP</div>
                </div>
                <div className="text-gray-600 text-[15px]">
                  Basic
                  </div>
                </div>
            </div>

          </div>
        </div>
        </div>
      </div>

    </div>
  )
}
