import React from 'react';

const NavBar = () => {
  return (
    <div className="flex justify-between items-center border-b border-b-gray-300 px-[40px] py-[20px]">
      <h1 className="text-3xl text-[#c64018]">BuildDepot</h1>
      
      <div className=" flex justify-center space-x-6 items-center text-[14px] ">
        <ul className="flex space-x-2">
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
    </div>
  );
};

export default NavBar;
