import React from 'react';

export default function Projects() {
  return (
    <div className='flex flex-col gap-2 justify-center items-center pt-[70px] pb-[20px]' id='projects'>
      <div className='font-bold text-gray-800 text-[40px]'>Projects</div>
      <div className='text-gray-500'>Highlights of my Work</div>
      <div className='flex'>
        <div className='grid grid-cols-3 justify-evenly gap-5 items-center pt-[20px]'>
          <div className='w-[420px] h-[280px] rounded-xl relative group' style={{ zIndex: 1 }}>
            <img
              src="https://images.unsplash.com/photo-1550828486-68812fa3f966?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              className='w-[420px] h-[280px] rounded-xl border border-pink-500 relative'
            />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-50 rounded-xl group-hover:opacity-0 transition-opacity duration-300'></div>
            <div className=''>
              <div className='rounded-3xl bg-green-500 text-black font-semibold cursor-pointer top-5 absolute right-2 px-3 py-2 hover:bg-black hover:text-green-500 text-[14px]'>
                Online Gaming
              </div>
              <div className='text-white font-semibold bottom-10 absolute left-5 text-2xl pr-8'>
                Influence of Online Game Behaviors on Emotional States
              </div>
            </div>
          </div>

          
          <div className='w-[420px] h-[280px] rounded-xl relative group'>
          <img
              src="https://media.istockphoto.com/id/1145166058/photo/retro-old-microphone-vintage-style-with-neon-lights.webp?b=1&s=170667a&w=0&k=20&c=9dfmza0BqYIHatlP5lhoMP1v8X6kvFdqLBDeactXikM="
              className='w-[420px] h-[280px] rounded-xl border border-pink-500'
            />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-50 rounded-xl group-hover:opacity-0 transition-opacity duration-300'></div>
            <div className=''>
              <div className='rounded-3xl bg-green-500 text-black font-semibold cursor-pointer top-5 absolute right-2 px-3 py-2 hover:bg-black hover:text-green-500 text-[14px]'>
                Entertainment
              </div>
              <div className='text-white font-semibold bottom-10 absolute left-5 text-2xl pr-8'>
              Music changes the world, music for everybody
              </div>
            </div>
          </div>

          <div className='w-[420px] h-[280px] rounded-xl relative group'>
            <img
              src="https://media.istockphoto.com/id/1486013436/photo/summer-holiday-travel-objects-on-neon-lighting-background.webp?b=1&s=170667a&w=0&k=20&c=4ORbBRMsZNB4wcdDg6w5qo2DM9Xyt4xEDjp8Aue6kg8="
              className='w-[420px] h-[280px] rounded-xl border border-pink-500'
            />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-50 rounded-xl group-hover:opacity-0 transition-opacity duration-300'></div>
            <div className=''>
              <div className='rounded-3xl bg-green-500 text-black font-semibold  top-5 absolute right-2 px-3 py-2 cursor-pointer hover:bg-black hover:text-green-500 text-[14px]'>
                Explore
              </div>
              <div className='text-white font-semibold bottom-10 absolute left-5 text-2xl pr-8'>
                Explore the world with the best guidance ever
              </div>
            </div>
          </div>

          <div className='w-[420px] h-[280px] rounded-xl relative group'>
            <img
              src="https://media.istockphoto.com/id/1388988332/photo/cyborg-running-on-purple-background-3d-wired-shape.webp?b=1&s=170667a&w=0&k=20&c=ZsKLspVyfbxfSGHTEHMiqQWRXGAKxuhqM6fLJnnb5ok="
              className='w-[420px] h-[280px] rounded-xl border border-pink-500'
            />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 rounded-xl group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className=''>
              <div className='rounded-3xl bg-green-500 text-black font-semibold  top-5 absolute right-2 px-3 py-2 hover:bg-black hover:text-green-500 text-[14px] cursor-pointer'>
                Artificial Intelligence
              </div>
              <div className='text-white font-semibold bottom-10 absolute left-5 text-2xl pr-8'>
                AI powered Personal Assistant for Windows
              </div>
            </div>
          </div>

          <div className='w-[420px] h-[280px] rounded-xl relative group'>
            <img
              src="https://media.istockphoto.com/id/1284053136/photo/young-sportive-woman-training-isolated-on-gradient-studio-background-in-neon-light-athletic.webp?b=1&s=170667a&w=0&k=20&c=JUJKEBWcf-PhGHL5Ap-aSVwafLUnxOrlH6Zod_pHSMo="
              className='w-[420px] h-[280px] rounded-xl border border-pink-500'
            />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-50 rounded-xl group-hover:opacity-0 transition-opacity duration-300'></div>
            <div className=''>
              <div className='rounded-3xl bg-green-500 text-black font-semibold  top-5 right-2 px-3 py-2 hover:bg-black hover:text-green-500 text-[14px] absolute cursor-pointer'>
                Fitness
              </div>
              <div className='text-white font-semibold bottom-10 absolute left-5 text-2xl pr-8'>
                Prepare your fitness now, Life Hacks to rule
              </div>
            </div>
          </div>

          <div className='w-[420px] h-[280px] rounded-xl relative group'>
            <img
              src="https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              className='w-[420px] h-[280px] rounded-xl border border-pink-500'
              alt="Image"
            />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-40 rounded-xl group-hover:opacity-0 transition-opacity duration-300'></div>
            <div>
              <div className='rounded-3xl bg-green-500 text-black font-semibold cursor-pointer top-5 absolute right-2 px-3 py-2 hover:bg-black hover:text-green-500 text-[14px]'>
                Travelling
              </div>
              <div className='text-white font-semibold bottom-10 absolute left-5 text-2xl pr-8'>
                National Parks in California, A Guide for Nature Lovers
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
