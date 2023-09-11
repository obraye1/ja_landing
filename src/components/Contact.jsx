import React from 'react';
import MapImg from '../assets/Rectangle 18.png';

const Contact = () => {
  return (
    <div className="md:max-w-[1240px] h-screen mx-auto  py-[100px] container">
      <div className="hidden md:grid md:grid-cols-3 grid-cols-3 items-center gap-y-5 md:gap-x-8 justify-center text-left text-[18px] ">
        <div className="">
          <h2 className="md:text-[64px] text-gray-400">01</h2>
          <p className="md:text-[24px] text-[#6D6D73] ">
            Find a Seller Near You
          </p>
        </div>
        <div className="">
          <h2 className="md:text-[64px] text-gray-400">02</h2>
          <p className="md:text-[24px] text-[#6D6D73] ">
            Chat and conclude on what you need
          </p>
        </div>
        <div className="">
          <h2 className="md:text-[64px] text-gray-400">03</h2>
          <p className="md:text-[24px] text-[#6D6D73] ">
            Pay directly or Apply for Credit
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:gap-x-8 md:py-[100px]">
        <div className="grid col-span-1">
          <div className="space-y-6 md:space-y-[50px]">
            <h3 className="text-2xl font-bold text-gray-500">
              Find a Seller Near You
            </h3>
            <div className="">
              <h4 className="text-[#6D6D73] py-2 md:py-6 font-bold text-lg md:text-[20px]">
                Select Location
              </h4>
              <button class="block w-full text-start text-gray-300 px-2 md:py-3  border-2 border-gray-300 focus:outline-none focus:border-[#c64018]">Lagos</button>
              {/* Dropdrow menu */}
              {/* <div></div> */}
            </div>
            <div className="">
              <h4 className="text-[#6D6D73] py-2 md:py-6 font-bold text-lg md:text-[20px]">
                Select Material
              </h4>
              <button className="block w-full text-start  text-gray-300 px-2 md:py-3 overflow-hidden border-2 border-gray-300 focus:outline-none focus:border-[#c64018]">Cement</button>
               {/* Dropdrow menu */}
              {/* <div></div> */}
            </div>
            <button
              className=" bg-[#c64018] rounded text-white  block px-4 py-2 hover:bg-[#da6440] md:w-full"
              type="button"
            >
              Search
            </button>
          </div>
        </div>

        <div className="grid justify-end  ">
          <img
            lazy
            src={MapImg}
            alt=" A location pointer icon"
            width={200}
            height={252}
            className="md:w-[400px] md:h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
