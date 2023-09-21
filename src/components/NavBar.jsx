import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenuFold } from 'react-icons/ai';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <nav className="border-b border-b-gray-500  py-[20px] shadow-md ">
      <div className="md:max-w-[1240px]  items-center flex justify-between mx-auto">
        <div className=" hidden sm:flex text-3xl text-[#c64018] font-bold">
          BuildDepot
        </div>

        <div className="hidden sm:flex justify-center space-x-8 items-center text-[14px] ">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline ">
                Support
              </a>
            </li>
          </ul>
          <button className="bg-[#c64018] focus:bg-[#421305] rounded text-white px-4 py-2 hover:bg-[#da6440] " type="button">
            Get Started
          </button>
        </div>
      </div>
      {/* mobile menu */}
      <div
        onClick={handleClick}
        className="sm:hidden  flex z-10 cursor-pointer jusitfy-between"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenuFold size={30} />}
        <div>Buildpot </div>
      </div>

      <div
        className={
          nav
            ? 'sm:hidden  top-0  bg-[#001E48]  right-0 left-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300'
            : 'sm:hidden  absolute top-0 bg-[#001E48] right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300 '
        }
      >
        <ul className=" flex items-center flex-col justify-center gap-y-6 text-white ">
          <li className="p-4 text-4xl hover:text-blue hover:border-b hover:border-[#c64018] hover:drop-shadow-lg">
            <a href="/">About Us</a>
          </li>
          <li className="p-4 text-4xl hover:text-blue hover:border-b hover:border-[#c64018] hover:drop-shadow-lg">
            <a href="/">Support</a>
          </li>
          <button
            className="px-8 py-3 text-[#c64018] border border-[#c64018]
    hover:bg-[#e6af9e] hover:text-#c64018 hover:text-white rounded-lg hover:drop-shadow-lg"
          >
            Get Started
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

// for animate button

// px-8 py-3 text-[#c64018] border border-[#c64018]
//     hover:bg-transparent hover:text-#c64018 rounded-lg w-60 hover:animate-spin hover:bg-gradient-to-t hover:from-orange-600 hover:to-orange-100 hover:drop-shadow-lg"
