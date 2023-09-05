import React from 'react';
import dangCemImg from '../assets/dangote.png';
import cusSup from '../assets/cusSup.png';

const HomePage = () => {
  return (
    <section className=" md:max-h-screen md:max-w-[1240px] mx-auto overflow-hidden">
      <div className="container gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto  ">
        <div className="md:col-span-2 md:pr-8 pr-4 mix-blend-multiply bg-[#001E48] top-0 flex flex-col justify-center h-screen ">

          <div className="flex md:flex-cols-2 md:gap-8 gap-4">
            <div className="flex w-1/2">
              <div className="text-white md:pl-8">
                <h1 className="md:text-4xl text-2xl mt-4 font-bold ">
                  Building Materials at Unbeatable Prices!
                </h1>
                <p className="my-8 text-md pb-2  ">
                  Find all your building materials on BuildDepot
                </p>
                <button
                  className="bg-[#c64018] rounded text-white px-4 py-2 hover:bg-[#da6440]"
                  type="button"
                >
                  Shop Now
                </button>
              </div>
            </div>
            {/* Images */}
            <div className=" max-w-full max-h-full">
              <img
                src={dangCemImg}
                alt=" Dangote cement bag with three different bag sizes"
              />
            </div>
          </div>
        </div>
        <div className="flex md:col-span-1 md:grid gap-4 justify-self-auto md:justify-start h-auto">
          <div className=" bg-[#001E48] flex text-center p-4 font-bold top-0 justify-center items-center text-2xl h-[400px] ">
            <div className="w-[250px]">
              <h2 className="text-white tracking-wide">
                Buy the materials you need today, {'     '}
                <span className="text-[#da6440]">
                  pay tomorrow <em className="text-white">-</em> chop life!
                </span>
              </h2>
            </div>
          </div>

          <div className="text-white w-full bg-[#001E48] top-0 flex justify-center h-[395px]  ">
            <div className="flex gap-x-8 pl-2 items-center" >
              <div className="  px-2 gap-y-4 flex flex-col">
                <h2 className="text-xl md:text-3xl font-semibold" >Need Help?</h2>
                <p className="text-md">Speak with our customer care agent on whatsapp</p>
                <button className="bg-[#c64018] w-[128px] text-white  py-2 px-1 hover:bg-[#da6440]">
                  Contact Us
                </button>
              </div>
              <div className=" h-full  ">
                <img src={cusSup} alt="A customer support female" className="object-contain h-full w-96 "/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
