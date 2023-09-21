import React from 'react';
import style from '../style/home.module.css';

const HomePage = () => {
  return (
    <section className={` max-h-screen md:max-w-[1240px] pt-10 md:pt-15 md:mx-auto`}>
      <div className=" gap-2 grid grid-cols-1  md:grid-cols-3 ">
        <div
          className={`grid md:col-span-2 `}
        >
          <div
            className={` ${style.cement} md:h-[650px]  h-[50vh] grid md:grid-cols-2  p-4`}
          >
            <div className="text-start text-white flex justify-center flex-col items-start">
              <h1 className="md:text-5xl w-[350px] md:w-full text-3xl font-semibold ">
                Building Materials at Unbeatable Prices!
              </h1>
              <p className="py-8 md:text-2xl text-sm w-[230px] sm:w-full">
                Find all your building materials on BuildDepot
              </p>
              <button
                className="bg-[#c64018] focus:bg-[#421305] rounded text-white px-4 py-2 hover:bg-[#da6440]"
                type="button"
              >
                Shop Now
              </button>
            </div>
            {/* Images */}
            {/* <div className="h-full max-w-full hidden md:flex place-self-end">
              <div className="  ">
                <img
                  src={dangCemImg}
                  alt=" Dangote cement bag with three different bag sizes"
                />
              </div>
            </div> */}
          </div>
        </div>
        {/* 1 x  2 grid  */}
        <div className={` grid gap-2 md:grid-cols-1 grid-cols-2`}>
          <div
            className={` ${style.box} text-center font-bold text-2xl md:h-[315px] h-[30vh] w-full flex`}
          >
            <div className=" flex justify-center items-center flex-col w-auto mx-auto">
              <h3 className="text-white md:text-xl text-[16x] ">
                Buy the materials you need today,
              </h3>
              <h3 className="text-[#da6440]">pay tomorrow-chop life!</h3>
            </div>
          </div>

          <div className={`${style.cusTomer} md:h-[325px] w-full flex justify-center text-white`}>

              <div className="flex flex-col justify-center  items-start sm:pl-4 pl-2 gap-y-2 sm:gap-y-4  container">
                <h2 className="text-xl md:text-3xl font-semibold">
                  Need Help?
                </h2>
                <p className="md:text-md text-[13px] sm:w-[200px] w-[170px]">
                  Speak with our customer care agent on whatsapp
                </p>
                <button className="bg-[#c64018] focus:bg-[#421305]  rounded text-white px-4 py-2 hover:bg-[#da6440]">
                  Contact Us
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
