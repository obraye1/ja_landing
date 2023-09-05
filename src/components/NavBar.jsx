import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenuFold } from 'react-icons/ai';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <nav className="   ">
      <div className=" flex justify-between md:max-w-[1240px] mx-auto items-center border-b border-b-gray-300  py-[20px] shadow-md ">
        <h1 className="text-3xl text-[#c64018]">BuildDepot</h1>

        <div className="hidden sm:flex justify-center space-x-8 items-center text-[14px] ">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Support
              </a>
            </li>
          </ul>
          <button className="bg-[#c64018] rounded text-white px-[20px] py-[10px]">
            Get Started
          </button>
        </div>
        <div
          onClick={handleClick}
          className="sm:hidden block z-10 cursor-pointer"
        >
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenuFold size={30} />}
        </div>
        <div
          className={
            nav
              ? 'sm:hidden  top-0 absolute right-0 left-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300'
              : 'sm:hidden  absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300'
          }
        >
          <ul className="pt-[260px] h-screen">
            <li className="p-4 text-4xl hover:text-blue hover:drop-shadow-lg">
              About Us
            </li>
            <li className="p-4 text-4xl hover:text-blue hover:drop-shadow-lg">
              Support
            </li>
            <button
              className="px-8 py-3 text-[#c64018] border border-[#c64018]
    hover:bg-transparent hover:text-#c64018 rounded-lg w-60 h-30 hover:drop-shadow-lg"
            >
              Get Started
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

// for animate button

// px-8 py-3 text-[#c64018] border border-[#c64018]
//     hover:bg-transparent hover:text-#c64018 rounded-lg w-60 hover:animate-spin hover:bg-gradient-to-t hover:from-orange-600 hover:to-orange-100 hover:drop-shadow-lg"
