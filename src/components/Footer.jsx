import React from 'react';
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="max-w-[1240px] md:h-auto top-0 mx-auto p-4 mt-[50px] container">
      <div className="grid md:grid-cols-4 grid-cols-1 border-y py-[3rem] gap-y-[4rem] md:gap-y-6">
        <div className="md:col-span-2">
          <div className="  space-y-4">
            <h4 className="text-3xl font-bold text-[#c64018]">BuildDepot</h4>
            <p className="text-[15px] leading-6">
              Est diam debitis an, error recusabo id pro, quo eripuit civibus
              ut. Mel ut tamquam erroribus, ad nonumy vituperata mei.Et qui
              falli latine consequuntur. In appellantur concludaturque pro.
            </p>
            <div className="flex flex-cols-4 gap-x-3">
              <div className="border p-[3px] cursor-pointer rounded">
                <AiOutlineFacebook size={30} color="#0788F0" />
              </div>
              <div className="border p-[3px] cursor-pointer rounded">
                <AiOutlineTwitter size={30} color="#0788F0" />
              </div>
              <div className="border p-[3px] cursor-pointer rounded">
                <AiOutlineInstagram size={30} color="#D43778" />
              </div>
              <div className="border p-[3px] cursor-pointer rounded">
                <AiOutlineYoutube size={30} color="#FF0000" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 text-start grid-cols-1 md:col-span-2 text-[#25252E] gap-y-[3rem]">
          <div className="space-y-4 ">
            <h5 className="text-lg font-bold ">About</h5>
            <ul className="text-[15px] space-y-2">
              <li>Company info</li>
              <li>News</li>
              <li>Careers</li>
              <li>Polices</li>
            </ul>
          </div>
          <div className="space-y-4 ">
            <h5 className="text-2xl font-bold ">Products</h5>
            <ul className="text-[15px] space-y-2">
              <li>New Arrivals</li>
              <li>Best Selling</li>
              <li>Featured</li>
              <li>Cement</li>
            </ul>
          </div>
          <div className="space-y-4 ">
            <h5 className="text-2xl font-bold ">Help & Support</h5>
            <ul className="text-[15px] space-y-2">
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div class="w-full mx-auto max-w-screen-xl py-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright 2023 BuildDepot Inc. All rights reserved.</span>
        <span>
        <div className="flex flex-cols-4 gap-x-3">
              <div className="border p-[3px] cursor-pointer rounded">
                <AiOutlineFacebook size={30} color="#0788F0" />
              </div>
              <div className="border p-[3px] cursor-pointer rounded">
                <AiOutlineTwitter size={30} color="#0788F0" />
              </div>
              <div className="border p-[3px] cursor-pointer rounded">
                <AiOutlineInstagram size={30} color="#D43778" />
              </div>
              <div className="border p-[3px] cursor-pointer rounded">
                <AiOutlineYoutube size={30} color="#FF0000" />
              </div>
            </div>
        </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
