import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";


import {
  BsLinkedin,
  BsGrid,
  BsGithub,
  BsInstagram,
} from "react-icons/bs";

import { CgFileDocument } from "react-icons/cg";

import pp from "../assets/IMG_7147.jpg";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const navItems = [
    {
      name: "Home",
      icon: <AiOutlineHome />,
      path: "/",
    },

   

    {
      name: "CV",
      icon: <CgFileDocument />,
      link: "/cv",
    },

    {
      name: "LinkedIn",
      icon: <BsLinkedin />,
      link: "https://www.linkedin.com/in/eliza-pant-98969b23a/",
    },

    {
      name: "Github",
      icon: <BsGithub />,
      link: "https://github.com/panteliza",
    },
    {
        name: "Instagram",
      icon: <BsInstagram />,
      link: "https://www.instagram.com/elizapant/",
    }
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:w-1/4 max-w-[350px] min-h-screen flex-col border-r border-white/10 bg-[#070B14] px-8 py-10 backdrop-blur-xl">

        {/* Profile */}
        <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.05] p-4 shadow-lg">
          <img
            src={pp}
            className="h-[75px] w-[75px] rounded-full border-2 border-cyan-300/30 object-cover"
            alt="Profile"
          />

          <div>
            <h2 className="text-[22px] font-semibold text-white">
              Eliza Pant
            </h2>

            <p className="text-sm text-cyan-200/70">
              Frontend Developer
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-14 flex flex-col gap-3">

          {navItems.map((item, index) => (

            item.path ? (

              <Link key={index} to={item.path}>
                <div className="group flex items-center gap-4 rounded-2xl px-4 py-4 text-[16px] text-slate-300 transition-all duration-300 hover:bg-white/[0.06] hover:text-white hover:translate-x-1">

                  <span className="text-[20px] text-cyan-300/80 group-hover:text-fuchsia-300">
                    {item.icon}
                  </span>

                  <span>{item.name}</span>

                </div>
              </Link>

            ) : (

              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                <div className="group flex items-center gap-4 rounded-2xl px-4 py-4 text-[16px] text-slate-300 transition-all duration-300 hover:bg-white/[0.06] hover:text-white hover:translate-x-1">

                  <span className="text-[20px] text-cyan-300/80 group-hover:text-fuchsia-300">
                    {item.icon}
                  </span>

                  <span>{item.name}</span>

                </div>
              </a>

            )

          ))}

        </div>

        {/* Bottom Card */}
        <div className="mt-auto rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-violet-500/10 p-5">

          <p className="text-sm font-semibold text-white">
            Available for work
          </p>

          <p className="mt-2 text-xs leading-5 text-white/60">
            Building premium frontend experiences with React & Next.js.
          </p>

        </div>
      </aside>

      {/* Mobile Navbar */}
      {!show && (
        <div className="md:hidden flex h-[65px] w-full items-center justify-between border-b border-white/10 bg-[#070B14] px-5 text-white">

          <div className="flex items-center gap-3">
            <img
              src={pp}
              className="h-[42px] w-[42px] rounded-full border border-cyan-300/40 object-cover"
              alt="Profile"
            />

            <div>
              <div className="text-sm font-semibold">
                Eliza Pant
              </div>

              <div className="text-xs text-cyan-200/60">
                Frontend Developer
              </div>
            </div>
          </div>

          <BsGrid
            onClick={() => setShow(true)}
            className="cursor-pointer text-2xl text-cyan-200"
          />
        </div>
      )}

      {/* Mobile Menu */}
      {show && (
        <div className="md:hidden bg-[#070B14] px-5 py-5 text-white border-b border-white/10">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">
              <img
                src={pp}
                className="h-[42px] w-[42px] rounded-full border border-cyan-300/40 object-cover"
                alt="Profile"
              />

              <div>
                <div className="text-sm font-semibold">
                  Eliza Pant
                </div>

                <div className="text-xs text-cyan-200/60">
                  Frontend Developer
                </div>
              </div>
            </div>

            <AiOutlineClose
              onClick={() => setShow(false)}
              className="cursor-pointer text-2xl text-white/70"
            />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">

            {navItems.map((item, index) => (

              item.path ? (

                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setShow(false)}
                >
                  <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] py-4 text-xs text-white/80">

                    <span className="text-lg text-cyan-300">
                      {item.icon}
                    </span>

                    {item.name}
                  </div>
                </Link>

              ) : (

                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] py-4 text-xs text-white/80">

                    <span className="text-lg text-cyan-300">
                      {item.icon}
                    </span>

                    {item.name}
                  </div>
                </a>

              )

            ))}

          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;